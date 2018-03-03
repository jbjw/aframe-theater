//

"use strict"

const qs = document.querySelector.bind( document )
const qsa = document.querySelectorAll.bind( document )

var videoAsset = qs( "#video-default" )

var videoSphere = qs( "#videosphere" )

document.body.addEventListener( "dragover", function ( e ) {
	e.preventDefault()
} )

document.body.addEventListener( "drop", function ( e ) {
	e.preventDefault()
	var dt = e.dataTransfer
	var files = dt.files
	// file.name, file.size
	var url = URL.createObjectURL( files[ 0 ] )
	vid.src = url

	// misc
	// files.length;
	// typeof files[ 0 ]
	// file.name, file.size
	// vid.srcObject = files[ 0 ]
} )
