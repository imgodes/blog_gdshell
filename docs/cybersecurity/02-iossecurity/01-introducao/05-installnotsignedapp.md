---
title: Instalando um app não assinado
---

## Instalando um app não assinado
Todo app que roda em um iPhone precisa estar assinado com um certificado emitido pela Apple, isso vale mesmo para um IPA de teste, que você baixou sem assinatura nenhuma. Antes de rodar o `applesign`, é preciso ter em mãos três coisas: um certificado de desenvolvedor, um provisioning profile e o identificador do seu dispositivo. Veja como conseguir cada um.

### Emitindo seu próprio certificado
A forma mais simples é deixar o Xcode gerar tudo automaticamente, e funciona mesmo com uma conta Apple gratuita, sem precisar pagar pelo programa de desenvolvedor.

1. Abra o Xcode, vá em Settings, depois em Accounts, e adicione seu Apple ID.
2. Crie um projeto qualquer, ou abra um existente, e selecione seu time na aba Signing & Capabilities.
3. Marque "Automatically manage signing" e conecte um iPhone físico ao computador. Ao tentar rodar o projeto nesse dispositivo, o Xcode gera o certificado "Apple Development" e o provisioning profile correspondente sozinho, e já os instala no seu Keychain.

Se preferir gerar o certificado manualmente, pelo portal da Apple, o caminho é:

1. Abra o Keychain Access, vá em Certificate Assistant e depois em "Request a Certificate from a Certificate Authority". Preencha o e-mail e o nome, deixe o campo da CA em branco, e salve o arquivo `.certSigningRequest` em disco.
2. Acesse [developer.apple.com/account/resources/certificates](https://developer.apple.com/account/resources/certificates), clique no botão de adicionar, escolha "Apple Development" e envie o arquivo `.certSigningRequest` gerado no passo anterior.
3. Baixe o certificado `.cer` gerado e dê duplo clique nele para instalar no Keychain, junto com a chave privada criada no primeiro passo.

### Registrando o dispositivo
Pegue o UDID do seu iPhone com o `ideviceinfo`:

```bash
ideviceinfo -k UniqueDeviceID
```

Depois registre esse UDID em [developer.apple.com/account/resources/devices](https://developer.apple.com/account/resources/devices), clicando no botão de adicionar e colando o valor retornado.

### Criando o provisioning profile
Com o certificado e o dispositivo já registrados, falta o App ID e o profile:

1. Em [developer.apple.com/account/resources/identifiers](https://developer.apple.com/account/resources/identifiers), registre um App ID com o mesmo bundle identifier do app que você vai assinar, no exemplo abaixo, `gdsh.helloworld`.
2. Em [developer.apple.com/account/resources/profiles](https://developer.apple.com/account/resources/profiles), clique em adicionar, escolha "iOS App Development", selecione o App ID criado, o certificado gerado antes e o dispositivo registrado.
3. Baixe o arquivo `.mobileprovision` gerado ao final.

Se você usou o caminho automático pelo Xcode, esse profile já foi baixado sozinho e fica em `~/Library/Developer/Xcode/UserData/Provisioning Profiles/`.

### Confirmando a identidade disponível
Antes de assinar, confirme que o certificado está mesmo disponível no seu Keychain:

```bash
security find-identity -v -p codesigning
```

O comando lista as identidades de assinatura válidas na máquina. Copie o nome exato entre aspas, é esse valor que vai no parâmetro `-i` do `applesign`.

### Assinando e instalando o IPA
Com o certificado, o provisioning profile e o bundle ID em mãos, instale o `applesign` e assine o app:

```bash
npm install -g applesign

security find-identity -v -p codesigning
```
Salve a saída desse último comando para preencher o próximo:
```bash
applesign -i "[IDENTIDADE]" \
  -m [CAMINHO_DO_PROVISIONING_PROFILE] \
  -b [BUNDLE_ID] \
  [IPA_ORIGINAL] -o [IPA_ASSINADO]
```
Onde:
- `IDENTIDADE`: o nome exato retornado pelo `security find-identity -v -p codesigning`, entre aspas, algo como Apple Development: `seuemail@exemplo.com (ID_DO_TIME)`
- `CAMINHO_DO_PROVISIONING_PROFILE`: o caminho completo até o arquivo `.mobileprovision`, geralmente em `~/Library/Developer/Xcode/UserData/Provisioning Profiles/`
- `BUNDLE_ID`: o mesmo bundle identifier cadastrado no App ID, precisa bater exatamente com o que está no provisioning profile
- `IPA_ORIGINAL`: o caminho do IPA que você quer assinar, sem assinatura ou com uma assinatura inválida
- `IPA_ASSINADO`: o nome do arquivo de saída, já assinado com sua identidade

Depois isso você já consegue instalar o app normalmente:
```bash
ideviceinstaller install seuapp.ipa
```

Uma conta Apple gratuita tem duas limitações que valem lembrar aqui: o certificado de desenvolvimento expira em 7 dias, e é preciso repetir o processo de assinatura depois disso, e o provisioning profile só instala o app nos dispositivos que você registrou manualmente no passo anterior.

## Referências

- Apple Developer. Create a development provisioning profile. Disponível em: https://developer.apple.com/help/account/provisioning-profiles/create-a-development-provisioning-profile/
- applesign. Disponível em: https://github.com/nowsecure/applesign