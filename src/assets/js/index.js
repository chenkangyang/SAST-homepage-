function changeBackground(){
    var imgUrl = "http://www.ruanyifeng.com/images_pub/pub_"+ Math.round(300*Math.random()) +".jpg"
    var bak = document.getElementById("bak");
    bak.style.backgroundImage = "url("+ imgUrl +")";
};

document.addEventListener('DOMContentLoaded',function(){
    changeBackground()},
false);