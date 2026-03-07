
# online tools

[StegOnline](https://georgeom.net/StegOnline/image)

[aperosolve](http://www.aperisolve.com)

[forensic magnifier](https://29a.ch/photo-forensics/#forensic-magnifier)

[metadata2go](https://metadata2go.com)

[DTMF decoder](https://unframework.github.io/dtmf-detect/#/)
DTMF is the audio tone that a phone keypress emits
# command line tools

**exiftool** - inspect metadata
`exiftool FILENAME`

look for strings
`strings FILENAME`

binwalk
`binwalk -Me FILENAME`

extract data inside image files:
`zsteg FILENAME`

to extract data hidden inside an image file protected with a password
`steghide extract -sf FILENAME`

# general playbook:
#### 1. File
Just to be sure what file you are facing with, check its type with type filename.

- make sure the magic bytes match the file extension
#### 2. Strings

View all strings in the file with strings -n 7 -t x filename.png.

use `-n 7` for strings of length 7+
use `-t x`  to view- their position in the file.

#### 3. Exif / metadata
`exiftool FILENAME

#### 4. Check file signature.
`xxd FILENAME | head`
make sure magic bytes match the file extension

PNG: 89 50 4E 47 0D 0A 1A 0A

JPEG: FF D8 FF
(varies afer third byte... see wikipedia)

[Wikipedia list of magic bytes](https://en.wikipedia.org/wiki/List_of_file_signatures)

#### 4. Binwalk

`binwalk -Me filename.png`.
-Me is used to recursively extract any files.

[Custom Example](https://georgeom.net/StegOnline/assets/examples/binwalk-stego.jpg)

#### 5. pngcheck

We can use `pngcheck`  to look for optional/correct broken chunks. This is vital if the image appears corrupt.

`pngcheck -vtp7f filename.png` to view all info.

v is for verbose, t and 7 display text chunks, p displays contents of some other optional chunks and f forces continuation after major errors are encountered.

Related write-ups:
- [PlaidCTF 2015](https://github.com/ctfs/write-ups-2015/tree/master/plaidctf-2015/forensics/png-uncorrupt)
- [SECCON Quals 2015](https://github.com/ctfs/write-ups-2015/tree/master/seccon-quals-ctf-2015/stegano/steganography-2)

#### 6. Explore Colour & Bit Planes

Images can be hidden inside of the colour/bit planes. 
[StegOnline](https://georgeom.net/StegOnline/upload). 
On the image menu page, explore all options in the top panel (i.e. Full Red, Inverse, LSB etc).

Go to "Browse Bit Planes", and browse through all available planes.

If there appears to be some static at the top of any planes, try extracting the data from them in the "Extract Files/Data" menu.

Related write-ups:

- [MicroCTF 2017](https://www.doyler.net/security-not-included/image-steganography-microctf-2017)
- [CSAW Quals 2016](https://github.com/krx/CTF-Writeups/blob/master/CSAW%2016%20Quals/for250%20-%20Watchword/jk_actual_writeup.md)
- [ASIS Cyber Security Contest Quals 2014](https://github.com/ctfs/write-ups-2014/tree/master/asis-ctf-quals-2014/blocks)
- [Cybersocks Regional 2016](https://mokhdzanifaeq.github.io/2016/12/14/cybersocks-regional-2016-color-writeup/)

#### 7. Extract LSB Data

As mentioned in step 5, there could be some static in bit planes. If so, navigate to the "Extract Files/Data" page, and select the relevant bits.

[Custom Example](https://georgeom.net/StegOnline/assets/examples/lsb-stego.jpg)

#### 8. Check RGB Values

ASCII Characters/other data can be hidden in the RGB(A) values of an image.
[StegOnline](https://georgeom.net/StegOnline/upload) : preview the RGBA values. 
Try converting them to text, and see if any flag is found. 
It might be worth looking at just the R/G/B/A values on their own.

Related write-ups:
- [MMA-CTF-2015](https://github.com/ctfs/write-ups-2015/tree/master/mma-ctf-2015/stego/miyako-350)

#### 9. Found a password? (Or not)

If you've found a password, the goto application to check should be [steghide](http://steghide.sourceforge.net/). Bear in mind that steghide can be used without a password, too.

You can extract data by running:
```
steghide extract -sf filename.png
```

#### 10. Browse Colour Palette

If the PNG is in [type 3 for type specs](https://www.w3.org/TR/PNG-Chunks.html), you should look through the color palette.

This site has a feature for randomizing the color palette, which may reveal the flag. You can also browse through each color in the palette, if the flag is the same color.

It may also be worth looking at the palette indexes themselves, as a string may be visible from there.

Related write-ups:

- [Plain CTF 2014](https://github.com/ctfs/write-ups-2014/tree/master/plaid-ctf-2014/doge-stege)

##### 11. Pixel Value Differencing (PVD/MPVD)

It would be rare to have a case of PVD where you're not explicitly told that this is the steganographic method, as it's very niche.

However, this is a method where the differences between pixel pairs are measured slightly adjusted in order to hide data.

A full paper on this process can be found [here](https://pdfs.semanticscholar.org/c893/fb37bda9cdffc12dcd1be33d01fed502ae32.pdf). A PVD feature to this site would be appreciated!

Related write-ups:

- [TJCTF 2019](https://github.com/zst-ctf/tjctf-2019-writeups/tree/master/Writeups/Planning_Virtual_Distruction)
- [MMA-CTF 2015](https://github.com/ctfs/write-ups-2015/tree/master/mma-ctf-2015/stego/miyako-350)

