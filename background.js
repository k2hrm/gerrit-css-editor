function rewriteAction() {
    chrome.tabs.executeScript(null, { file: "jquery.js"},
        function(){
            chrome.tabs.executeScript(null, { file: "cssSettings.js" });
    });
}
chrome.browserAction.onClicked.addListener(rewriteAction);
rewriteAction();
