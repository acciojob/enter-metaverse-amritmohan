//your JS code here. If required.

document.addEventListener("DOMContentLoaded", function () {
    let enterButton = document.getElementById("enterBtn");
    let statusParagraph = document.getElementById("status");

    enterButton.addEventListener("click", function () {
        statusParagraph.innerHTML = "<h1>Entered Metaverse</h1>";
    });
});
