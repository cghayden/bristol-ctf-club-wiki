A workstation triggered an alert after suspicious file access activity. The SOC captured a process memory dump shortly before the machine was isolated. Initial triage suggests it was a legitimate application that may have been used to access sensitive documents. Analyze the process dump to find out what happened.

REQUIRED FILE: calc.DMP

## Q1 - 10 points

What is the first DLL sideloaded by the executable from its working directory?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="DLL name" data-answer="windowscodecs.dll" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 10 points

What DLL was subsequently loaded by the first DLL?

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="DLL name" data-answer="stage2.dll" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 10 points

From what directory were these DLLs loaded?

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="Directory path" data-answer="c:\users\madeye\downloads\report feb 4 92203\" oninput="let g=this.value.toLowerCase().trim().replace(/\//g,'\\');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='c:\\users\\madeye\\downloads\\report feb 4 92203'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q4 - 10 points

How many files were enumerated in the compromised user's Private folder?

<div class="answer-checker">
  <p><strong>Q4 Answer:</strong></p>
  <input type="text" placeholder="Number" data-answer="6" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q5 - 15 points

What is the base address of the DLL referred to in Q2, in hexadecimal?

<div class="answer-checker">
  <p><strong>Q5 Answer:</strong></p>
  <input type="text" placeholder="0x..." data-answer="0x7ff95a100000" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q6 - 15 points

Consider the DLL referred to in Q2. What is the hexadecimal ThreadID executing code within that DLL?

<div class="answer-checker">
  <p><strong>Q6 Answer:</strong></p>
  <input type="text" placeholder="0x..." data-answer="0x1418" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='1418'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q7 - 15 points

At what virtual address, in hexadecimal, does the full path containing `VendorWireInstructions.docx` begin?

<div class="answer-checker">
  <p><strong>Q7 Answer:</strong></p>
  <input type="text" placeholder="0x..." data-answer="0x20366177940" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q8 - 15 points

What is the flag hidden in the dump?

<div class="answer-checker">
  <p><strong>Q8 Answer:</strong></p>
  <input type="text" placeholder="Answer not added yet" disabled>
  <p>Answer not added yet.</p>
</div>