
const navBar = document.querySelector("#navBarContainer")
const dropDownMenu = document.querySelector(".centerLink");
const dropDownContent = document.querySelector(".destinationSection");
const upArrow = document.querySelector(".fa-caret-up");
const downArrow = document.querySelector(".fa-sort-down")


const sideBarMenu = document.querySelector(".sidebarContainer");
const hamBrgerIcon = document.querySelector(".fa-bars");
const crossIcon = document.querySelector(".fa-xmark");

hamBrgerIcon.addEventListener("click" , ()=> {
    sideBarMenu.classList.toggle("hideClass");
    hamBrgerIcon.style.transfrom = "rotate(90deg)";
    crossIcon.classList.toggle("hideClass");
    hamBrgerIcon.classList.toggle("hideClass");
})

crossIcon.addEventListener("click" , ()=> {
    sideBarMenu.classList.toggle("hideClass");
    crossIcon.classList.toggle("hideClass");
    hamBrgerIcon.classList.toggle("hideClass");
})

dropDownMenu.addEventListener("click" , ()=> {
    dropDownContent.classList.toggle("hideClass");
    downArrow.classList.toggle("hideClass");
    upArrow.classList.toggle("hideClass");
    navBar.classList.toggle("colorBlack");
})