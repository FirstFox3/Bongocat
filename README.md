An adorable AGS shell that creates a little bongocat for your desktop. Designed for UNIX systems, although I'm unsure of the extent to which it is compatible. It relies on two systems: libinput and GTK (No Astal libraries are needed). Because of its reliance on `libinput-tools` for the command `libinput debug-events`.

# Building
This will need to be built with AGS, specifically the `ags bundle` command.

# Usage
Because this relies on `libinput-tools` for key-reading, `sudo` is required to run it. However, the `WAYLAND_DISPLAY` and `XDG_RUNTIME_DIR` variables must be preserved. This is easiest with the `-E` flag on `sudo`.

# TODO
* Let you exit (Whoops)
* Give more options for how it's displayed
