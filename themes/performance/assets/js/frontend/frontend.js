/**
 * 🧰 Frontend Entry file
 * Import and run a module if a selector is present.
 *
 * @param {string} module Module filename.
 * @param {string} [selector] Selector to check as a condition for importing.
 */
import { getFID } from 'web-vitals';
import { importAndRun } from './components/importAndRun';

getFID(console.table);

importAndRun('slider', '.slide-show');
importAndRun('accordion', '.accordion');
importAndRun('modal', '.modal');
importAndRun('navigation', '.navigation');
importAndRun('sticky', '.sticky');
importAndRun('tabs', '.tabs');
importAndRun('time', '#clock');
importAndRun('api', '#posts');
importAndRun('polyfill', 'body');
importAndRun('legacy', '.is-jquery');
importAndRun('chart', '#myChart');
