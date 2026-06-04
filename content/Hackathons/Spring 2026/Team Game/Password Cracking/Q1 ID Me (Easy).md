As a password cracker in training, your first task is to know your hashes. We have a couple strings here. Can you tell us what hashing algorithm they use?

## Q1 - 10 points

50aab13360becf9e08f6a7dde24cb365

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="Hash type" data-answer="md5" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 10 points

09627a508903df64ed37996003cfd308d6408035780fe6b46452b470133a2f87

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="Hash type" data-answer="sha256" oninput="let g=this.value.toLowerCase().trim().replace(/-/g,'');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='sha2' || g==='sha256sum'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 10 points

$2a$12$UDIxOOFSl9Sil/7FPx3SAeIEyWCmjyBmc0kQEhBIoRPIqymAILeIS

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="Hash type" data-answer="bcrypt" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q4 - 10 points

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNTIEFkbWluIiwiYWRtaW4iOnRydWUsImlhdCI6MjQ2ODM4MzJ9.D3nc4g2m3nNcphNZCCKeJHJs6hfnkEH-WmwlxFbcTWw

<div class="answer-checker">
  <p><strong>Q4 Answer:</strong></p>
  <input type="text" placeholder="Hash/token type" data-answer="jwt" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='json web token'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>