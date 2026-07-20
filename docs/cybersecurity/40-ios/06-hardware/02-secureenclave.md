---
title: Secure Enclave
slug: /cybersecurity/iosbasics/hardware/secureenclave
---

# Secure Enclave

O Secure Enclave é um coprocessador dedicado presente nos dispositivos iOS, projetado para isolar e proteger operações sensíveis. Ele roda um microkernel próprio, separado do sistema principal, o que garante que dados críticos nunca sejam expostos diretamente ao iOS ou às aplicações. A principal função do Secure Enclave é realizar operações criptográficas seguras e proteger informações sensíveis, mesmo em cenários onde o sistema operacional principal esteja comprometido.

## Criptografia

O Secure Enclave é responsável por gerar e proteger chaves criptográficas, cobrindo geração de chaves seguras que nunca saem do enclave, operações de criptografia e descriptografia, e proteção de chaves associadas ao dispositivo através da UID, um identificador único vinculado ao hardware.

Como essas chaves ficam presas ao hardware, elas não podem ser extraídas mesmo com acesso root obtido por jailbreak, o que dificulta bastante ataques que dependem de exfiltrar material criptográfico do dispositivo.

## Proteção de dados biométricos

O Secure Enclave também armazena e processa dados biométricos, como os usados por Touch ID e Face ID, de forma isolada do restante do sistema. O iOS recebe apenas uma resposta do tipo *match* ou *no match*, sem qualquer acesso direto ao dado biométrico original, o que garante que nem mesmo aplicações com alto privilégio consigam ler essa informação.

## Verificação prática

O Secure Enclave é acessado indiretamente pelas apps através do Keychain Services. É ali que ficam guardados tokens, senhas, chaves privadas e credenciais protegidas por biometria.

Durante um pentest, o que se avalia é se dados sensíveis estão realmente no Keychain, em vez de expostos em um plist ou em um banco SQLite, e se as proteções corretas estão configuradas através do atributo `kSecAttrAccessible`. Também vale checar se o app exige biometria via `kSecAccessControl` quando isso faz sentido para o dado protegido. Usar `kSecAttrAccessibleAlways`, por exemplo, torna um item acessível mesmo com o aparelho bloqueado, o que costuma ser um problema para dados sensíveis. Um fallback de biometria mal implementado, ou com lógica fraca depois da autenticação, também pode levar a um comprometimento mesmo quando o Secure Enclave em si está funcionando corretamente.

O trecho abaixo mostra como um app costuma checar se o dispositivo suporta autenticação biométrica, o que geralmente denuncia o uso do Secure Enclave por trás:

```objectivec
LAContext *context = [[LAContext alloc] init];
[context canEvaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics error:nil];
```

Se o retorno for verdadeiro, o dispositivo suporta e está usando o Secure Enclave para essa operação. Na console do próprio device, também é possível observar essa atividade através do `sysctl` e do `log stream`:

```bash
sysctl -a | grep -i sep
log stream --predicate 'eventMessage contains "SEP"'
```

O objection é uma ferramenta de instrumentação em runtime que vamos ver mais adiante. O importante agora é saber que é muito usado em avaliação de apps iOS para dump do keychain, que lista os itens acessíveis à aplicação atual.

```bash
ios keychain dump
```

O comando monta uma query interna cobrindo as classes de item do keychain, como `kSecClassKey`, `kSecClassIdentity` e `kSecClassInternetPassword`, e chama `SecItemCopyMatching` para cada uma delas. O resultado traz colunas como data de criação, atributo de acessibilidade, ACL, tipo, conta, serviço e o valor armazenado. Isso já permite identificar rapidamente itens salvos com `kSecAttrAccessibleAlways` ou sem controle de acesso biométrico, que são os achados mais comuns em relatório.


## Referências

- SensePost. objection: ios.keychain.dump helpfile. Disponível em: https://github.com/sensepost/objection/blob/master/objection/console/helpfiles/ios.keychain.dump.txt
- SensePost. Notes About The Keychain Dumper. Disponível em: https://github.com/sensepost/objection/wiki/Notes-About-The-Keychain-Dumper
- OWASP Mobile Application Security Testing Guide. MASTG-TECH-0061: Dumping KeyChain Data. Disponível em: https://mas.owasp.org/MASTG/techniques/ios/MASTG-TECH-0061/
- Red Fox Security. iOS Pen Testing with Objection: Security Pro's Full Guide. Disponível em: https://www.redfoxsec.com/blog/ios-pen-testing-with-objection-a-complete-guide-for-security-professionals
