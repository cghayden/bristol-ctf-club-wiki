| Command    | Purpose                                        | Example / Notes                                         |
| ---------- | ---------------------------------------------- | ------------------------------------------------------- |
| `pwd`      | Show the current working directory             | `pwd`                                                   |
| `ls`       | List files and directories                     | `ls`                                                    |
| `ls -l`    | List with detailed information                 | Shows permissions, owner, size, modification time, etc. |
| `ls -la`   | Detailed list including hidden files           | Hidden files begin with `.`                             |
| `cd`       | Change directory                               | `cd /var/log`                                           |
| `cd ..`    | Move up one directory                          | `..` represents the parent directory                    |
| `cd ~`     | Go to your home directory                      | `~` represents your home directory                      |
| `mkdir`    | Create a directory                             | `mkdir reports`                                         |
| `mkdir -p` | Create directories including missing parents   | `mkdir -p labs/nmap/results`                            |
| `touch`    | Create an empty file or update its timestamp   | `touch notes.txt`                                       |
| `cp`       | Copy a file                                    | `cp source.txt copy.txt`                                |
| `cp -r`    | Copy a directory recursively                   | `cp -r source/ backup/`                                 |
| `mv`       | Move or rename a file/directory                | `mv old.txt new.txt`                                    |
| `rm`       | Delete a file                                  | `rm file.txt`                                           |
| `rm -r`    | Delete a directory and its contents            | `rm -r directory/`                                      |
| `rmdir`    | Delete an empty directory                      | `rmdir directory/`                                      |
| `cat`      | Print or combine file contents                 | `cat file.txt`                                          |
| `less`     | View text one screen at a time                 | `less file.txt`                                         |
| `more`     | Paginate text output                           | `more file.txt`                                         |
| `head`     | Display the first 10 lines                     | `head file.txt`                                         |
| `tail`     | Display the last 10 lines                      | `tail file.txt`                                         |
| `tail -f`  | Continuously display new lines added to a file | `tail -f /var/log/syslog` — useful for logs             |
| `echo`     | Print text or variable values                  | `echo "Hello"` or `echo $PATH`                          |
| `file`     | Identify a file's type                         | `file suspicious.bin`                                   |
| `strings`  | Extract printable strings from a file          | `strings suspicious.bin`                                |
| `xxd`      | Display a file as hexadecimal                  | `xxd suspicious.bin`                                    |
| `grep`     | Search text for a string or pattern            | `grep "ERROR" logfile.txt`                              |
| `find`     | Find files and directories                     | `find /var/log -name "*.log"`                           |
| `whoami`   | Display the current username                   | `whoami`                                                |
| `id`       | Show user and group IDs/memberships            | `id`                                                    |
| `uname`    | Display system information                     | `uname -a`                                              |
| `hostname` | Display the system hostname                    | `hostname`                                              |
| `chmod`    | Change file permissions                        | `chmod +x script.sh`                                    |
| `chown`    | Change file owner/group                        | `sudo chown user:group file.txt`                        |
| `sudo`     | Execute a command with elevated privileges     | `sudo apt update`                                       |
| `man`      | Display a command's manual page                | `man grep`                                              |
| `history`  | Display command history                        | `history`                                               |
| `clear`    | Clear the terminal screen                      | `clear`                                                 |
| `wget`     | Download files from a URL                      | `wget https://example.com/file.txt`                     |
| `curl`     | Transfer data to/from URLs                     | `curl https://example.com`                              |
| `tar`      | Create or extract tar archives                 | `tar -xf archive.tar`                                   |
| `zip`      | Create a ZIP archive                           | `zip archive.zip file.txt`                              |
| `unzip`    | Extract a ZIP archive                          | `unzip archive.zip`                                     |
| `ip`       | View/configure network interfaces and routes   | `ip addr` or `ip route`                                 |
| `ss`       | Display network sockets/connections            | `ss -tulpn`                                             |
| `ping`     | Test network reachability                      | `ping 8.8.8.8`                                          |