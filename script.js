// ========================================================
// 1. WEB AUDIO SYNTHESIZER
// ========================================================

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq, type = 'sine', duration = 0.06, vol = 0.2) {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

  gain.gain.setValueAtTime(vol, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

const playHoverSound = () => playTone(600, 'triangle', 0.05, 0.15);
const playClickSound = () => {
  playTone(520, 'sine', 0.12, 0.25);
  setTimeout(() => playTone(880, 'sine', 0.15, 0.2), 40);
};

// ========================================================
// 2. MAIN INTERACTIVE CONTROLLER
// (all text now comes from translations.js)
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  const T = window.TRANSLATIONS;
  const $ = id => document.getElementById(id);

  const modal = $('element-modal');
  const closeBtn = $('modal-close');
  const modalCard = $('modal-card');
  const modalFacts = $('modal-facts');

  const searchInput = $('element-search');
  const noResultsNotice = $('search-no-results');
  const scrollArrow = $('scroll-arrow');
  const langOpts = document.querySelectorAll('.lang-opt');
  const toggleBtns = document.querySelectorAll('.toggle-btn');

  const elements = document.querySelectorAll('td:not(.empty):not(.spacer)');
  let searchMode = 'name';
  let currentCell = null;

  // ---------- Language state ----------
  let lang = 'en';
  try { lang = localStorage.getItem('ptable-lang') === 'ar' ? 'ar' : 'en'; } catch (e) {}

  const ui = key => T.ui[lang][key];
  const ltr = s => `\u2066${s}\u2069`; // keeps numbers/units in correct order inside Arabic text

  // Normalise Arabic so search ignores diacritics and spelling variants
  const normAr = s => s
    .replace(/[\u064B-\u0652\u0640]/g, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه');

  // Remember each cell's symbol and original English name
  elements.forEach(cell => {
    cell.dataset.sym = cell.querySelector('strong')?.textContent.trim() || '';
    cell.dataset.en = cell.querySelector('.name')?.textContent.trim() || '';
  });

  const nameOf = (cell, l = lang) => {
    if (l === 'ar' && cell.dataset.en) return T.names[cell.dataset.sym] || cell.dataset.en;
    return cell.dataset.en;
  };

  const getCatKey = cell =>
    Object.keys(T.categories).find(k => cell.classList.contains(k)) || 'transition';

  // ---------- Apply language to the whole page ----------
  function applyLanguage() {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = ui('pageTitle');

    // Static text: <span data-i18n="name">
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const text = ui(el.dataset.i18n);
      if (text) el.textContent = text;
    });

    // Table names
    elements.forEach(cell => {
      const nameEl = cell.querySelector('.name');
      if (nameEl && cell.dataset.en) nameEl.textContent = nameOf(cell);
    });

    // Search placeholder, language button, scroll hint
    if (searchInput) searchInput.placeholder = searchMode === 'symbol' ? ui('searchSymbol') : ui('searchName');
    langOpts.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    document.documentElement.style.setProperty('--more-text', `"${ui('more')}"`);

    // Refresh the popup if it is open
    if (currentCell && modal.classList.contains('active')) fillModal(currentCell);

    runSearchFilter();
  }

  // ---------- Modal content ----------
  function fillModal(cell) {
    const num = cell.querySelector('.num')?.textContent.trim() || '';
    const sym = cell.dataset.sym;
    const catKey = getCatKey(cell);
    const cat = T.categories[catKey];
    const catName = cat[lang].name;

    $('modal-num').textContent = `${ui('atomicNumber')}: ${lang === 'ar' ? ltr(num) : num}`;
    $('modal-symbol').textContent = sym;
    $('modal-name').textContent = nameOf(cell);
    $('modal-category').textContent = catName;
    $('modal-cat-desc').textContent = cat[lang].def;

    const L = x => (lang === 'ar' ? ltr(x) : x);
    const spec = T.specs[sym];
    if (spec) {
      $('modal-reactivity').textContent = spec.react[lang];
      $('modal-density').textContent = `${L(spec.dens.v)} ${spec.dens[lang]}`;
      $('modal-thermal').textContent = spec.note
        ? spec.note[lang]
        : `${ui('melts')}: ${L(spec.mp + ' °C')} • ${ui('boils')}: ${L(spec.bp + ' °C')}`;
    } else {
      const fb = T.fallback[catKey] || T.fallback.default;
      $('modal-reactivity').textContent = fb.react[lang];
      $('modal-density').textContent = fb.dens[lang];
      $('modal-thermal').textContent = fb.therm[lang];
    }

    const facts = T.facts[sym]
      ? T.facts[sym][lang]
      : T.fallbackFacts[lang](lang === 'en' ? catName.toUpperCase() : catName);
    modalFacts.innerHTML = '';
    facts.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f;
      modalFacts.appendChild(li);
    });
  }

  // ---------- Scroll HUD indicator ----------
  function updateScrollHUD(matchedElements, query) {
    if (!scrollArrow) return;

    if (query === '') {
      scrollArrow.classList.remove('visible');
      return;
    }

    if (matchedElements.length === 1) {
      matchedElements[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
      scrollArrow.classList.remove('visible');
    } else if (matchedElements.length > 1) {
      const isAnyMatchBelow = matchedElements.some(el => {
        const rect = el.getBoundingClientRect();
        return rect.bottom > (window.innerHeight - 40);
      });
      scrollArrow.classList.toggle('visible', isAnyMatchBelow);
    } else {
      scrollArrow.classList.remove('visible');
    }
  }

  // ---------- Live search (matches English AND Arabic names) ----------
  function runSearchFilter() {
    if (!searchInput) return;
    const query = searchInput.value.toLowerCase().trim();
    const queryAr = normAr(query);
    const matchedElements = [];

    elements.forEach(cell => {
      if (query === '') {
        cell.classList.remove('dimmed');
        return;
      }

      let isMatch;
      if (searchMode === 'symbol') {
        isMatch = cell.dataset.sym.toLowerCase().startsWith(query);
      } else {
        const en = cell.dataset.en.toLowerCase();
        const ar = cell.dataset.en ? normAr(T.names[cell.dataset.sym] || '') : '';
        isMatch = en.includes(query) || (ar !== '' && ar.includes(queryAr));
      }

      cell.classList.toggle('dimmed', !isMatch);
      if (isMatch) matchedElements.push(cell);
    });

    if (noResultsNotice) {
      noResultsNotice.classList.toggle('visible', query !== '' && matchedElements.length === 0);
    }

    updateScrollHUD(matchedElements, query);
  }

  // ---------- Search mode buttons ----------
  toggleBtns.forEach(btn => {
    btn.addEventListener('mouseenter', playHoverSound);
    btn.addEventListener('click', () => {
      playClickSound();
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      searchMode = btn.getAttribute('data-mode') || 'name';
      if (searchInput) {
        searchInput.placeholder = searchMode === 'symbol' ? ui('searchSymbol') : ui('searchName');
        runSearchFilter();
        searchInput.focus();
      }
    });
  });

  if (searchInput) searchInput.addEventListener('input', runSearchFilter);

  // ---------- Language toggle (EN | عربي) ----------
  langOpts.forEach(btn => {
    btn.addEventListener('mouseenter', playHoverSound);
    btn.addEventListener('click', () => {
      if (btn.dataset.lang === lang) return;
      playClickSound();
      lang = btn.dataset.lang;
      try { localStorage.setItem('ptable-lang', lang); } catch (e) {}
      applyLanguage();
    });
  });

  // ---------- Scroll monitor ----------
  window.addEventListener('scroll', () => {
    if (!searchInput) return;
    const query = searchInput.value.toLowerCase().trim();
    if (query !== '') {
      const matched = Array.from(elements).filter(el => !el.classList.contains('dimmed'));
      updateScrollHUD(matched, query);
    }
  });

  // ---------- Modal popup ----------
  elements.forEach(cell => {
    cell.addEventListener('mouseenter', playHoverSound);

    cell.addEventListener('click', () => {
      playClickSound();
      currentCell = cell;
      fillModal(cell);

      // Sync neon accent colours
      const cellBorderColor = window.getComputedStyle(cell).borderColor;
      modalCard.style.borderColor = cellBorderColor;
      modalCard.style.boxShadow = `0 0 28px ${cellBorderColor}, inset 0 0 15px rgba(255,255,255,0.04)`;
      $('modal-category').style.color = cellBorderColor;

      document.querySelectorAll('.draw-path').forEach(p => {
        p.style.stroke = cellBorderColor;
        p.style.filter = `drop-shadow(0 0 4px ${cellBorderColor})`;
      });
      document.querySelectorAll('.draw-arrow').forEach(a => {
        a.style.fill = cellBorderColor;
        a.style.filter = `drop-shadow(0 0 4px ${cellBorderColor})`;
      });
      document.querySelectorAll('.modal-body li').forEach(li => {
        li.style.setProperty('--bullet-color', cellBorderColor);
      });

      modal.classList.add('active');
    });
  });

  // ---------- Modal dismissal ----------
  const closeModal = () => modal.classList.remove('active');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  window.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // ---------- Start ----------
  applyLanguage();
});
