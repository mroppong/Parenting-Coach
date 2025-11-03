// Simple hash-based router to load Stitch-exported HTML partials
(function () {
  const outlet = document.getElementById('app');

  const routes = {
    '': 'screens/splash.html',
    'splash': 'screens/splash.html',
    'onboarding/pulse': 'screens/onboarding-pulse.html',
    'onboarding/create-account': 'screens/onboarding-create-account.html',
    'onboarding/parent-profile': 'screens/onboarding-parent-profile.html',
    'onboarding/child-count': 'screens/onboarding-child-count.html',
    'onboarding/child-profiles-1': 'screens/onboarding-child-profiles-1.html',
    'onboarding/child-profiles-2': 'screens/onboarding-child-profiles-2.html',
    'chat': 'screens/main-chat-interface.html',
    'menu': 'screens/app-menu-slideout.html'
  };

  function pathFromHash() {
    const h = window.location.hash.replace(/^#\/?/, '');
    return h;
  }

  async function render() {
    const path = pathFromHash();
    const file = routes[path] || routes[''];
    try {
      const res = await fetch(file, { cache: 'no-cache' });
      const html = await res.text();
      outlet.innerHTML = html;
      wireNavLinks(outlet);
      // apply translations for newly injected DOM
      if (window.i18n && typeof window.i18n.translate === 'function') {
        window.i18n.translate(outlet);
      }
    } catch (e) {
      outlet.innerHTML = `<div class="screen"><h2>Not found</h2><p>Missing template: ${file}</p></div>`;
      console.error('Router render error:', e);
    }
  }

  function wireNavLinks(root) {
    root.querySelectorAll('[data-nav]')?.forEach((el) => {
      el.addEventListener('click', (ev) => {
        ev.preventDefault();
        const to = el.getAttribute('data-nav');
        navigate(to);
      });
    });
  }

  function navigate(path) {
    const newHash = `#/${path}`;
    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
    }
    // In case some environments don’t fire hashchange (e.g., file://), render explicitly
    render();
  }

  // expose navigate for inline handlers if needed
  window.navigate = navigate;

  window.addEventListener('hashchange', render);
  window.addEventListener('DOMContentLoaded', render);
})();
