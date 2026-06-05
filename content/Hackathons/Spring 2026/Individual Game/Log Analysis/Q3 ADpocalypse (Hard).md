Liber8tion might be hopping around in a local company's AD domain. Can you trace their steps?
- [Download logs_powershell.xml](https://drive.google.com/file/d/1WvagJTLIEb7B7fFNFsDBRs4u_RN6XktI/view?usp=sharing)
- [Download logs_security.xml](https://drive.google.com/file/d/1ORUnhqPuotCUv_EuC7CsliQRsU2D6Ysk/view?usp=sharing)

REQUIRED FILES: logs_powershell.xml, logs_security.xml

Q1 - 10 points
What is the TargetUserName of the account that shows unusual logon activity?

Q2 - 10 points
What authentication package was used in the suspicious login?

Q3 - 20 points
What is the exact timestamp of the first powershell event performed by the user account after the suspicious login?
Format: "%Y-%m-%dT%H:%M:%S.%fZ"

Q4 - 10 points
Which host processed the suspicious account's replication request?


Q5 - 10 points
What sensitive AD object was targeted in the replication request?

Q6 - 10 points
How many replication events did the attacker generate?


Q7 - 10 points
What GUID corresponds to a permission that allows extraction of password hashes?


Q8 - 20 points
What is the TargetLogonID of the first likely benign login of the compromised user AFTER the suspicious login?