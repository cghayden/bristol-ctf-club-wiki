While wardriving near a suspected Liber8tion hideout, we captured some wireless traffic. We already failed to find the passwords with everyone's favorite leaked password database. But Kali has other wordlists, maybe there is one from Kali's wordlist package, version `2026.1.2`, that is specifically useful for wireless networks? Can you figure out how to attack the passwords?

- [Download capture-1.cap](https://drive.google.com/file/d/1OvoqoPGfIPL98igBsVyRYpdP7ED8XI39/view?usp=sharing)
- [Download capture-2.pcapng](https://drive.google.com/file/d/1USyabfBbWGmmSlZljvtZM6WC5UvQvrmT/view?usp=sharing)

REQUIRED FILES: capture-1.cap, capture-2.pcapng

## Q1 - 5 points

What is the SSID of the network in `capture-1.cap`?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="SSID" data-answer="liber8_guest" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 15 points

What is the password from `capture-1.cap`?

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="Password" data-answer="correct horse battery staple" oninput="let g=this.value.toLowerCase().trim().replace(/\s+/g,' ');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 10 points

What application generated the `capture-2.pcapng` capture file?

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="Application/version" data-answer="hcxdumptool 7.0.0" oninput="let g=this.value.toLowerCase().trim().replace(/\s+/g,' ');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='hcxdumptool'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q4 - 5 points

What is the SSID of the network in `capture-2.pcapng`?

<div class="answer-checker">
  <p><strong>Q4 Answer:</strong></p>
  <input type="text" placeholder="SSID" data-answer="liber8_private" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q5 - 15 points

What is the password from `capture-2.pcapng`?

<div class="answer-checker">
  <p><strong>Q5 Answer:</strong></p>
  <input type="text" placeholder="Password" data-answer="prettyflyforawifi" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>