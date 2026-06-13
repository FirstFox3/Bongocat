import app from "ags/gtk4/app"
import { Astal, Gtk } from "ags/gtk4"
import { createState } from "ags"

export default function Cat() {
	const { BOTTOM, RIGHT } = Astal.WindowAnchor

	// When nothing is pressed, do nothing. Else, alternate between left and right.

	let [file, setFile] = createState("none")
	let leftNext: Boolean = true
	let image: Gtk.Image

	function onKeyPressed(..._ignored: any[]) {
		setFile(leftNext ? "left" : "right")
		leftNext = !leftNext
	}

	function onKeyReleased(..._ignored: any[]) {
		setFile("none")
	}
	
	return (<window
		visible
		application={app}
		layer={Astal.Layer.OVERLAY}
		keymode={Astal.Keymode.ON_DEMAND}
		anchor={BOTTOM | RIGHT}
		class="Cat"
	>
		<Gtk.EventControllerKey onKeyPressed={onKeyPressed} onKeyReleased={onKeyReleased} />

		<image $={self => image = self} file={file(val => `assets/${val}.png`)} pixelSize={256} />
	</window>)
}
