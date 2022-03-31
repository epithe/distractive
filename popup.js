let popupDistractingSites = [];

chrome.storage.local.get("distractingSites", function(result) {
    console.log("Popup storage request:", result.distractingSites);
    popupDistractingSites = result.distractingSites;
})

function redirect() {
    let randomNum = Math.floor(Math.random() * popupDistractingSites.length);
    let site = popupDistractingSites[randomNum];
    chrome.tabs.create({url: site});
}

function slowerButton() {
    let distractButton = document.getElementById("distract_button")
    distractButton.addEventListener("click", redirect());
}

setTimeout(slowerButton, 600);