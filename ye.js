const fs = require( 'fs' )
const path = require( 'path' )
ts
const CAM_PREFIX = "360_"
const PHONE_PREFIX = "SAM_101_"

const PATH = path.resolve( 'C:/Users/jbjw/gdrive/jax\ gear360' )
// const PATH = 'C:/Users/jbjw/gdrive/jax\ gear360'

fs.readdir( PATH, {}, function ( err, files ) {
	console.log( PATH )
	console.log( '=====' )
	for ( let file of files ) {
		if ( file.indexOf( '_gear360' ) != -1 ) {

		}
		// console.log(path.join( PATH, file))
		fs.readdir( path.join( PATH, file ), function ( err, files2 ) {
			if ( files2 ) {
				console.log( file )
				// console.log( files2 )
				for ( let file2 of files2 ) {
					console.log( '  ', file2 )
				}
			} else {
				console.log( '  empty??' )
			}
		} )
		// fs.stat( path, function( err, stats ) {
		// 	// stats
		// } )
	}
} )
//
// stats.isFile()
// stats.isDirectory()
// {
//   dev: 2114,
//   ino: 48064969,
//   mode: 33188,
//   nlink: 1,
//   uid: 85,
//   gid: 100,
//   rdev: 0,
//   size: 527,
//   blksize: 4096,
//   blocks: 8,
//   atimeMs: 1318289051000.1,
//   mtimeMs: 1318289051000.1,
//   ctimeMs: 1318289051000.1,
//   birthtimeMs: 1318289051000.1,
//   atime: Mon, 10 Oct 2011 23:24:11 GMT,
//   mtime: Mon, 10 Oct 2011 23:24:11 GMT,
//   ctime: Mon, 10 Oct 2011 23:24:11 GMT,
//   birthtime: Mon, 10 Oct 2011 23:24:11 GMT
// }



// var files = fs.readdirSync( PATH )
//
// var stats;
// var innerFiles;
// for ( let file in files ) {
// 	if ( file.indexOf( '_gear360' ) != -1 ) {
// 		innerFiles = fs.readdirSync( file )
// 		console.log( innerFiles.length, 'x' )
// 		for ( let innerFile in innerFiles ) {
// 			stats = fs.statSync( path )
// 			console.log( stats )
// 		}
// 	}
// }

// https://nodejs.org/api/fs.html#fs_fs_access_path_mode_callback

// fs.readFile( '/Users/jbjw', ( err, data ) => {
// 	if (err) throw err
// 	console.log( data )
// } )
