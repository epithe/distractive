//let distractingSites = ['https://www.youtube.com', 'https://playsnake.org/', 'https://www.reddit.com/', 'https://www.etsy.com', 'https://www.netflix.com', 'https://twitter.com/', 'https://www.tumblr.com/'];

let optionsDistractingSites = [];
function fetchStored() {
    chrome.storage.local.get("distractingSites", function(result) {
        console.log("Options storage request:", result.distractingSites);
        optionsDistractingSites = result.distractingSites;
    })
    setTimeout(optionsLoop, 500);
}

function optionsLoop() {
    let siteList = document.getElementById("site-list")
    for (let i = 0; i < optionsDistractingSites.length; i++) {
        let site = document.createElement('li');
        site.innerText = optionsDistractingSites[i];
        siteList.appendChild(site);
    }

    const form = document.getElementById('formID');
    form.addEventListener('submit', updateSite);

    function updateSite(e) {
        let siteName = document.getElementById('inputBox').value;
        updateSiteName(siteName);
        e.preventDefault();
        e.stopPropagation();
    }

    function updateSiteName(siteName) {
        optionsDistractingSites.push(siteName)
        console.log(siteName);
        let site = document.createElement('li');
        site.innerText = siteName;
        siteList.appendChild(site);
        chrome.storage.local.set({'distractingSites': optionsDistractingSites}, function() {
            console.log('DS set')
        });
    }
    }

    console.log(optionsDistractingSites)

    

fetchStored();

// const input = document.querySelector('input');
// const log = document.getElementById('values');

// input.addEventListener('input', updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;
// }

// --
// const form  = document.getElementById('signup');

// form.addEventListener('submit', (event) => {
//     // handle the form data
// });