---
title: Primeiras Interações com iOS
slug: /cybersecurity/iossecurity/introducao/firstinteractions
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Ferramentas para interagir com iOS
Existem várias ferramentas para interagir com o iOS, este é um tópico bem genérico na verdade. O que quero aqui é demonstrar como fazer as interações mais fundamentais, que são necessárias por exemplo em um processo de resolução de problemas: quando por exemplo o USB não estiver funcionando direito ou algo do gênero. Para além disso é possível interagir com o dispositivo via SSH, pela rede mesmo.

### Setup SSH
É bem simples, primeiro pesquise no seu package manager (Cydia, Sileo ou Zebra) pelo pacote "open-ssh". Logo em seguida instale-o (no meu caso pediu para que eu configurasse uma senha) e pronto, agora basta ir nas configurações de rede, descobrir seu IP e acessar o shell do dispositivo via SSH. Se não pedir para configurar uma senha logo de cara, é provável que já exista um usuário e senha padrão.

### libimobiledevice
O [libimobiledevice](https://libimobiledevice.org/docs/libimobiledevice/latest/) é uma biblioteca de softwares *cross-platform* com várias ferramentas que tem o objetivo de se comunicar com serviços no iOS usando protocolos nativos. Apenas utilizar a biblioteca para se comunicar com o iOS não requer *jailbreak*.

Para instalá-la verifique a documentação oficial [aqui](https://libimobiledevice.org/docs/libimobiledevice/latest/).

Quanto as ferramentas de linha de comando, vou listar as que me chamaram mais a atenção ou que usei com mais frequência, todas as demais estão disponíveis na documentação oficial:

| Ferramenta                  | Descrição                                                        |
| ------------------------ | ------------------------------------------------------------------ |
| idevicebackup2       | Cria ou restaura backups de dispositivos com iOS 4 ou superior |
| idevicecrashreport   | Recupera reportes de crash do dispositivo |
| ideviceinfo     | Exibe informações sobre o dispositivo conectado |
| idevicename              | Exibe ou configura o nome do dispositivo |
| idevicesyslog        | Encaminhar o syslog de um dispositivo conectado |
| ideviceinstaller     | Gerencia, instala e desinstala aplicativos |

Veja algumas das formas de usar esses utilitários de linha de comando abaixo:

> **Clique nas abas**

<Tabs>
  <TabItem value="idevicesyslog" label="idevicesyslog">

Transmita os logs do sistema em tempo real para monitoramento ou depuração do comportamento do app:

```bash
idevicesyslog
```

  </TabItem>

  <TabItem value="idevicecrashreport" label="idevicecrashreport">

Baixe relatórios de crash para uma análise detalhada de falhas do app.

Baixar uma cópia de todos os relatórios de crash:

```bash
idevicecrashreport --keep ~/Reports/
```

  </TabItem>
  <TabItem value="ideviceinfo" label="ideviceinfo">

Esse comando busca informações detalhadas sobre o dispositivo iOS, como detalhes de hardware e a versão do iOS.

```bash
ideviceinfo
```

  </TabItem>
</Tabs>
<Tabs>

  <TabItem value="ideviceinstaller" label="ideviceinstaller">

Gerencie apps no dispositivo iOS usando os seguintes comandos.

Listar apps instalados:

```bash
ideviceinstaller --list-apps
```

Instalar um app, a partir de um IPA:

```bash
ideviceinstaller --install ./DVIA-v2.ipa
```

Desinstalar um app:

```bash
ideviceinstaller --uninstall com.highaltitudehacks.DVIAswiftv2
```

  </TabItem>
    <TabItem value="idevicebackup2" label="idevicebackup2" default>

Use essa ferramenta para fazer backup ou restaurar o seu dispositivo iOS.

Criar um backup completo, com criptografia ativada:

```bash
idevicebackup2 encryption on "[SENHA]"
idevicebackup2 backup --full ~/Backups/
```

NOTA: fazer backup de um dispositivo Corellium não é suportado, mas restaurar um backup nele é.

Restaurar um backup:

```bash
idevicebackup2 restore \
  --system \
  --settings \
  --password "[SENHA]" \
  ~/Backups/
```

Ver informações do backup:

```bash
idevicebackup2 info ~/Backups/
```

  </TabItem>
</Tabs>

