/**
 * Tabs Component
 * This is an example component.
 *
 * @return void
 */

import Tabs from '@10up/component-tabs';

const TabComponent = () => {
	const tabs = new Tabs('.tabs', {
		onCreate() {
			console.log('onCreate callback');
		},
		onTabChange() {
			console.log('onTabChange callback');
		},
	});

	return tabs;
};

export default TabComponent;
