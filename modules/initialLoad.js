
function initialLoad() {
// Selectors
    let pageContent = document.querySelector("#content");
//
    let navBar = document.createElement("nav");
    pageContent.appendChild(navBar);

    let pageImage = document.createElement("img");
    let imageButton = document.createElement("button");
    imageButton.classList.add("imageButton");
    let imageButtonDiv = document.createElement("div");
    imageButtonDiv.classList.add("imageButtonDiv");

    pageImage.src = "/images/Vegetarian.svg.png"
    imageButtonDiv.appendChild(imageButton);
    navBar.appendChild(imageButtonDiv);
    navBar.appendChild(pageImage);


    ///Menü
   
    let menuDiv = document.createElement("div");
    menuDiv.setAttribute("class", "menuDiv");
    navBar.appendChild(menuDiv);

    let menuTab = document.createElement("div");
    menuTab.setAttribute("class", "menuTab");
    let menuButton = document.createElement("button");
    menuButton.setAttribute("class", "menuButton");
    menuButton.innerHTML = "Menu";
    menuTab.appendChild(menuButton);
    menuDiv.appendChild(menuTab);

    let locationTab = document.createElement("div");
    locationTab.setAttribute("class", "locationTab");
    let locationButton = document.createElement("button");
    locationButton.setAttribute("class", "locationButton");
    locationButton.innerHTML = "Location";
    locationTab.appendChild(locationButton);
    menuDiv.appendChild(locationTab);

    let aboutTab = document.createElement("div");
    aboutTab.setAttribute("class", "aboutTab");
    let aboutButton = document.createElement("button");
    aboutButton.setAttribute("class", "aboutButton");
    aboutButton.innerHTML = "About us";
    aboutTab.appendChild(aboutButton);
    menuDiv.appendChild(aboutTab);
    
    let contactTab = document.createElement("div");
    contactTab.setAttribute("class", "contactTab");
    let contactButton = document.createElement("button");
    contactButton.setAttribute("class", "contactButton");
    contactButton.innerHTML = "Contact";
    contactTab.appendChild(contactButton);
    menuDiv.appendChild(contactTab);


    let headLine = document.createElement("div");
    headLine.classList.add("headLine");

    let headH1 = document.createElement("h1");
    headH1.innerHTML = "VegFactory";
    let headP = document.createElement("p");
    headP.innerHTML = "Get your freshest Veggies!"
    
    headLine.appendChild(headP);
    headLine.appendChild(headH1);
    navBar.appendChild(headLine);



    /// Content divs for tabs


    let startImage = document.createElement("img");
    startImage.setAttribute("src", "/images/veggie-img.jpg");
    startImage.classList.add("startImg");

    let startDiv = document.createElement("div");
    startDiv.classList.add("show", "startDiv");

    let startDivText = document.createElement("p");
    startDivText.innerHTML = 
    "Over 100 fresh dishes... <br> <span>Ingredients directly from the local area...</span> <br><span>And of course, all vegetarian!</span>";
    startDiv.appendChild(startDivText);

    


    let menuCon = document.createElement("div");
    menuCon.classList.add("menuCon", "hide");
    

    let locationCon = document.createElement("div");
    locationCon.classList.add("locationCon", "hide");
    
    
    let aboutCon = document.createElement("div");
    aboutCon.classList.add("aboutCon", "hide");
    
    
    let contactCon = document.createElement("div");
    contactCon.classList.add("contactCon", "hide");


    pageContent.appendChild(menuCon);
    pageContent.appendChild(locationCon);
    pageContent.appendChild(aboutCon);
    pageContent.appendChild(contactCon);
    pageContent.appendChild(startImage);
    pageContent.appendChild(startDiv);
}



export {initialLoad};



