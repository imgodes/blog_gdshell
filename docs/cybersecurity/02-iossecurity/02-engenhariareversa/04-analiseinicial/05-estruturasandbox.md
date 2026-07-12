---
title: Estrutura de diretório do sandbox
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Estrutura de diretório do sandbox iOS

Quando um app é instalado no iOS, o sistema cria vários diretórios próprios para ele, isolados dos diretórios de outros apps, como visto no capítulo sobre [App Sandbox](/docs/cybersecurity/iosbasics/appstructure/sandboxfolders). Esses diretórios têm papéis diferentes, um guarda o bundle estático do app, outro guarda arquivos que o usuário cria, outro guarda cache que pode ser apagado a qualquer momento, e assim por diante. Saber onde cada tipo de dado costuma parar é o que torna a análise de armazenamento local rápida em vez de uma busca às cegas pelo sandbox inteiro.

Um comando que veremos mais adiante, é o `env` do `objection` que lista os principais diretórios do sandbox da aplicação. Veja abaixo um exemplo de saída desse comando:

| Name | Path |
|------|------|
| **BundlePath** | /private/var/containers/Bundle/Application/1F8DC61F-1B8F-4EEB-86DB-FB4C058D5466/DVIA-v2.app |
| **CachesDirectory** | /var/mobile/Containers/Data/Application/570497EC-ADC0-4AA5-9F58-53D65D2C4E5E/Library/Caches |
| **DocumentDirectory** | /var/mobile/Containers/Data/Application/570497EC-ADC0-4AA5-9F58-53D65D2C4E5E/Documents |
| **LibraryDirectory** | /var/mobile/Containers/Data/Application/570497EC-ADC0-4AA5-9F58-53D65D2C4E5E/Library |

Entender o papel de cada um é essencial para saber onde procurar dados sensíveis, plists, bancos SQLite, tokens e cache durante um pentest de app iOS. 

<Tabs>
  <TabItem value="BundlePath" label="BundlePath">
  É a pasta do bundle estático, o app instalado em si. Não é gravável em tempo de execução, então não é aqui que você va achar dados criados pelo usuário. Aqui ficam o binário, assets, storyboards compilados e o Info.plist original. Útil pra engenharia reversa do binário e pra checar configurações estáticas, mas não pra dados gerados em runtime.
  </TabItem>
  <TabItem value="CachesDirectory" label="CachesDirectory">
  Usada para dados temporários que o sistema pode limpar automaticamente quando precisa de espaço. Apps costumam guardar aqui imagens baixadas, respostas de API em cache e dados de sessão de rede (URLCache por exemplo). É gravável em tempo de execução, mas não é o destino padrão de um plist salvo intencionalmente. Vale checar mesmo assim, porque devs às vezes colocam coisa sensível aqui por engano.
  </TabItem>
  <TabItem value="DocumentDirectory" label="DocumentDirectory">
   Gravável em tempo de execução e é o lugar mais comum onde desenvolvedores salvam arquivos que devem persistir, incluindo bancos SQLite/Core Data, arquivos JSON de configuração e plists criados manualmente pelo código do app.
  </TabItem>
  <TabItem value="LibraryDirectory" label="LibraryDirectory">
  Também gravável em tempo de execução. Dentro dela existe a subpasta `Preferences`, que é onde o `NSUserDefaults` grava seus plists automaticamente através do `cfprefsd`. É um dos primeiros lugares a checar para tokens, flags de sessão e configurações salvas via NSUserDefaults. Outras subpastas relevantes dentro de Library:
  - `Library/Application Support`: dados persistentes gerenciados pelo app, muitas vezes bancos de dados e arquivos de estado.
  - `Library/Cookies`: cookies de sessão HTTP persistidos pelo NSHTTPCookieStorage.
  - `Library/WebKit`: dados de WKWebView, incluindo local storage e cache de páginas web carregadas dentro do app.
  </TabItem>
</Tabs>

## Insights para pentest

1. `Library/Preferences` (plists do NSUserDefaults)
2. `Documents` (bancos de dados, arquivos criados pelo app)
3. `Library/Application Support` (Core Data, estado persistente)
4. `Library/Cookies` e `Library/WebKit` (sessão e webview)
5. `Caches` (pode conter dados sensíveis por descuido do dev)
6. `BundlePath` (análise estática do binário, não dados de runtime)

