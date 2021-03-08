/**
 * 🔌 Modal Component
 * This is an example component.
 *
 * @return void
 */
import A11yDialog from 'a11y-dialog';

const Modal = () => {
	const dialogEl = document.getElementById('my-dialog');
	const mainEl = document.querySelector('main');
	const dialog = new A11yDialog(dialogEl, mainEl);

	return dialog;
};

export default Modal;
