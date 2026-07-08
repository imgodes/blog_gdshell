---
title: Primeiras Interações com iOS
---

## Ferramentas para interagir com iOS
Existem várias ferramentas para interagir com o iOS, este é um tópico bem genérico na verdade. O que quero aqui é demonstrar como fazer as interações mais fundamentais, que são necessárias por exemplo em um processo de resolução de problemas: quando por exemplo o USB não estiver funcionando direito ou algo do gênero. Para além disso é possível interagir com o dispositivo via SSH, pela rede mesmo.


### Setup SSH
É bem simples, primeiro pesquise no seu package manager (Cydia, Sileo ou Zebra) pelo pacote "open-ssh". Logo em seguida instale-o (no meu caso pediu para que eu configurasse uma senha) e pronto, agora basta ir nas configurações de rede, descobrir seu IP e acessar o shell do dispositivo via SSH. Se não pedir para configurar uma senha logo de cara, é provável que já exista um usuário e senha padrão.

### 