@ECHO OFF
openssl enc -aes-256-cbc -pbkdf2 -salt -in %1 -out %2 -k %3 -v
PAUSE