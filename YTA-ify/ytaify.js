var watch_re = /v=([-\w]+)&?/;
function youtube_check(tabID, changeInfo, tab) {
    var result = watch_re.exec(tab.url);
    // quick fix before transitioning to event pages
    if ((tab.url.indexOf("www.youtube.com/") >= 0) && (result != null)) {
        chrome.tabs.update(tab.id, {url:"http://www.ytadventure.com/#" + result[1]});
    }
}
chrome.tabs.onUpdated.addListener(youtube_check);
console.log("Ready to adventure!");