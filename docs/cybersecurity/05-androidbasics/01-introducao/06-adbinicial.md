---
title: ADB e Comandos Iniciais
---

A partir daqui é esperado que você já tenha o ADB e um emulador funcionando.

## ADB

O ADB (Android Debug Bridge) é uma ferramenta de linha de comando que permite comunicação entre um computador e um dispositivo Android. É essencial para testes de segurança e análise de aplicativos.

### O que é ADB?

ADB é parte do Android SDK e oferece funcionalidades como:

- Instalar/desinstalar aplicativos
- Acessar o sistema de arquivos
- Executar comandos no dispositivo
- Fazer análise dinâmica de aplicativos

## Comandos Básicos

```shell-session
# Conectando ao dispositivo
adb devices # Lista os dispositivos conectados.
	# `-d`: apenas dispositivos físicos
	# `-e`: apenas emuladores
	# `-s`: especifica o serial do dispositivo

# Shell
adb shell # Abre um terminal interativo no Android.
adb shell comando # Executa um comando diretamente
		  # (ex: `adb shell ps`).

# Enviar e receber arquivos
adb push teste.txt /data/local/tmp/
adb pull /data/local/tmp/teste.txt

# Instalar/Desinstalar Apps
adb install app.apk
adb uninstall nome.do.pacote

# Reiniciar o servidor ADB
adb kill-server
adb start-server
```

O tópico sobre [Android Debug Bridge](../adb/) aprofunda a arquitetura do ADB e mais comandos úteis.
