We recently discovered that one of our servers was hacked. Discover what information was stolen, what attacks were launched, and suggest recommendations for preventing future attacks.

REQUIRED FILES: capture.pcap, tls_keys.log

## Q1 - 5 points

What is the IP address of the host receiving POST messages from the attackers?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="IP address" data-answer="172.26.0.5" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 5 points

What layer 2 protocol was abused allowing the hackers to intercept traffic?

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="Protocol" data-answer="arp" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 5 points

What is the IP address of the compromised host?

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="IP address" data-answer="172.26.0.3" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q4 - 5 points

What IP address did the compromised host impersonate?  
Enter as comma separated IP addresses, example: `192.168.0.1,192.168.0.2`

<div class="answer-checker">
  <p><strong>Q4 Answer:</strong></p>
  <input type="text" placeholder="IP1,IP2" data-answer="172.26.0.4,172.26.0.5" oninput="let g=this.value.trim().replace(/\s+/g,'');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='172.26.0.5,172.26.0.4'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q5 - 10 points

What version of NGINX is used as noted in the response headers?

<div class="answer-checker">
  <p><strong>Q5 Answer:</strong></p>
  <input type="text" placeholder="Version" data-answer="1.29.4" oninput="let g=this.value.toLowerCase().trim().replace(/^nginx\//,'');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q6 - 10 points

What is the value of the flag extracted by the attackers?

<div class="answer-checker">
  <p><strong>Q6 Answer:</strong></p>
  <input type="text" placeholder="SKY-XXXX-0000" data-answer="sky-idvs-8461" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q7 - 20 points

By how many bits does the length of a packet differ from a successful guess vs an unsuccessful guess?

<div class="answer-checker">
  <p><strong>Q7 Answer:</strong></p>
  <input type="text" placeholder="Number of bits" data-answer="8" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q8 - 10 points

What data compression algorithm is used by NGINX to compress HTTP response content?

<div class="answer-checker">
  <p><strong>Q8 Answer:</strong></p>
  <input type="text" placeholder="Compression algorithm" data-answer="gzip" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q9 - 30 points

What is the name of the attack carried out to extract the flag in this packet capture?  
Answer with the acronym, not the full name.

<div class="answer-checker">
  <p><strong>Q9 Answer:</strong></p>
  <input type="text" placeholder="Attack acronym" data-answer="breach" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>