Forensics commonly requires inspecting memory dumps or disk images or specific files.

# inspecting files
## binwalk
![[binwalk]]
when presented with just a file, try binwalk first to see if it finds anything...
`binwalk myFile`  - will just look inside without extracting

`binwalk -eM myFIle`
- it will extract files to an 'extractions', and will list any extractions in a folder or file named by the address where it extracted it from

## foremost
![[foremost]]
# Inspecting Memory dumps
- [[Volatility]]
- Windbg on Windows
- look for running processes, commands that were run, environment variables, etc
# Inspecting Disk images
## Linux
- the sleuth kit on linux
- Autopsy browser UI on linux

## Windows
- FTK Imager
- Autopsy
- Event Viewer for inspecting logs

- look for deleted files, users, etc.



