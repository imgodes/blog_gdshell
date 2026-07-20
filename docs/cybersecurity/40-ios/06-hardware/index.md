---
title: Segurança de Hardware

---

# Segurança de Hardware

Depois de entender como o iOS organiza suas camadas de software, faz sentido descer um nível e olhar para o que sustenta tudo isso fisicamente. Boa parte da segurança do iOS também está presente na parte física do dispositivo.

Esse conjunto de mecanismos costuma ser chamado de forma genérica de criptografia de dispositivo, embora esse não seja o nome de um componente específico da Apple. Trata-se de um termo conceitual que descreve como o iOS combina chaves derivadas do hardware, como a UID gravada no chip, com o Secure Enclave, para proteger dados em repouso mesmo quando o sistema operacional está comprometido.

Os próximos tópicos cobrem essa cadeia, desde o primeiro código executado ao ligar o aparelho até a criptografia dos arquivos guardados no disco.
