// change navbar styles on scroll

window.addEventListener('scroll', () =>{
    const nav = document.querySelector('nav');
    if(window.scrollY > 0){
        nav.classList.add('window-scroll')
    } else {
        nav.classList.remove('window-scroll');
    }
})

// show/ hide of faq answers
const faqs = document.querySelectorAll('.faq')

faqs.forEach(node =>{
    node.addEventListener('click', () =>{
        node.classList.toggle('open')

        //change icon
    const icon = node.querySelector('.faq_icon i')

    if(icon.className === "fa-solid fa-plus"){
        icon.className = "fa-solid fa-minus";
    }else{
        icon.className = "fa-solid fa-plus";
    }

    })
})

// nav bar
const menu = document.querySelector('.nav_menu')
const openbtn = document.getElementById('open-menu-btn')
const closebtn = document.getElementById('close-menu-btn')

openbtn.addEventListener('click', () => {
    menu.style.display ='flex'
    closebtn.style.display ='inline-block'
    openbtn.style.display ="none"
     
})
closebtn.addEventListener('click', () => {
    menu.style.display ='none'
    openbtn.style.display ="inline-block"
    closebtn.style.display = "none"
})

