/**
 * ⚙️ Utility Component
 * This is an example component.
 *
 * @return void
 */
import * as Promise from 'bluebird';

const Utility = () => {
	const myPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('foo');
			reject();
		}, 300);
	});

	return myPromise;
};

export default Utility;
