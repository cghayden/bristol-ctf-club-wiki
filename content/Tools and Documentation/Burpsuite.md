
# basic usage
- Open Burp, click on 'Proxy' > click 'Open Browser'
- in the chromium window that opens, navigate to your target.
- 'Proxy > HTTP History' shows all requests made from Burp's Chromium browser
- click on any of these to inspect, right click to choose options... for example:
	- send to Repeater - to quickly modify the request and resend, as many times as you want
	- send to Intruder - to modify the request and fuzz with a wordlist or values of your choice

# Burp Repeater
Use to quickly alter, send, then alter, send again any request, and view the responses without leaving the window.

Ctrl-R or right click on a request in Proxy > HTTP History to send to Repeater

In Repeater, you can edit any field directly or in the listings on the right.

# Burp Intruder / Fuzzing
[Documentation](https://portswigger.net/burp/documentation/desktop/tools/intruder/positions#attack-type)

From the Proxy > HTTP History tab, choose a request and send it to Intruder ( CTRL+I , or right-click)

In Intruder:
- 1. 'Sniper' style attack is usually sufficient
- 2. Highlight the value you want to change / manipulate
	- this can be the value of a post request, a URL endpoint, header value, etc.
	- Click `Add §` 
		- the area within these markers will be treated as a variable that Burp will change with every request.
- 3. In the 'Payloads' area:
	- Set Payload Type 
		- Simple List - wordlist or custom list, which you can set in the Payload configuration right below
		- Numbers - iterate over a sequence
		- **RuntimeFile**  - loads line-by-line as the scan runs to avoid excessive memory usage. 
			- *to use a very large wordlist, it's best to use Runtime file as the Payload Type instead of Simple List, so that Burp Intruder won't have to load the entire wordlist in advance, which may throttle memory usage.*
- 4. In the 'Settings' tab, you can set conditions for each request, such as:
	- Follow redirections
	- search for strings or regex in a response, and pause or highlight them if found
- 5. Start Attack..
- A new window will open with the results... look for differences in size of the responses,... you can click any request to inspect the details

**NOTE:**
Intruder is **capped at 1 request per second** in community edition

For a faster fuzz, you can us *ffuf* on the command line... 


**Useful Wordlists:**
https://github.com/danielmiessler/SecLists/tree/master
https://github.com/danielmiessler/SecLists/tree/master/Discovery/Web-Content


# Exploit race conditions
- in Burp, send a request ( usually a POST to exploit a race condition ) to repeater
- click on the '+' symbol next to the tab, or right click on the tab and create a tab group, adding the tab(s) to the group
- once the group is created, right click the tab and choose 'duplicate tab'
- choose how many duplicates you want
- In the 'Send' drop-down menu, you can choose options on how to send all off the requests in the group...
- **Send Group in Parallel** gives you the most likely chance to exploit a race condition
- the result is that you can POST to a endpoint multiople times before the server has a chance to update the result of the POST.  For example, you could repeatedly purchase something before the server has a chance to debit your account.

# intercept responses
Proxy > Options --> Response Interception Tools ->  Intercept Responses based on the following rules

proxy options allow you to intercept and manipulate requests and responses

send a request to repeater to manipulate and send

send to intruder to set up fuzzing
# automatic modification of response and requests
Options > Proxy > ... ( interception and modification option to apply to each req/res )

Can choose to match any text within our requests or responses, such as  in the request header or body, and then replace them with different text.  For example, you can replace our `User-Agent`, which may be handy in cases where we may be dealing with filters that block certain User-Agents.

Or, alter html in the incoming Response body:
Proxy > Options > HTTP Match and Replace
- `Type`: `Response body`.
- `Match`: `type="number"`.
- `Replace`: `type="text"`.
- `Regex match`: False.


# url encoding and decoding
Decoder Tab

select text and right click on it, 
select,  CTRL+U
can also enable url encoding as you type

- `Spaces`: May indicate the end of request data if not encoded
- `&`: Otherwise interpreted as a parameter delimiter
- `#`: Otherwise interpreted as a fragment identifier

There are other types of URL-encoding, like `Full URL-Encoding` or `Unicode URL` encoding, which may also be helpful for requests with many special characters.

- HTML
- Unicode
- Base64
- ASCII hex




# ZAP ( OWASP ) - Burp Alternative
ZAP is a free proxy tool similar to burpsuite.

the scanner is free, and the fuzzer is not rate-limited

use spider to crawl directories, then Scan to scan the directory tree...
