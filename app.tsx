import app from "ags/gtk4/app"
import style from "./style.scss"
import Cat from "./widget/Cat.tsx"

app.start({
  css: style,
  main() {
	  app.get_monitors().map(Cat)
  },
})
