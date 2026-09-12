Executable packers **compress an executable while keeping it executable**. 
When launched, a small unpacking *stub* reconstructs the original program in memory and transfers execution to it.

While some packers like UPX only compress the file, others can also encrypt it.

The packed file is usually smaller on disk but bigger in memory.

```
Packed executable
- Small stub (unpacking code)
- Compressed original program
```
When Executed: 
```
packed-program.exe
      ↓
UPX unpacking stub executes
      ↓
original code is decompressed into memory
      ↓
execution jumps to original code
```

Can be used for malware obfuscation and delivery

legitimate uses include to prevent basic reverse engineering or illegal redistribution. 

- [[UPX]]
    - common general-purpose executable compressor
    - easy to recognize/unpack

- Commercial protectors
    - Themida
    - VMProtect
    - Enigma Protector

- Other/older packers
    - MPRESS
    - ASPack

- Custom malware packers
    - specifically designed/modified for evasion and obfuscation