John the ripper will attempt to identify the hash and run the appropriate attack, using a custom built-in wordlist.

`john --wordlist=myWordlist.txt hashes.txt`
--format=md5crypt - if you need to specify

rules based attack with custom wordlist
`john ./hashfile --wordlist=mylist --rules /OneRuleToRuleThemAll.rule
 