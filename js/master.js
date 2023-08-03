
/* Start Toggle icons */
document.querySelector(".fa-cog").onclick = () => {
    // toogle calss fa splin for rotation on selfr
    document.querySelector(".fa-cog").classList.toggle("fa-spin")
    // Add class open to main settings
    document.querySelector(".settings-box").classList.toggle("open")
}
//  Switch betwen color
const colorsLi = document.querySelectorAll(".our-colores li")

// Loop to all li Items
colorsLi.forEach(li => {
    // Clicked On All List Items
    li.addEventListener("click", (e) => {
        /* dataset = data atrebute */
        console.log(e.target.dataset.color)
        // Set  main Color
        /*document.documentElement => to insert of all elemnts in documents */
        document.documentElement.style.setProperty('$min-color', e.target.dataset.color)
        // let docStyle = getComputedStyle(document.documentElement);
        // // console.log(docStyle)
        // docStyle.setProperty('min-color', '#fff');
        // console.log(myVarVal)

    })
})
// const style = require('sass./_variables.scss');
const handleColorInput = e => document.documentElement.style.setProperty("--selectedColor", e.target.value)
console.log(document.documentElement.style.getPropertyValue(`/css/sass/helpers/_variabulse.scss/"`))
/* End Toggle icons */


// Start Event Click to magamnue
document.querySelector(".otherLinks").onclick = () => {
    document.querySelector(".mega-menu").classList.toggle("active")
    document.querySelector(".mega-menu").style = [` 
        top : calc(100% + 5px)
    `]

}
// End Event Click to magamnue





























/* bad code  */
// let otherLinks = document.querySelector(".otherLinks")
// let styleMega = document.querySelector(".mega-menu")
// styleMega.style = [`display:none`]
// otherLinks.onclick = () => {
//     otherLinks.classList.add("active")
//     if (otherLinks.classList.contains("active") === true) {
//         styleMega.style = [`display:flex; top:110%`]
//     }
//     otherLinks.onclick = () => {
//         if (otherLinks.classList.contains("active") === true) {
//             otherLinks.classList.remove("active")
//             styleMega.style = [`display:none`]
//         } else {
//             otherLinks.classList.add("active")
//             styleMega.style = [`display:flex; top:110%`]
//         }
//     }
// }