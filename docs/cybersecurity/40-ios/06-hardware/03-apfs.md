---
title: Criptografia com APFS

---

# Criptografia de Arquivos com APFS

A criptografia de arquivos no iOS é implementada através do APFS, o Apple File System. Ele criptografa os dados armazenados em disco usando criptografia por arquivo, o que significa que cada arquivo tem sua própria chave, e essas chaves ficam protegidas por hardware através da combinação entre a UID do dispositivo e o passcode do usuário.

Mesmo que alguém consiga extrair o armazenamento físico do aparelho, os dados continuam criptografados, já que a chave de decodificação depende do hardware e do passcode. Isso faz da segurança do passcode um ponto central, pois é ele que, junto com a UID, deriva as chaves usadas para decifrar os arquivos.

## Referências

- Apple Platform Security Guide. Data protection overview. Disponível em: https://support.apple.com/guide/security/welcome/web
