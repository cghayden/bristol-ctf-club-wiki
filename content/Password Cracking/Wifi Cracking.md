Cracking Wifi passwords will depend on whether you are working from a packet capture or just have a hash and/or SSID.

# WPA2

In a recent example, we were only given Network Ids and the associated hashes:

```
network={
	ssid="bristolctf"
	psk=5b39ad7279fef5c716d1dc7ef7e47f7079a52d75f4cb268f62c3abbeb8fccea9
}
```

If you look up the hash type on hashes.com, tunnelsup.com, or cyberchef, you will likely get SHA256 

However, the **psk** values are **not plain SHA-256 hashes.

If you search for information about cracking hashes that use an SSID, you will find that
the password and the SSID  are combined using the **PBKDF2** (Password-Based Key Derivation Function 2) cryptographic hash function to create a 256-bit PSK/PMK.

This process uses **PBKDF2-HMAC-SHA1** with 4096 iterations to derive a 256-bit key (PMK) from the passphrase and SSID, which is often represented as a 64-character hexadecimal string.

That means:
- Same password + different SSID(salt) → **completely different PSK**
- You **cannot crack the hash without the SSID**

PSK = PBKDF2(password, ssid, 4096, 256 bits)

*but don't get bogged down by the details.*.. 
the important thing is that it shows you what kind of hash mode to look for in hashcat so you can tell it what mode to use, and to see what format hashcat expects the hash to be in:

### Next steps:
#### find the right hash format

> search for **PBKDF2-HMAC-SHA1** at hashcat:
   [Hashcat Example Hashes](https://hashcat.net/wiki/doku.php?id=example_hashes)
![[Screenshot 2026-04-06 at 10.05.57 PM.png]]

#### format the hash for hashcat
In Hashcat, colon-separated fields are used to encode all the parameters needed to reproduce a hash.  The exact meaning depends on the hash mode, but the pattern is consistent:
**algorithm : parameters : salt : hash ( : extra fields … )**

Our example: 
- **algorithm** = sha1 
- **parameters** = 4096 
	- The **1000** in the hashcat example is just an arbitrary demonstration value to show the format - it's not a required or standard value.
	- Example Mode 12000 is a generic "PBKDF2-HMAC-SHA1" mode, not WiFi-specific
	- The iteration count is a **variable parameter** in PBKDF2 - different applications use different values
	- In this example, the **WPA/WPA2 standard mandates exactly 4096 iterations** of PBKDF2-HMAC-SHA1 to derive the PSK from the SSID + password
	- So we have to change the 1000 → 4096  because these are WiFi hashes, and WiFi always uses 4096 iterations.

- *Salt and Hash: looking at the example on the hashcat site, we see that it needs to be formatted in base64:*
- **Salt**: `YnJpc3RvbGN0Zg==`  (SSID `bristolctf` -> base64)
- **Hash**:  `Wzmtcnn+9ccW0dx+9+R/cHmlLXX0yyaPYsOrvrj8zqk=` (psk -> base64)
	- IMPORTANT: the raw 256 bit hash was converted to 64 character hex, so we have to convert from it from hex to raw bytes, *then to base64*:
	- (using cyberchef) :  `5b39ad7279fef5c716d1dc7ef7e47f7079a52d75f4cb268f62c3abbeb8fccea9` -> (1) from hex, (2) to base64  = `Wzmtcnn+9ccW0dx+9+R/cHmlLXX0yyaPYsOrvrj8zqk=`

==*so to correctly apply hashcat mode 12000, the hash needs to be:*==
`sha1:4096:YnJpc3RvbGN0Zg==:Wzmtcnn+9ccW0dx+9+R/cHmlLXX0yyaPYsOrvrj8zqk=

```
hashcat -a 6 -m 12000 "sha1:4096:YnJpc3RvbGN0Zg==:Wzmtcnn+9ccW0dx+9+R/cHmlLXX0yyaPYsOrvrj8zqk=" /usr/share/wordlists/rockyou.txt
```
