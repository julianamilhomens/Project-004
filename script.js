const form = document.querySelector(".form-contact-us")
const mask = document.querySelector(".form-mask")

function ShowForm() {
 form.style.left = "50%"
 form.style.transform = "translateX(-50%)"
 mask.style.visibility = "visible"
}

function HideForm() {
    form.style.left = "-330px"
    form.style.transform = "translateX(0)"
    mask.style.visibility = "hidden"
}