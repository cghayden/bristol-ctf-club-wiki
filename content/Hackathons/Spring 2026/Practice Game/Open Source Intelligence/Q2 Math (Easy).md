Help double check the work of some new recruits by doing some binary math. Provide your answer in base 10.

Q1 - 10 points  
0x25 | 0x48

Q2 - 10 points  
0x79 & 0xF5

Q3 - 10 points  
0xC9 ^ 0x14

Q4 - 10 points  
0xED >> 1

Q5 - 10 points  
0xB << 2

```text
bit-hacks

notation

|   - bitwise or
&   - bitwise and
~   - bitwise not
^   - bitwise xor
<<  - bitwise shift left
>>  - bitwise shift right


operations

not(0) = 1 => ~0
not(1) = 0 => ~1

0 or 0 = 0 => 0|0
0 or 1 = 1 => 0|1
1 or 0 = 1 => 1|0
1 or 1 = 1 => 1|1

0 and 0 = 0 => 0&0
0 and 1 = 0 => 0&1
1 and 0 = 0 => 1&0
1 and 1 = 1 => 1&1

0 xor 0 = 0 => 0^0
0 xor 1 = 1 => 0^1
1 xor 0 = 1 => 1^0
1 xor 1 = 0 => 1^1


x & x = x   => 1010 & 1010 == 1010
x & 0s = 0  => 1010 & 0000 == 0000
x & 1s = x  => 1010 & 1111 == 1010

x | x = x   => 1010 | 1010 == 1010
x | 0s = x  => 1010 | 0000 == 1010
x | 1s = 1s => 1010 | 1111 == 1111

x ^ x = 0   => 1010 ^ 1010 == 0000
x ^ 0s = x  => 1010 ^ 0000 == 1010
x ^ 1s = ~x => 1010 ^ 1111 == 0101


shift-left & shift-right

2 << 1 => '4',   the same as 2 * (2**1)
2 << 2 => '8',   the same as 2 * (2**2)
8 >> 1 => '4',   the same as 8 / (2**1)
8 >> 2 => '2',   the same as 8 / (2**2)
9 >> 2 => '2',   the same as 9 / (2**2)
9 << 4 => '144', the same as 9 * (2**4)


Credit

https://github.com/knoxknox/bit-hacks
```

```text
X  Y  X&Y  X|Y  X^Y  ~(X)
0  0   0    0    0     1
0  1   0    1    1     1
1  0   0    1    1     0
1  1   1    1    0     0
```
