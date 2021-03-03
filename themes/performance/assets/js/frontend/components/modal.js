/**
 * Modal Component
 * This is an example component.
 *
 * @return void
 */
import A11yDialog from 'a11y-dialog';

const Modal = () => {
	const container = document.querySelector('#my-dialog-container');
	const dialog = new A11yDialog(container);

	return dialog;
};

export default Modal;
