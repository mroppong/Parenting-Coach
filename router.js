
// Simple hash-based router to load Stitch-exported HTML partials
(function () {
  const outlet = document.getElementById('app');
  console.log('Router script loaded');

  const routes = {
    '': 'screens/splash.html',
    'splash': 'screens/splash.html',
    'onboarding/pulse': 'screens/onboarding-pulse.html',
    'onboarding/create-account': 'screens/onboarding-create-account.html',
    'onboarding/parent-profile': 'screens/onboarding-parent-profile.html',
    'onboarding/child-count': 'screens/onboarding-child-count.html',
    'onboarding/child-profiles': 'screens/onboarding-child-profiles-dynamic.html',
    'chat': 'screens/main-chat-interface.html',
    'menu': 'screens/app-menu-slideout.html'
  };

  function pathFromHash() {
    const h = window.location.hash.replace(/^#\/?/, '');
    return h;
  }

  async function render() {
    console.log('Render function called');
    const path = pathFromHash();
    console.log('Current path:', path);
    const file = routes[path] || routes[''];
    console.log('Loading file:', file);
    try {
      const res = await fetch(file, { cache: 'no-cache' });
      const html = await res.text();
      outlet.innerHTML = html;
      
      // Manually execute scripts
      const scripts = outlet.querySelectorAll('script');
      scripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.textContent = script.textContent;
        document.body.appendChild(newScript).parentNode.removeChild(newScript);
      });

      wireNavLinks(outlet);
      if (window.i18n && typeof window.i18n.translate === 'function') {
        window.i18n.translate(outlet);
        if (typeof window.i18n.wireToggle === 'function') {
          window.i18n.wireToggle();
        }
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
    console.log('Navigating to:', path);
    const newHash = `#/${path}`;
    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
    } else {
      render();
    }
  }

  window.navigate = navigate;

  window.addEventListener('hashchange', render);
  
  // Initial render
  render();
})();
