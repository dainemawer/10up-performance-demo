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
		items: 3,
		slideBy: 'page',
		autoplay: true,
	});

	return slider;
};

export default Slider;
