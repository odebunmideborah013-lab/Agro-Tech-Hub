Select the Discover More button
const discoverBtn =
    document.getElementById("discoverBtn");

// Add an action when the button is clicked
discoverBtn.addEventListener("click",
    function () {
        document.getElementById("about.html").scrollIntoView({
            behavior: "smooth"
        });
    });
    