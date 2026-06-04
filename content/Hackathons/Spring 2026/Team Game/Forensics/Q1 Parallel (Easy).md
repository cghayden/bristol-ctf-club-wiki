Chip designers sometimes live in parallel worlds. Investigate the reality of chip design and identify hidden information within.

[Download chip_design_howto.pdf](https://drive.google.com/file/d/1vdDYdvOqagbbL8OPK5YuNZQuu_7WtULQ/view?usp=sharing)

REQUIRED FILE: chip_design_howto.pdf

## Q1 - 10 points

What marker indicates the end of PDF content?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="PDF end marker" data-answer="%%eof" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 15 points

How many total images exist in this file?  
Do not include anything in the actual PDF contents.

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="Number" data-answer="6" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 15 points

How many of the images are JPEG files?

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="Number" data-answer="2" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q4 - 20 points

What are the first four hex bytes after the marker indicating the end of the PDF content?  
Answer in the following format: `0xAA 0xBB 0xCC 0xDD`

<div class="answer-checker">
  <p><strong>Q4 Answer:</strong></p>
  <input type="text" placeholder="0xAA 0xBB 0xCC 0xDD" data-answer="0x0a 0x89 0x50 0x4e" oninput="let g=this.value.toLowerCase().trim().replace(/\s+/g,' ');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q5 - 40 points

What is the flag?

<div class="answer-checker">
  <p><strong>Q5 Answer:</strong></p>
  <input type="text" placeholder="SKY-XXXX-0000" data-answer="sky-riot-8426" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>