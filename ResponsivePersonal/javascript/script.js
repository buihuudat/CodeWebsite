$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        //scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        //applying again smooth scroll on menu items click
        $('html').css("scrollBehavior","smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //owl carousel script
    $('.carousel, .edu').owlCarousel({
        margin: 20, 
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

/*===== MENU SHOW =====*/ 
// const showMenu = (toggleId, navId) =>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId)

//     if(toggle && nav){
//         toggle.addEventListener('click', ()=>{
//             nav.classList.toggle('show')
//         })
//     }
// }
// showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
// const navLink = document.querySelectorAll('.nav__link');   

// function linkAction(){
//   /*Active link*/
//   navLink.forEach(n => n.classList.remove('active'));
//   this.classList.add('active');
  
//   /*Remove menu mobile*/
//   const navMenu = document.getElementById('nav-menu')
//   navMenu.classList.remove('show')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/

const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    reset: true
})

//#region navbar scrollReveal
// sr.reveal('.navbar .logo',{
//         origin: 'top',
//         reset: false
//     })
   
// sr.reveal('.navbar .mb-home',{
//     origin: 'top',
//     delay: 100,
//     reset: false
// })

// sr.reveal('.navbar .mb-about',{
//     origin: 'top',
//     delay: 70,
//     reset: false   
// })
// sr.reveal('.navbar .mb-education',{
//     origin: 'top',
//     delay: 130,
//     reset: false
// })
// sr.reveal('.navbar .mb-skills',{
//     origin: 'top',
//     delay: 190,
//     reset: false
// })
// sr.reveal('.navbar .mb-teams',{
//     origin: 'top',
//     delay: 250,
//     reset: false
// })
// sr.reveal('.navbar .mb-contact',{
//     origin: 'top',
//     delay: 310,
//     reset: false
// })

// /* SCROLL NAVBAR*/
// sr.reveal('.navbar .logo',{
//     origin: 'top',
//     reset: false
// })
//#endregion

/*SCROLL HOME*/
sr.reveal('.home-content .text-1',
{
    origin: 'left',
    delay: 100
})
sr.reveal('.home-content .text-2',
{
    origin: 'left',
    delay: 200
})
sr.reveal('.home-content .text-3',
{
    origin: 'left',
    delay: 300
})
sr.reveal('.bnt-home',{
    origin: 'bottom',
    delay: 100
})
sr.reveal('.home_social .fa-linkedin-in',{
    origin: 'bottom',
    delay: 150
})
sr.reveal('.home_social .fa-github',{
    origin: 'bottom',
    delay: 350
})
sr.reveal('.home_social .fa-behance',{
    origin: 'bottom',
    delay: 550
})

//about
sr.reveal('.about .title, .education .title, .skills .title, .teams .title, .contact .title',{
    origin:'top',
})

sr.reveal('.about .about-content img',{
    origin: 'top',
    delay: 100
})
sr.reveal('.about .about-content .left p',{
    origin: 'top',
    delay: 800,
    distance: '20px'
})
sr.reveal('.about .right .text',{
    origin: 'left',
    delay: 100
})
sr.reveal('.about .right p',{
    origin: 'left',
    delay: 150
})
sr.reveal('.about .bnt-about',{
    origin: 'top',
    delay: 200,
    distance: '350px'
})

//education
sr.reveal('.education .edu',{
    origin:'right',
})

// skills
sr.reveal('.skills .left .text',{
    origin: 'left',
    delay: 100
})
sr.reveal('.skills .left p',{
    origin: 'left',
    delay: 150
})
sr.reveal('.skills .bnt-skills',{
    origin: 'top',
    delay: 200,
    distance: '35px'
})
sr.reveal('.skills .right .bars',{
    origin: 'right',
})

//teams
sr.reveal('.teams .carousel',{
    origin: 'right'
})

//contact
sr.reveal('.contact .left .text',{
    origin: 'left',
    delay: 100
})
sr.reveal('.contact .left p',{
    origin: 'left',
    delay: 150
})
sr.reveal('.contact .left .btn-contact-1',{
    origin: 'left',
    delay: 250
})
sr.reveal('.contact .left .btn-contact-2',{
    origin: 'left',
    delay: 350
})
sr.reveal('.contact .left .btn-contact-3',{
    origin: 'left',
    delay: 400
})

sr.reveal('.contact .right .text',{
    origin: 'right',
    delay: 100
})
sr.reveal('.contact .right .name',{
    origin: 'right',
    delay: 150
})
sr.reveal('.contact .right .email',{
    origin: 'right',
    delay: 250
})
sr.reveal('.contact .right .subject',{
    origin: 'right',
    delay: 350
})
sr.reveal('.contact .right .textarea',{
    origin: 'right',
    delay: 450
})

sr.reveal('.contact .button-area',{
    origin:'top',
    delay: 600,
    distance: '50px'
})

sr.reveal('.contact .wrapper',{
    origin: 'bottom',
    delay: 100,

})