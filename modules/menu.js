
function showMenuContent () {

    let contactCon = document.querySelector(".contactCon");
    contactCon.classList.remove("show");
    contactCon.classList.add("hide");
    let locationCon = document.querySelector(".locationCon");
    locationCon.classList.remove("show");
    locationCon.classList.add("hide");
    let aboutCon = document.querySelector(".aboutCon");
    aboutCon.classList.remove("show");
    aboutCon.classList.add("hide");
    
    let startCon = document.querySelector(".startCon");
    startCon.classList.remove("show");
    startCon.classList.add("hide");



    let menuCon = document.querySelector(".menuCon");
    menuCon.classList.remove("hide");
    menuCon.classList.add("show");
    
}

export {showMenuContent};