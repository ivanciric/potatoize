/**
 * Created by shield on 4/6/17.
 */

function bgndNameToURL(bgndName) {
    switch (bgndName) {
        case "Potatoes":
            return "https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg";
    }
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("bgnd")) {
    var chosenBgnd = e.target.textContent;
    var chosenBgndURL = bgndNameToURL(chosenBgnd);

    browser.tabs.executeScript(null, {
        file: "/content_scripts/cback.js"
    });

    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {
        browser.tabs.sendMessage(tabs[0].id, {bgndURL: chosenBgndURL});
});
}
else if (e.target.classList.contains("clear")) {
    browser.tabs.reload();
    window.close();
}
});