let inputEl = document.querySelector ( "#surname");
let Info=document.querySelector(".Info");

inputEl.addEventListener("focus", function () {
        Info.style.display = "block";
});

inputEl.addEventListener("blur", function () {
        
    Info.style.display = "none";
    });




