One of the old ladies at the local Grange's knitting group used to work at a government cryptography research facility. She shared this console firmware log to other members of the group as a little side quest. Can you analyze the log and answer the questions?

[Download firmware_log.json](https://drive.google.com/file/d/1u2znWS8OkWI3lW-d0BWu8jZNjX6SwySM/view?usp=sharing)

REQUIRED FILE: firmware_log.json

## Q1 - 25 points

Which firmware versions have the same r value in their ECDSA signatures?  
List all the ones with value reuse, separated by commas.

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="version1, version2, version3" data-answer="v1.20-teacupsaucer-graphicspatch, v1.50-bingocaller-securityupdate, v1.90-yarnbasket-powerupdate" oninput="let g=this.value.toLowerCase().trim().replace(/\s+/g,' ');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 25 points

What is the private signing key used to generate the signatures?  
In decimal form

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="Private key in decimal" data-answer="85599752985006127838339005797352461887899917091096801532412892027761409793706" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 50 points

What is the flag?

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="SKY-XXXX-0000" data-answer="sky-hotz-7913" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>