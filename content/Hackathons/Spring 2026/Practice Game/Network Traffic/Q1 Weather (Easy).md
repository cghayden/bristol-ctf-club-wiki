We lost the weather forecast. Analyze this packet capture and help us out.

[Download Weather.pcap](https://drive.google.com/file/d/1fjohzgMuUSkBLm_5bZPI8ypDplufJqGO/view?usp=sharing)
## Q1 - 10 points

What is the IP address of the DNS resolver that is used?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="IP address" data-answer="8.8.8.8" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 10 points

What is the IP address of the client requesting the weather report?

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="IP address" data-answer="192.168.137.11" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 10 points

What is the IP address of the server providing the weather report?

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="IP address" data-answer="96.8.81.129" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q4 - 10 points

What zip code was the weather report for?

<div class="answer-checker">
  <p><strong>Q4 Answer:</strong></p>
  <input type="text" placeholder="Zip code" data-answer="94087" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q5 - 10 points

What time is sunset on the day the weather report was generated?

<div class="answer-checker">
  <p><strong>Q5 Answer:</strong></p>
  <input type="text" placeholder="Time" data-answer="5:29 pm" oninput="let g=this.value.toLowerCase().trim().replace(/\s+/g,' ');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='5:29pm'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q6 - 10 points

What is the high temperature for the upcoming Monday on the forecast?

<div class="answer-checker">
  <p><strong>Q6 Answer:</strong></p>
  <input type="text" placeholder="Temperature" data-answer="59°f" oninput="let g=this.value.toLowerCase().trim().replace(/\s+/g,'').replace('degrees','°').replace('deg','°');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='59f' || g==='59°F'.toLowerCase()){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q7 - 10 points

What is the chance of rain on the first Sunday night in the forecast?

<div class="answer-checker">
  <p><strong>Q7 Answer:</strong></p>
  <input type="text" placeholder="Percent" data-answer="60%" oninput="let g=this.value.trim().replace(/\s+/g,'');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='60'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q8 - 15 points

What is the model number of the handheld device used to request the weather forecast?

<div class="answer-checker">
  <p><strong>Q8 Answer:</strong></p>
  <input type="text" placeholder="Model number" data-answer="sgh-t959" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>