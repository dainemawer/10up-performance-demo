/**
 * ⏰ Time Component
 * This is an example component.
 *
 * @return void
 */

import moment from 'moment/src/moment';

const Time = () => {
	const NowMoment = moment();

	// display value of moment object in #displayMoment div
	const eDisplayMoment = document.getElementById('clock');
	eDisplayMoment.innerHTML = NowMoment;
};

export default Time;
