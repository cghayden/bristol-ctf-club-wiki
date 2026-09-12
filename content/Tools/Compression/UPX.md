
**Ultimate Packer for Executables**

 [UPX Github](https://github.com/upx/upx)
https://www.esecurityplanet.com/threats/upx-compression-detection-evasion/

Ultimate Packer for Executables (UPX) is an open-source [[Executable Packers]] that can reduce the file size of an executable drastically (better than Zip files), and it is compatible with a large range of executable formats, like Windows DLLs, macOS apps, or Linux ELF.


**Also read: [How Hackers Evade Detection](https://www.esecurityplanet.com/threats/how-hackers-evade-detection/)**


The packed file is usually smaller on disk but bigger in memory. If you inspect a suspicious file, you might see typical sections like the following:

- **UPX0:** An empty section that contains no actual raw data but with a huge virtual memory size
- **UPX1:** The stub and the compressed executable

There are other sections, but we’ll keep it simple here.
