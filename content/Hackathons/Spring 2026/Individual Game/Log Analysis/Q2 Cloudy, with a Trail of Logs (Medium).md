Cirrus Solutions maintains detailed activity logs of their compute resources. Liber8tion is suspected of probing these resources - can you trace the events to answer the questions below?

[Download cloudtrail.json](https://drive.google.com/file/d/1Ud4Aljm-XihECggPPmVmBaXlwju_295C/view?usp=sharing)
REQUIRED FILE: cloudtrail.json
## Q1 - 10 points

What was the first EC2 action performed in these logs?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="EC2 action" data-answer="describeinstances" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 15 points

How many unique users are in these logs?

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="Number" data-answer="5" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 15 points

How many minutes elapsed between the first and last event, rounded to the nearest integer?

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="Minutes" data-answer="341" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q4 - 15 points

Which instance ID appears most frequently in these logs?

<div class="answer-checker">
  <p><strong>Q4 Answer:</strong></p>
  <input type="text" placeholder="Instance ID" data-answer="i-fe1d6063" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q5 - 15 points

Which user terminated the most EC2 instances?

<div class="answer-checker">
  <p><strong>Q5 Answer:</strong></p>
  <input type="text" placeholder="Username" data-answer="mateo" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q6 - 15 points

Which IP address was used by more than one user?

<div class="answer-checker">
  <p><strong>Q6 Answer:</strong></p>
  <input type="text" placeholder="IP address" data-answer="198.51.100.88" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q7 - 15 points

Which user does not have MFA enabled for all sessions?

<div class="answer-checker">
  <p><strong>Q7 Answer:</strong></p>
  <input type="text" placeholder="Username" data-answer="arnav" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>