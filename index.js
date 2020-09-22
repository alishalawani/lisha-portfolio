window.onscroll =  () => {
	handleStaticHeader();
};

// Get the header
let header = document.querySelector('.header');

// Get the offset position of the navbar
let static = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function handleStaticHeader() {
	if (window.pageYOffset > static) {
		header.classList.add('sticky');
	} else {
		header.classList.remove('sticky');
	}
}
