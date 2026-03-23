---
title: Bristol CTF Club Resources
cssclasses:
---
> Refer to these pages for helpful information regarding all things cybersecurity, tailored toward succeeding in CTF's

## Notes on NCL flag format:

The flag will always be in the form *SKY-CCCC-nnnn*, where C is any capital letter, and n is a single digit.

this is helpful to remember when looking for patterns in code or hex...

for example:

given: SKY-THIS-2468:

in decimal / charCode / KeyPress format:
83 75 89 45 84 72 73 83 45 50 52 54 56

in hex: 
53 4B 59 2D 54 48 49 53 2D 32 34 36 38

look for **writes of 0xd (13bytes) in disassembly**

the regex for this pattern is :
^SKY-[A-Z]{4}-\d{4}$

So some quick one-off flag searches could be:

`strings binaryfile | grep -P 'SKY-[A-Z]{4}-\d{4}'`

`tshark -r capture.pcapng -Y 'frame contains "SKY-"' -T fields -e frame.number -e data`


tshark -r capture.pcapng -q -z follow,tcp,ascii,1 | rg 'SKY-[A-Z]{4}-\d{4}'



## NCL Guides, Education, and Walkthroughs
NCL Trove(https://trove.cyberskyline.com/a310b9e0d84f47038911db4f48a8beb5)

