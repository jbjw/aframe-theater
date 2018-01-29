
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

var vs = qs( "#videosphere" )
console.log( vs )
vs.pause()
setInterval( function () {
	vs.pause()
}, 1000 )

document.body.addEventListener( "drop", function () {
  var dt = event.dataTransfer;
  var files = dt.files;

  var count = files.length;
  output("File Count: " + count + "\n");

  for (var i = 0; i < files.length; i++) {
    output(" File " + i + ":\n(" + (typeof files[i]) + ") : <" + files[i] + " > " +
           files[i].name + " " + files[i].size + "\n");
  }
} )
