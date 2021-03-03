/**
 * Sticky Component
 * This is an example component.
 *
 * @return void
 */

import stickybits from 'stickybits';

const Sticky = () => {
	stickybits('header', { useStickyClasses: true });
};

export default Sticky;
