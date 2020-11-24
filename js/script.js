/*
Get the url from the image I clicked, and set that as the url for the big image
*/

// Select the big image, store it's reference
let theBigImg = document.querySelector(`.bigimg`)
let imgOne = document.querySelector(`.one`)
let imgTwo = document.querySelector(`.two`)
let imgThree = document.querySelector(`.three`)


let setThumbOneToImg = function() {
  // Store the url from the image that was clicked
  let newSrcUrl = imgOne.getAttribute(`src`)
  let newAltTxt = imgOne.getAttribute(`alt`)

  // Set the url from the thumb to the big image
  theBigImg.setAttribute(`src`, newSrcUrl)
  theBigImg.setAttribute(`alt`, newAltTxt)
}

let setThumbTwoToImg = function() {
  // Store the url from the image that was clicked
  let newSrcUrl = imgTwo.getAttribute(`src`)
  let newAltTxt = imgTwo.getAttribute(`alt`)

  // Set the url from the thumb to the big image
  theBigImg.setAttribute(`src`, newSrcUrl)
  theBigImg.setAttribute(`alt`, newAltTxt)
}

let setThumbThreeToImg = function() {
  // Store the url from the image that was clicked
  let newSrcUrl = imgThree.getAttribute(`src`)
  let newAltTxt = imgThree.getAttribute(`alt`)

  // Set the url from the thumb to the big image
  theBigImg.setAttribute(`src`, newSrcUrl)
  theBigImg.setAttribute(`alt`, newAltTxt)
}


// Train the images to set the url for the big image WHEN they hear a click
imgOne.addEventListener(`click`, setThumbOneToImg)
imgTwo.addEventListener(`click`, setThumbTwoToImg)
imgThree.addEventListener(`click`, setThumbThreeToImg)