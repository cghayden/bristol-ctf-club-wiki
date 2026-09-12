
`binwalk` scans files for embedded data, file signatures, and compressed sections.

## When To Use It

- inspect suspicious files for appended or embedded content
- analyze firmware images and archives
- look for hidden files inside images or binaries
- carve out embedded files for follow-up analysis

## Basic Usage

Inspect a file without extracting anything:

```sh
binwalk myFile
```

Extract discovered content into a new folder:

```sh
binwalk -e myFile
```

Extract **recursively** when embedded files contain more embedded content:

```sh
binwalk -Me myFile
```

- extracted content is written to a new directory next to the original file
- after extraction, review the output with `tree`, `ls -R`, `file`, `strings`, etc
## Limitations
- short signatures can create false positives
- extraction may fail on malformed or partially corrupted data
- binwalk is a starting point, not proof that a finding is meaningful