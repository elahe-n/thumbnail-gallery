// Get the url from one image, set it as the url for the big image
// Also get the description and set it so screen readers can see it

let bigImg = document.querySelector(`.bigimg`)

let imgOne = document.querySelector(`#one`)
let imgTwo = document.querySelector(`#two`)
let imgThree = document.querySelector(`#three`)


// When this function runs, change the image url
let setThumbOne = function() {

  // get the `src` attribute for one of the thumbnails (they have an id)
  let theNewSrcUrl = imgOne.getAttribute(`src`) // img/one.jpg

  //set the `src` attribute for the "bigImg" element
  bigImg.setAttribute(`src`, theNewSrcUrl)
}

// When this function runs, change the image url
let setThumbTwo = function() {

  // get the `src` attribute for one of the thumbnails (they have an id)
  let theNewSrcUrl = imgTwo.getAttribute(`src`) // img/two.jpg

  //set the `src` attribute for the "bigImg" element
  bigImg.setAttribute(`src`, theNewSrcUrl)
}

// When this function runs, change the image url
let setThumbThree = function() {

  // get the `src` attribute for one of the thumbnails (they have an id)
  let theNewSrcUrl = imgThree.getAttribute(`src`) // img/three.jpg

  //set the `src` attribute for the "bigImg" element
  bigImg.setAttribute(`src`, theNewSrcUrl)
}

// Event Listener (addEventListener)
// Where?  imgTwo
// What?   `click`
// How?    setThumbTwo

imgOne.addEventListener(`click`, setThumbOne)
imgTwo.addEventListener(`click`, setThumbTwo)
imgThree.addEventListener(`click`, setThumbThree)

