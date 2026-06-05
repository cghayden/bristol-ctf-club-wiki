We flagged a VM provided to student interns for suspicious network activity. Initial triage suggests that malware was downloaded onto the machine, and we think there might be persistence indicators in the registry. Examine the given SOFTWARE xml file to answer the questions.

[Download software.zip](https://drive.google.com/file/d/1muXQdevy-sqyZD8yr_NyjPIuQ-CM5lwa/view?usp=sharing)

REQUIRED FILE: software.zip

## Q1 - 10 points

What is the hostname of the machine this registry hive is from?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="Hostname" data-answer="desktop-8ehe23r" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 10 points

What account is associated with the user profile in this hive?

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="Account name" data-answer="intern1" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 15 points

Name one registry key that stores the malware’s data in this hive.

Note: Answers should NOT be high-level parent keys, and it does not matter if you provide the full or relative path.

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="Registry key" data-answer="hklm\software\microsoft\sqmclient" oninput="let g=this.value.toLowerCase().trim().replace(/\//g,'\\');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='software\\microsoft\\sqmclient' || g==='hklm\\software\\classes\\installer\\upload' || g==='software\\classes\\installer\\upload'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q4 - 15 points

What registry value contains the encrypted C2 host?

<div class="answer-checker">
  <p><strong>Q4 Answer:</strong></p>
  <input type="text" placeholder="Registry value" data-answer="hklm\software\classes\installer\upload" oninput="let g=this.value.toLowerCase().trim().replace(/\//g,'\\');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='software\\classes\\installer\\upload' || g==='upload'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q5 - 10 points

What is the Value Type of the value storing the encrypted C2 host?

<div class="answer-checker">
  <p><strong>Q5 Answer:</strong></p>
  <input type="text" placeholder="Value type" data-answer="string" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q6 - 20 points

What encryption method was used?

<div class="answer-checker">
  <p><strong>Q6 Answer:</strong></p>
  <input type="text" placeholder="Encryption method" data-answer="chacha20" oninput="let g=this.value.toLowerCase().trim().replace(/-/g,'');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q7 - 20 points

What is the decrypted FQDN of the C2 host?

<div class="answer-checker">
  <p><strong>Q7 Answer:</strong></p>
  <input type="text" placeholder="FQDN" data-answer="havocc2.liber8tion.cityinthe.cloud" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>