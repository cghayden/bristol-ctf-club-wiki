Dissect a DNS packet to understand how the protocol works. The hex dump contains raw DNS application data without any encapsulation.

Q1 - 15 points  
What is the Transaction ID of this DNS response?  
In hex

Q2 - 20 points  
How many answer resource records are in this DNS packet?

Q3 - 25 points  
What is the queried domain from this DNS request?

Q4 - 25 points  
What is the queried record type in the DNS query?

Q5 - 25 points  
What is the value of the response record with the highest priority?

```text
0000   f7 b1 81 80 00 01 00 05 00 00 00 01 0d 73 74 61
0010   63 6b 6f 76 65 72 66 6c 6f 77 03 63 6f 6d 00 00
0020   0f 00 01 c0 0c 00 0f 00 01 00 00 01 2c 00 13 00
0030   01 05 61 73 70 6d 78 01 6c 06 67 6f 6f 67 6c 65
0040   c0 1a c0 0c 00 0f 00 01 00 00 01 2c 00 09 00 05
0050   04 61 6c 74 31 c0 31 c0 0c 00 0f 00 01 00 00 01
0060   2c 00 09 00 05 04 61 6c 74 32 c0 31 c0 0c 00 0f
0070   00 01 00 00 01 2c 00 09 00 0a 04 61 6c 74 33 c0
0080   31 c0 0c 00 0f 00 01 00 00 01 2c 00 09 00 0a 04
0090   61 6c 74 34 c0 31 00 00 29 10 00 00 00 00 00 00
00a0   00
```
![[packet.png]]