The first step in cracking Pdfs, Zip files and others password protected files is to extract the hashed password. This can be done with utilities that come with the john the ripper package
# Cracking Zip Files ()

John the Ripper:
```bash
# get the hash and output to zipHash.txt
zip2ohn myFile.zip > zipHash.txt

# attempt the crack the hash using john the ripper
john --wordlist=/usr/sharre/wordlists/rockyou.txt  zipHash.txt
```

using hashcat:
Once you have the hash extracted into a text file, take a look at it...
It is in a format specific to john the ripper, so you have to clean it up for hashcat.
Determine what hash mode is needed for PDF passwords using [hashcat documentation](https://hashcat.net/wiki/doku.php?id=example_hashes), then crack the password using the Rockyou wordlist:
```bash
cat hash.txt | cut -d ":" -f 2- > clean.txt
```

```

# Cracking Pdf Files

```
# get the hash and output to zipHash.txt
pdf2ohn myFile.zip > pdfHash.txt

# attempt the crack the hash using john the ripper
john --wordlist=/usr/share/wordlists/rockyou.txt pdfHash.txt

john --show

```
