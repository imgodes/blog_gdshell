---
title: Ferramentas e Procedimentos
---

# Ferramentas e Procedimentos

Acho importante apresentar as principais ferramentas que apoiam a engenharia reversa de apps iOS. Peguei essas informações na página [The Apple Wiki, Reverse Engineering Tools](https://theapplewiki.com/wiki/Dev:Reverse_Engineering_Tools), traduzi e organizei em duas frentes, análise estática e análise dinâmica, do mesmo jeito que a wiki original divide o assunto.

:::warning

Gostaria de deixar avisado, que você **não precisa ter e conhecer todas essas ferramentas**. Eu as listei aqui para servir de consulta. Quando você se deparar com algum problema, este pode ser o local onde você procura ferramentas úteis.

:::

## Análise estática

### ipsw

O [`ipsw`](https://github.com/blacktop/ipsw), que vamos usar em detalhe nos próximos tópicos, é uma ferramenta praticamente completa, capaz de fazer boa parte do que todas as outras ferramentas desta seção fazem, e mais um pouco. É escrito em Go e roda em macOS, com suporte parcial em Linux.

### Ferramentas de dump de classes e metadados

Antes de existir uma ferramenta como o `ipsw`, o processo de dump de classes Objective-C dependia de um conjunto maior de ferramentas específicas, que ainda valem a pena conhecer.

- [developer.limneos.net](https://developer.limneos.net/?ios=26.1&framework=AppAnalytics.framework): site com headers de iOS já extraídos e disponíveis para consulta, cobrindo várias versões do sistema.
- [nst/iOS-Runtime-Headers](https://github.com/nst/iOS-Runtime-Headers): repositório no GitHub com o mesmo tipo de header, hospedado onde a busca do próprio GitHub facilita a pesquisa.
- [0cyn/ktool](https://github.com/0cyn/ktool): ferramenta multiplataforma para dump de classes Objective-C e geração de headers, rodando em Windows, macOS, Linux, iOS e Android. Além do dump, permite navegar por load commands e segments de um binário Mach-O, e inserir ou substituir load commands.
- [DerekSelander/dsdump](https://github.com/DerekSelander/dsdump): ferramenta compatível com macOS e iOS, com o diferencial de também conseguir dumpar metadados Swift, funcionando como uma versão melhorada do `nm` combinado com dump de classes ObjC e Swift.
- [class-dump](https://github.com/nygard/class-dump), [class_dump_z](https://code.google.com/archive/p/networkpx/wikis/class_dump_z.wiki) e [classdump-dyld](https://github.com/limneos/classdump-dyld): dado um executável, geram arquivos de header com as interfaces das classes presentes nele. O `classdump-dyld` tem a vantagem de rodar direto no dispositivo, útil para dumpar frameworks privados sem precisar de um Mac com Xcode.

### Descriptografia de apps da App Store

Apps baixados da App Store vêm criptografados por padrão, o que exige uma etapa de descriptografia antes de qualquer análise estática do binário. O [`flexdecrypt`](https://github.com/JohnCoates/flexdecrypt) é notável por não exigir que o app seja executado para descriptografar o executável. Outras opções conhecidas são o [`Clutch`](https://github.com/KJCracks/Clutch) e o [`dumpdecrypted`](https://github.com/stefanesser/dumpdecrypted).

### Extração do dyld_shared_cache

Todas as bibliotecas do sistema, privadas e públicas, ficam combinadas em um único arquivo de cache para melhorar performance, o `dyld_shared_cache`. Para extrair conteúdo de um cache estático, a ferramenta recomendada é o [`DyldExtractor`](https://github.com/arandomdev/DyldExtractor), que funciona em qualquer plataforma.

### Desmontadores e decompiladores

Disassemblers são úteis quando é preciso uma análise mais profunda de um binário. Além de desmontar, gerando código assembly, algumas dessas ferramentas também decompilam, entregando um pseudocódigo em C próximo do original.

- [IDA Pro](https://hex-rays.com/ida-pro/): talvez o desmontador mais tradicional do mercado, com décadas de desenvolvimento e suporte a uma quantidade enorme de arquiteturas de processador. Existe em versões pagas de diferentes preços, da versão completa até uma versão gratuita limitada a x86 e x86_64.
- [Hopper](https://www.hopperapp.com/): alternativa mais barata ao IDA, com boa experiência de uso, mas com limitações reais para iOS, como debugging local restrito a x64 e um pseudocódigo mais difícil de editar.
- [Ghidra](https://ghidra-sre.org/): ferramenta gratuita e poderosa, lançada pela NSA. O pseudocódigo gerado é comparável ao do IDA, e para quem não tem orçamento para licenças caras, o Ghidra já é suficiente para praticamente qualquer análise.
- [BinaryNinja](https://binary.ninja/): desmontador mais recente, com API em Python e C++ e boa capacidade de extensão via plugins.
- [jtool](http://www.newosxbook.com/tools/jtool.html): utilitário de linha de comando para análise estática de caches Mach-O, objetos e arquivos.
- [otool](https://man.cameronkatri.com/otool): exibe partes específicas de arquivos objeto ou bibliotecas, e também consegue desmontar código, sendo um dos utilitários mais usados no dia a dia de análise de binários Mach-O.

### strings e nm

O [`strings`](https://man.cameronkatri.com/strings) imprime todas as strings legíveis presentes em um binário, uma forma rápida de encontrar URLs, chaves hardcoded ou mensagens de erro reveladoras. O [`nm`](https://man.cameronkatri.com/nm) exibe a tabela de símbolos de um binário, mostrando funções e variáveis exportadas, o que ajuda a mapear a superfície de código antes de partir para um desmontador.

## Análise dinâmica

As ferramentas a seguir servem para analisar um programa enquanto ele está em execução.

- [GDB](https://www.gnu.org/software/gdb/) e [LLDB](https://lldb.llvm.org/): debuggers clássicos, usados para entender o que causa um crash, obter backtraces em pontos específicos da execução e inspecionar o estado do processo em tempo real.
- [Cycript](https://www.cycript.org/): permite rodar código próprio dentro de um processo já anexado, com uma sintaxe parecida com JavaScript. É útil tanto para inspecionar a hierarquia de views de um app quanto para prototipar hooks rapidamente, embora hoje em dia o Frida tenha assumido boa parte desse espaço.
- [objtree](https://github.com/hot3eed/objtree): mostra árvores completas de chamadas de métodos Objective-C dentro do escopo de uma função, no mesmo estilo do `frida-trace`.
- [xpcspy](https://github.com/hot3eed/xpcspy): intercepta comunicação entre processos feita via XPC.
- [Logify](https://theos.dev/docs/logify): a partir de um header de interface Objective-C, gera um arquivo Logos que loga automaticamente a chamada de cada método daquela classe no syslog, o que dá uma visão rápida de quando e com quais parâmetros cada método é chamado durante o uso normal do app.
- [InspectiveC](https://github.com/DavidGoldman/InspectiveC): loga hierarquias de mensagens entre objetos, classes e seletores, útil para entender o funcionamento de um método sem precisar mergulhar direto no assembly.

### Debug visual de interface

- [Reveal](https://revealapp.com): app de macOS para debug de UI, com uma experiência parecida com o storyboard do Xcode e edição de layout em tempo real. Tem histórico de problemas de performance em versões recentes.
- [Lookin](https://github.com/hughkli/Lookin): alternativa gratuita ao Reveal, com performance melhor e mais recursos na maioria dos casos.
- [FLEX](https://github.com/Flipboard/FLEX): ferramenta de debug e exploração embutida no próprio app, carregada dinamicamente, que permite inspecionar view hierarchy, dados e estado direto na tela do dispositivo.

## Referências

- The Apple Wiki. Dev:Reverse Engineering Tools. Disponível em: https://theapplewiki.com/wiki/Dev:Reverse_Engineering_Tools
