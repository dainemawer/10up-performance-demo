/**
 * 🎛 Accordion Component
 * This is an example component.
 *
 * @return void
 */
import Accordion from '@10up/component-accordion';

const AccordionBlock = () => {
	const accordion = new Accordion('.accordion', {
		onCreate() {
			console.log('onCreate callback');
		},
		onOpen() {
			console.log('onOpen callback');
		},
		onClose() {
			console.log('onClose callback');
		},
		onToggle() {
			console.log('onToggle callback');
		},
	});

	return accordion;
};

export default AccordionBlock;
