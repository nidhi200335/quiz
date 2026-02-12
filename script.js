document.addEventListener("DOMContentLoaded", function () {

    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.querySelector(".yes");
    const wrapper = document.querySelector(".buttons");

    if (!noBtn || !yesBtn || !wrapper) return;

    let scale = 1;

    // Move No inside wrapper only
    noBtn.addEventListener("mouseenter", function () {

        const maxX = wrapper.clientWidth - noBtn.offsetWidth;
        const maxY = wrapper.clientHeight - noBtn.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.position = "absolute";
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";

        // Slight grow on hover
        scale += 0.1;
        yesBtn.style.transform = `scale(${scale})`;
    });

    // When No is clicked
    noBtn.addEventListener("click", function () {

        // Grow Yes MUCH bigger
        scale += 0.8;
        yesBtn.style.transform = `scale(${scale})`;

        // Redirect after small delay
        setTimeout(() => {
            window.location.href = "no.html";
        }, 600);
    });

});