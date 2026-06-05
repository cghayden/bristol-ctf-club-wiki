One of our collaborators recently reached out to us as they suspect that some of their employees were within range of a malicious access point. They want you to determine where the access point was so they can verify that it has been removed and catch the person if they come back.

To facilitate your retrieval of this information, they have provided the secure door usage logs, the Wi-Fi access point logs, a map of the building and surrounding area, and a heatmap of the building and surrounding area showing the strength of the Wi-Fi connection from their access points at each point in the building, not accounting for the malicious access point. They also provided you a heatmap of a single access point so you can see the behavior without any interference from surrounding access points.

- [Download building_map.png](https://drive.google.com/file/d/16hsy8zZILvmCdnXuDTqdgdKzVHyHnIx-/view?usp=sharing)
- [Download wifi_heatmap.png](https://drive.google.com/file/d/1Lrjqfm6_ch1tYk9tDEjzwpjOjm2JMdwu/view?usp=sharing)
- [Download single_ap_heatmap.png](https://drive.google.com/file/d/196BMGpHSDYxuOfM_9Ux9ys7JxgKw-H6i/view?usp=sharing)
- [Download secure_door_logs.jsonl](https://drive.google.com/file/d/14HX4mklxxb1HZBpkn5YyJuvG5lz3gYRg/view?usp=sharing)
- [Download ap_logs.jsonl.gz](https://drive.google.com/file/d/16-qCT2JGonbmxTF5-p8U9DsNiG9ocQc_/view?usp=sharing)

REQUIRED FILES: building_map.png, wifi_heatmap.png, single_ap_heatmap.png, secure_door_logs.jsonl, ap_logs.jsonl.gz

## Q1 - 15 points

How many unique devices connected to their network?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="Number" data-answer="82" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 5 points

What is the first device MAC address by timestamp which left our network even though the logs don't show them as having left the building?

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="MAC address" data-answer="56:13:4c:34:fb:72" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 5 points

What is the second device MAC address by timestamp which left our network even though the logs don't show them as having left the building?

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="MAC address" data-answer="ea:71:21:90:fe:eb" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q4 - 25 points

What was the last location we observed the device from Q2 before they disconnected from the network the first time?  
Format: `(0,0)`

<div class="answer-checker">
  <p><strong>Q4 Answer:</strong></p>
  <input type="text" placeholder="(0,0)" data-answer="32,16" oninput="let g=this.value.trim().replace(/[()]/g,'').replace(/\s+/g,'');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q5 - 25 points

What was the last location we observed the device from Q3 before they disconnected from the network the first time?  
Format: `(0,0)`

<div class="answer-checker">
  <p><strong>Q5 Answer:</strong></p>
  <input type="text" placeholder="(0,0)" data-answer="31,21" oninput="let g=this.value.trim().replace(/[()]/g,'').replace(/\s+/g,'');let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q6 - 25 points

Give the coordinates of one of the six potential malicious access point locations based on the logs given.

<div class="answer-checker">
  <p><strong>Q6 Answer:</strong></p>
  <input type="text" placeholder="Answer not added yet" disabled>
  <p>Answer not added yet.</p>
</div>