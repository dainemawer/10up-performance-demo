/**
 * 🗳 Slider Component
 * This is an example component.
 *
 * @return void
 */

import { tns } from 'tiny-slider/src/tiny-slider';

const Slider = () => {
	const slider = tns({
		container: '.my-slider',
		items: 1,
		slideBy: 'page',
		autoplay: true,
		controls: false,
		nav: false,
	});

	return slider;
};

export default Slider;
