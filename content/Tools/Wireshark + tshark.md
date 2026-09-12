
# Wireshark

## Filtering packets
- you can right click on most fields and chose 'apply as filter' to add a filter and chain conditional filters 
	- "selected" = to show only the packets that match that same value for the field
	- "not selected" = hide packets that match that same value for the field

- you can type a filter and can chain filter with common operators  and conditionals such as `==, !=, ||, &`, etc 

### Example Filters
`!(wlan.da == ff:ff:ff:ff:ff:ff)` =  packets where wlan destination address is not broadcast ( filter out all broadcast packets)
# tshark commands
