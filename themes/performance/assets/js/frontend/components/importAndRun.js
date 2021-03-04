/**
 * importAndRun
 *
 * Some brilliance by a new 10up FEE.
 *
 * @author Jacob Peattie
 * @param {string} module the JS module to import
 * @param {string} selector the JS selector to target
 */
export function importAndRun(module, selector) {
	const shouldImport = selector ? document.querySelector(selector) : true;
	if (shouldImport) {
		import(`./${module}`).then((module) => {
			if (document.readyState === 'loading') {
				// eslint-disable-next-line @wordpress/no-global-event-listener
				window.addEventListener('DOMContentLoaded', module.default);
			} else {
				module.default();
			}
		});
	}
}
