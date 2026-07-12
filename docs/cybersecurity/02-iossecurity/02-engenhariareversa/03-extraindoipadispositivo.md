---
title: Extraindo o IPA de um App Instalado
---

# Extraindo o IPA de um App Instalado

Às vezes o app alvo não está disponível como um `.ipa` baixável, ele só existe instalado no dispositivo. Nesse caso, é preciso reconstruir o pacote a partir do que já está instalado, algo possível em um device com jailbreak.

## Método manual

O primeiro passo é usar SSH para listar os apps instalados e localizar o diretório do app alvo. Abra um terminal e conecte via SSH ao dispositivo:

```bash
ssh root@10.11.1.1
```

Depois, liste os diretórios de bundle de todos os apps instalados:

```bash
find /var/containers/Bundle/Application/ -name "*.app"
```

Isso lista os diretórios identificados por UUID, e dentro de cada um está o bundle do app, como `DVIA-v2.app`. Anote o caminho completo do app alvo, algo como `/var/containers/Bundle/Application/70961402-4C6E-4FF6-B316-59D3ED83828F/DVIA-v2.app`.

Um `.ipa` nada mais é do que um arquivo ZIP contendo a pasta `.app` do app dentro de um diretório `Payload`, então o próximo passo é remontar essa estrutura manualmente.

Ainda pelo SSH, navegue até um diretório com permissão de escrita e crie a pasta `Payload`:

```bash
cd /tmp/
mkdir Payload
```

Copie o bundle do app para dentro dela:

```bash
cp -r /var/containers/Bundle/Application/70961402-4C6E-4FF6-B316-59D3ED83828F/DVIA-v2.app /tmp/Payload/
```

Lembre de trocar o UUID pelo valor real encontrado no seu dispositivo.

Com o `Payload` montado, compacte a pasta em um `.ipa`:

```bash
cd /tmp/
zip -r DVIA-v2.ipa Payload
```

O arquivo `DVIA-v2.ipa` fica disponível em `/tmp/`. Para transferi-lo ao computador, use `scp` a partir da sua máquina:

```bash
scp root@10.11.1.1:/tmp/DVIA-v2.ipa ~/Downloads/
```

Depois de transferir o IPA, vale limpar os arquivos temporários deixados no dispositivo:

```bash
rm -rf /tmp/Payload /tmp/DVIA-v2.ipa
```

## Método automático

Todo esse processo manual pode ser substituído por uma única ferramenta, o `bagbak`, que empacota o app instalado em um `.ipa` automaticamente:

```bash
bagbak appid
```

Vale usar o método manual pelo menos uma vez para entender o que está acontecendo, mas no dia a dia o `bagbak` é o caminho mais rápido. 

> Fonte: Github [ChiChou/bagbak](https://github.com/ChiChou/bagbak)