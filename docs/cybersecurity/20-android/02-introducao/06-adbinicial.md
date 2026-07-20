---
title: Android Debug Bridge
---
ADB é uma ferramenta de linha de comando que permite comunicação entre um computador e um dispositivo Android (físico ou emulado). É essencial em testes de segurança, pois fornece controle direto sobre o sistema.

## Arquitetura do ADB

O ADB funciona como um sistema cliente-servidor com três componentes:

| Componente | Função |
| --- | --- |
| **Cliente** | Roda no host e é invocado com o comando `adb`. |
| **Daemon (adbd)** | Roda em segundo plano no dispositivo e executa comandos. |
| **Servidor** | Roda no host, gerencia a comunicação entre cliente e daemon. |

### Processo de conexão

1. O cliente `adb` inicia e verifica se o servidor está ativo.
2. Se não estiver, inicia o servidor e conecta-se à porta TCP 5037.
3. O servidor procura dispositivos/emuladores nas portas 5555–5585.
4. Cada emulador usa uma porta para console e outra para ADB.

## Instalação

### Linux (Debian)

```bash
sudo apt-get install adb
```

### MacOS (Homebrew)

```bash
brew install android-platform-tools
```

### Windows (Scoop)

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
iex (New-Object Net.WebClient).DownloadString('https://get.scoop.sh')
scoop bucket add extras
scoop install adb
```

Ou via Android Studio, em: `C:\Users\<usuario>\AppData\Local\Android\Sdk\platform-tools\`

## Comandos úteis do ADB

| Comando | Descrição |
| --- | --- |
| `adb devices` | Lista dispositivos conectados. |
| `adb shell` | Acessa o shell do Android. |
| `adb install <apk>` | Instala um APK. |
| `adb push <local> <remoto>` | Envia arquivos para o dispositivo. |
| `adb pull <remoto> <local>` | Baixa arquivos do dispositivo. |
| `adb logcat` | Visualiza os logs. |
| `adb root` | Reinicia o daemon com permissões root (emuladores). |
| `adb kill-server` | Encerra o servidor ADB. |

## Exemplo de uso

### Verificar dispositivos conectados

```bash
adb devices
```

Saída esperada:

```
List of devices attached
emulator-5554	device
```

### Acessar o shell

```bash
adb shell
```

Saída:

```
emu64x:/ $
```

### Verificar usuário atual

```bash
adb shell whoami
```

Saída:

```
shell
```

### Acesso root (em emuladores com Google APIs)

```bash
adb root
adb shell whoami
# Resultado esperado: root
```

## Transferência de arquivos

### Enviar um APK

```bash
adb push ./myapp.apk /sdcard/Download/
```

### Verificar no dispositivo

```bash
adb shell ls -l /sdcard/Download/
```

### Copiar do dispositivo para o host

```bash
adb pull /sdcard/Download/myapp.apk .
```

## Usando em dispositivos reais

1. Ative o **Modo Desenvolvedor** (toque 7x em "Número da versão").
2. Ative **Depuração USB** em "Opções de desenvolvedor".
3. Conecte o dispositivo via USB.
4. Execute:

```bash
adb devices
```

Aceite a autorização no dispositivo para que ele apareça como conectado.

## Paths do Android SDK

### Windows

```powershell
C:\Users\%username%\AppData\Local\Android\Sdk\platform-tools\{adb,fastboot}.exe
C:\Users\%username%\AppData\Local\Android\Sdk\build-tools\<version>\aapt.exe
C:\Users\%username%\.android\avd\*
C:\Users\IEUser\AndroidStudioProjects\<name>\app\build\output\apk\app-debug.apk
```

### Linux

```bash
<android-studio>/bin/studio.sh
$HOME/Android/Sdk/platform-tools/{adb,fastboot}
$HOME/Android/Sdk/build-tools/<version>/aapt
$HOME/.android/avd/*
$HOME/AndroidStudioProjects/<name>/app/build/outputs/apk/debug/app-debug.apk
```

### MacOS

```bash
$HOME/Library/Android/Sdk/platform-tools/{adb,fastboot}
$HOME/Library/Android/Sdk/build-tools/<version>/aapt
$HOME/.android/avd/*
$HOME/AndroidStudioProjects/<name>/app/build/outputs/apk/debug/app-debug.apk
```

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
