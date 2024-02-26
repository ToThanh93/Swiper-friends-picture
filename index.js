var swiper = new Swiper('.swiper-container',{
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    slidesPerView: 'auto',
    coverflow:{
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideSadhows: true,
    },
    loop: true,
})