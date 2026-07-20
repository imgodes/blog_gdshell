---
title: AndroidManifest
slug: /cybersecurity/androidbasics/componentes/androidmanifest
---

Todo aplicativo Android define seus componentes principais no arquivo `AndroidManifest.xml`, que é o ponto central de configuração do app. Esse arquivo pode ser analisado para entender:

- Quais componentes existem (Activities, Services, Broadcast Receivers e Content Providers)
- Quais estão exportados, ou seja, acessíveis por outros apps
- Quais permissões são necessárias ou fornecidas
- Qual é a activity principal (`MAIN` + `LAUNCHER`)
- Quais filtros de intent cada componente escuta

Declaração do nome do pacote (aplicação):

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
package="xyz.gdsh.app001"
xmlns:tools="http://schemas.android.com/tools">
```

Versões mínima e alvo do SDK — no exemplo abaixo, o app não pode executar em API level menor que 19, e foi desenhado e testado no API level 27:

```xml
<uses-sdk android:minSdkVersion="19"
	android:targetSdkVersion="27" />
```

Lista de componentes:

```xml
<application ...>
	<activity android:name=".MainActivity" ...>
	</activity>
	<activity android:name=".Test1Activity" ...>
	</activity>
	<service android:name=".MyService" ...>
	</service>
</application>
```

Intent Filters — definem o que pode acontecer e quais eventos o componente pode receber:

```xml
<intent-filter>
	<action android:name="android.intent.action.MAIN" />
	<category android:name="android.intent.category.LAUNCHER" />
</intent-filter>
```

Permissões que o app usa para proteger dados restritos e ações restritas:

```xml
<uses-permission android:name="android.permission.CAMERA" />
<!-- Outras permissões irão aqui -->
```

## Como extrair e visualizar o AndroidManifest

```bash
# Extração direta com aapt
aapt dump xmltree app.apk AndroidManifest.xml

# Extração e leitura com apktool
apktool d app.apk -o app_decoded
cat app_decoded/AndroidManifest.xml
```

Outras opções seriam a visualização com ferramentas gráficas:

- `jadx-gui`
- `Android Studio`
- `MobSF`

## Permissões

Quando você instala um aplicativo e ele solicita permissões, ele está pedindo as permissões que foram configuradas usando os elementos `uses-permission` dentro do arquivo `AndroidManifest.xml`, onde o atributo `name` indica o nome da permissão que está sendo solicitada.

Exemplo de permissão no `AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.INTERNET"/>
```

Também existe o atributo `maxSdkVersion`, que define até qual versão do Android aquela permissão será solicitada. Se a versão do Android for maior que a informada, o sistema não solicitará essa permissão.

Aplicativos Android não precisam solicitar todas as permissões de uma vez, no momento da instalação. Eles também podem pedir permissões dinamicamente (em tempo de execução), mas todas as permissões devem estar declaradas no Manifest para serem usadas.

## Controle de acesso com permissões

Quando um app expõe funcionalidades (como uma activity, service ou content provider), ele pode limitar o acesso a essas funcionalidades exigindo uma permissão específica. Para isso, usa-se o elemento `<permission>`, que possui três atributos principais:

1. `name` — o nome da permissão.
2. `permission-group` — agrupa permissões relacionadas (ex: permissões de localização).
3. `protectionLevel` — indica como a permissão será concedida. Existem quatro tipos:

| Tipo | Descrição |
| --- | --- |
| **normal** | Não oferece riscos ao usuário. O sistema **concede automaticamente**, sem solicitar ao usuário. |
| **dangerous** | Permissão que **dá acesso sensível** (ex: câmera, microfone, contatos). O usuário precisa **autorizar manualmente**. |
| **signature** | Apenas apps **assinados com o mesmo certificado** do app que exportou a funcionalidade podem usar essa permissão. É uma forma **forte de proteção** entre apps do mesmo desenvolvedor. |
| **signatureOrSystem** | Só apps com **mesma assinatura** OU que tenham **acesso de nível de sistema** (como apps pré-instalados) podem usar a permissão. |

### Exemplo de Manifest

```xml title="AndroidManifest.xml"
<activity android:name=".MainActivity"
          android:exported="true"
          android:permission="com.example.MY_PERMISSION">
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
</activity>

<receiver android:name=".LoginReceiver"
          android:exported="true">
    <intent-filter>
        <action android:name="com.app.LOGIN_SUCCESS" />
    </intent-filter>
</receiver>

<service android:name=".MyService"
         android:exported="false" />

<provider android:name=".MyContentProvider"
          android:authorities="com.example.provider"
          android:exported="true" />
```
