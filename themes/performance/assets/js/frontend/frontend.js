import { getFID } from 'web-vitals';
import Accordion from './components/accordion';
import Modal from './components/modal';
import Sticky from './components/sticky';
import Tabs from './components/tabs';
import Time from './components/time';
import API from './components/api';
import Polyfill from './components/polyfill';
import Chart from './components/chart';
import Slider from './components/slider';

getFID(console.table); // eslint-disable-line

// eslint-disable-next-line @wordpress/no-global-event-listener
document.addEventListener('DOMContentLoaded', () => {
	Accordion();
	Modal();
	Sticky();
	Tabs();
	Time();
	API();
	Polyfill();
	Chart();
	Slider();
});
