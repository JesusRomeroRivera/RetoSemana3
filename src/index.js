const $Burger = document.querySelector(".burger-icon");
const $OtherMenu = document.querySelector(".otherNav");

$Burger.addEventListener("click", () => {
    $OtherMenu.classList.toggle("open");
});
