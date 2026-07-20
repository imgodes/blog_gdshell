---
title: Diretórios Importantes
---

Alguns diretórios do sistema de arquivos Android aparecem com frequência durante análise e pentest de aplicações:

| Diretório | Descrição |
| --- | --- |
| `/data/data` | Dados dos apps instalados pelo usuário |
| `/data/user/0` | Dados acessíveis apenas pelo próprio app |
| `/data/app` | APKs dos apps instalados pelo usuário |
| `/system/app` | APKs dos apps pré-instalados no sistema |
| `/system/bin` | Arquivos binários do sistema |
| `/data/local/tmp` | Diretório de leitura e escrita pública (usado em testes) |
| `/data/system` | Arquivos de configuração do sistema |
| `/etc/apns-conf.xml` | Configurações padrão de APN (para conexão com operadora) |
| `/data/misc/wifi` | Arquivos de configuração de Wi-Fi |
| `/data/misc/user/0/cacerts-added` | Certificados adicionados pelo usuário |
| `/etc/security/cacerts/` | Armazém de certificados do sistema (não acessível sem root) |
| `/sdcard` | Link para diretórios de mídias e arquivos do usuário |
