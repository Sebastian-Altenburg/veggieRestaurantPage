
function showLocationContent () {

    let menuCon = document.querySelector(".menuCon");
    menuCon.classList.remove("show");
    menuCon.classList.add("hide");
    let contactCon = document.querySelector(".contactCon");
    contactCon.classList.remove("show");
    contactCon.classList.add("hide");
    let aboutCon = document.querySelector(".aboutCon");
    aboutCon.classList.remove("show");
    aboutCon.classList.add("hide");

    let startDiv = document.querySelector(".startDiv");
    startDiv.classList.add("hide");
    startDiv.classList.remove("show");
    
    




    let locationCon = document.querySelector(".locationCon");
    locationCon.classList.remove("hide");
    locationCon.classList.add("show");
    
}

export {showLocationContent};