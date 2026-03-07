# intercept responses
Proxy > Options --> Response Interception Tools ->  Intercept Responses based on the following rules

proxy options allow you to intercept and manipulate requests and responses

send a request to repeater to manipulate and send

send to intruder to set up fuzzing
# automatic modification
## response and requests automatic modification
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

# Intruder - fuzzer
https://portswigger.net/burp/documentation/desktop/tools/intruder/positions#attack-type
**capped at 1 request per second** in community edition

uncheck exclude headers in options ( left side tabs ) 

**Wordlists:**
https://github.com/danielmiessler/SecLists/tree/master
https://github.com/danielmiessler/SecLists/tree/master/Discovery/Web-Content

CTRL+I / send to intruder

Intruder > Target

Intruder uses attack type, positions (pointers), and payloads
## Positions ( intruder )

The second tab, '`Positions`', is where we place the payload position pointer, which is the point where words from our wordlist will be placed and iterated over.

To check whether a web directory exists, our fuzzing should be in '`GET /DIRECTORY/`', such that existing pages would return `200 OK`, otherwise we'd get `404 NOT FOUND`. So, we will need to select `DIRECTORY` as the payload position, by either wrapping it with `§` or by selecting the word `DIRECTORY` and clicking on the `Add §`:

### sniper - good for most
uses only one payload injection position

## Payload ( Intruder )
choose and customize payloads/wordlists. This payload/wordlist is what will be iterated over, and each line of it will be placed and tested one by one in the Payload Position we specify. There are four ways to configure payloads:
- Payload Sets
- Payload Options
- Payload Processing
- Payload Encoding
#### Payload Sets
 First:  The payload set identifies the Payload number, depending on the attack type and number of Payloads we used in the Payload Position Pointers:
Usually, you only need one Payload Set, so choose  '`Sniper` Attack type with only one payload position. If we have chosen the '`Cluster Bomb`' attack type, for example, and added several payload positions, we would get more payload sets to choose from and choose different options for each..  If only one payload, this option will not be available

##### Payload Type
the type of payloads/wordlists we will be using. Burp provides a variety of Payload Types, each of which acts in a certain way. For example:

- `Simple List`: The basic and most fundamental type. We provide a wordlist, and Intruder iterates over each line in it

- `Runtime file`: Similar to `Simple List`, but loads line-by-line as the scan runs to avoid excessive memory usage by Burp.

- `Character Substitution`: Lets us specify a list of characters and their replacements, and Burp Intruder tries all potential permutations.
#### Payload Configuration / Options 
Second:   specify the Payload Options, which is different for each Payload Type we select in `Payload Sets`.
For a `Simple List`, we have to create or load a wordlist.

Can add to or edit the list once loaded, to combine multiple wordlists customize

Tip: In case you wanted to use a very large wordlist, it's best to use `Runtime file` as the Payload Type instead of `Simple List`, so that Burp Intruder won't have to load the entire wordlist in advance, which may throttle memory usage.
#### Payload Processing

Third: `Payload Processing` allows us to determine fuzzing rules over the loaded wordlist. For example, if we wanted to add an extension after our payload item, or if we wanted to filter the wordlist based on specific criteria, we can do so with payload processing.

For example, you could skip any linesin the wordlist  that start with a `.` by clicking on the `Add` button and then selecting `Skip if matches regex`, which allows us to provide a regex pattern for items we want to skip. Then, we can provide a regex pattern that matches lines starting with `.`, which is: `^\..*$`:

#### Payload Encoding
Fourth: `Payload Encoding`, enabling us to enable or disable Payload URL-encoding.

We'll leave it enabled.

## Options ( intruder )

Finally, we can customize our attack options from the `Options` tab. There are many options we can customize (or leave at default) for our attack. For example, we can set the number of `retried on failure` and `pause before retry` to 0.

Another useful option is the `Grep - Match`, which enables us to flag specific requests depending on their responses. As we are fuzzing web directories, we are only interested in responses with HTTP code `200 OK`. So, we'll first enable it and then click `Clear` to clear the current list. After that, we can type `200 OK` to match any requests with this string and click `Add` to add the new rule. Finally, we'll also disable `Exclude HTTP Headers`, ( we do want to include them ) as what we are looking for is in the HTTP header:

We may also utilize the `Grep - Extract` option, which is useful if the HTTP responses are lengthy, and we're only interested in a certain part of the response. So, this helps us in only showing a specific part of the response. We are only looking for responses with HTTP Code `200 OK`, regardless of their content, so we will not opt for this option.

Try other `Intruder` options, and use Burp help by clicking on `?` next to each one to learn more about each option.

Note: We may also use the `Resource Pool` tab to specify how much network resources Intruder will use, which may be useful for very large attacks. For our example, we'll leave it at its default values.

## Attack

Now that everything is properly set up, we can click on the `Start Attack` button and wait for our attack to finish. Once again, in the free `Community Version`, these attacks would be very slow and take a considerable amount of time for longer wordlists.

The first thing we will notice is that all lines starting with `.` were skipped, and we directly started with the lines after them:
We can also see the `200 OK` column, which shows requests that match the `200 OK` grep value we specified in the Options tab. We can click on it to sort by it, such that we'll have matching results at the top. Otherwise, we can sort by `status` or by `Length`. Once our scan is done, we see that we get one hit `/admin`:


# ZAP ( OWASP )
ZAP is a free proxy tool similar to burpsuite.

the scanner is free, and the fuzzer is not rate-limited

use spider to crawl directories, then Scan to scan the directory tree...
