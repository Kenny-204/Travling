'use strict'
const toggleBtn = document.querySelector('.toggle_Btn')
const toggleBtnIcon = document.querySelector('.toggle_Btn i')
const dropdownMenu = document.querySelector('.dropdown--menu')


const closeDropdown = function () {
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}
const dropdown = function () {
    toggleBtn.addEventListener('click', function () {
        closeDropdown()
    })
    document.querySelector('body').addEventListener('click', function (e) {
        const dropdown = e.target.closest('.dropdown--menu')
        // if(!dropdown)       
        // console.log(dro)
        // if (e.target.parentElement.classList.contains('dropdown--menu') || e.target.classList.contains('fa-solid') || e.target.classList.contains("dropdown--item"))  return 
        // closeDropdown()
    })
}
dropdown()

// sticky navbar
const nav = document.querySelector('.navbar')
const header = document.querySelector('header')

const navHeight = nav.getBoundingClientRect().height;
const headObserve = function (entries) {
    const [entry] = entries
    if (!entry.isIntersecting) {
        nav.classList.add('sticky')
        console.log(navHeight)
    }
    else {
        nav.classList.remove('sticky')
    }

    console.log(entry)
}
const options = {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
}
const observer = new IntersectionObserver(headObserve, options)
observer.observe(header)
