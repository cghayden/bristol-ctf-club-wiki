Our company has suffered a data breach, and the attackers left us a taunting message:

"Maybe your default password policy should not be to set the password as the user's birthday."

Our IT admin confirmed that when new accounts are created, the default password is the user's birthday in `MM-DD-YYYY` format. We have a copy of the hashed password database and the code used to provision accounts. One user never changed their password, and you need to find them so we can delete the account and begin remediation processes.

- [Download public.py](https://drive.google.com/file/d/1eJCUq6pelT3QpFm4D_O30oPuWWHFclfU/view?usp=sharing)
- [Download users.db](https://drive.google.com/file/d/1ODgUCXam_QuOW1tH4ahiEOZnfq73WZu9/view?usp=sharing)

REQUIRED FILES: public.py, users.db

## Q1 - 10 points

What hashing algorithm is used to store passwords?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="Hashing algorithm" data-answer="sha-256" oninput="let g=this.value.toLowerCase().trim().replace(/\s+/g,'');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer.replace(/\s+/g,'') || g==='sha256'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 10 points

What is the salt appended to passwords before hashing?

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="Salt" data-answer="lightlyseasoned" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 20 points

What is the plaintext password of the account that was never changed from its default?

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="MM-DD-YYYY" data-answer="04-01-2005" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='4-1-2005'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>