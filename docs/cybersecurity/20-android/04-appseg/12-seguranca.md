---
title: Segurança do Android
---

Basicamente a segurança do Android tem duas camadas: a segurança do SO e a implementada na própria aplicação.

## Segurança da Aplicação

As linguagens **Kotlin e Java são as principais utilizadas** para o desenvolvimento de aplicativos Android. O Android SDK compila o código-fonte da aplicação junto com os arquivos de recursos e assets, gerando um pacote chamado APK — um arquivo compactado (como um zip) com extensão `.apk` que contém todos os componentes necessários para instalar e executar um aplicativo Android.

Um APK inclui:

- Bytecode compilado (arquivos `.dex`)
- Metadados de manifesto (`AndroidManifest.xml`)
- Recursos (imagens, layouts, strings)
- Bibliotecas nativas

## Funcionalidades de Segurança do Android

O Android utiliza um modelo de segurança baseado no Linux multiusuário, onde **cada aplicativo é tratado como um usuário separado**. Esse modelo de sandbox é sustentado pelas seguintes medidas:

- O sistema atribui a cada aplicativo um UID (User ID) exclusivo no sistema Linux.
- Esse UID é utilizado para controle de acesso, mas não é exposto ao aplicativo.
- Permissões no sistema de arquivos garantem que apenas o aplicativo associado a determinado UID possa acessar seus próprios arquivos.
- Cada aplicativo é executado em seu próprio processo, dentro de uma instância separada da Android Runtime (ART), assegurando isolamento de memória entre processos (uma VM que interpreta o bytecode `.dex`).
- O sistema inicializa o processo de um aplicativo apenas quando necessário e o encerra quando não for mais requisitado ou para liberar recursos.
- O Android aplica o princípio do mínimo privilégio: os aplicativos recebem apenas as permissões necessárias para suas funcionalidades principais, e permissões adicionais devem ser declaradas explicitamente no `AndroidManifest.xml` e autorizadas pelo usuário (ou pelo sistema, dependendo da versão do Android).

### Application Sandbox (Isolamento de Aplicações)

No Android não temos um `/etc/passwd` ou `/etc/groups`. Temos o **Android ID** (AID), um mapa de nomes identificadores, e grupos suplementares para recursos compartilhados ou protegidos (ex: `sdcard_rw`).

Cada app recebe um UID exclusivo e é executado em um processo separado. Esse mecanismo cria um sandbox a nível de kernel, que impõe barreiras rígidas entre os aplicativos e o sistema, evitando:

- Acesso não autorizado a dados de outros aplicativos.
- Execução de código fora dos limites do app.

É possível listá-los com:

```bash
dumpsys package | grep 'Package \[' -A1
```

Aplicativos não podem interagir diretamente entre si nem acessar recursos do sistema além dos concedidos por permissão explícita. Como esse isolamento é aplicado pelo kernel Linux, ele protege binários nativos, serviços do sistema operacional, bibliotecas e aplicativos de usuário.

:::note
Para escapar dessa sandbox, seria necessário comprometer o kernel, normalmente por meio de uma exploração de elevação de privilégio.
:::

Cada aplicativo Android roda em um processo próprio, com um UID exclusivo atribuído pelo sistema. Esse isolamento impede que apps acessem dados uns dos outros:

```bash
ls -l /data/data/
drwx------  5 u0_a114  u0_a114  4096 ... com.android.chrome
drwx------  5 u0_a119  u0_a119  4096 ... com.android.camera2
```

Cada app recebe um **UID distinto** (ex: `u0_a114`, `u0_a119`), que define permissões de acesso ao filesystem.

### Verified Boot no Android

Verified Boot é um recurso de segurança do Android que **protege a integridade do sistema operacional, verificando, durante o processo de inicialização (boot), se o software carregado não foi modificado de forma não autorizada**.

- Utiliza um conjunto exclusivo de chaves criptográficas para assinar e validar as imagens de boot.
- Durante o boot, cada estágio valida o próximo antes de repassá-lo para execução.
- Se a assinatura for válida, o processo segue normalmente.
- Se for inválida, o dispositivo pode recusar inicializar ou exibir um aviso informando o usuário sobre a alteração não autorizada no sistema.

#### Rollback Protection

Para evitar que um atacante instale uma versão antiga vulnerável do sistema (downgrade), o Rollback Protection garante que o Android só possa atualizar ou inicializar versões mais recentes do sistema. Essa proteção funciona armazenando metadados no dispositivo sobre a versão mínima permitida de inicialização.

Mais detalhes sobre o fluxo de boot: https://source.android.com/docs/security/features/verifiedboot/boot-flow

#### Por que isso importa no Pentest Mobile?

- Permite detectar se o dispositivo está com bootloader desbloqueado ou com imagens de boot adulteradas.
- Possibilita avaliar proteção contra rollback attacks.
- Controla a segurança da raiz de confiança (root of trust) usada pelo Verified Boot.
- Dispositivos sem Verified Boot ou mal configurados são mais propensos a root persistente, instalação de malwares no boot ou bypass de segurança via custom ROMs.

### Outras features de segurança

Abaixo descrevo brevemente algumas das principais features de segurança que são importantes de conhecer, pois podem ser vistas durante pentests.

| Recurso | Android Mínimo | Requer Hardware | Obrigatório para Apps |
| --- | --- | --- | --- |
| [Google Play Protect](#google-play-protect) | 6.0 (Marshmallow) | Sim (Google Mobile Services) | Ativado por padrão nos dispositivos com GMS |
| [SafetyNet API](#safetynet-api) | 4.4 (KitKat) | Sim (GMS + TEE recomendado) | Opcional (para apps que exigem verificação de integridade) |
| [SELinux](#selinux-security-enhanced-linux) | 4.3 (Permissive), 5.0 (Enforcing) | Não | Sim (nível do sistema) |
| [ASLR](#address-space-layout-randomization-aslr) | 4.1 (Jelly Bean) | Não | Sim (nível do sistema) |
| [Scoped Storage](#scoped-storage) | 10 (Q) | Não | Sim para target SDK 30+ |
| [Hardware-backed Keystore](#hardware-backed-keystore) | 4.3 (base), 6.0+ recomendado | Sim | Opcional, mas recomendado |
| [BiometricPrompt API](#biometricprompt-api) | 9 (Pie) | Sim (para biometria forte) | Recomendado |
| [Protected Confirmation](#protected-confirmation-android-9) | 9 (Pie) | Sim (TEE obrigatório) | Opcional |

#### Google Play Protect

É o sistema de verificação de apps integrado ao Google Play Services. Ele realiza análise automática dos aplicativos instalados e das novas instalações, mesmo que venham de fora da Play Store. O Play Protect utiliza machine learning para detectar comportamentos maliciosos e pode desabilitar ou remover apps remotamente. Também verifica URLs no navegador e protege contra apps de phishing e trojans.

#### SafetyNet API

É uma API oferecida pelo Google para desenvolvedores verificarem a integridade do dispositivo. Ela responde com sinais sobre:

- Se o bootloader está desbloqueado
- Se o dispositivo foi rooteado ou está rodando uma ROM customizada
- Se o ambiente está alterado (emulador, debugger, etc)
- Se a integridade do sistema foi comprometida

O SafetyNet é amplamente usado por apps bancários e de autenticação para bloquear uso em dispositivos potencialmente comprometidos.

#### SELinux (Security-Enhanced Linux)

O Android adotou o SELinux no modo "enforcing" a partir do Android 5.0. Trata-se de um sistema de controle de acesso obrigatório (MAC - Mandatory Access Control) que impõe políticas rígidas sobre quais processos podem acessar quais recursos. Mesmo que um processo ganhe permissões elevadas (como root), o SELinux pode impedir ações não autorizadas se não estiverem permitidas na política. Isso adiciona uma camada de contenção importante contra exploração local.

#### Address Space Layout Randomization (ASLR)

É uma técnica de proteção que aleatoriza os endereços de memória usados por processos em tempo de execução, dificultando exploits baseados em execução de código arbitrário. Ao randomizar regiões como stack, heap e bibliotecas, o ASLR impede que um invasor possa prever com precisão os endereços de retorno ou de funções maliciosas.

O Android implementa ASLR a partir da versão 4.1 (Jelly Bean), com melhorias significativas nas versões posteriores, especialmente em conjunto com NX (no-execute) e PIE (position-independent executables).

#### Scoped Storage

Introduzido no Android 10, o scoped storage restringe o acesso direto ao armazenamento externo (como `/sdcard`) por parte dos aplicativos. Cada app só pode acessar seus próprios diretórios (ex: `/sdcard/Android/data/com.exemplo.app/`), a menos que use APIs específicas ou solicite permissões explícitas como `MANAGE_EXTERNAL_STORAGE`.

Isso evita que apps maliciosos acessem ou modifiquem dados de outros apps, reduzindo a superfície de ataque e vazamentos acidentais de dados.

#### Hardware-backed Keystore

O Android Keystore permite que apps armazenem e utilizem chaves criptográficas sem nunca expô-las diretamente à aplicação. Quando o dispositivo suporta um hardware-backed keystore, essas chaves são geradas e mantidas dentro de um elemento seguro, como o Trusted Execution Environment (TEE) ou Secure Element (SE).

Essas chaves não podem ser extraídas nem mesmo com root, e operações como assinatura, criptografia ou autenticação são realizadas dentro do próprio hardware. Isso é usado para proteger senhas, tokens, certificados e autenticação biométrica.

#### BiometricPrompt API

A BiometricPrompt é a API moderna e segura para autenticação biométrica (impressão digital, reconhecimento facial, etc) a partir do Android 9 (API 28). Ela substitui APIs antigas como `FingerprintManager`, oferecendo:

- Interface unificada para todas as biometrias
- Integração com o Android Keystore para autenticação baseada em chave
- Verificação de forte autenticidade (Strong vs Weak biometric)
- Manuseio automático de fallback para PIN/padrão

Além disso, impede spoofing via hardware e garante UX segura por meio de prompts controlados pelo sistema.

#### Protected Confirmation (Android 9+)

Recurso voltado a operações de segurança crítica, onde é necessário garantir que o usuário confirmou conscientemente uma ação, e que essa confirmação não foi forjada por malware ou interação simulada. O sistema exibe uma interface especial controlada pelo TEE (Trusted Execution Environment), onde o usuário deve aceitar ou rejeitar uma mensagem — sem possibilidade de interferência de apps de terceiro. É usado em cenários como aprovações financeiras, autorizações sensíveis e assinatura de transações.
