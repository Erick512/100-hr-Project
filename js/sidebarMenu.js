document.querySelector('button').addEventListener('click', showSideBar )

function showSideBar() {
    document.querySelector('.menu').classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))
    
    if(document.querySelector('#sidebarMenu').classList.contains('show')){
        document.querySelector('#sidebarMenu').classList.remove('show')
    } else {
        document.querySelector('#sidebarMenu').classList.add('show')
    }
}