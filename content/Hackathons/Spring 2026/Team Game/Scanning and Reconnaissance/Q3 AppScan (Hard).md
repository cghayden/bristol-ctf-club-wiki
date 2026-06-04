Our team is developing an internal forum application. We want to make sure the application is following secure coding practices after our security testers found some vulnerabilities, XSS and SQL Injection, so we can catch these vulnerabilities earlier in the software development lifecycle next time. To do this, you will be using Semgrep as a Static Application Security Testing, SAST, tool.

[Download appscan_files.zip](https://drive.google.com/file/d/1736jrG6NC_G16CFNA89a2ay4Wr4kJM4T/view?usp=sharing)

REQUIRED FILE: appscan_files.zip

## Q1 - 10 points

How many code findings did the `community/javascript` ruleset find?

<div class="answer-checker">
  <p><strong>Q1 Answer:</strong></p>
  <input type="text" placeholder="Number" data-answer="15" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q2 - 10 points

What is the rule name of the XSS findings?  
Format: `semgrep-rules.community.javascript.category.category2.rulename`

<div class="answer-checker">
  <p><strong>Q2 Answer:</strong></p>
  <input type="text" placeholder="Rule name" data-answer="community.javascript.vue.security.audit.xss.templates.avoid-v-html" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer || g==='semgrep-rules.community.javascript.vue.security.audit.xss.templates.avoid-v-html'){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q3 - 10 points

How many locations in code did Semgrep find possible XSS vulnerabilities?

Note: There can be multiple in a single file.

<div class="answer-checker">
  <p><strong>Q3 Answer:</strong></p>
  <input type="text" placeholder="Number" data-answer="4" oninput="let g=this.value.trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q4 - 20 points

One of the XSS findings is a false positive; it has no user-controlled source. What file is that finding in?  
Format: `filename.ext`

<div class="answer-checker">
  <p><strong>Q4 Answer:</strong></p>
  <input type="text" placeholder="filename.ext" data-answer="basedate.vue" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>

## Q5 - 50 points

What is the flag?

Note:

The download contains two folders within it, and one file. `community` is the public community ruleset for running the scans; `forum_app` is the source code for the application to scan. The file is `sqli-detection.yaml`, which is an incomplete YAML rule for question 5.

This challenge has two phases.

Phase 1:

On your own computer or virtual machine, download the Semgrep tool. Installing it with `pipx` is recommended for simplicity. Also download the source files from the challenge and unzip those for use. Inside the directory you unzipped, run:

```bash
semgrep --config=community/javascript forum_app
```

The output of this command will cover questions 1 through 4.

Phase 2:

As you will notice from the output of question 1, there is not any SQL injection detected by Semgrep's scan. You will need to write a rule that properly detects, without false positives, the SQL injection to answer question 5.

For Q5:

Write a custom rule to detect the SQL injection vulnerability the scan missed, located in:

```text
forum_app/backend/postgres.ts
```

at line 27.

Use `sqli-detection.yaml` as your template and do not change the `id` value, otherwise the Semgrep scanner will not work correctly.

Once you think you have a rule that detects the SQL injection and does not include any false positive results, copy your rule into the `place_yaml_rule_in_here` directory. An automated Semgrep scan will begin. Give it a few minutes to finish. If your rule worked, the flag will print to your terminal and also be available as a file named `flag.txt` within your home directory.

For convenience, the `postgres.ts` code is viewable in the bottom-left window as well.

You can read the `MOTD.md` file in the home directory for a refresher as needed.

The filename you submit must be:

```text
sqli-detection.yaml
```

<div class="answer-checker">
  <p><strong>Q5 Answer:</strong></p>
  <input type="text" placeholder="SKY-XXXX-0000" data-answer="sky-szhw-4838" oninput="let g=this.value.toLowerCase().trim();let r=this.nextElementSibling;if(!g){r.textContent='';}else if(g===this.dataset.answer){r.textContent='Correct!';r.style.color='limegreen';}else{r.textContent='Incorrect';r.style.color='tomato';}">
  <p></p>
</div>