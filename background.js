chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        return { redirectUrl: "https://smile.amazon.com/" + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1] };
    },
    {
        urls: [
            "*://amazon.com/*",
            "*://www.amazon.com/*",
            "*://amazon.co.uk/*",
            "*://www.amazon.co.uk/*",
            "*://amazon.ca/*",
            "*://www.amazon.ca/*"
            ],
        types: [
            "main_frame",
            "sub_frame",
            "stylesheet",
            "script",
            "image",
            "object",
            "xmlhttprequest",
            "other"
            ]
    },
    ["blocking"]
);