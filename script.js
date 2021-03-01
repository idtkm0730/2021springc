$(function(){
    let images=[
        'images/topimage2.png'
    ];
    
    let randImg=images[Math.floor(Math.random()*images.length)];
    $('.random').attr('src',randImg);
});