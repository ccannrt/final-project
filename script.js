document.querySelector("#high-fidelity").addEventListener("click", function(){
    console.log("The button is working");
    
    // document.querySelectorAll(".home-link").style.display = "flex";
    // console.log(document.querySelector(".home-link").style.display);
    // document.querySelectorAll(".home-link-raw").style.display = "none";
    // console.log(document.querySelector(".home-link-raw"));

    // location.reload();

    var homeLinks = document.querySelectorAll(".home-link");
    homeLinks.forEach(function(homeLink) {
        homeLink.style.display = "flex";
    });
    var homeLinkRaws = document.querySelectorAll(".home-link-raw");
    homeLinkRaws.forEach(function(homeLinkRaw) {
        homeLinkRaw.style.display = "none";
    });

    var linkedIns = document.querySelectorAll(".linkedin");
    linkedIns.forEach(function(linkedIn) {
        linkedIn.style.display = "grid";
    });
    var linkedInRaws = document.querySelectorAll(".linkedin-raw");
    linkedInRaws.forEach(function(linkedInRaw) {
        linkedInRaw.style.display = "none";
    });

    document.getElementById("project-1-img").style.display = "inline";
    document.getElementById("project-2-img").style.display = "inline";
    
    var prjImgRaws = document.querySelectorAll(".project-img-raw");
    prjImgRaws.forEach(function(prjImgRaw) {
        prjImgRaw.style.display = "none";
    });

    var currents = document.querySelectorAll(".current");
    currents.forEach(function(current) {
        current.style.cssText = "background-color: #434052; color: #FCFFFE; border-radius: 15px; color: #FCFFFE;";
    });
    var other_pages = document.querySelectorAll(".other-page");
    other_pages.forEach(function(other_page) {
        other_page.style.cssText = "color: #FCFFFE; border-radius: 15px; background-color: #5F5B73; color: #FCFFFE;";
    });

    document.querySelector("body").style.cssText = "font-family: 'Roboto', sans-serif; color: #343336; background-color: #FFFFFF;";
    document.querySelector(".header-top").style.cssText = "display: grid; grid-row-gap: 20px; grid-template-columns: auto auto; background-color: #080037; padding: 30px;";
    document.querySelector("nav").style.cssText = "background-color: #342F4D;";
    // document.querySelector(".current").style.cssText = "background-color: #434052; color: #FCFFFE; border-radius: 15px; color: #FCFFFE;";
    document.querySelector(".other-page").style.cssText = "color: #FCFFFE; border-radius: 15px; background-color: #5F5B73; color: #FCFFFE;";
    document.querySelector("#large-header").style.cssText = "background-color: #080037;";
    document.querySelector("#high-fidelity").style.display = "none";
    document.querySelector(".site-description").style.display = "inline";

    console.log(document.querySelector(".other-page").style.backgroundcolor);

    var titles = document.querySelectorAll(".title");
    titles.forEach(function(title) {
        title.style.cssText = "align-self: center; margin: 0 10px 0 10px; font-size: 18pt; font-weight: bold; color: #FCFFFE;";
    });
    
})