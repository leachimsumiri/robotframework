Shared Secret:
1201D40D-ED5F-4C37-81A4-48314739B90C

Consumer-Key:
9DA1351B-76C1-4CB0-9946-DB4EC58B26E5

Consumer name: 
zapi



dieter@DWs-MacBook ZAPI % openssl genrsa -out jira_privatekey.pem 2048
Generating RSA private key, 2048 bit long modulus
......................................................................................................................................................+++
......+++
e is 65537 (0x10001)
dieter@DWs-MacBook ZAPI % openssl req -newkey rsa:2048 -x509 -key jira_privatekey.pem -out jira_publickey.cer -days 3650

You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) []:AT
State or Province Name (full name) []:Vienna
Locality Name (eg, city) []:Vienna
Organization Name (eg, company) []:EVVA Sicherheitstechnologie GmbH
Organizational Unit Name (eg, section) []:SFW
Common Name (eg, fully qualified host name) []:zapi.evva.com
Email Address []:
dieter@DWs-MacBook ZAPI % openssl pkcs8 -topk8 -nocrypt -in jira_privatekey.pem -out jira_privatekey.pcks8
dieter@DWs-MacBook ZAPI % openssl x509 -pubkey -noout -in jira_publickey.cer  > jira_publickey.pem
dieter@DWs-MacBook ZAPI % ls
jira_privatekey.pcks8	jira_privatekey.pem	jira_publickey.cer	jira_publickey.pem
dieter@DWs-MacBook ZAPI %           


