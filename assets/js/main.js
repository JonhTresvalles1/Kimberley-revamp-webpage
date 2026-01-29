/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if (navClose && navMenu) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link')

function linkAction() {
  if (navMenu) navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header')
  if (!header) return
  header.classList.toggle('scroll-header', window.scrollY >= 80)
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')
  if (!scrollUp) return
  scrollUp.classList.toggle('show-scroll', window.scrollY >= 400)
}
window.addEventListener('scroll', scrollUp)

/*=============== CONTACT FORM LOGIC ===============*/
const buyerType = document.getElementById('buyerType')
const companyGroup = document.getElementById('companyGroup')
const companyLabel = document.getElementById('companyLabel')
const companyInput = document.getElementById('companyInput')
const buyerTypeGroup = document.getElementById('buyerTypeGroup')
const toggleButtons = document.querySelectorAll('.toggle-btn')

if (buyerType && companyGroup && companyLabel && companyInput) {
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleButtons.forEach(b => {
        b.classList.remove('active')
        b.classList.add('inactive')
      })

      btn.classList.add('active')
      btn.classList.remove('inactive')

      if (buyerTypeGroup) {
        buyerTypeGroup.style.display =
          btn.dataset.type === 'buy' ? 'grid' : 'none'
      }
    })
  })

  buyerType.addEventListener('change', () => {
    const value = buyerType.value

    if (value === 'individual') {
      companyGroup.style.display = 'none'
      companyInput.required = false
    } else {
      companyGroup.style.display = 'flex'
      companyInput.required = true
      companyLabel.textContent =
        value === 'broker' ? 'Business name *' : 'Company name *'
    }
  })
}

/*=============== SCROLL REVEAL ===============*/
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
  })

  sr.reveal('.home__data')
  sr.reveal('.hero__img', { delay: 500 })
  sr.reveal('.protect__data, .impact__data, .testimonial__section, .indigenous__container ', { delay: 600 })
  sr.reveal('.services__img, .contact__box, .contact-data, .hero__decor-circle--2', { origin: 'left' })
  sr.reveal('.services__data, .contact__form, .contact-form, .hero__decor-circle--1', { origin: 'right' })
  sr.reveal(
    '.indigenous-story__video, .insight-intro, .insight-card,.footer',
    { interval: 100 }
  )
}

/*=============== SWIPER ===============*/
if (typeof Swiper !== 'undefined') {
  new Swiper('.testimonial-swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  })
}
