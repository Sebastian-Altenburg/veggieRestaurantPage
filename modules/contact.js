
function showContactContent () {

    let menuCon = document.querySelector(".menuCon");
    menuCon.classList.remove("show");
    menuCon.classList.add("hide");
    let locationCon = document.querySelector(".locationCon");
    locationCon.classList.remove("show");
    locationCon.classList.add("hide");
    let aboutCon = document.querySelector(".aboutCon");
    aboutCon.classList.remove("show");
    aboutCon.classList.add("hide");

    let startDiv = document.querySelector(".startDiv");
    startDiv.classList.add("hide");
    startDiv.classList.remove("show");
    




    let contactCon = document.querySelector(".contactCon");
    contactCon.classList.remove("hide");
    contactCon.classList.add("show");
    
}

export {showContactContent};