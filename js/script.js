let theBigImg = document.querySelector(`.bigimg`)
let theThumbs = document.querySelectorAll('.thumb')

// When this function is called, it logs "click"
let handleThumbnailClick = (event) => {
  console.log(`Click!`)
}

// Pass it a reference to an <img>
let logTheSrc = function(anImg) {
  anImg.addEventListener(`click`, handleThumbnailClick)
}


// For each value within this Array, run the function provided as an argument...
theThumbs.forEach(logTheSrc)


/* theThumbs: An Array of Elements!
0: <img src="img/one.jpg">  
1: <img src="img/two.jpg"> 
2: <img src="img/three.jpg"> 
3: <img src="img/two.jpg"> 
4: <img src="img/three.jpg">
*/