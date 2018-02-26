//

"use strict"

const qs = document.querySelector.bind( document )
const qsa = document.querySelectorAll.bind( document )

// video element info
// .play() .pause() .loop (bool)
// .volume (0-1) .muted (bool)
// .currentTime .fastSeek()

var videoAsset = qs( "#video-default" )

var videoSphere = qs( "#videosphere" )
// some methods appear to fall through to the element
// console.log( vs.srcObject )

document.body.addEventListener( "dragover", function ( e ) {
	e.preventDefault()
} )

document.body.addEventListener( "drop", function ( e ) {
	e.preventDefault()
	var dt = e.dataTransfer;
	var files = dt.files;
	var url = URL.createObjectURL( files[ 0 ] )
	vid.src = url

	// misc
	// files.length;
	// typeof files[ 0 ]
	// file.name, file.size
	// vid.srcObject = files[ 0 ]
} )
