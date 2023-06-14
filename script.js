/* Open and close menu*/
const menuBtnOpen = document.querySelector('.menu-icon');
const sideNav = document.querySelector('.left-side');
const closeBtn = document.querySelector('.icon-close-nav')
//Open 
menuBtnOpen.addEventListener('click', function(){
    sideNav.classList.remove('left-side--close'); 
    sideNav.classList.add('left-side--open'); 
})

//Close 
closeBtn.addEventListener('click', function(){
    sideNav.classList.remove('left-side--open'); 
    sideNav.classList.add('left-side--close'); 
})


/*Open And Close Trending*/
const treindingBtn = document.querySelector('.trending-toggle');
const treindingContent = document.querySelector('.trinding');

treindingBtn.addEventListener('click', function(){
   if(!treindingContent.classList.contains('trinding-hide')){
        treindingBtn.classList.add('rotate--close');
        treindingBtn.classList.remove('rotate--open');
        treindingContent.classList.add('trinding-hide');
        treindingContent.classList.remove('trinding-show');

   }else{
        treindingBtn.classList.add('rotate--open');
        treindingBtn.classList.remove('rotate--close');
        treindingContent.classList.add('trinding-show');
        treindingContent.classList.remove('trinding-hide');

    }
})

/*Open And Close Friends*/
const friendsBtn = document.querySelector('.friends-toggle');
const friendsContent = document.querySelector('.friends');

friendsBtn.addEventListener('click', function(){
   if(!friendsContent.classList.contains('trinding-hide')){
        friendsBtn.classList.add('rotate--close');
        friendsBtn.classList.remove('rotate--open');
        friendsContent.classList.add('trinding-hide');
        friendsContent.classList.remove('trinding-show');

   }else{
        friendsBtn.classList.add('rotate--open');
        friendsBtn.classList.remove('rotate--close');
        friendsContent.classList.add('trinding-show');
        friendsContent.classList.remove('trinding-hide');

    }
})
