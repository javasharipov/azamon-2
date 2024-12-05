const sidebarEl = document.querySelector('.sidebar')
const modalEl = document.querySelector('.modal')

function showSidebar() {
	sidebarEl.classList.add('show')
}
function closeSidebar() {
	sidebarEl.classList.remove('show')
}

function modalShow() {
	modalEl.style.display = 'block'
}
function modalClose() {
	modalEl.style.display = 'none'
}
