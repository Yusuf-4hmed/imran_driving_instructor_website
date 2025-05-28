// MOBILE NAV BAR

const navMenuButton = document.getElementById("nav-menu-button");
const mobileNav = document.getElementById("mobile-nav")

navMenuButton.addEventListener("click", () => {
    if (mobileNav.style.display === "none" || mobileNav.style.display === "") {
        mobileNav.style.display = "block"
    } else {
        mobileNav.style.display = "none"
    }
})

// STUDENT PASS GALLERY

const rightButton = document.getElementById("right-button");
const leftButton = document.getElementById("left-button")
const studentPassContainers = document.querySelectorAll(".student-pass-container")

let studentTranslateData = 0;

rightButton.addEventListener("click", () => {
    if (studentTranslateData >= -900 ) {
        studentTranslateData -= 300;
    console.log(studentTranslateData)
    studentPassContainers.forEach(
        container => {
            container.style.transform = `translateX(${studentTranslateData}px)`
        }
    )
    }
    
})
leftButton.addEventListener("click", () => {
    if (studentTranslateData >= -1200 && studentTranslateData !== 0) {
        studentTranslateData += 300;
    console.log(studentTranslateData)
    studentPassContainers.forEach(
        container => {
            container.style.transform = `translateX(${studentTranslateData}px)`
        }
    )
    }
})