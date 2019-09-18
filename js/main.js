// show/hide dropdown with social links when hamburger icon is clicked in mobile view
function showSocialLinks() {
    var x = document.getElementById("socialLinks");
    if ((x.style.display === "flex")){
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}
