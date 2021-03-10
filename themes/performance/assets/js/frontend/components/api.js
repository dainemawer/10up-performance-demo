/**
 * ⚙️ Utility Component
 * This is an example component.
 *
 * @return void
 */
import 'whatwg-fetch';

const API = () => {
	window.fetch('https://jsonplaceholder.typicode.com/posts') // eslint-disable-line
		.then((response) => response.json())
		.then((json) => {
			for (let i = 0; i < json.length; i++) {
				const posts = document.getElementById('posts');
				const heading = document.createElement('h3');
				heading.innerHTML = json[i].title;
				posts.appendChild(heading);
			}
		});
};

export default API;
