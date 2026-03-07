General syntax:

nmap SCAN_TYPE OPTIONS TARGET

the default scan type  is -sS, SYN scan, *as long as you run with sudo*
-sT ( connect scan) is default for non-sudo
-sS will be quicker and a little quieter

some common useful options:

| **Scanning Options** | **Description**                            |
| -------------------- | ------------------------------------------ |
| `-p 21`              | Scans only the specified port.             |
| `--packet-trace`     | Shows all packets sent and received.       |
| `-n`                 | Disables DNS resolution.                   |
| `--disable-arp-ping` | Disables ARP ping.                         |
| -Pn                  | disable ICMP echo requests (pings)         |
| -sV                  | Version Scan                               |
| -sU                  | UDP Scan                                   |
| -sT                  | Connect Scan                               |
| -A                   | aggresive scan -                           |
| -O                   | OS discovery                               |
| -f                   | fragment packets ( try to avoid detection) |
| --source-port 53     | use port 53 to look simulate DNS request   |
| -D RND:10            | use 10 random ip to avoid getting blocked  |


## 6 possible port states

| **State**          | **Description**                                                                                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `open`             | This indicates that the connection to the scanned port has been established. These connections can be **TCP connections**, **UDP datagrams** as well as **SCTP associations**.                          |
| `closed`           | When the port is shown as closed, the TCP protocol indicates that the packet we received back contains an `RST` flag. This scanning method can also be used to determine if our target is alive or not. |
| `filtered`         | Nmap cannot correctly identify whether the scanned port is open or closed because either no response is returned from the target for the port or we get an error code from the target.                  |
| `unfiltered`       | This state of a port only occurs during the **TCP-ACK** scan and means that the port is accessible, but it cannot be determined whether it is open or closed.                                           |
| `open\|filtered`   | If we do not get a response for a specific port, `Nmap` will set it to that state. This indicates that a firewall or packet filter may protect the port.                                                |
| `closed\|filtered` | This state only occurs in the **IP ID idle** scans and indicates that it was impossible to determine if the scanned port is closed or filtered by a firewall.                                           |

# NMAP Scripting Engine ( NSE )
It provides us with the possibility to create or use preinstalled scripts in Lua for interaction with certain services. There are a total of 14 categories into which these scripts can be divided:

https://nmap.org/nsedoc/

you can stack scripts: --script scriptA, scriptB, scriptC...

**default scripts:**
`sudo nmap <target> -sC`

**specific scripts category:**
`sudo nmap <target> --script <category>`

**defined scripts :**
`sudo nmap <target> --script <script-name>, <script-name>, ...`

find scripts:
search:  `ls /usr/share/nmap/scripts/*http*
To get info on what a script does and how to use it:
`nmap --script-help http-robots.txt=`

to list by type:
`nmap --script <category>`

|**Category**|**Description**|
|---|---|
|`auth`|Determination of authentication credentials.|
|`broadcast`|Scripts, which are used for host discovery by broadcasting and the discovered hosts, can be automatically added to the remaining scans.|
|`brute`|Executes scripts that try to log in to the respective service by brute-forcing with credentials.|
|`default`|Default scripts executed by using the `-sC` option.|
|`discovery`|Evaluation of accessible services.|
|`dos`|These scripts are used to check services for denial of service vulnerabilities and are used less as it harms the services.|
|`exploit`|This category of scripts tries to exploit known vulnerabilities for the scanned port.|
|`external`|Scripts that use external services for further processing.|
|`fuzzer`|This uses scripts to identify vulnerabilities and unexpected packet handling by sending different fields, which can take much time.|
|`intrusive`|Intrusive scripts that could negatively affect the target system.|
|`malware`|Checks if some malware infects the target system.|
|`safe`|Defensive scripts that do not perform intrusive and destructive access.|
|`version`|Extension for service detection.|
|`vuln`|Identification of specific vulnerabilities.|

examples:

use Samba server to query hostname:
`nmap -p 139,445 --script smb-os-discovery 10.129.2.49`

`--script=http-*,ssl-*` 
- run all http and ssl scripts
`--script="default and not (brute or intrusive`
- run defaults in each category, not brute or intrusive ones

