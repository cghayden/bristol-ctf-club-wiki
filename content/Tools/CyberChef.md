 [cyberchef](https://www.cyberchef.dev/cyberchef](https://www.cyberchef.dev/cyberchef))

CyberChef is going to be your best friend ...

**CyberChef** is a browser-based data analysis and transformational tool, the **"Cyber Swiss Army Knife."**
It provides a large collection of operations for **encoding, decoding, encryption, hashing, compression, data extraction, and forensic analysis** 
It is sometimes described as 

## Common Uses

CyberChef is particularly useful for:

- **Encoding / Decoding**
    - Number bases 
	    - Base64
	    - Binary
	    - Hexadecimal
    - URL encoding
    - Unicode
- **Cryptography**
    - XOR
    - AES
    - DES 
    - RC4
    - RSA operations
    - ROT / Caesar ciphers
- **Hashing**
    - MD5, SHA-256, HMAC, etc
        
- **Compressed data**, 
	- can identify data as being gzip, zip, 7zip, etc.

- **Data Conversion**
    - Hex ↔ text
    - Binary ↔ text
    - Decimal ↔ hex
    - Character-code conversion
    - Timestamps and date formats

## Recipes
CyberChef operations are arranged into a **recipe**.

A recipe is a sequence of operations applied to the input from top to bottom.

You could create a recipe containing
1. **From Base64**
2. **Gunzip**
3. **Decode text**

The output of each operation becomes the input to the next.

This makes CyberChef especially useful when data has **multiple layers of encoding, encryption, or compression**.

## The Magic Operation
( notice the magic wand above the output section) 
- attempts to automatically identify transformations that may make unknown data readable.

## Example: Malware Analysis
Suppose malware contains a string that is:

Base64 encoded → XOR encrypted → gzip compressed

A CyberChef recipe could reverse those operations:
1. **From Base64**
2. **XOR**
3. **Gunzip**
4. Examine the resulting text or binary data
    
This allows an analyst to rapidly test transformations without writing a custom Python script for every step.

CyberChef lets you **experiment with data interactively**.
