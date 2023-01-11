if (window.matchMedia("(min-width: 480px)").matches) {
    let hero = document.getElementById("hero");
    // let screenWidth = window.screen.availWidth;
    // let screenHeight = window.screen.availHeight;
    document.addEventListener("mousemove", (ev) => {
        if (window.innerWidth > 600) {
            let xAxis = 85 + ev.clientX / 105;
            let yAxis = 20 + ev.clientY / 105;
            hero.style.backgroundPositionX = xAxis + "%";
            hero.style.backgroundPositionY = yAxis + "%";
        }
    });
}
