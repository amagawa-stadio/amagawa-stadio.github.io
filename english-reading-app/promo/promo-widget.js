/**
 * 雨川の旦那 公式シリーズ共通「姉妹アプリ＆サイト宣伝ウィジェット」
 * 配信元: https://amagawa-stadio.github.io/promo/promo-widget.js
 * データ元: https://amagawa-stadio.github.io/promo/sister-apps.json
 *
 * 使い方（各アプリのHTML内）:
 * <div id="sister-apps-promo" data-current-app="com.hiroki.grammar"></div>
 * <script src="https://amagawa-stadio.github.io/promo/promo-widget.js" defer></script>
 */
(function () {
  const REMOTE_JSON_URL = 'https://amagawa-stadio.github.io/promo/sister-apps.json';
  const CACHE_KEY = 'amakawa_sister_apps_promo_v6';

  const FALLBACK_DATA = {
    updatedAt: '2026-11-22',
    heading: '＼ 雨川の旦那 公式学習アプリシリーズ ／',
    apps: [
      {
        id: 'english-step-grammar',
        isNew: true,
        badgeText: 'NEW',
        title: '段階別！並べ替え英文法！',
        subtitle: '全842問＆全単語タップ辞書で語順を完全攻略！',
        borderColor: '#a855f7',
        icon: 'https://amagawa-stadio.github.io/promo/icons/step_grammar_icon.png',
        localIcon: 'promo/icons/step_grammar_icon.png',
        url: 'https://amagawa-stadio.github.io/english-step-grammar-app/'
      },
      {
        id: 'english-listening',
        isNew: true,
        badgeText: 'NEW',
        title: '段階別！英語リスニング！',
        subtitle: '習った文法だけで耳から1段ずつステップアップ！',
        borderColor: '#10b981',
        icon: 'https://amagawa-stadio.github.io/promo/icons/listening_icon.png',
        localIcon: 'promo/icons/listening_icon.png',
        url: 'https://amagawa-stadio.github.io/english-listening-app/'
      },
      {
        id: 'english-reading',
        isNew: false,
        badgeText: '人気',
        title: '段階別！中学英語長文！',
        subtitle: '習った文法だけで1段ずつステップアップ！',
        borderColor: '#00f0ff',
        icon: 'https://amagawa-stadio.github.io/promo/icons/reading_icon.png',
        localIcon: 'promo/icons/reading_icon.png',
        url: 'https://amagawa-stadio.github.io/english-reading-app/'
      },
      {
        id: 'english-sentence-vocab',
        isNew: false,
        badgeText: '人気',
        title: '例文で英単語！',
        subtitle: '生きた例文で使える語彙力を身につける！',
        borderColor: '#f59e0b',
        icon: 'https://amagawa-stadio.github.io/promo/icons/sentence_vocab_icon.png',
        localIcon: 'promo/icons/sentence_vocab_icon.png',
        url: 'https://amagawa-stadio.github.io/english-sentence-vocab/'
      },
      {
        id: 'com.sakkusaku.englishvocab',
        isNew: false,
        title: '中学英語 教科書単語',
        subtitle: '教科書準拠で定期テスト対策！',
        borderColor: '#10b981',
        icon: 'https://amagawa-stadio.github.io/promo/icons/textbook_vocab_icon.png',
        localIcon: 'promo/icons/textbook_vocab_icon.png',
        url: 'https://amagawa-stadio.github.io/english-textbook-vocab/'
      },
      {
        id: 'portal',
        isNew: false,
        title: '中学英語 学習支援ポータルサイト',
        subtitle: '単語・長文・文法・リスニングの総合ポータル！',
        borderColor: '#00f0ff',
        icon: 'https://amagawa-stadio.github.io/promo/icons/portal_icon.png',
        localIcon: 'promo/icons/portal_icon.png',
        url: 'https://amagawa-stadio.github.io/'
      }
    ]
  };

  function injectStyles() {
    if (document.getElementById('amakawa-promo-styles')) return;
    const style = document.createElement('style');
    style.id = 'amakawa-promo-styles';
    style.textContent = `
      .amakawa-promo-wrap {
        margin: 28px auto 16px;
        width: 100%;
        max-width: 420px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 11px;
        box-sizing: border-box;
        padding: 0 8px;
      }
      .amakawa-promo-heading {
        font-size: 0.92rem;
        font-weight: 800;
        color: inherit;
        opacity: 0.95;
        margin: 0 0 4px 0;
        text-align: center;
        letter-spacing: 0.03em;
      }
      .amakawa-promo-link {
        text-decoration: none;
        display: block;
        width: 100%;
        position: relative;
        transition: transform 0.16s ease;
      }
      .amakawa-promo-link:active {
        transform: scale(0.98);
      }
      .amakawa-promo-card {
        width: 100%;
        background: rgba(255, 255, 255, 0.96);
        border: 2.5px solid #4CAF50;
        padding: 10px 12px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        gap: 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
        box-sizing: border-box;
        position: relative;
        overflow: visible;
      }
      .amakawa-promo-card.is-new-card {
        background: linear-gradient(135deg, #ffffff 0%, #fff8f6 100%);
        box-shadow: 0 6px 16px rgba(231, 76, 60, 0.28);
      }
      .amakawa-promo-new-badge {
        position: absolute;
        top: -9px;
        left: 12px;
        background: linear-gradient(135deg, #ff2e4c 0%, #ff6b00 100%);
        color: #ffffff;
        font-size: 0.68rem;
        font-weight: 900;
        padding: 2px 9px;
        border-radius: 999px;
        letter-spacing: 0.08em;
        box-shadow: 0 2px 6px rgba(231, 76, 60, 0.45);
        border: 1.5px solid #ffffff;
        animation: amakawaNewPulse 2s infinite ease-in-out;
        z-index: 2;
      }
      @keyframes amakawaNewPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.07); }
      }
      .amakawa-promo-icon {
        width: 52px;
        height: 52px;
        border-radius: 11px;
        object-fit: cover;
        flex-shrink: 0;
        background: #f1f5f9;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.12);
      }
      .amakawa-promo-texts {
        text-align: left;
        flex: 1;
        min-width: 0;
      }
      .amakawa-promo-title {
        font-weight: 800;
        color: #1e293b;
        font-size: 0.98rem;
        line-height: 1.3;
        margin-bottom: 2px;
      }
      .amakawa-promo-subtitle {
        font-size: 0.78rem;
        color: #475569;
        line-height: 1.3;
        font-weight: 600;
      }
    `;
    document.head.appendChild(style);
  }

  function renderWidget(container, data) {
    if (!container || !data || !Array.isArray(data.apps)) return;
    injectStyles();

    const currentAppId = (
      container.getAttribute('data-current-app') ||
      new URLSearchParams(window.location.search).get('app') ||
      ''
    ).trim();

    const isSameApp = (appId) => {
      if (!currentAppId) return false;
      if (appId === currentAppId) return true;
      if ((appId === 'english-sentence-vocab' || appId === 'com.hiroki.sentencevocab') &&
          (currentAppId === 'english-sentence-vocab' || currentAppId === 'com.hiroki.sentencevocab')) {
        return true;
      }
      return false;
    };

    const visibleApps = data.apps.filter(app => !isSameApp(app.id));

    const wrap = document.createElement('div');
    wrap.className = 'amakawa-promo-wrap';

    const heading = document.createElement('p');
    heading.className = 'amakawa-promo-heading';
    heading.textContent = data.heading || '＼ 姉妹アプリやサイトもよろしくね！ ／';
    wrap.appendChild(heading);

    visibleApps.forEach((app, idx) => {
      const isTopNew = Boolean(app.isNew || idx === 0);
      const a = document.createElement('a');
      a.className = 'amakawa-promo-link';
      a.href = String(app.url || 'https://amagawa-stadio.github.io/').replace('hiroking4orikara-art.github.io', 'amagawa-stadio.github.io');
      a.target = '_blank';
      a.rel = 'noopener noreferrer';

      const card = document.createElement('div');
      card.className = 'amakawa-promo-card' + (isTopNew ? ' is-new-card' : '');
      card.style.borderColor = app.borderColor || '#4CAF50';

      if (isTopNew) {
        const badge = document.createElement('span');
        badge.className = 'amakawa-promo-new-badge';
        badge.textContent = app.badgeText || 'NEW';
        card.appendChild(badge);
      }

      const img = document.createElement('img');
      img.className = 'amakawa-promo-icon';
      img.src = app.localIcon || app.icon;
      img.alt = app.title;
      img.onerror = function () {
        if (app.icon && !this.dataset.remoteTried) {
          this.dataset.remoteTried = '1';
          this.src = app.icon;
        }
      };

      const texts = document.createElement('div');
      texts.className = 'amakawa-promo-texts';

      const title = document.createElement('div');
      title.className = 'amakawa-promo-title';
      title.textContent = app.title;

      const subtitle = document.createElement('div');
      subtitle.className = 'amakawa-promo-subtitle';
      subtitle.textContent = app.subtitle;

      texts.appendChild(title);
      texts.appendChild(subtitle);
      card.appendChild(img);
      card.appendChild(texts);
      a.appendChild(card);
      wrap.appendChild(a);
    });

    container.innerHTML = '';
    container.appendChild(wrap);
  }

  async function initPromoWidgets() {
    const containers = document.querySelectorAll('#sister-apps-promo, .sister-apps-promo');
    if (!containers.length) return;

    let cachedData = null;
    try {
      localStorage.removeItem('amakawa_sister_apps_promo_v1');
      localStorage.removeItem('amakawa_sister_apps_promo_v2');
      localStorage.removeItem('amakawa_sister_apps_promo_v3');
      localStorage.removeItem('amakawa_sister_apps_promo_v4');
      const raw = localStorage.getItem(CACHE_KEY);
      if (raw && !raw.includes('hiroking4orikara-art.github.io') && !raw.includes('文法 サックサク')) {
        cachedData = JSON.parse(raw);
      }
    } catch (e) {}

    const initialData = cachedData || FALLBACK_DATA;
    containers.forEach(c => renderWidget(c, initialData));

    try {
      const res = await fetch(`${REMOTE_JSON_URL}?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const remoteData = await res.json();
        if (remoteData && Array.isArray(remoteData.apps)) {
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(remoteData));
          } catch (e) {}
          containers.forEach(c => renderWidget(c, remoteData));
        }
      }
    } catch (err) {
      // Offline or fetch blocked: initialData is already rendered cleanly
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPromoWidgets);
  } else {
    initPromoWidgets();
  }

  window.AmakawaPromoWidget = { init: initPromoWidgets, render: renderWidget };
})();

