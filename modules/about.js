
function showAboutContent () {

    let menuCon = document.querySelector(".menuCon");
    menuCon.classList.remove("show");
    menuCon.classList.add("hide");
    let locationCon = document.querySelector(".locationCon");
    locationCon.classList.remove("show");
    locationCon.classList.add("hide");
    let contactCon = document.querySelector(".contactCon");
    contactCon.classList.remove("show");
    contactCon.classList.add("hide");
    
    let startDiv = document.querySelector(".startDiv");
    startDiv.classList.add("hide");
    startDiv.classList.remove("show");
    
    
    
    let aboutCon = document.querySelector(".aboutCon");
    aboutCon.classList.remove("hide");
    aboutCon.classList.add("show");
    
}

export {showAboutContent};