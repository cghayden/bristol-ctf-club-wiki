
The first step in password cracking is identifying the type of hash you're trying to crack.

The most useful first attempt is usually to run hashcat against the rockyou wordlist to see if you come up with any hits.

[[Hashcat|Check this note for Hashcat usage]]

Then depending on what cracks you get, if any, you can refine your attack style or create a custom wordlist to run your hashes against. 

*For NCL specifically, the first pass through rockyou will usually give you a clue as to the theme of the passwords in that challenge, which help to build a wordlist for the hard hashes.*

## Identify hash type
- `hashid 932814uyhfnqvpf98ufp0` - cli tool
- [hash identifier](https://hashes.com/en/tools/hash_identifier)
- [hash analyzer - tunnels up](https://www.tunnelsup.com/hash-analyzer/)
- [hashcat hash list](https://hashcat.net/wiki/doku.php?id=example_hashes)  - hashes and attack modes

**Tools**
[Crackstation](https//:crackstation.net) - a web tool... only uses rockYou wordlist
good for the easier questions - only rockYou

overview of basics, mask and ophcrack:
https://www.youtube.com/watch?v=ll0xcqWF_AM&t=3488s

wordlists and cewl:
https://www.youtube.com/watch?v=9Nn8d1VYBUM&t=1277s

www.l0phtcrack.com


## john the ripper
[[john the ripper|Check this page for john the ripper usage]]

John the Ripper is great for its specialized add-ons that will find the hashes of specific file types like pdf and zip file passwords.

You will still need to run the hash through a wordlist to crack it.

It is also good to try if hashcat is having trouble with the hash type

[[#Cracking pdf files]]
[[#Cracking Zip Files]]

wordlist munger: 
https://github.com/Th3S3cr3tAg3nt/Munge
`munge.py -l 9 -i ./wordlist -o ./mungedWordlist`

# Wordlists 
in kali:
/usr/share/wordlists/rockyou.txt

## building custom wordlist

There will be challenges where you are told or discover a theme that each password follows.
In these instances, you will need to create your own wordlist to use in your attacks.

how to build custom wordlists: ( a great NCL walkthrough )
https://trove.cyberskyline.com/0922f61022ef487ca73cc770369360e6

## building wordlists with cewl

cewl will crawl a webpage and pull word out to compile a list of words:

```
cewl -d <depth to crawl> -m <minimum word length> -w <output file> <url of website to crawl>
```

crawl a page:
`cewl [url] -d (depth) -w (file to write)`

**clean** list:  look at the list and see what needs to be fixed

 **convert to all lowercase:**
```
tr '[:upper:]' '[:lower:]'  < input.txt > output.txt
```

get rid of wikipedia addons ('rft$')
`cat wordlist.txt | egrep "rft$" -v > cleansvu.txt`

filter out list based on word size
`grep -E '^.{6,}$'  
filter out less than 6 char's

**remove duplicates**
```
awk '!seen[$0]++' input.txt > output.txt
```


# using rulesets

https://hashcat.net/wiki/doku.php?id=rule_based_attack

a ruleset applies a custom set of character add ons and manipulations to each entry in the word list and tries that altered word as the password

```
hashcat -r /usr/share/hashcat/rules/best64.rule cleansvu.txt --stdout -o svupws.txt
```

## writing your own ruleset file
hashcat comes with rulesets preinstalled, but it is often more efficient to write your own

The following table describes some functions which are compatible with JtR as well as Hashcat.

| **Function**    | **Description**                                                    | **Input**                             | **Output**                                                                                                        |
| --------------- | ------------------------------------------------------------------ | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| l               | Convert all letters to lowercase                                   | InlaneFreight2020                     | inlanefreight2020                                                                                                 |
| u               | Convert all letters to uppercase                                   | InlaneFreight2020                     | INLANEFREIGHT2020                                                                                                 |
| c / C           | capitalize / lowercase first letter and invert the rest            | inlaneFreight2020 / Inlanefreight2020 | Inlanefreight2020 / iNLANEFREIGHT2020                                                                             |
| t / TN          | Toggle case : whole word / at position N                           | InlaneFreight2020                     | iNLANEfREIGHT2020                                                                                                 |
| d / q / zN / ZN | Duplicate word / all characters / first character / last character | InlaneFreight2020                     | InlaneFreight2020InlaneFreight2020 / IInnllaanneeFFrreeiigghhtt22002200 / IInlaneFreight2020 / InlaneFreight20200 |
| { / }           | Rotate word left / right                                           | InlaneFreight2020                     | nlaneFreight2020I / 0InlaneFreight202                                                                             |
| ^X / $X         | Prepend / Append character X                                       | InlaneFreight2020 (^! / $! )          | !InlaneFreight2020 / InlaneFreight2020!                                                                           |
| r               | Reverse                                                            | InlaneFreight2020                     | 0202thgierFenalnI                                                                                                 |


A complete list of functions can be found [here](https://hashcat.net/wiki/doku.php?id=rule_based_attack#implemented_compatible_functions).

`-g <number>` - generates number random rules on the fly and applies to wordlist
Rules can be debugged using the -r flag to specify the rule, followed by the wordlist.

## rejection rules 
can be used to prevent the processing of such words.

Words of length less than N can be rejected with `>N`, while words greater than N can be rejected with `<N`. A list of rejection rules can be found [here](https://hashcat.net/wiki/doku.php?id=rule_based_attack#rules_used_to_reject_plains).

**must use -k or -j flag** for rejection rules

# Cracking pdf files

`pdf2john  encryptedFile.pdf > hashOutput.txt`
# Cracking Zip Files

```
zip2ohn myFile.zip > zipHash.txt
john zipHash.txt --wordlist=/usr/sharre/wordlists/rockyou.txt
```

https://github.com/hashstation/zip2hashcat


# NTLM attack (windows) 

For cracking NTLM hashes from Windows, you can use hashes.com:
[hashes.com](https://hashes.com/en/decrypt/hash)

It may give you 2 results - the first result has been correct for me
## ophcrack
you can also use ophcrack in kali to crack NTLM, but you'll have to download rainbow tables first
https://ophcrack.sourceforge.io/tables.php

The NCL Walkthrough on NTML:
https://trove.cyberskyline.com/3f7c50f299f34ae896cc1d4955be2567

# Cracking Passphrases

https://github.com/initstring/passphrase-wordlist/blob/master/utilities/cleanup.py



# other Tools and generators

## cupp
CUPP stands for Common User Password Profiler, and is used to create highly targeted and customized wordlists based on information gained from social engineering and OSINT. People tend to use personal information while creating passwords, such as phone numbers, pet names, birth dates, etc. CUPP takes in this information and creates passwords from them.

## KWPROCESSOR

`Kwprocessor` is a tool that creates wordlists with keyboard walks. Another common password generation technique is to follow patterns on the keyboard. These passwords are called keyboard walks, as they look like a walk along the keys. For example, the string "`qwertyasdfg`" is created by using the first five characters from the keyboard's first two rows. This seems complex to the normal eye but can be easily predicted. `Kwprocessor` uses various algorithms to guess patterns such as these.

The tool can be found [here](https://github.com/hashcat/kwprocessor) and has to be installed manually.

## Princeprocessor

`PRINCE` or `PRobability INfinite Chained Elements` is an efficient password guessing algorithm to improve password cracking rates. [Princeprocessor](https://github.com/hashcat/princeprocessor) is a tool that generates passwords using the PRINCE algorithm. The program takes in a wordlist and creates chains of words taken from this wordlist. For example, if a wordlist contains the words:

## crunch - generate wordlist / passwords form scratch or defined patter

usage:  command / min / max / -t - use a pattern / pattern / -o outputFile

`crunch min max -t SKY-KAIT-%%%% -o SKY_KAIT_NUMB.txt`




