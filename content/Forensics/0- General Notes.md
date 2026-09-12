Forensics commonly requires inspecting memory dumps or disk images or specific files.
# Starting a Challenge

When I do not know what I am looking at yet, I start by identifying the file and pulling out easy clues.

## 1. Identify the file type
`file FILENAME`

- confirms whether the extension matches reality
- tells you if it is an archive, executable, image, text, compressed data, etc.

## 2. Pull obvious text
`strings FILENAME`
`strings -n 7 FILENAME`
`strings -t x FILENAME`

- look for flags, usernames, URLs, file paths, error messages, passwords, and hints
- `-t x` helps map interesting strings back to offsets

## 3. Check the header / magic bytes
`xxd FILENAME | head`

- verify the magic bytes match the claimed file type
- useful for renamed files, corrupted files, or embedded data

## 4. Decide the next branch

If it looks like:
- an image: try `exiftool`, `binwalk`, steg tools
- an archive/compressed file: extract it, then repeat the same process
- an executable: try `strings`, `file`, decompilers, `gdb`, `ghidra`
- a pcap: open in Wireshark or use `tshark`
- a hash: identify type, then move to Hashcat or John
- a web target: inspect requests, source, cookies, hidden routes

## Common mindset
- do the cheapest inspection first
- do not trust file extensions
- if you extract or recover a new file, repeat `file`, `strings`, and `xxd | head`
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



