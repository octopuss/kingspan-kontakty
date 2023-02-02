function preloadRegionImage(region) {
    const link = document.querySelector(`#preload-${region.id}`)
       if(!link) {
        const l = document.createElement("link");
        l.rel = "preload";
        l.href =  `./${region.id}.svg`;
        l.as = "image";
        l.id =  `preload-${region.id}`;
        document.head.appendChild(l)
       } 
}

function bindRegionEvents() {
    const regions = document.querySelectorAll(".noFill");
   regions.forEach(region => {
    region.addEventListener('click', (e) => {
        preloadRegionImage(region);
       window.location.href = `./${region.id}.html`
   });
   region.addEventListener('mouseover', (e) => {
        preloadRegionImage(region);
   })
})
}
// -- everything starts here
document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Ready");
    bindRegionEvents()
});
