---
title: Dispositivo físico e Jailbreak
---

## Dispositivo físico
Um dispositivo físico é o ideal para nós Brasileiros, dificilmente a empresa para qual você trabalha terá verba para comprar uma licença do Corellium. E na minha experiência com ele, sinceramente, nem vale a pena, muito travado.

Mas antes de falar sobre qual versão do iPhone é a ideal, vamos primeiro entender o que é um "*Jailbreak*" e por que ele é mandatório para escolhermos um iPhone.

## Jailbreak
O termo *jailbreak* se refere ao processo pelo qual alguma forma de execução de código arbitrário é obtida por meio de explorações de falhas no kernel do iOS. Se você viu nossos tópicos sobre o [Básico de iOS](/docs/category/ios-basics-1) deve se lembrar que diversos componentes devem ser contornados para que de fato um iOS com o kernel comprometido seja utilizável. E justamente por isso, são versões muito específicas do iOS que os *jailbreaks* realmente funcionam.

## Tipos de jailbreak
Antes de entrar na parte técnica de como um jailbreak se instala, vamos diferenciar os tipos, porque essa classificação é o que mais aparece quando você for escolher qual ferramenta usar em cada versão de iOS.

- Tethered: o dispositivo precisa ser inicializado por um computador toda vez que reinicia, senão simplesmente não liga. É o tipo mais raro hoje, já que a partir do iPhone 3GS a Apple passou a verificar a assinatura de toda a cadeia de boot. Exemplos: blackra1n, 4039.
- Semi-tethered: o dispositivo liga normalmente sozinho, mas volta ao estado sem jailbreak até você rodar a ferramenta de novo em um computador. Exemplos: checkra1n, palera1n.
- Untethered: o jailbreak é feito uma vez e persiste para sempre, mesmo depois de reiniciar o aparelho sem computador nenhum por perto. Foi o padrão da maior parte da história do jailbreak, mas praticamente desapareceu a partir do iOS 9. Exemplos: redsn0w, Pangu, Absinthe.
- Semi-untethered: o jailbreak é reaplicado por um app diretamente no próprio iPhone depois de cada reinicialização, sem precisar de computador. É o modelo mais comum hoje em dia. Exemplos: unc0ver, Dopamine, Taurine.

## Como o jailbreak libera o sistema
O *jailbreak* é executado com sucesso quando o código malicioso consegue montar a partição do sistema com permissões de leitura e escrita, e a forma como se alcança isso depende do exploit utilizado e da versão do iOS.

No modelo clássico, usado até o iOS 14, o exploit modifica o `/private/etc/fstab` para remontar a partição de sistema como leitura e escrita. A partir daí, os arquivos do jailbreak e os tweaks eram instalados diretamente nessa partição.

A partir do iOS 15, isso deixou de ser possível. A Apple introduziu o Signed System Volume, que sela a partição de sistema com verificação criptográfica em tempo de execução. Qualquer tentativa de remontar essa partição como leitura e escrita hoje causa kernel panic e reinicia o aparelho. Por causa disso, os jailbreaks modernos são chamados de rootless, afinal, eles não tocam mais na partição de sistema, que permanece somente leitura, e instalam seus componentes e tweaks na partição do usuário, normalmente em `/var/jb`, que já é gravável mesmo sem jailbreak. Ainda existem algumas tentativas de jailbreak rootful depois do iOS 15, que criam uma cópia inteira da partição de sistema para montar como leitura e escrita, mas essa abordagem consome muito espaço e caiu em desuso.

## Referências

- The Apple Wiki. Jailbreak. Disponível em: https://theapplewiki.com/wiki/Jailbreak
- iDevice Central. What is a Rootless Jailbreak & Is Rootless Less Powerful Than Rootful? Disponível em: https://idevicecentral.com/jailbreak-tools/what-is-a-rootless-jailbreak-and-is-rootless-less-powerful/