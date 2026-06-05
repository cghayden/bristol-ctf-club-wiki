Suspicious HTTP data has been captured in the vicinity of a high-value asset at a cafe. We believe this data may contain information about the asset and who they are. Investigate and identify the traffic and information about it.

Note: The pcap file is not malformed.

[Download witsec.pcap](https://drive.google.com/file/d/1hZok2PPwNIWvyuqiUmuOxaSKtQJmyVZo/view?usp=sharing)

REQUIRED FILE: witsec.pcap

## Q1 - 20 points

What transport-layer protocol is the server listening on?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="Protocol" data-answer="tcp" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 25 points

What HTTP method and URI path is used to send data to the server?  
Example: `OPTIONS /path`

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="METHOD /path" data-answer="post /upload" oninput="let g=this.value.toLowerCase().trim().replace(/\s+/g,' ');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 25 points

How many distinct HTTP endpoints does the server expose, based on observed traffic?

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="Number" data-answer="5" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q4 - 20 points

What hashing algorithm and truncation length are used for the per-chunk integrity checksum of the payload in the web traffic?  
Answer with the algorithm and length, example: `MD5 1`

<div class="answer-checker">
  <p><strong>Q4 Answer:</strong></p>
  <input type="text" placeholder="Algorithm length" data-answer="sha256 4" oninput="let g=this.value.toLowerCase().trim().replace(/-/g,'').replace(/\s+/g,' ');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='sha 256 4'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q5 - 10 points

What is the flag?

<div class="answer-checker">
  <p><strong>Q5 Answer:</strong></p>
  <input type="text" placeholder="SKY-XXXX-0000" data-answer="sky-haro-3559" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>