
# online tools

[StegOnline](https://georgeom.net/StegOnline/image)

[exif and metadata viewer](https://exif.tools/)

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

# playbook:
#### File
`file thisFile.txt`
see what the computer thinks it is
#### Strings
View all strings in the file with `strings filename.png`

use `-n 7` for strings of length 7+ ( or other number)
use `-t x`  to include line number / location in the file.

#### Exif / metadata
`exiftool FILENAME

#### Check file signature / magic bytes.
`xxd FILENAME | head`
make sure magic bytes match the file extension

PNG: 89 50 4E 47 0D 0A 1A 0A

JPEG: FF D8 FF

[Wikipedia list of magic bytes](https://en.wikipedia.org/wiki/List_of_file_signatures)

#### Binwalk

`binwalk -Me filename.png`.

[Custom Example](https://georgeom.net/StegOnline/assets/examples/binwalk-stego.jpg)

#### pngcheck

you can use `pngcheck`  to look for optional/correct broken chunks. This is vital if the image appears corrupt.

`pngcheck -vtp7f filename.png` to view all info.

v is for verbose, t and 7 display text chunks, p displays contents of some other optional chunks and f forces continuation after major errors are encountered.

Related write-ups:
- [PlaidCTF 2015](https://github.com/ctfs/write-ups-2015/tree/master/plaidctf-2015/forensics/png-uncorrupt)
- [SECCON Quals 2015](https://github.com/ctfs/write-ups-2015/tree/master/seccon-quals-ctf-2015/stegano/steganography-2)

#### steghide 
*Found a password? (Or not)*

If you've found a password, the goto application to check should be [steghide](http://steghide.sourceforge.net/).
Bear in mind that steghide can be used without a password, too.

You can extract data by running:
```
steghide extract -sf filename.png
```


