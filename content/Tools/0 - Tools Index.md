# All Purpose 

[[CyberChef]]

[Hexed-it hex editor](https://www.hexed.it/) 

# Linux commands

| Command   | Purpose                                                 | Example / Notes                                                            |
| --------- | ------------------------------------------------------- | -------------------------------------------------------------------------- |
| `strings` | Print sequences of printable characters found in a file | `strings myFile` — useful for extracting readable text from binary files   |
| `file`    | Identify a file's type and basic information            | `file myFile`                                                              |
| `xxd`     | Display a hexadecimal dump of a file                    | `xxd myFile` — useful for inspecting binary files, PNGs, JPEGs, ZIPs, etc. |
| `grep`    | Search for matching text or patterns                    | `grep "string" myFile`                                                     |
| `less`    | Paginate output; clears displayed output when finished  | `xxd myFile  less`                                                         |
| `more`    | Paginate output; keeps displayed output when finished   | `xxd myFile  more`                                                         |
| `head`    | Print the first 10 lines by default                     | `xxd myFile  head`                                                         |

### linux examples
```shell
$ strings myFile | grep "SKY"  # find 'SKY' in myFile         
$ strings -n 6 myFile.jpg  # print strings at least 6 chars long 
$ 
```



# OSINT 

- [https://networksurvey.app/wavedigger/](https://networksurvey.app/wavedigger/) - Cell towers and WiFi access points 
- [https://www.walletexplorer.com/](https://www.walletexplorer.com/) - bitcoin explorer 
- [https://www.blockchair.com/.](https://www.blockchair.com%20-%20bitcoin%20explorer/)      bitcoin explorer 
- [https://snoosnoop.com/](https://snoosnoop.com/)  reddit user history search 
- [https://github.com/jivoi/awesome-osint](https://github.com/jivoi/awesome-osint)  - TONS of data search and OSINT sites 
- [https://www.shodan.io](https://www.shodan.io/) - search engine for Internet-connected devices. 

# Cryptography
- [https://www.dcode.fr/cipher-identifier](https://www.dcode.fr/e]n) 
- [https://gchq.github.io/CyberChef/](https://gchq.github.io/CyberChef/)  
- [https://www.boxentriq.com](https://www.boxentriq.com/) - cipher identfier,  

## Steganography and Image Inspecting Tools (linux) 
[[Steganography]]
[exif and metadata viewer](https://exif.tools/)

pngcheck – gets metadata and looks for errors in .png files 
    - `pngcheck -vtp7f filename.png`  to view all info.
    
steghide:  
    `steghide info image.jpeg` : inspect an image to look for hidden files or data 
        
    `steghide extract -sf image.jpg` : extract files or data. 
        
stegseek : if an image file is password protected: 
    
     `stegseek image.jpg /usr/share/wordlists/rockyou.txt` 
        
Jpeginfo 
    
## Audio Decoding
[AudioCipher Steganography decoder](https://audiocipher.app/app)

# Password Cracking 
## Hash identifiers 
- [https://www.tunnelsup.com/hash-analyzer/](https://www.tunnelsup.com/hash-analyzer/)  
- [https://hashes.com/en/tools/hash_identifier/](https://hashes.com/en/tools/hash_identifier/) 
    
## Hash crackers 
- [https://crackstation.net/](https://crackstation.net/) 
- [https://hashes.com/en/decrypt/hash](https://hashes.com/en/decrypt/hash) 

## Hashcat reference
- [https://hashcat.net/wiki/doku.php?id=example_hashes](https://hashcat.net/wiki/doku.php?id=example_hashes) 
    [[Hashcat]]

## John the Ripper
[[John the Ripper]]
    

# Log Analysis 
- [https://sqliteonline.com/](https://sqliteonline.com/)  SQLite viewer 
- [XML log viewer and flattener](https://excellenthandshake.s3.us-east-2.amazonaws.com/xmlView/index.html)  intended for AD event logs 
    [[0 - Resources and General Info]]
    [[awk]]
    
# Forensics 
- [[Forensic Tools]] ( binwalk, foremost, volatility, autopsy)
- run `strings`

# Web Applications 
- [https://www.decompiler.com/jwt](https://www.decompiler.com/jwt) - json web token / cookie decoder 
- [[Burpsuite]]
- OWASP ZAP 
- Firefox or Chrome dev tools
- Postman 
- thunderclient
    
# Exploitation and Enumeration (Reverse Engineering)
 [https://dogbolt.org](https://dogbolt.org/)   - binary decompiler with choice of tools 
    
[[ghidra]] - binary decompiler
[https://fastbin.io/reverse](https://fastbin.io/reverse) - ghidra online
    
[https://www.decompiler.com/](https://www.decompiler.com/) - various decompilers... java, python, android, etc 

https://webcrack.netlify.app/ - **the best Javascript deobfuscator**
