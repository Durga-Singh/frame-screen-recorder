// anonymous function to avoid polluting the global namespace

chrome.acton.onClicked.addListener(() => {
    chrome.tabs.create({
        url: chrome.runtime.getURL('recorder.html')
    })
})

