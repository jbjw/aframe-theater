//

"use strict"

const qs = document.querySelector.bind( document )
const qsa = document.querySelectorAll.bind( document )
// document.getElementsByTagName('video')[0].volume = 0.5;
// document.querySelector( "#video" )



// videoEl
// .loop bool
// .muted bool
// .play()
// .pause()
//
// .currentTime get and set

var vid = qs( "#test" )

var vs = qs( "#videosphere" )

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
} )
