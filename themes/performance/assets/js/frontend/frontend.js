// import foo from './components/bar';
import Accordion from './components/accordion';
import Modal from './components/modal';
import Navigation from './components/navigation';
import Sticky from './components/sticky';
import Tabs from './components/tabs';
import Time from './components/time';
import Utility from './components/utility';
import Polyfill from './components/polyfill';
import Legacy from './components/legacy';
import Chart from './components/chart';
import Slider from './components/slider';

// eslint-disable-next-line @wordpress/no-global-event-listener
document.addEventListener('DOMContentLoaded', () => {
	Accordion();
	Modal();
	Navigation();
	Sticky();
	Tabs();
	Time();
	Utility();
	Polyfill();
	Legacy();
	Chart();
	Slider();
});
