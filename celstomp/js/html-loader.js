(function () {
    'use strict';

    const partScripts = [
        './parts/header.js',
        './parts/stage.js',
        './parts/sidepanel.js',
        './parts/timeline.js',
        './parts/modals.js'
    ];

    // Defines the application logic scripts to load AFTER DOM is ready
    const appScripts = [
        './js/ui-components.js',
        './celstomp-imgseq.js',
        './celstomp-autosave.js',
        './celstomp-app.js'
    ];

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
            document.body.appendChild(script);
        });
    }

    async function boot() {
        try {
            for (const src of partScripts) {
                await loadScript(src);
            }
            for (const src of appScripts) {
                await loadScript(src);
            }

            console.log('[celstomp] All parts and scripts loaded via JS injection.');

        } catch (err) {
            console.error('[celstomp] Boot error:', err);
            alert('Error loading application: ' + err.message);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }

})();
