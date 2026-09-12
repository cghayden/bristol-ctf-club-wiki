## summary

magic  bytes
50 4B 03 04

## usage

-l : *list contents*
```
unzip -l filename.zip
```

-p : *print file content to output without saving to disk.*
```
unzip -p filename.zip
```

*Extract a single file from a ZIP archive*
```
unzip archive.zip path/to/file.txt
```
(`path/to/file.txt` is the path **inside** the ZIP archive)
(to get the path, use list: `unzip -l`)


# Notes

*zip may not preserve permissions or symlinks, so don't use it when this is important, such as when
- Archiving system directories
- Working inside `/usr`, `/opt`, `/var`


