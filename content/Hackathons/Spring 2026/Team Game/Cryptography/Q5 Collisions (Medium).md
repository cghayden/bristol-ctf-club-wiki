Some hashes are known to have possible collisions out there. Can you collide with our hash generator service to get the flag?

Note: Connect to the service from your own machine with:

```bash
nc services.cityinthe.cloud 31337
```

Exit from it with `Ctrl+C`.

The TCP service enforces an idle input timeout of about 30 seconds per connection. If no complete guess line is received within that window, the connection may close.

## Q1 - 50 points

What is the flag?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="SKY-XXXX-0000" data-answer="sky-clsn-2359" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>