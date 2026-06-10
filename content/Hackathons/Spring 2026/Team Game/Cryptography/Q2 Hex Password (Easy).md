Our network team discovered a persistent connection from a development system to a suspected command and control server. They were able to capture a single packet in the middle of the connection whose payload is provided to you. They believe it may be an encoded login key. Can you turn the hex provided into the plaintext key?

[Download packet_payload.txt](https://drive.google.com/file/d/17yth7GqcYzhtTWrviQFw6DpIRv3eW2fi/view?usp=sharing)

REQUIRED FILE: packet_payload.txt

## Q1 - 10 points

What pair of hex characters is the key to retrieving the original hex?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="Hex pair" data-answer="dd" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 15 points

What math/logical operation on these 2 parts will recover the original bytes?  
3 letters

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="3 letters" data-answer="xor" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 15 points

Now that you have the original bytes, what three letter acronym describes the format of these characters?

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="3 letters" data-answer="utf" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q4 - 20 points

What is the flag?

<div class="answer-checker">
  <p><strong>Q4 Answer:</strong></p>
  <input type="text" placeholder="SKY-XXXX-0000" data-answer="sky-drbu-1362" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>