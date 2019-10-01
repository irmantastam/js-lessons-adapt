document.getElementById('hello'); // Gets tag with id hello.
document.getElementsByTagName('p'); // Gets all <p> tags in document.
document.querySelector('.hello'); // Gets tag with class name hello.
document.querySelectorAll('#hello') // Gets all tags with id hello within subtree.
document.createElement('div'); // Creates an empty <div></div> tag.
element.appendChild(elementChild); // Appends child node inside element tag.
element.innerHTML = '<p>Hello world!</p>'; // Changes element inner content.
element.style.left = '20px'; // Adds inline style attribute style="left: 20px".
element.setAttribute('data-name', 'John'); // Set's element attribute 'data-name' as 'John'.
element.getAttribute('data-name'); // Get's element attribute 'data-name'.
element.addEventListener('click', (e) => alert('clicked!')); // Adds click event on element.