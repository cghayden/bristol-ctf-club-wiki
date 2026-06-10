We are tracking an ongoing malware campaign leveraging a variant of the ClickFix attack known as FileFix, which is documented in detail by Acronis.

We want you to synthesize their findings and extract specific TTPs, mapped to the MITRE ATT&CK framework, for use in an internal tool. However, this tool hasn't been kept up-to-date with MITRE's own ATT&CK updates. For the specific techniques and sub-techniques to be valid, you will need to use MITRE ATT&CK v8. Otherwise, our tool won't know what to do with the technique ID.

## Q1 - 5 points

Who is the author of the original POC, Proof of Concept, of the FileFix attack?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="Author name" data-answer="mr. d0x" oninput="let g=this.value.toLowerCase().trim().replace(/\s+/g,' ');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='mr d0x'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 5 points

What technique is used in this campaign for initial access?  
Format: `T0001`

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="T0001" data-answer="t1566" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 5 points

What Execution techniques do the attackers in this ClickFix campaign use to move beyond initial access?  
2 answers, format: `T0001, T0002`

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="T0001, T0002" data-answer="t1204, t1059" oninput="let g=this.value.toLowerCase().trim().replace(/\s+/g,' ');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='t1059, t1204'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q4 - 5 points

What specific Defense Evasion sub-technique is used by the first payload?  
Format: `T0001.001`

<div class="answer-checker">
  <p><strong>Q4 Answer:</strong></p>
  <input type="text" placeholder="T0001.001" data-answer="t1027.003" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q5 - 10 points

What software do the payloads deliver onto the victim's device?

<div class="answer-checker">
  <p><strong>Q5 Answer:</strong></p>
  <input type="text" placeholder="Software name" data-answer="stealc" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q6 - 10 points

What known IOC IP does the software from Q5 communicate with?  
Format: `127[.]0[.]0[.]1`

<div class="answer-checker">
  <p><strong>Q6 Answer:</strong></p>
  <input type="text" placeholder="127[.]0[.]0[.]1" data-answer="77[.]90[.]153[.]225" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='77.90.153.225'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q7 - 10 points

What Defense Evasion techniques does the software from Q5 use?  
Name two, format: `T0001, T0002`

<div class="answer-checker">
  <p><strong>Q7 Answer:</strong></p>
  <input type="text" placeholder="T0001, T0002" data-answer="t1027, t1497" oninput="let g=this.value.toLowerCase().trim().replace(/\s+/g,' ');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='t1497, t1027'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q8 - 10 points

What sub-technique does the software from Q5 use for Command & Control?  
Format: `T0001.001`

<div class="answer-checker">
  <p><strong>Q8 Answer:</strong></p>
  <input type="text" placeholder="T0001.001" data-answer="t1071.001" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

