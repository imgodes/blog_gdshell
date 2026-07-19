---
title: Setup - Android Emulado
---
O setup inicial do android emulado é simples, conforme demonstro em [Criando um AVD](/docs/cybersecurity/androidbasics/introducao/emuladores#criando-um-avd). Porém após criar seu AVD, algumas novas etapas são necessárias.

Primeiro faça download do `rootAVD` no seu [gitlab oficial](https://gitlab.com/newbit/rootAVD):
```bash
git clone https://gitlab.com/newbit/rootAVD
cd rootAVD
```

Feito isso, siga os passos de acordo com seu sistema operacional. Se for Windows, você deve usar o script `rootAVD.bat` e se for Linux ou MacOS, você deve usar o script `rootAVD.sh`. Agora então, usando o script, você deve usar o seguinte comando que vai listar quais imagens de sistema você possui instaladas:

```bash
Command Examples:
./rootAVD.sh
./rootAVD.sh ListAllAVDs
./rootAVD.sh InstallApps

./rootAVD.sh system-images/android-33/google_apis_playstore/x86_64/ramdisk.img
./rootAVD.sh system-images/android-33/google_apis_playstore/x86_64/ramdisk.img FAKEBOOTIMG
./rootAVD.sh system-images/android-33/google_apis_playstore/x86_64/ramdisk.img DEBUG PATCHFSTAB GetUSBHPmodZ
./rootAVD.sh system-images/android-33/google_apis_playstore/x86_64/ramdisk.img restore
./rootAVD.sh system-images/android-33/google_apis_playstore/x86_64/ramdisk.img InstallKernelModules
./rootAVD.sh system-images/android-33/google_apis_playstore/x86_64/ramdisk.img InstallPrebuiltKernelModules
./rootAVD.sh system-images/android-33/google_apis_playstore/x86_64/ramdisk.img InstallPrebuiltKernelModules GetUSBHPmodZ PATCHFSTAB DEBUG
./rootAVD.sh system-images/android-33/google_apis_playstore/x86_64/ramdisk.img AddRCscripts
```

Copie e cole o primeiro exemplo de script usando a imagem de sistema do seu AVD:
```bash
./rootAVD.sh system-images/android-33/google_apis_playstore/x86_64/ramdisk.img
```

Feito isso, seu AVD está devidamente pronto para carregar módulos do Magisk que você bem entender.