function display(tab) {
    let tabLinks = document.getElementsByClassName("tab-links");
    let tabContents = document.getElementsByClassName("tab-content");
    let tabLink;
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    let tabContent;
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tab).classList.add("active-tab");
}

function displayMenu() {
    let nav = document.getElementById("menu-list");
    let icon = document.getElementById("icon");

    if (nav.style.display === "flex") {
        icon.classList.remove("fa-x");
        icon.classList.add("fa-list");
        nav.style.display = null;
    } else {
        icon.classList.remove("fa-list");
        icon.classList.add("fa-x");
        nav.style.display = "flex";
    }
}