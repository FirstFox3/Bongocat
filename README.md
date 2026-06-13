An adorable AGS shell that creates a little bongocat for your desktop. Designed for UNIX systems, although I'm unsure of the extent to which it is compatible. It relies on two systems: libinput and GTK (No Astal libraries are needed). Because of its reliance on `libinput-tools` for the command `libinput debug-events`.

# Building
This will need to be built with AGS, specifically the `ags bundle` command.

# WARNING
Allowing this program to read libinput can be difficult as sudo is needed. In testing, I added my user to the input group with the command `sudo usermod -a -G input $USER` (swapping the -a for -r removes from the group). However, this is generally unsafe as anyone can interfere with your input, such as keylogging. There's better alternatives to choose specific devices using udev, but I don't know the details and that sounds like a great question for a search on Reddit. The bongocat only moves when an event reads with `pressed` or `released` in the logs. Keep that in mind when deciding devices. This really only applies to the mouse and keyboard (as I've seen in the very limited testing). Goodnight.
