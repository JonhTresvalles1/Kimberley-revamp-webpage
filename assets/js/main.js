/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  toggle.addEventListener('click', () => {
    // Add show-menu class to nav menu
    nav.classList.toggle('show-menu')

    // Add show-icon to show and hide the menu icon
    toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle', 'nav-menu')

/*=============== REMOVE MENU MOBILE ===============*/
const navMenu = document.getElementById('nav-menu')
const navLinks = document.querySelectorAll('.nav__link')

if (navMenu && navLinks.length) {
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
    })
  })
}

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
    const governance = buyerType.governance

    if (governance === 'individual') {
      companyGroup.style.display = 'none'
      companyInput.required = false
    } else {
      companyGroup.style.display = 'flex'
      companyInput.required = true
      companyLabel.textContent =
        governance === 'broker' ? 'Business name *' : 'Company name *'
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

  sr.reveal('.home__data, .newsletter__banner-wrapper, .banner__section, .benefit__section, .trusted__network, .steps__flow-data, .steps__data, .projects__dropdown-wrapper')
  sr.reveal('.hero__img, .chart-card, .traditional__container', { delay: 500 })
  sr.reveal('.protect__data, .carbon__data, .impact__data, .testimonial__section, .indigenous__container, .aboutus__text-data, .outcome__container', { delay: 600 })
  sr.reveal('.services__img, .contact__box, .contact-data, .hero__decor-circle--2, .vision__img, .governance__img, .verified__impact-content', { origin: 'left' })
  sr.reveal('.services__data, .contact__form, .contact-form, .hero__decor-circle--1, .vision__data, .governance__content, .verified__impact-img', { origin: 'right' })
  sr.reveal(
    '.indigenous-story__video, .insight-intro, .insight-card, .image-card, .aboutus__container, .carbon__grid-cards, .projects__card, .steps__cards, .blog__article, .outcome__card, .steps__flow-card, .footer',
    { interval: 100 }
  )
}



/*=============== Governance ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".governance__accordion-item")

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".governance__accordion-header")

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item)

    if (openItem && openItem !== item) {
      toggleItem(openItem)
    }
  })
})

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".governance__accordion-content")

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}

/*=============== Custom ProjectsDropdown ===============*/
const projectsDropdown = document.getElementById('customDropdown');

if (projectsDropdown) {

  const projectsDropdownSelected = projectsDropdown.querySelector('.projects__dropdown-selected');
  const projectsDropdownList = projectsDropdown.querySelector('.projects__dropdown-list');
  const projectsDropdownItems = projectsDropdown.querySelectorAll('.projects__dropdown-item');

  projectsDropdownSelected.addEventListener('click', () => {
    projectsDropdownList.style.display =
      projectsDropdownList.style.display === 'block' ? 'none' : 'block';
  });

  projectsDropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      projectsDropdownSelected.textContent = item.textContent;
      projectsDropdownList.style.display = 'none';
      console.log('Selected value:', item.dataset.value);
    });
  });

  document.addEventListener('click', (e) => {
    if (!projectsDropdown.contains(e.target)) {
      projectsDropdownList.style.display = 'none';
    }
  });

}

/*=============== Number animation ===============*/

function runNumberAnimation(container) {

  const statNumbers = container.querySelectorAll('.projects__card-title');

  statNumbers.forEach(stat => {

    const target = parseInt(stat.dataset.target);

    if (isNaN(target)) return;

    stat.textContent = "0"; // reset number before animation

    const duration = 2000;
    const startTime = performance.now();

    function updateNumber(currentTime) {

      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * target);

      stat.textContent = value.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }

    }

    requestAnimationFrame(updateNumber);

  });

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
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  })
}


/*=============== slider cards ===============*/
document.addEventListener("DOMContentLoaded", function () {

  const tfmSlider = document.querySelector(".tfm-slider");

  if (tfmSlider) {
    new Swiper(".tfm-slider", {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      }
    });
  }

});



