
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


    let headLine = document.createElement("h1");
    headLine.innerHTML = "Get your freshest Veggies right here!";
    navBar.appendChild(headLine);



    /// Content divs for tabs

    let startCon = document.createElement("div");
    startCon.classList.add("startCon", "show");

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
    pageContent.appendChild(startCon);
}



export {initialLoad};



