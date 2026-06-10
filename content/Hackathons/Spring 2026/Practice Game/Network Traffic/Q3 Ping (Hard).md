Someone exfiltrated a flag from one of our servers. We put up tight firewall controls on the ports, so we're not sure how this happened. Investigate and see what you can find out.  

[Download ping.pcap](https://drive.google.com/file/d/16MYZTaZ56b2rvT1rGmOu_QScas3IO0TU/view?usp=sharing)
REQUIRED FILE: ping.pcap

## Q1 - 10 points

What is the IP address, non-tunnel IP, of the device where the flag was exfiltrated from?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="IP address" data-answer="10.0.0.1" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 10 points

What is the IP address, non-tunnel IP, of the device where the flag was exfiltrated to?

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="IP address" data-answer="10.0.0.2" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 100 points

What is the flag that was exfiltrated?

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="SKY-XXXX-0000" data-answer="sky-wxho-2823" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>