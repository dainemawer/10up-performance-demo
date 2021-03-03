/**
 * Navigation Component
 * This is an example component.
 *
 * @return void
 */
import Navigation from '@10up/component-navigation';

const SiteNavigation = () => {
	const navigation = new Navigation('.navigation', {
		action: 'click',
		onCreate() {
			console.log('onCreate callback');
		},
		onOpen() {
			console.log('onOpen callback');
		},
		onClose() {
			console.log('onClose callback');
		},
		onSubmenuOpen() {
			console.log('onSubmenuOpen callback');
		},
		onSubmenuClose() {
			console.log('onSubmenuClose callback');
		},
	});

	return navigation;
};

export default SiteNavigation;
