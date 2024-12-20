
    // copy menu for mobile

    function copymenu(){
        // copy inside dpt cat to department

        var dptcategory = document.querySelector('.dpt-cat');
        var dptplace = document.querySelector('.departments');

        dptplace.innerHTML = dptcategory.innerHTML;

        // copy inside nav to nav

        
        var mainnav = document.querySelector('.header-nav nav');
        var navplace = document.querySelector('.off-canvas nav');

        navplace.innerHTML = mainnav.innerHTML;

        // copy header top wrapper to thetop nav

        var topnav = document.querySelector('.header-top .wrapper');
        var topplace = document.querySelector('.off-canvas .thetop-nav');

        topplace.innerHTML = topnav.innerHTML;

    };

    copymenu();

    // show mobile menu

    const menubutton = document.querySelector('.trigger');
    const closebutton = document.querySelector('.t-close');
    const addclass = document.querySelector('.site');

    menubutton.addEventListener('click', function(){
        addclass.classList.toggle('showmenu');
    });

    
    closebutton.addEventListener('click', function(){
        addclass.classList.remove('showmenu');
    });


    // show sub menu on mobile

    const submenu = document.querySelectorAll('.has-child .icon-small');

    submenu.forEach( (menu) => menu.addEventListener('click', toggle));
        
    function toggle(e){
        e.preventDefault();
        submenu.forEach( (item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
        if(this.closest('.has-child').classList != 'expand');
        this.closest('.has-child').classList.toggle('expand');
    }


    // swiper all slider


    const swiper = new Swiper('.swiper', {
        loop: true,
      
        pagination: {
          el: '.swiper-pagination',
        },
      
      });



    //   search button for mobile 


    // const searchbutton = document.querySelector('.t-search');
    // tclose = document.querySelector('.search-close');
    // showclose = document.querySelector('.site');

    // searchbutton.addEventListener('click', function(){
    //     showclose.classList.toggle('showsearch');
    // });

    // tclose.addEventListener('click', function(){
    //     showclose.classList.remove('showsearch');
    // });


    const searchbutton = document.querySelector('.t-search');
    tclose = document.querySelector('.search-close');
    showclose = document.querySelector('.search-button');

    searchbutton.addEventListener('click', function(){
        showclose.classList.toggle('showsearch');
    });

    tclose.addEventListener('click', function(){
        showclose.classList.remove('showsearch');
    });