
**`awk`** - The command itself

**`'{...}'`** - enclosed in single quotes, the curly brackets define a block of awk script. 
```
awk '{ print $1, $3 }' file.txt  # print columns 1 and 3

awk '/error/ { print }' logfile.txt # print only the lines that constain "error"

```

**sorting and counting, finding unique**: *you'll be using this alot:* ( order matters! )

```
awk '{print $4}' logFile.txt | sort | uniq -c | sort -n

# in column 4, count each unique value, sorted by most frequent first.
# order is important because `uniq` only works on consecutive identical lines.
# sort -n will sort least to most, so the highest count will be at the bottom, easily visible after the script list prints out

```

## defining custom separators

specify custom **field separators** in awk using the `-F` option or by setting the `FS` variable.

**Using -F flag (most common way):**
```bash
# Split on colon
awk -F: '{print $1, $2}' logfile.txt

# Split on comma ( useful when parsing csv )
awk -F, '{print $1, $2}' logfile.txt

```

**Using regular expressions as separators:**
```bash
# Split on one or more colons
awk -F':+' '{print $1, $2}' logfile.txt

# Split on either colon or semicolon
awk -F'[;:]' '{print $1, $2}' logfile.txt

# Split on colon followed by optional spaces
awk -F': *' '{print $1, $2}' logfile.txt
```

**Multiple separators - split on both whitespace AND colon:**
```bash
awk -F'[ :]' '{print $1, $2, $3}' logfile.txt
```

## Substitutions
using gsub Inside the awk script:

substitute ':nnnnn'  gsub() = global substitution, 
```bash
awk '{gsub(/:[0-9]{5}/, " PORT& "); print}' logfile.txt
```

- `gsub` = "global substitute" - replaces ALL occurrences in the line (unlike `sub` which only replaces the first)
- `/:[0-9]{5}/` = the regex pattern to find (colon followed by exactly 5 digits)
- `" PORT& "` = the replacement string
    - `PORT` = literal text "PORT"
    - `&` = special symbol that represents the matched text (so `:50888` becomes `PORT:50888`)
    - The spaces around it create separation in the output
- The semicolon `;` separates this statement from the next

**`print`** - Prints the modified line (after gsub has made the replacements)

**adding your own text in columns**
`awk '{print $3 "->" $5}' modbus.log > ip_pairs.txt`
prints `col3 -> col5` and saves to ip_pairs.txt


