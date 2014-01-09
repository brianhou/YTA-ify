chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url.indexOf("www.youtube.com/") >= 0) {
        chrome.pageAction.show(tabId); // only show pageAction on YouTube
    }
});

chrome.pageAction.onClicked.addListener(function(tab) {
    // Fires when the icon is clicked.
    var watch_re = /v=([-\w]+)&?/, result = watch_re.exec(tab.url);
    if (result != null) {
        chrome.tabs.update(tab.id,
                           {url: "http://www.ytadventure.com/#" + result[1]});
    }
});

console.log("Ready to adventure!");
