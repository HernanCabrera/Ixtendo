window.addEventListener('load', () => {
  let objNav = {
    resizeActivo: true,  //Activo cuando es menor o igual a 767px
    scrollActivo: true   //Activo cuando el scroll es mayor a 100
  }
  const nav = document.getElementById('mainNav')
  const home = document.getElementById('home')
  const navItems = document.querySelectorAll('#mainNav .nav-item')
  cambiarColorDelNavPorResize(nav, objNav)
  cambiarColorDelNavPorScroll(nav, objNav)
  cambiarNavItemActivo(home, navItems)
  desplazamientoDeLasAnclas()
  eventosDeAnimacionDeScroll()
})

const cambiarColorDelNavPorResize = (nav, objNav) => {
  funcionDelResize(nav, objNav)
  window.addEventListener('resize', () => {
    funcionDelResize(nav, objNav)
  })
}
const funcionDelResize = (nav, objNav) => {
  if (window.innerWidth <= 767) {
    objNav.resizeActivo = true
    nav.classList.add('color-negro')
  } else {
    objNav.resizeActivo = false
    if (objNav.scrollActivo) {
      nav.classList.add('color-negro')
    } else {
      nav.classList.remove('color-negro')
    }
  }
} 


const cambiarColorDelNavPorScroll = (nav, objNav) => {
  funcionDelScroll(nav, objNav)
  window.addEventListener("scroll", () => {
    funcionDelScroll(nav, objNav)
  })
}
const funcionDelScroll = (nav, objNav) => {
  if (window.scrollY < 100) {
    objNav.scrollActivo = false
    if (objNav.resizeActivo) {
      nav.classList.add('color-negro')
    } else {
      nav.classList.remove('color-negro')
    }
  } else {
    objNav.scrollActivo = true
    nav.classList.add('color-negro')
  }
}


const cambiarNavItemActivo = (home, navItems) => {
  funcionDelItemActivo(home, navItems)
  window.addEventListener("scroll", () => {
    funcionDelItemActivo(home, navItems)
  })
}
const funcionDelItemActivo = (home, navItems) => {
  if (window.scrollY > (home.offsetHeight - 50)) {
    navItems[0].classList.remove('active')
    navItems[1].classList.add('active')
  } else {
    navItems[0].classList.add('active')
    navItems[1].classList.remove('active')
  }
}


const desplazamientoDeLasAnclas = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        block: "start",
        behavior: 'smooth'
      })
    })
  })
}

const eventosDeAnimacionDeScroll = () => {
  window.sr = ScrollReveal()
  sr.reveal('#home .container', {
    duration: 1500,
    origin: 'bottom'
  })
  sr.reveal('#home .container', {
    duration: 1500,
    origin: 'bottom'
  })
  sr.reveal('#home #contenedor-sub-title', {
    duration: 1500,
    origin: 'top',
    distance: '300px'
  })
  sr.reveal('#home .title', {
    duration: 1500,
    origin: 'right',
    distance: '300px'
  })
  sr.reveal('#home #contenedor-boton', {
    duration: 1500,
    origin: 'bottom',
    delay: 1000
  })
  sr.reveal('#portafolio .container .row .col-12', {
    duration: 1000,
    scale: 0.1
  })

  sr.reveal('#portafolio .container .row .card', {
    duration: 1000
  }, 500)

  sr.reveal('#footer', {
    origin: 'left',
    distance: '300px',
    duration: 1000
  })
}

