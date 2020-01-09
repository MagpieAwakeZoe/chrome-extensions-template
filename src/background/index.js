// OnInstall handler
// chrome.runtime.onInstalled.addListener(details => {
//   console.log(details)
// })

// alert(chrome.runtime.onMessage);
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message === 'Hello') {
      sendResponse('Hello from background');
    }
});
