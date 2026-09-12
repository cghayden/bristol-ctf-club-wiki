# summary

tar combines many files into one, but does not compress them, so you'll often see a compressed tar file, like `diskImage.tar.gzip`

# List contents without extracting ( safe )
`tar -tf image.tar`

# extract
`tar -xvf <file>` 

-x = extract
-f = file
-v = verbose ( optional )


**Extract into a directory:**
`-C /path/to/directory`


*It auto-detects compression by default*
But if you need explicit flags:

- **`-z` / `--gzip`** → use `gzip` (`.tar.gz`, `.tgz`)
- **`-j` / `--bzip2`** → use `bzip2` (`.tar.bz2`)
- **`-J` / `--xz`** → use `xz` (`.tar.xz`)
- **`--lzma`** → use `lzma` (`.tar.lzma`)
- **`--zstd`** → use `zstd` (`.tar.zst`)
- **`--lzop`** → use `lzop`


# archiving files:
`tar -czf outputName.tar.gz source_folder`
- archive the contents of folder 'source_folder,' 
- compress them with gzip, 
- name the output 'outputName.tar.gz '

