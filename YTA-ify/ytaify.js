// YouTube to YTAdventure
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url.indexOf("www.youtube.com/") >= 0) {
        chrome.pageAction.show(tabId);
    }
});

chrome.pageAction.onClicked.addListener(function(tab) {
    if (tab.url.indexOf("www.youtube.com/") >= 0) {
        var video_id = /v=([-\w]+)&?/.exec(tab.url);
        if (video_id != null) {
            var new_url = "http://ytadventure.com/#" + video_id[1];
            chrome.tabs.update(tab.id, {url: new_url});
        }
    }
});

// YTAdventure to YouTube -- this probably won't be needed.
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url.indexOf("ytadventure.com/") >= 0) {
        chrome.pageAction.show(tabId);
    }
});

chrome.pageAction.onClicked.addListener(function(tab) {
    if (tab.url.indexOf("ytadventure.com/") >= 0) {
        var video_id = /ytadventure.com\/#([-\w]+)/.exec(tab.url);
        if (video_id != null) {
            var new_url = "http://youtube.com/watch?v=" + video_id[1];
            chrome.tabs.update(tab.id, {url: new_url});
        }
    }
});

console.log("Ready to adventure!");
