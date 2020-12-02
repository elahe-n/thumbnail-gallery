// Select document elements
let imgLg = document.querySelector(`#imgLg`)
let thumb1 = document.querySelector(`#thumb1`)
let thumb2 = document.querySelector(`#thumb2`)
let thumb3 = document.querySelector(`#thumb3`)

// Find the thumb2 image
// Click thumb2
// Copy src value from thumb2
// Find imgLg
// Set it's src value to that of thumb2








/* 
let setThumb1 = function() {
  let theSrc = thumb1.getAttribute(`src`)
  imgLg.setAttribute(`src`, theSrc)
}
let setThumb2 = function() {
  let theSrc = thumb2.getAttribute(`src`)
  imgLg.setAttribute(`src`, theSrc)
}
let setThumb3 = function() {
  let theSrc = thumb3.getAttribute(`src`)
  imgLg.setAttribute(`src`, theSrc)
} */

// setThumb1()
// setThumb2()
// setThumb3()

// thumb1.addEventListener(`click`, setThumb1)
// thumb2.addEventListener(`click`, setThumb2)
// thumb3.addEventListener(`click`, setThumb3)




let setThumb = function(thumb) {
  let theSrc = thumb.getAttribute(`src`)
  imgLg.setAttribute(`src`, theSrc)
}

thumb1.addEventListener(`click`, function() { setThumb(thumb1) })
thumb2.addEventListener(`click`, function() { setThumb(thumb2) })
thumb3.addEventListener(`click`, function() { setThumb(thumb3) })







