
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
// vid.play()

var vs = qs( "#videosphere" )
console.log( vs )
// vs.pause()
// console.log( vs.srcObject )
// console.log( "ween" + typeof vs )
setInterval( function () {
	// vs.pause()
}, 1000 )

document.body.addEventListener( "dragover", function ( e ) {
	e.preventDefault()
} )

document.body.addEventListener( "drop", function ( e ) {
	e.preventDefault()
	var dt = e.dataTransfer;
	var files = dt.files;
	var url = URL.createObjectURL( files[ 0 ] )
	// console.log( files[ 0 ] )
	console.log( url )
	vid.src = url
	// console.log( typeof files[ 0 ] )
	// file.name, file.size
	// vid.srcObject = files[ 0 ]

	var count = files.length;
	console.log( "file count " + count )
} )
