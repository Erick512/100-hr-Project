document.querySelector('button').addEventListener('click', scrollTo)
document.querySelector('.getStarted').addEventListener('click', scrollTo )

function showSideBar() {
    document.querySelector('.menu').classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))
    
    if(document.querySelector('#sidebarMenu').classList.contains('show')){
        document.querySelector('#sidebarMenu').classList.remove('show')
        document.querySelector('#dark').classList.remove('show')

    } else {
        document.querySelector('#sidebarMenu').classList.add('show')
        document.querySelector('#dark').classList.add('show')
    }
}

function scrollTo() {
    document.querySelector('.topSection').scrollIntoView()
}