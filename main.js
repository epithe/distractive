let distractingSites = ["https://www.youtube.com/", "https://playsnake.org/"];

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({'distractingSites': distractingSites}, function() {
        console.log('DS set')
    });
})

console.log('in main.js')



let productiveSites = ["stackoverflow.com", "github.com","docs.google.com","calendar.google.com"];

let mainDistractingSites = [];

chrome.webNavigation.onDOMContentLoaded.addListener(() => {
    console.log("At a productive site");
    chrome.storage.local.get("distractingSites", function(result) {
        console.log("Main storage request:", result.distractingSites);
        mainDistractingSites = result.distractingSites;})
    console.log("Just fetched", mainDistractingSites)
    
    setTimeout(mainRedirect, 5000);
}, {url: [{hostSuffix: "github.com"}]})


// call redirect
function mainRedirect() {
    console.log('siteList in redirect', mainDistractingSites);

    let randomNum = Math.floor(Math.random() * mainDistractingSites.length);
    let site = mainDistractingSites[randomNum];
    chrome.tabs.update({url: site});
}
