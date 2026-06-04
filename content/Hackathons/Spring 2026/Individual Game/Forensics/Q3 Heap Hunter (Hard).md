A workstation triggered an alert after suspicious file access activity. The SOC captured a process memory dump shortly before the machine was isolated. Initial triage suggests it was a legitimate application that may have been used to access sensitive documents. Analyze the process dump to find out what happened.

[Download calc.DMP](https://drive.google.com/file/d/1tnf8iyae5k57WAtsGMcdnnI3hNa9VybR/view?usp=sharing)
REQUIRED FILE: calc.DMP

Q1 - 10 points
What is the first DLL sideloaded by the executable from its working directory?

Q2 - 10 points
What DLL was subsequently loaded by the first DLL?

Q3 - 10 points
From what directory were these DLLs loaded?

Q4 - 10 points
How many files were enumerated in the compromised user's Private folder?

Q5 - 15 points
What is the base address of the DLL referred to in Q2 (in hexadecimal)?

Q6 - 15 points
Consider the DLL referred to in Q2. What is the hexadecimal ThreadID executing code within that DLL?

Q7 - 15 points
At what virtual address (in hexadecimal) does the full path containing VendorWireInstructions.docx begin?

Q8 - 15 points
What is the flag hidden in the dump?