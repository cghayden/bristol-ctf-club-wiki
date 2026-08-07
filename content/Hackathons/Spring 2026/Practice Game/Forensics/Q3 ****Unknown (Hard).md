We've obtained a drive that appears to hold some flags, but we can't figure out how to extract them. Can you help?  

[Download disk.gz](https://drive.google.com/file/d/1eDtl3Uf-zHY4ikvx88UD5pp6rbXPuU3n/view?usp=sharing)
REQUIRED FILE: disk.gz

## Q1 - 5 points

What filesystem is being used?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="Filesystem" data-answer="zfs" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 10 points

What is the name of the pool used?

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="Pool name" data-answer="diskpool123" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 10 points

What is the pool identifier?

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="Pool ID" data-answer="9946762525998926831" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q4 - 10 points

What is the disk space size?  
Shorthand format.

<div class="answer-checker">
  <p><strong>Q4 Answer:</strong></p>
  <input type="text" placeholder="Size" data-answer="80m" oninput="let g=this.value.toLowerCase().trim().replace(/\s+/g,'');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='80mb'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q5 - 15 points

When was the pool last scrubbed?  
Rounded to nearest minute in UTC time.

<div class="answer-checker">
  <p><strong>Q5 Answer:</strong></p>
  <input type="text" placeholder="YYYY-MM-DD HH:MM UTC" data-answer="2022-10-31 17:49 utc" oninput="let g=this.value.toLowerCase().trim().replace(/\s+/g,' ');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q6 - 15 points

What is the full name of the snapshot that is being protected from deletion?

<div class="answer-checker">
  <p><strong>Q6 Answer:</strong></p>
  <input type="text" placeholder="Pool@snapshot" data-answer="diskpool123@jerry" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q7 - 20 points

What is flag 1?

<div class="answer-checker">
  <p><strong>Q7 Answer:</strong></p>
  <input type="text" placeholder="Flag 1" data-answer="SKY-ZPOL-9257" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q8 - 25 points

What is flag 2?

<div class="answer-checker">
  <p><strong>Q8 Answer:</strong></p>
  <input type="text" placeholder="Flag 2" data-answer="SKY-INVS-8302" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>