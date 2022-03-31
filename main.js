let distractingSites = ["https://www.youtube.com/"]

chrome.storage.local.set({'distractingSites': distractingSites}, function() {
    console.log('DS set')
});

// chrome.runtime.onInstalled.addListener(() => {
//     chrome.storage.local.set({'distractingSites': distractingSites}, function() {
//         console.log('DS set')
//     });
// });


// // global array of distracting sites
// let distractingSites = ['https://www.youtube.com', 'https://playsnake.org/', 'https://www.reddit.com/', 'https://www.etsy.com', 'https://www.netflix.com', 'https://twitter.com/', 'https://www.tumblr.com/'];

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     // 2. A page requested user data, respond with a copy of `user`
//     if (message === 'get-distracting-sites') {
//       sendResponse(distractingSites);
//     }
//   });
// // chrome.runtime.onInstalled.addListener(chrome.tabs.create({
// //     url: 'https://www.reddit.com/'
// // }))

// function redirect() {
//     let randomNum = Math.floor(Math.random() * distractingSites.length);
//     let site = distractingSites[randomNum];
//     chrome.tabs.create({url: site});
// }
// redirect();
// redirect();

// setTimeout(redirect, 500);
// console.log("Invoked once");
// create function which redirects page to item in list of distracting sites
//     should randomly select site from list 
//     invoke window.location.replace passing in url
// settimeout for whatever amount of time 


// function timeout() {
//     setTimeout(function () {
//         redirect();
//         timeout();
//     }, 5000);
// }


// chrome.windows.onCreated.addListener(
//     timeout()
// )
// chrome.addEventListener("click", redirect())
// chrome.action.onClicked.addListener(
//     redirect()
// )
// chrome.action.onClicked.addListener(
//     chrome.action.setBadgeText({text: 'ON'}));


