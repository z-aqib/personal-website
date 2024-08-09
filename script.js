// about section: skills, experience, education
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

/**
 * about section: opens the tab we require. by passing the tab we want to open, it first removes all active-links from all the tabs, and then makes the required tab the active one.
 * 
 * @param {String} tabname - the tab (skills, experience, education) that we want to open
 */
function opentab(tabname) {
    // traverse all underlines and make them inactive
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    // traverse all the tab contents and make them inactive
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    // get the current tab and make its underline active
    event.currentTarget.classList.add("active-link");
    // get the given tab and make its contents active to be displayed
    document.getElementById(tabname).classList.add("active-tab");
}