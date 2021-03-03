/**
 * ⚙️ Utility Component
 * This is an example component.
 *
 * @return void
 */
import _ from 'lodash';
import * as Promise from 'bluebird';

const Utility = () => {
	_.concat(['1', '2', '3', '4', '5'], ['6', '7', '8', '9', '10']);

	const myPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('foo');
			reject();
		}, 300);
	});

	return myPromise;
};

export default Utility;
