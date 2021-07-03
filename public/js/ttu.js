window.addEventListener("scroll", function(){
    const logo = document.querySelector(".logo");

    logo.classList.toggle("logo-shrinked", window.scrollY > 0);
});