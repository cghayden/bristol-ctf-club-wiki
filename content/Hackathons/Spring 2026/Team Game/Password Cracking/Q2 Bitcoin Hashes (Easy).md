Bitcoin's operation depends on generating hashes of both fixed and random values until the hash produces output that meets certain requirements. For example, given a fixed input string, the bitcoin software will prepend random bytes and hash the whole thing over and over until the hash output starts with, say, 34 hex `0x00`s.

You'll be doing the same thing, but with simpler requirements. You may use the shell or any self-written program.

Suggestion: Set these up and run them in parallel, as they may take a significant amount of time.

## Q1 - 5 points

What preinstalled Linux command line program will take any input and return the MD5 hash of that input?  
We are looking for the tool whose primary task is creating these checksums.

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="Command" data-answer="md5sum" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 5 points

What preinstalled Linux command line program will take any input and return the SHA256 hash of that input?  
We are looking for the tool whose primary task is creating these checksums.

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="Command" data-answer="sha256sum" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 5 points

Take any text and feed it into the MD5 hash program you found above. How many hex characters come back in the output hash?  
Ignore spaces, dashes, and/or filenames.

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="Number" data-answer="32" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q4 - 5 points

How many bits would that output hash be?

<div class="answer-checker">
  <p><strong>Q4 Answer:</strong></p>
  <input type="text" placeholder="Number of bits" data-answer="128" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q5 - 10 points

Using any command shell or any program you've written, generate random text, any combination of letters and/or numbers, and feed it into the MD5 algorithm until the hash output starts with 4 hex `0` characters.

Your answer must be the original random text, not the hash output.

<div class="answer-checker">
  <p><strong>Q5 Answer:</strong></p>
  <input type="text" placeholder="Original random text" data-answer="rqsrmay1dpo9jjf6" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='RQsRmOy1dPO9jJf6'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q6 - 15 points

Do the same task as the previous question until the MD5 hash output starts with 5 hex `0` characters.

Your answer must be the original random text, not the hash output.

<div class="answer-checker">
  <p><strong>Q6 Answer:</strong></p>
  <input type="text" placeholder="Original random text" data-answer="hnhlupxipcjt3brp" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='HNhlUpXIpcjt3brP'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>