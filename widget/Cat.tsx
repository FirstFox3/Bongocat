import app from "ags/gtk4/app"
import { Astal, Gdk, Gtk } from "ags/gtk4"
import { createState } from "ags"
import { subprocess } from "ags/process"

export default function Cat(gdkmonitor: Gdk.Monitor) {
	const { BOTTOM, RIGHT } = Astal.WindowAnchor

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

	return (<window
		visible
		application={app}
		gdkmonitor={gdkmonitor}
		layer={Astal.Layer.OVERLAY}
		anchor={BOTTOM | RIGHT}
		name="Bongocat"
		namespace="Bongocat"
		class="Cat"
	>
		<image $={self => image = self} file={file(val => `assets/${val}.png`)} pixelSize={256} />
	</window>)
}
