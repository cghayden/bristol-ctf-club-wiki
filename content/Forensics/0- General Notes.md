commonly involves inspecting memory dumps or disk images

# binwalk
when presented with just a file, try binwalk first to see if it finds anything...
`binwalk myFile`  - will just look inside without extracting

`binwalk -eM myFIle`
- it will extract files to an 'extractions', and will list any extractions in a folder or file named by the address where it extracted it from
# Memory dumps
- Volatility3
- Windbg on WIndows
- look for running processes, commands that were run, environment variables

# Disk images
- the sleuth kit on linux
- Autopsy browser UI on linux
- FTK Imager in Windows
- Autopsy in Windows

- look for deleted files, users, etc.

