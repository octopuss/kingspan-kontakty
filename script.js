function bindRegionEvents() {
    const regions = document.querySelectorAll(".noFill");
   regions.forEach(region => {
    region.addEventListener('click', (e) => {
       console.log(region.id)
       window.location.href = `./${region.id}.html`
   });
})
}
// -- everything starts here
document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Ready");
    bindRegionEvents()
});
