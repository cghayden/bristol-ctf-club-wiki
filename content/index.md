---
title: Bristol CTF Club Resources
cssclasses:
---
> Refer to these pages for helpful information regarding all things cybersecurity, tailored toward succeeding in CTF's
> I will be actively adding and curating content.
> you may need to hard refresh the site ( shift - ctrl/cmd R ) to ensure latest content

## Quick Note For NCL specifically:

The flag will always be in the form SKY-CCCC-nnnn, where N is capital letter, and n is a single digit.

this is helpful to remember when looking for patterns in code or hex...

for example:
given:
SKY-THIS-2468
in decimal / charCode format:
83 75 89 45 84 72 73 83 45 50 52 54 56
look for **write of 0xd (13bytes) in disaasembly**

in hex: 
53 4B 59 2D 54 48 49 53 2D 32 34 36 38

as KeyPress events:
\[83, 75, 89, 189, 84, 72, 73, 83, 189, 50, 52, 54, 56]

the regex for this pattern is :
^SKY-[A-Z]{4}-\d{4}$

So some quick one-off flag searches could be:

strings binaryfile | grep -P 'SKY-[A-Z]{4}-\d{4}'

tshark -r capture.pcapng -Y 'frame contains "SKY-"' -T fields -e frame.number -e frame.time -e data | sed -n '1,200p'

tshark -r capture.pcapng -q -z follow,tcp,ascii,1 | rg 'SKY-[A-Z]{4}-\d{4}'



