import app from "ags/gtk4/app"
import { Astal, Gtk } from "ags/gtk4"
import { createState } from "ags"
import { subprocess } from "ags/process"

let [file, setFile] = createState("none")
let leftNext: Boolean = true
let image: Gtk.Image

function onKeyPressed() {
	setFile(leftNext ? "left" : "right")
	leftNext = !leftNext
}

function onKeyReleased() {
	setFile("none")
}

subprocess("libinput debug-events", (stdout: string) => {
	if (stdout.includes("pressed")) onKeyPressed()
	else if (stdout.includes("released")) onKeyReleased()
})

export default function Cat() {
	const { BOTTOM, RIGHT } = Astal.WindowAnchor

	return (<window
		visible
		application={app}
		layer={Astal.Layer.OVERLAY}
		anchor={BOTTOM | RIGHT}
		class="Cat"
	>
		<image $={self => image = self} file={file(val => `assets/${val}.png`)} pixelSize={256} />
	</window>)
}
