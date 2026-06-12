Our forensics team recovered an encrypted USB drive from Liber8tion. Can you crack their passwords to get to the contents? We suspect they continue to use passwords found in a popular wordlist.

REQUIRED FILE: usb-clone.img

## Q1 - 15 points

What is the file signature in the header of the usb-clone image in ASCII?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="File signature" data-answer="-fve-fs-" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 25 points

What encryption format does usb-clone have?

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="Encryption format" data-answer="bitlocker to go" oninput="let g=this.value.toLowerCase().trim().replace(/\s+/g,' ');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='bitlocker'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 25 points

What is the password for the usb-clone?

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="Password" data-answer="johncena1" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q4 - 25 points

What is the flag in usb-clone?

<div class="answer-checker">
  <p><strong>Q4 Answer:</strong></p>
  <input type="text" placeholder="SKY-XXXX-0000" data-answer="sky-blpw-9562" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>