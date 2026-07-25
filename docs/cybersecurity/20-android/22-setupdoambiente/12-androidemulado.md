---
title: Setup - Android Emulado
---
O setup inicial do android emulado é simples, conforme demonstro em [Criando um AVD](/docs/cybersecurity/android/introducao/emuladores#criando-um-avd). Porém após criar seu AVD, algumas novas etapas são necessárias.

Primeiro faça download do `rootAVD` no seu [gitlab oficial](https://gitlab.com/newbit/rootAVD):
```bash
git clone https://gitlab.com/newbit/rootAVD
cd rootAVD
```

Feito isso, siga os passos de acordo com seu sistema operacional. Se for Windows, você deve usar o script `rootAVD.bat` e se for Linux ou MacOS, você deve usar o script `rootAVD.sh`. Agora então, usando o script, você deve usar o seguinte comando que vai listar quais imagens de sistema você possui instaladas:

```bash
$ ./rootAVD.sh ListAllAVDs
  
        ....

./rootAVD.sh system-images/android-30/google_apis/arm64-v8a/ramdisk.img
./rootAVD.sh system-images/android-30/google_apis/arm64-v8a/ramdisk.img FAKEBOOTIMG
./rootAVD.sh system-images/android-30/google_apis/arm64-v8a/ramdisk.img DEBUG PATCHFSTAB GetUSBHPmodZ
./rootAVD.sh system-images/android-30/google_apis/arm64-v8a/ramdisk.img restore
./rootAVD.sh system-images/android-30/google_apis/arm64-v8a/ramdisk.img InstallKernelModules
./rootAVD.sh system-images/android-30/google_apis/arm64-v8a/ramdisk.img InstallPrebuiltKernelModules
./rootAVD.sh system-images/android-30/google_apis/arm64-v8a/ramdisk.img InstallPrebuiltKernelModules GetUSBHPmodZ PATCHFSTAB DEBUG
./rootAVD.sh system-images/android-30/google_apis/arm64-v8a/ramdisk.img AddRCscripts

./rootAVD.sh system-images/android-33/google_apis/arm64-v8a/ramdisk.img
./rootAVD.sh system-images/android-33/google_apis/arm64-v8a/ramdisk.img FAKEBOOTIMG
./rootAVD.sh system-images/android-33/google_apis/arm64-v8a/ramdisk.img DEBUG PATCHFSTAB GetUSBHPmodZ
./rootAVD.sh system-images/android-33/google_apis/arm64-v8a/ramdisk.img restore
./rootAVD.sh system-images/android-33/google_apis/arm64-v8a/ramdisk.img InstallKernelModules
./rootAVD.sh system-images/android-33/google_apis/arm64-v8a/ramdisk.img InstallPrebuiltKernelModules
./rootAVD.sh system-images/android-33/google_apis/arm64-v8a/ramdisk.img InstallPrebuiltKernelModules GetUSBHPmodZ PATCHFSTAB DEBUG
./rootAVD.sh system-images/android-33/google_apis/arm64-v8a/ramdisk.img AddRCscripts

```

:::info Saída do comando anterior

Observe que a minha saída trouxe vários exemplos diferentes de como posso usar o rootAVD, inclusive com duas imagens diferentes: `system-images/android-33/` e `system-images/android-30/`. Escolha aquela que está relacionada com o Android emulado que você criou e siga para o próximo passo.

:::


Copie e cole o primeiro exemplo de script usando a imagem de sistema do seu AVD:
```bash
./rootAVD.sh system-images/android-33/google_apis/arm64-v8a/ramdisk.img
```

Feito isso, seu AVD está devidamente pronto para carregar módulos do Magisk que você bem entender.

> Leitor, preciso terminar de escrever este tutorial colocando prints e carregando alguns módulos no Magisk, mas você encontra vários tutoriais online de como fazer isso.