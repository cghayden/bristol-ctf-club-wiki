Liber8tion might be hopping around in a local company's AD domain. Can you trace their steps?
- [Download logs_powershell.xml](https://drive.google.com/file/d/1WvagJTLIEb7B7fFNFsDBRs4u_RN6XktI/view?usp=sharing)
- [Download logs_security.xml](https://drive.google.com/file/d/1ORUnhqPuotCUv_EuC7CsliQRsU2D6Ysk/view?usp=sharing)
REQUIRED FILES: logs_powershell.xml, logs_security.xml

## Q1 - 10 points

What is the TargetUserName of the account that shows unusual logon activity?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="Username" data-answer="mnguyen" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 10 points

What authentication package was used in the suspicious login?

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="Authentication package" data-answer="ntlm" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 20 points

What is the exact timestamp of the first powershell event performed by the user account after the suspicious login?  
Format: `%Y-%m-%dT%H:%M:%S.%fZ`

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="Timestamp" data-answer="2026-04-07t01:20:32.364008z" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q4 - 10 points

Which host processed the suspicious account's replication request?

<div class="answer-checker">
  <p><strong>Q4 Answer:</strong></p>
  <input type="text" placeholder="Hostname" data-answer="dc2.cityinthe.cloud" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q5 - 10 points

What sensitive AD object was targeted in the replication request?

<div class="answer-checker">
  <p><strong>Q5 Answer:</strong></p>
  <input type="text" placeholder="AD object" data-answer="cn=krbtgt,cn=users,dc=cityinthe,dc=cloud" oninput="let g=this.value.toLowerCase().trim().replace(/\s+/g,'');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q6 - 10 points

How many replication events did the attacker generate?

<div class="answer-checker">
  <p><strong>Q6 Answer:</strong></p>
  <input type="text" placeholder="Number" data-answer="5" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q7 - 10 points

What GUID corresponds to a permission that allows extraction of password hashes?

<div class="answer-checker">
  <p><strong>Q7 Answer:</strong></p>
  <input type="text" placeholder="GUID" data-answer="1131f6ad-9c07-11d1-f79f-00c04fc2dcd2" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q8 - 20 points

What is the TargetLogonID of the first likely benign login of the compromised user AFTER the suspicious login?

<div class="answer-checker">
  <p><strong>Q8 Answer:</strong></p>
  <input type="text" placeholder="0x..." data-answer="0x261cd" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='261cd'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>