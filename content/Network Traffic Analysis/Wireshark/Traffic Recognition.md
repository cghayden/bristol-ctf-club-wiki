## nmap scans

### TCP connect scan filter:
```
tcp.flags.syn==1 and tcp.flags.ack==0 and tcp.window_size > 1024
```

Open TCP Port, Connect scan
![[Pasted image 20260911104646.png]]

Closed TCP port, Connect Scan
![[Pasted image 20260911104704.png]]


### TCP SYN scan filter:
```
`tcp.flags.syn==1 and tcp.flags.ack==0 and tcp.window_size <= 1024`
```

Open TCP Port, SYN Scan
![[Screenshot 2026-09-03 at 2.35.15 PM.png]]

Closed TCP Port, SYN Scan
![[Screenshot 2026-09-03 at 2.35.48 PM.png]]

- Doesn't require a handshake process
- No prompt for open ports
- ICMP error message for close ports

#### UDP scan patterns filter:
`icmp.type==3 and icmp.code==3`

- `icmp.type == 3` → **Destination Unreachable**
- `icmp.code == 3` → specifically **Port Unreachable**

For ICMP Type 3, some common codes are:

- Type 3, Code 0 → Network Unreachable
- Type 3, Code 1 → Host Unreachable
- Type 3, Code 2 → Protocol Unreachable
- Type 3, Code 3 → **Port Unreachable**
- Type 3, Code 4 → Fragmentation Needed

![[Screenshot 2026-09-03 at 2.36.37 PM.png]]

To see the ports, open the details for the packet


## arp
### legitimate

### suspicious



## DNS

signs of DNS trouble:
- Query length.
- Anomalous and non-regular names in DNS addresses.
- Long DNS addresses with encoded subdomain addresses.
- Known patterns like dnscat and dns2tcp.
- Statistical analysis like the anomalous volume of DNS requests for a particular target.

```shell cmd:#
# filters:

dns contains "dnscat"
dns contains "dns2tcp"

dns.qry.name.len > 15 and !mdns

# !mdns -> Disable local link device queries.


```

## ICMP
```shell cmd:#
# find abnormal icmp packete sizes:
icmp and data.len > 64

# look for abnormal ICMP payload

```

# related
[[Filters]]
