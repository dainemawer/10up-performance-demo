/**
 * Time Component
 * This is an example component.
 *
 * @return void
 */

import moment from 'moment';

const Time = () => {
	moment('20111031', 'YYYYMMDD').fromNow();
	moment.locale();
};

export default Time;
