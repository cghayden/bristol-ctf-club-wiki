https://networkproguide.com/wireshark-display-filters-cheat-sheet/

## Resources
- [Resources](https://www.wireshark.org/resources)
- [Documentation](https://www.wireshark.org/docs/)
- [Wiki](https://wiki.wireshark.org/)
- [Sample Captures](https://www.wireshark.org/resources#sample-captures)

- [Tools](https://www.wireshark.org/tools/)
- [OUI Lookup](https://www.wireshark.org/tools#oui-lookup)
- [WPA PSK Generator](https://www.wireshark.org/tools/wpa-psk)
- [IPv4/IPv6 Test](https://www.wireshark.org/tools/v46status)
- [Modeline Generator](https://www.wireshark.org/tools/modelines)
- [Capture Filter Generator](https://www.wireshark.org/tools/string-cf)


## Useful Settings
Edit --> Preferences --> Name Resolution 
- MAC addresses and common port names
- DNS to IP in statistics charts
## DNS
DNS - see what sites are being requested
Statistics > DNS Query - Response... see the *From* row at the end to see clients making DNS requests

## Email
IMF message format - use filters

## Searching / Find a Packet
Edit -> Find Packet
1 - Input Type
    Display filter, Hex, String and Regex
2 - Search Field
    packet list, packet details, and packet bytes

## Comments on Packet
**Add a comment to any packet:**
Edit -> Packet Comments

## Export packets


## Export Objects
Wireshark can extract files transferred through the wire
available only for selected protocol's streams:
- DICOM
- HTTP
- IMF
- SMB
- TFTP

## Statistics
### Resolved Addresses
IP addresses and DNS names available in the capture file

### Protocol Hierarchy

### Conversation

### Endpoints

### DNS

### IPv4 and 6 statistics

### HTTP

## Profiles

save a profile of settings

bottom right or Edit --> Configuration Profiles
## Expert Info
Suggestions of possible anomalies

 Analyse --> Expert Information
 or click the bottom left corner



## Filters
[[Filters]]



### tcp


`tcp.port in {80, 443, 8080}`
`http.request.method in {"HEAD", "GET"}`
`ip.addr in {10.0.0.5 .. 10.0.0.9, 192.168.1.1..192.168.1.9}`

### Type 0 — Wi-Fi Management Frames

|Subtype|Decimal|Filter|Meaning|
|---|---|---|---|
|0x00|0|`wlan.fc.type_subtype == 0`|Association Request|
|0x01|1|`== 1`|Association Response|
|0x02|2|`== 2`|Reassociation Request|
|0x03|3|`== 3`|Reassociation Response|
|0x04|4|`== 4`|Probe Request|
|0x05|5|`== 5`|Probe Response|
|0x06|6|`== 6`|Timing Advertisement|
|0x08|8|`== 8`|Beacon|
|0x09|9|`== 9`|ATIM|
|0x0A|10|`== 10`|Disassociation|
|0x0B|11|`== 11`|Authentication|
|0x0C|12|`== 12`|Deauthentication|
|0x0D|13|`== 13`|Action|
|0x0E|14|`== 14`|Action No Ack|
### wep management frames
wlan.wep == 1 && wlan.wep.iv.  -- quickly get SSID

### extract a jpeg from http
filter: `http &&(http.content_type contains "jpeg")` to look for files

in this instance, it returned 1 packet...
I didn't even have to select the packet, I only had to:

"File --> Export Objects --> HTTP" ... 
this separates out the files automatically

### query parameters
**http.request.uri contains "?"**. -- search for requests that have query parameters

### Deauth Frames

- `wlan.fc.type_subtype == 0x0c` — Show all deauthentication frames.    
- `wlan.ta == c0:4a:00:80:76:e4` — See deauths sent from your AP.
- `wlan.ra == e4:e0:a6:4e:4f:07` — See deauths directed at this specific client.

