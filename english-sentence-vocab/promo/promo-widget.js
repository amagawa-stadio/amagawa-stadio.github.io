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
  const CACHE_KEY = 'amakawa_sister_apps_promo_v1';

  const FALLBACK_DATA = {
    updatedAt: '2026-10-30',
    heading: '＼ 姉妹アプリやサイトもよろしくね！ ／',
    apps: [
      {
        id: 'com.hiroking4orikara.knightscommander',
        isNew: true,
        badgeText: 'NEW',
        title: 'The Knight Commander',
        subtitle: '勉強の息抜きにおすすめの戦略ゲーム！',
        borderColor: '#E74C3C',
        icon: 'https://amagawa-stadio.github.io/promo/icons/knights_commander_icon.png',
        localIcon: 'promo/icons/knights_commander_icon.png',
        url: 'https://play.google.com/store/apps/details?id=com.hiroking4orikara.knightscommander'
      },
      {
        id: 'com.sakkusaku.englishvocab',
        isNew: false,
        title: '中学英語 教科書単語',
        subtitle: '教科書準拠でサクサク覚える！',
        borderColor: '#4CAF50',
        icon: 'https://amagawa-stadio.github.io/promo/icons/vocab_icon.png',
        localIcon: 'promo/icons/vocab_icon.png',
        url: 'https://play.google.com/store/apps/details?id=com.sakkusaku.englishvocab'
      },
      {
        id: 'com.hiroki.grammar',
        isNew: false,
        title: '中学英語 並べ替え300',
        subtitle: '語順並べ替えで英文法をマスター！',
        borderColor: '#8E44AD',
        icon: 'https://amagawa-stadio.github.io/promo/icons/grammar_icon.png',
        localIcon: 'promo/icons/grammar_icon.png',
        url: 'https://play.google.com/store/apps/details?id=com.hiroki.grammar'
      },
      {
        id: 'com.teambits.socialstudies',
        isNew: false,
        title: '中学社会 これ一本！',
        subtitle: '歴史・地理・公民を完全網羅！',
        borderColor: '#2196F3',
        icon: 'https://amagawa-stadio.github.io/promo/icons/social_icon.png',
        localIcon: 'promo/icons/social_icon.png',
        url: 'https://play.google.com/store/apps/details?id=com.teambits.socialstudies'
      },
      {
        id: 'com.hiroking4orikara.subsubjects',
        isNew: false,
        title: '中学副教科 これ一本！',
        subtitle: '音・美・保体・技家を網羅！',
        borderColor: '#E91E63',
        icon: 'https://amagawa-stadio.github.io/promo/icons/sub_subjects_icon.png',
        localIcon: 'promo/icons/sub_subjects_icon.png',
        url: 'https://play.google.com/store/apps/details?id=com.hiroking4orikara.subsubjects'
      },
      {
        id: 'portal',
        isNew: false,
        title: '公式ポータルサイト',
        subtitle: '他の無料学習アプリもチェック！',
        borderColor: '#FF9800',
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

    const visibleApps = data.apps.filter(app => app.id !== currentAppId);

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
      a.href = app.url;
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
      const raw = localStorage.getItem(CACHE_KEY);
      if (raw) cachedData = JSON.parse(raw);
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

