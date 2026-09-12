
official [Display Filter Reference](https://www.wireshark.org/docs/dfref/)"
## Syntax
Analyze -> Display Filters
Analyze -> Display Filter Expression

 the Display Filter Expressions menu provides an easy-to-use display filter builder guide. It is available under the **"Analyse --> Display Filter Expression"** menu.

Wireshark supports decimal and hexadecimal values in filtering.
### Comparison operators

| English    | C-like | Description                                                         | Example                                      | Alias    |
| :--------- | :----- | :------------------------------------------------------------------ | :------------------------------------------- | :------- |
| `eq`       | `==`   | Equal (any if more than one)                                        | `ip.src == 10.0.0.5`                         | `any_eq` |
| `ne`       | `!=`   | Not equal (all if more than one)                                    | `ip.src != 10.0.0.5`                         | `all_ne` |
|            | `===`  | Equal (all if more than one)                                        | `ip.src === 10.0.0.5`                        | `all_eq` |
|            | `!==`  | Not equal (any if more than one)                                    | `ip.src !== 10.0.0.5`                        | `any_ne` |
| `gt`       | `>`    | Greater than                                                        | `frame.len > 10`                             |          |
| `lt`       | `<`    | Less than                                                           | `frame.len < 128`                            |          |
| `ge`       | `>=`   | Greater than or equal to                                            | `frame.len ge 0x100`                         |          |
| `le`       | `<=`   | Less than or equal to                                               | `frame.len <= 0x20`                          |          |
| `contains` |        | Protocol, field or slice contains a value                           | `sip.To contains "a1762"`                    |          |
| `matches`  | `~`    | Protocol or text field matches a Perl-compatible regular expression | `http.host matches "acme\\.(org\|com\|net)"` |          |

### Logical Expressions
Wireshark supports boolean syntax. You can create display filters by using logical operators as well.

|             |            |                 |                                                                                                                                                                                                  |
| ----------- | ---------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **English** | **C-Like** | **Description** | **Example**                                                                                                                                                                                      |
| and         | &&         | Logical AND     | `(ip.src == 10.10.10.100) AND (ip.src == 10.10.10.111)`                                                                                                                                          |
| or          | \|         | Logical OR      | `(ip.src == 10.10.10.100) OR (ip.src == 10.10.10.111)`                                                                                                                                           |
| not         | !          | Logical NOT     | `!(ip.src == 10.10.10.222)`<br><br>**Note:** Usage of `!=value` is deprecated; using it could provide inconsistent results. Using the `!(value)` style is suggested for more consistent results. |



## Advanced operators and functions

### contains
search for a value inside packets
#### examples
```
http.server contains "Apache"
```

### matches

#### examples
```
http.host matches "\.(php|html)"

# Find all hostnames that contain "php" and "html": 
# List all  HTTP packets where packets' "host" fields match keywords ".php" or ".html".

```

### in
#### examples
```
tcp.port in {80 443 8080}

# Find all packets that use ports 80, 443 or 8080.
```

### upper, lower
Convert a string to upper or lower
#### examples
```
upper(http.server) contains "APACHE"

lower(http.server) contains "apache"
```

### string
Convert a non-string value to a string.

#### examples
```
string(frame.number) matches "[13579]$"

# Convert all "frame number" fields to string values, and list frames end with odd values.
```

### bookmarks
- use the bookmark button to the left of the filter input to save a filter.
- use the '+' sign to the right of the filter input to add a button for a filter.
## ip

### ip filter examples

| Filter                     | Description                                                         |
| -------------------------- | ------------------------------------------------------------------- |
| `ip`                       | Show all IP packets.                                                |
| `ip.addr == 10.10.10.111`  | Show all packets containing IP address 10.10.10.111.                |
| `ip.addr == 10.10.10.0/24` | Show all packets containing IP addresses from 10.10.10.0/24 subnet. |
| `ip.src == 10.10.10.111`   | Show all packets originated from 10.10.10.111                       |
| `ip.dst == 10.10.10.111`   | Show all packets sent to 10.10.10.111                               |

see communication between 2 ip addresses:
`ip.addr == [ip1] && ip.addr == [ip2]`
or
right click on a packet and choose 'conversation filter'

## DNS

[[DNS Record Types|DNS Records]]



| Filter                                              | Description                           |
| --------------------------------------------------- | ------------------------------------- |
| `dns`                                               | Show all DNS packets                  |
| `dns.flags.response == 0`                           | Show all DNS requests                 |
| `dns.flags.response == 1`                           | Show all DNS responses                |
| `dns.qry.type == 1`                                 | Show all DNS "A" records              |
| `(dns.qry.type == 1) and (dns.flags.response == 0)` | Show all DNS requests for "A" records |
## TCP and UDP

### tcp and udp filter examples

| Filter              | Description                                                                                     |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| tcp.port == 80      | Show all TCP packets with port 80                                                               |
| tcp.srcport == 1234 | Show all TCP packets originating from port 1234                                                 |
| tcp.dstport == 80   | Show all TCP packets sent to port 80                                                            |
| udp.dstport == 5353 | Show all UDP packets sent to port 5353                                                          |
| `tcp.flags & 0x02`  | match all packets that contain the “tcp.flags” field with the 0x02 bit, i.e., the SYN bit, set. |

### TCP

[[Traffic Recognition#TCP SYN scan filter]]
[[Traffic Recognition#TCP connect scan filter]]

#### TCP Flags

| **Notes**                                                                                    | **Wireshark Filters**                                                          |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Global search.                                                                               | - `tcp`<br>- `udp`                                                             |
| - Only SYN flag<br><br>- SYN flag is set. The rest of the bits are not important.            | - `tcp.flags == 2`<br><br>- `tcp.flags.syn == 1`                               |
| - Only ACK flag.<br><br>- ACK flag is set. The rest of the bits are not important.           | - `tcp.flags == 16`<br><br>- `tcp.flags.ack == 1`                              |
| - Only SYN, ACK flags.<br><br>- SYN and ACK are set. The rest of the bits are not important. | - `tcp.flags == 18`<br><br>- `(tcp.flags.syn == 1) and (tcp.flags.ack == 1)`   |
| - Only RST flag.<br><br>- RST flag is set. The rest of the bits are not important.           | - `tcp.flags == 4`<br><br>- `tcp.flags.reset == 1`                             |
| - Only RST, ACK flags.<br><br>- RST and ACK are set. The rest of the bits are not important. | - `tcp.flags == 20`<br><br>- `(tcp.flags.reset == 1) and (tcp.flags.ack == 1)` |
| - Only FIN flag<br><br>- FIN flag is set. The rest of the bits are not important.            | - `tcp.flags == 1`<br><br>- `tcp.flags.fin == 1`                               |

### UDP

UDP scan patterns: 
`icmp.type==3 and icmp.code==3`

- `icmp.type == 3` → **Destination Unreachable**
- `icmp.code == 3` → specifically **Port Unreachable**

*Which UDP ports in the 55-70 port range are open?*
` udp.dstport >=55 and udp.dstport <= 70`
- then inspect which ports do not have an ICMP unreachable response
## http

In HTTP, the **HOST header identifies the server/domain the client is trying to reach**, not the client's hostname.

For example, your browser might send:
```
GET /index.html HTTP/1.1
Host: acme.com
```
to request the page index.html at acme.com


| Filter                          | Description                                    |
| ------------------------------- | ---------------------------------------------- |
| `http`                          | Show all HTTP packets                          |
| `http.response.code == 200`     | Show all packets with HTTP response code "200" |
| `http.request.method == "GET"`  | Show all HTTP GET requests                     |
| `http.request.method == "POST"` | Show all HTTP POST requests                    |


## arp
|                                                                                                                                                                                             |                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Notes**                                                                                                                                                                                   | **Wireshark filter**                                                                                                                                                                                                                                   |
| Global search                                                                                                                                                                               | - `arp`                                                                                                                                                                                                                                                |
| Opcode 1: ARP requests.<br><br>Opcode 2: ARP responses.<br><br>**Hunt:**Arp scanning<br><br>**Hunt:**Possible ARP poisoning detection<br><br>**Hunt:**Possible ARP flooding from detection: | - `arp.opcode == 1`<br><br>- `arp.opcode == 2`<br><br>- `arp.dst.hw_mac==00:00:00:00:00:00`<br><br>- `arp.duplicate-address-detected or arp.duplicate-address-frame`<br><br>- `((arp) && (arp.opcode == 1)) && (arp.src.hw_mac == target-mac-address)` |
|                                                                                                                                                                                             |                                                                                                                                                                                                                                                        |
## SMTP

[[SMTP]]
- status codes

| Field name                           | Description                                                     | Type                       | Versions        |
| ------------------------------------ | --------------------------------------------------------------- | -------------------------- | --------------- |
| smtp.auth.password                   | Password                                                        | Character string           | 1.10.0 to 4.6.8 |
| smtp.auth.username                   | Username                                                        | Character string           | 1.10.0 to 4.6.8 |
| smtp.auth.username_password          | Username/Password                                               | Character string           | 2.0.1 to 4.6.8  |
| smtp.base64_decode                   | base64 decode failed or is not enabled (check SMTP preferences) | Label                      | 2.0.1 to 4.6.8  |
| smtp.command_line                    | Command Line                                                    | Character string           | 1.8.0 to 4.6.8  |
| smtp.data.fragment                   | DATA fragment                                                   | Frame number               | 1.0.0 to 4.6.8  |
| smtp.data.fragment.count             | DATA fragment count                                             | Unsigned integer (32 bits) | 1.6.0 to 4.6.8  |
| smtp.data.fragment.error             | DATA defragmentation error                                      | Frame number               | 1.0.0 to 4.6.8  |
| smtp.data.fragment.multiple_tails    | DATA has multiple tail fragments                                | Boolean                    | 1.0.0 to 4.6.8  |
| smtp.data.fragment.overlap           | DATA fragment overlap                                           | Boolean                    | 1.0.0 to 4.6.8  |
| smtp.data.fragment.overlap.conflicts | DATA fragment overlapping with conflicting data                 | Boolean                    | 1.0.0 to 4.6.8  |
| smtp.data.fragment.too_long_fragment | DATA fragment too long                                          | Boolean                    | 1.0.0 to 4.6.8  |
| smtp.data.fragments                  | DATA fragments                                                  | Label                      | 1.0.0 to 4.6.8  |
| smtp.data.reassembled.in             | Reassembled DATA in frame                                       | Frame number               | 1.0.0 to 4.6.8  |
| smtp.data.reassembled.length         | Reassembled DATA length                                         | Unsigned integer (32 bits) | 1.4.0 to 4.6.8  |
| smtp.eom                             | EOM                                                             | Label                      | 2.0.0 to 4.6.8  |
| smtp.message                         | Message                                                         | Character string           | 1.8.0 to 4.6.8  |
| smtp.req                             | Request                                                         | Boolean                    | 1.0.0 to 4.6.8  |
| smtp.req.command                     | Command                                                         | Character string           | 1.0.0 to 4.6.8  |
| smtp.req.parameter                   | Request parameter                                               | Character string           | 1.0.0 to 4.6.8  |
| smtp.response                        | Response                                                        | Character string           | 1.8.0 to 4.6.8  |
| smtp.response.code                   | Response code                                                   | Unsigned integer (32 bits) | 1.0.0 to 4.6.8  |
| smtp.response.code.unexpected        | Unexpected response code in multiline response                  | Label                      | 3.2.0 to 4.6.8  |
| smtp.rsp                             | Response                                                        | Boolean                    | 1.0.0 to 4.6.8  |
| smtp.rsp.parameter                   | Response parameter                                              | Character string           | 1.0.0 to 4.6.8  |

## IMF - Internet Message Format
https://www.wireshark.org/docs/dfref/i/imf.html

## 802.11 filters

**Beacons (find networks)**  
wlan.fc.type_subtype == 8  

**Probe requests (clients searching)**  
wlan.fc.type_subtype == 4  
  
**Authentication**  
wlan.fc.type_subtype == 11  

**Deauthentication attacks**  
wlan.fc.type_subtype == 12  
  
**EAPOL (WPA handshake)**  
eapol

fc = frame control

auth frames: 
wlan.fc.type_subtype == 11

## Examples

*Find all Microsoft IIS servers. What is the number of packets that did not originate from "port 80"?:* 
`(http.server contains "IIS") and !(tcp.port == 80) `

*Which UDP port in the 55-70 port range is open?*
` udp.dstport >= 55 and udp.dstport <= 70 and !(icmp.code==3)`

*find all FTP responses in the x3x series*
`string(ftp.response.code) matches "^[0-9]3[0-9]"`


---


# related

[[Traffic Recognition]]
