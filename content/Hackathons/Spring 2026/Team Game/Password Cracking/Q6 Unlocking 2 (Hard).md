We compromised a Liber8tion staging area and recovered some drives, including this USB drive. Our analysts have already tried cracking it, but it looks like this time around Liber8tion created a properly complex password.

They also set a trove of documents to burn, but we managed to put some of them out before they were completely destroyed. One of the pages had this long string of numbers on it that was partly burned away:

```text
250437-277266-459602-574002-230032-496452-074492-57
```

Maybe it'll be useful somehow.

Note: There are a couple of free hints available.

[Download usb-image.img](https://drive.google.com/file/d/1k6Ic14yuA3ye0ynSX-qUrtVSnZsP9Ihj/view?usp=sharing)

REQUIRED FILE: usb-image.img

## Q1 - 15 points

What is the encryption type on the drive?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="Encryption type" data-answer="bitlocker" oninput="let g=this.value.toLowerCase().trim().replace(/\s+/g,' ');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 15 points

What is the most established open-source tool specifically designed for cracking this type of disk encryption?

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="Tool name" data-answer="bitcracker" oninput="let g=this.value.toLowerCase().trim().replace(/\s+/g,' ');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 25 points

What is the string that can decrypt the `usb-image`?

Hint: The password for this drive is not crackable!

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="Recovery/decryption string" data-answer="250437-277266-459602-574002-230032-496452-074492-578589" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q4 - 25 points

What is the flag in `usb-image`?

<div class="answer-checker">
  <p><strong>Q4 Answer:</strong></p>
  <input type="text" placeholder="SKY-XXXX-0000" data-answer="sky-recv-7933" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>