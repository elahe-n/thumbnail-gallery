
let theGallery = document.querySelector(`.gallery`)
let theBigImg = document.querySelector(`.bigimg`)

// EVENT DELEGATION
// Event handler function
let handleGalleryClick = function(event) {

  console.log(event)

  // which item SPECIFICALLY was clicked?
  let theThumbnail = event.target 

  // If theThumbnail is NOT a .thumb item, then immediately leave this function
  if (!theThumbnail.matches(`.thumb`)) {
    return
  }
  
  // Set the url from the thumb to the big image
  theBigImg.setAttribute(`src`, theThumbnail.getAttribute(`src`))
  theBigImg.setAttribute(`alt`, theThumbnail.getAttribute(`alt`))
}

theGallery.addEventListener(`click`, handleGalleryClick)






