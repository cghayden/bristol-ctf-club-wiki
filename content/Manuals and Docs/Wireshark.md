# tshark commands

## example quick search for flag
```
tshark -r capture.pcapng -Y 'frame contains "SKY-"' -T fields -e frame.number -e data
```

**`tshark`** — the command-line version of Wireshark for capturing/reading packets

**`-r capture.pcapng`** — _read_ from the file `capture.pcapng` instead of live capturing

**`-Y 'frame contains "SKY-"'`** — _display filter_ (like Wireshark's filter bar); only process frames where the raw content contains the string `SKY-`

**`-T fields`** — sets the output format to _fields_ mode, meaning only print the specific fields you ask for (rather than the default summary line)

**`-e frame.number`** — _extract_ the frame number field

**`-e data`** — _extract_ the raw data field (the payload bytes)