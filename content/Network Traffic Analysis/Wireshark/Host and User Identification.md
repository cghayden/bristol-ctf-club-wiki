
- DHCP traffic
- NetBIOS (NBNS) traffic 
- Kerberos traffic

## DHCP

| Packet / Data                                                                                                                                        | Filter                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **DHCP Request**  <br>contain the hostname information                                                                                               | dhcp.option.dhcp == 3                                                                        |
| *DHCP Request Options*:<br> 12: Hostname.<br> <br> 50: Requested IP address.<br> <br> 51: Requested IP lease time.<br> <br> 61: Client's MAC address | <br>dhcp.option.hostname contains "keyword"<br><br>dhcp.option.equested_ip_addres == x.x.x.x |
| **DHCP ACK** <br>accepted requests                                                                                                                   | dhcp.option.dhcp == 5                                                                        |
| *DHCP ACK Options*<br>15: Domain name<br>51: Assigned IP lease time                                                                                  | <br>dhcp.option.domain_name contains "keyword"                                               |
| **DHCP NAK** <br>denied requests                                                                                                                     | dhcp.option.dhcp == 6                                                                        |
| *DHCP NAK Options*<br>56: Message (rejection reason)                                                                                                 | N/A                                                                                          |

**only "Option 53" ( request type) has predefined static values**. 

dhcp.option.dhcp checks option 

You should filter the packet type first, and then you can filter the rest of the options by "applying as column" or use the advanced filters like "contains" and "matches".



## NetBIOS (NBNS) Analysis
Global filter: `nbns`

**"NBNS"** options for grabbing the low-hanging fruits:
- **Queries:** Query details,  could contain:
    - **name, Time to live (TTL) and IP address details**
    -  `nbns.name contains "keyword"`


## Kerberos Analysis

**Kerberos** is the default authentication service for Microsoft Windows domains. It is responsible for authenticating service requests between two or more computers over the untrusted network. The ultimate aim is to prove identity securely.

**Kerberos investigation in a nutshell:**

|                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Notes**                                                                                                                                                                                                                                                                                                                                                         | **Wireshark Filter**                                                                                                |
| Global search.                                                                                                                                                                                                                                                                                                                                                    | - kerberos                                                                                                          |
| User account search:<br><br>- **CNameString:**  username.<br><br>Note: *Some packets could provide hostname information in this field. To avoid this confusion, filter the `$` value. The values ending with `$` are hostnames, and the ones without it are user names.*<br>                                                                                      | <br>- kerberos.CNameString contains "keyword"<br><br>kerberos.CNameString and !(kerberos.CNameString contains "$" ) |
| "Kerberos" options for grabbing the low-hanging fruits:<br><br>- **pvno:** Protocol version.<br>- **realm:** Domain name for the generated ticket.<br>- **sname:** Service and domain name for the generated ticket.<br><br>- **addresses:** Client IP address and NetBIOS name.<br><br>*Note: the "addresses" information is only available in request packets.* | <br>kerberos.pvno == 5<br><br>kerberos.realm contains ".org"<br><br>kerberos.SNameString == "krbtg"                 |
