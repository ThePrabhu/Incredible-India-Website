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

// ===== HERO VIDEO SLIDER =====

// video sources
const videos = [
    {
    src: "https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/India-360-v2.mp4",
    label: "India360"
  },
    {
    src: "https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/Adventure.mp4",
    label: "Adventure"
  },
  {
    src: "https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/Nature.mp4",
    label: "Nature"
  },
  {
    src: "https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/Wildlife.mp4",
    label: "Wildlife"
  },
  {
    src: "https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/Heritage.mp4",
    label: "Heritage"
  },
  {
    src: "https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/Spiritual.mp4",
    label: "Spiritual"
  },
];

// elements
const videoEl = document.querySelector(".heroVideo");
const nextBtn = document.getElementById("nextVideo");
const prevBtn = document.getElementById("prevVideo");

let currentIndex = 0;
let isAnimating = false;

// initial load
videoEl.src = videos[currentIndex].src;
videoEl.play();

// core function
function changeVideo(direction) {
  if (isAnimating) return;
  isAnimating = true;

  // fade out
//   videoEl.classList.add("fade");

  setTimeout(() => {
    if (direction === "next") {
      currentIndex = (currentIndex + 1) % videos.length;
    } else {
      currentIndex = (currentIndex - 1 + videos.length) % videos.length;
    }

    // change source
    videoEl.src = videos[currentIndex].src;
    videoEl.load();
    videoEl.play();

    // fade in
    // videoEl.classList.remove("fade");
    isAnimating = false;
  }, 350);
}

// events
nextBtn.addEventListener("click", () => changeVideo("next"));
prevBtn.addEventListener("click", () => changeVideo("prev"));


// OPTIONAL: auto slide every 7 seconds
setInterval(() => {
  changeVideo("next");
}, 20000);
