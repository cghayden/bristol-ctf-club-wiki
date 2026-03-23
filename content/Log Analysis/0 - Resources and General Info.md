you can achieve a lot from the command line, using awk, sort, uniq, -c, etc

AI will tell you how the commands to get what you want... 
refer to the page on awk usage, and the NCL walkthrough, linked below:
[[awk]]
[NCL nginx walkthrough](https://trove.cyberskyline.com/7884f0c64e8b46cea64332a77b5ef56e)
[NCL vsftpd walkthrough](https://trove.cyberskyline.com/a9aad5ab10334ac4ab37bdd04058e1ba)

using a spreadsheet is also very helpful... 
watch this NCL walkthrough to get an idea of how to do that:

# using Spreadsheets
[NCL spreadsheets wealkthrough](https://www.youtube.com/watch?v=w2uJVWPTvCo&t=1139s)
copy and paste into a google sheet or excel, 
or 
convert to a csv first if you can,
or just upload the file and open in a spreadsheet.

# useful commands

|   |   |   |   |
|---|---|---|---|
|Command|Use|Examples|Common Flags|
|cat|Outputting text|cat output2.txt(takes text of file ‘output2.txt’ and prints it to the terminal window)||
|\||Piping|cat output2.txt \| [2nd command] (takes text of file output2.txt and uses it as an input for the next command)|N/A|
|grep|Pattern matching|grep -i ‘example’Prints all lines with ‘example’|-i, -v|
|awk|Everything|awk ‘{print $3}’(prints 3rd column of text)||
|wc|Word count|cat file.txt \| wc -l(Counts lines in file.txt)|-l, -c, -w|
|sort|Sorts output|cat file.txt \| awk ‘{print $7}’ \| sort -d(takes the output from awk and sorts it in dictionary order)|-d, -n|
|uniq|Remove duplicates|cat file.txt \| sort \| uniq|-c|