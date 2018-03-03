//

"use strict"

AFRAME.registerComponent( "play-pause-button", {
	init: function () {
		this.play = false
		var el = this.el
		el.addEventListener( "click", e => {
			this.play = !this.play
			this.play ? vid.play() : vid.pause()
		} )
	}
} )


AFRAME.registerComponent( "mute-button", {
	init: function () {
		this.mute = false
		var el = this.el
		el.addEventListener( "click", e => {
			this.mute = !this.mute
			vid.muted = this.mute
		} )
	}
} )

AFRAME.registerComponent( "loop-button", {
	init: function () {
		this.loop = false
		var el = this.el
		el.addEventListener( "click", e => {
			this.mute = !this.mute
			vid.muted = this.mute
		} )
	}
} )
