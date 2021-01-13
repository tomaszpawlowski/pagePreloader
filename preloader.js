window.addEventListener('DOMContentLoaded', () => {
    var
        preloader = document.getElementById('pagePreloader'),
        preloaderProgressBar = document.querySelector('div#pagePreloader hr'),
        preloaderProgressBarInfo = document.querySelector('div#pagePreloader h3'),
        allHtmlBodyElementsWithSource = document.querySelectorAll('body *[src]');
    
    if (allHtmlBodyElementsWithSource.length > 0) {
        var loadedHtmlBodyElementsWithSource = 0;
        preloader.style.opacity = 1;
        preloader.style.visibility = "visible";
        preloaderProgressBarInfo.textContent = loadedHtmlBodyElementsWithSource + '/' + allHtmlBodyElementsWithSource.length
        for (i = 0; allHtmlBodyElementsWithSource.length > i; i++) {
            allHtmlBodyElementsWithSource[i].addEventListener('load', (event) => {
                loadedHtmlBodyElementsWithSource++;
                preloaderProgressBar.style.width = Math.round(100 / allHtmlBodyElementsWithSource.length * loadedHtmlBodyElementsWithSource) + "%";
                preloaderProgressBarInfo.textContent = loadedHtmlBodyElementsWithSource + '/' + allHtmlBodyElementsWithSource.length;
            })
        }
    }
})
window.addEventListener('load', (event) => {
    document.getElementById("pagePreloader").style.opacity = 0;
    document.getElementById("pagePreloader").style.visibility = "hidden";
    // console.log("[PRELOADER] page fully loaded");
})