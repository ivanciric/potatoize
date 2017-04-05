/**
 * Created by shield on 4/5/17.
 */

function cback(request, sender, sendResponse) {

    document.body.style.backgroundImage = 'url('+request.bgndURL+')';
    alert('background changed!');
    browser.runtime.onMessage.removeListener(cback);
}

browser.runtime.onMessage.addListener(cback);