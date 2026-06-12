We've managed to recover a SQlite database from a Liber8tion backup directory but can't seem to open it. Maybe it's encrypted?

There was also an old list of passwords we found in the backup that will be useful.

Note: you may find a pre-existing tool to crack this specific database encryption type, but it's not up-to-date. We strongly recommend creating your own script/tool to solve this challenge.

REQUIRED FILES: data.db, passwords-old.txt

## Q1 - 10 points

What fork of SQlite is the database using for encryption?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="Encryption fork" data-answer="sqlcipher" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 45 points

What is the password for the database?

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="Answer not added yet" disabled>
  <p>Answer not added yet.</p>
</div>

## Q3 - 45 points

What is the flag inside the database?

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="Answer not added yet" disabled>
  <p>Answer not added yet.</p>
</div>