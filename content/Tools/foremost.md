
**foremost** carves files out of raw data by looking for known file headers and footers.

## When To Use It
- recover files from disk images or raw data
- carve common file types out of suspicious files
- follow up when `binwalk` extraction is incomplete
- extract embedded files when you suspect hidden content

## Basic Usage

Carve supported file types from a file:
```sh
foremost myFile
```

Choose an output directory:
```sh
foremost -i myFile -o output_dir
```

Carve only a specific file type, such as png:
```sh
foremost -t png -i myFile -o output_dir
```

## Common Notes
- `-i` selects the input file
- `-o` selects the output directory
- `-t` limits carving to specific file types
- foremost usually creates an audit report along with carved files

## Limitations
- carving depends on recognizable headers and footers
- fragmented or partially overwritten files may extract badly or incompletely
- recovered files still need validation with tools like `file`, `xxd`, or manual review
