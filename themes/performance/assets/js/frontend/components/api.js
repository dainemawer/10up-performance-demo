/**
 * ⚙️ Utility Component
 * This is an example component.
 *
 * @return void
 */

const API = () => {
	fetch('https://jsonplaceholder.typicode.com/posts')
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
