The SOC at Kulas Ltd detected outbound connections to an unfamiliar external host from an employee's workstation in the finance department. Upon questioning and review, it seems the employee opened up an email containing an attached invoice shortly before the connections began. Can you analyze the invoice to confirm that it is related to the network activity?

[Download invoice.doc](https://docs.google.com/document/d/1YG9CoG3O-M6C2ObTo4X2jtlWRNkT4V3p/edit?usp=sharing&ouid=105599050884469626693&rtpof=true&sd=true)

REQUIRED FILE: invoice.doc

## Q1 - 10 points

What is the full FQDN that the invoicer's website link points to?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="FQDN" data-answer="filen.liber8tion.cityinthe.cloud" oninput="let g=this.value.toLowerCase().trim().replace(/^https?:\/\//,'').replace(/\/.*$/,'');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 10 points

What protocol other than HTTP is used in the hyperlinks in the invoice?

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="Protocol" data-answer="file" oninput="let g=this.value.toLowerCase().trim().replace(/:$/,'');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 15 points

What is the full filename, including extension, referenced in the path of the encoded URL?

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="Filename" data-answer="2_2.lnk" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q4 - 15 points

What type of file is embedded in the invoice?

<div class="answer-checker">
  <p><strong>Q4 Answer:</strong></p>
  <input type="text" placeholder="File type" data-answer="lnk" oninput="let g=this.value.toLowerCase().trim().replace(/^\./,'');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='windows shortcut file' || g==='shortcut file' || g==='windows shortcut'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q5 - 50 points

What is the decoded flag?

<div class="answer-checker">
  <p><strong>Q5 Answer:</strong></p>
  <input type="text" placeholder="SKY-XXXX-0000" data-answer="sky-artf-2350" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>