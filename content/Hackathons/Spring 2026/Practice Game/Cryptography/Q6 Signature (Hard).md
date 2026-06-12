We have identified a set of 1000 possible flags, not all of them are the correct flag. However, the files with the correct flag should be signed by one of the certificates created by the included certificate authority.  
- [Download signature.tar.gz](https://drive.google.com/file/d/1yjSGMpr-Dq7cZagqiTyTG34hpRjiDXLg/view?usp=sharing)
- [Download ca.crt](https://drive.google.com/file/d/1Di2vftmdFxV1M2KoZIEJuTk0ySX6oiYs/view?usp=sharing)

REQUIRED FILES: signature.tar.gz, ca.crt

## Q1 - 10 points

What is the organization name of the certificate authority?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="Organization name" data-answer="windoge certificate authority" oninput="let g=this.value.toLowerCase().trim().replace(/\s+/g,' ');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 65 points

What is a valid flag from this set of files?

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="SKY-XXXX-0000" data-answer="sky-jgdp-4930" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>