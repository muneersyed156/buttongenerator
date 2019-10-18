var genbut = document.getElementById("genbut")
var label = document.getElementById("label")
var fontsize = document.getElementById("fontsize")
var fontcolor = document.getElementById("color")
var topp = document.getElementById("topp")
var rightp = document.getElementById("rightp")
var bottomp = document.getElementById("bottomp")
var leftp = document.getElementById("leftp")
var bgcolor = document.getElementById("bgcolor")
var bcolor = document.getElementById("bcolor")
var bwidth = document.getElementById("bwidth")
var brad = document.getElementById("brad")
var gencode = document.getElementById("gencode")
var generation = document.getElementById("generation")
var l, fs, fc, pt, pr, pb, pl, bg, brc, br, bw;

label.addEventListener("input", function (e) {
    genbut.innerHTML = e.target.value
})

fontsize.addEventListener("input", function (e) {
    if (e.target.value >= 16) {
        genbut.style.fontSize = e.target.value
        genbut.style.padding = 0
    }
    else {
        genbut.style.fontSize = e.target.value
    }
})

fontcolor.addEventListener("input", function (e) {
    genbut.style.color = e.target.value
})
topp.addEventListener("input", function (e) {
    console.log(e.target.value)
    genbut.style.paddingTop = e.target.value
    pt = e.target.value
})
rightp.addEventListener("input", function (e) {
    genbut.style.paddingRight = e.target.value
})
leftp.addEventListener("input", function (e) {
    genbut.style.paddingLeft = e.target.value
})
bottomp.addEventListener("input", function (e) {
    genbut.style.paddingBottom = e.target.value
})
bgcolor.addEventListener("input", function (e) {
    genbut.style.backgroundColor = e.target.value
})
bcolor.addEventListener("input", function (e) {
    genbut.style.borderColor = e.target.value
})
bwidth.addEventListener("input", function (e) {
    genbut.style.borderWidth = e.target.value
})
brad.addEventListener("input", function (e) {
    genbut.style.borderRadius = e.target.value + "px"
})

var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
    l = genbut.innerHTML
    fs = fontsize.value
    fc = color.value
    pt = topp.value
    pr = rightp.value
    pb = bottomp.value
    pl = leftp.value
    bg = bgcolor.value
    br = brad.value
    bw = bwidth.value
    brc = bcolor.value
    var fullcode = document.getElementById("fullcode")
    fullcode.style.background = "grey"
    fullcode.style.borderRadius = "4px"
    fullcode.innerText = `<button style="font-size:${fs}px;padding:${pt}px ${pr}px ${pb}px ${pl};color:${fc};background-color:${bg};border-color:${brc};border-radius:${br}"> ${l} </button>`

}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

gencode.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick)

console.log("Hello")
