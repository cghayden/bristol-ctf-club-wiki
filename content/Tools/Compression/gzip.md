
## decompress:
```
gunzip file.gz
- OR -
gzip -d file.gz
```

## keep the original : -k
`.gunzip -k file.gz`


### If it's a `.tar.gz` (or `.tgz`) archive

Extract everything with:

```
tar -xzf archive.tar.gz
```

Options:

- `x` = extract
- `z` = use gzip
- `f` = filename

To see the contents first:

```
tar -tzf archive.tar.gz
```

### View the contents without extracting

```
zcat file.gz
```

or

```
gunzip -c file.gz
```

### Check what type of file it is

If you're not sure whether it's a compressed file or a tar archive:

```
file filename.gz
```

For example:

```
$ file backup.gz
backup.gz: gzip compressed data, was "backup.tar"
```

or

```
$ file wordlist.txt.gz
wordlist.txt.gz: gzip compressed data, was "wordlist.txt"
```