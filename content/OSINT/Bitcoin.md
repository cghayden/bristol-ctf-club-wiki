
The best blockchain explorers are:
[Blockchair](https://blockchair.com) and [Wallet Explorer](https://www.walletexplorer.com/ "https://www.walletexplorer.com/")

Wallet Explorer: will search by partial address

Blockchair: the explorer can be difficult to find and understand how to use..
this is a sample query url:
https://blockchair.com/bitcoin/outputs?s=value(asc)&q=value(4.9..5.1),time(2024-11-01..2024-11-30),value_usd(480000..490000),type(witness_v0_keyhash)#f=time,value,value_usd,recipient,type,spending_value_usd

this will search for transactions that are between 4.9 and 5.1 bitcoin, $480,000 and $490,000, between the dates 2024-11-01 and 2024-11-30, type of address=witness+v0_keyhash
the \#f denotes how to display the results...

- you can alter or omit any of these fields
- there are filter parameters on the left of the page that you can adjust.
- there are different types of address hashes that produce different types and lengths of transaction hashes, so you will want to find out what 'type' of address you are looking for in order to filter on that type.  This will help you narrow down the search results.

*Transactions are stored in blocks, so you might have to first find the block that contains the transaction and addresses you are looking for.*

