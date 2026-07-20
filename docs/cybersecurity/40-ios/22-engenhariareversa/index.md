---
title: Introdução à Eng. Reversa

---

# iOS Reverse Engineering
Antes de nos aprofundarmos na engenharia reversa de aplicações iOS, vamos estabelecer a definição do que é engenharia reversa e alguns outros termos:

- **Reverse Engineering (RE)**: RE é o ato de reverter as funcionalidades de uma aplicação, sistema, protocolo, arquivo ou qualquer outra coisa, com o objetivo de **entender seu funcionamento interno**. Dessa forma, a **desmistificar** o funcionamento de algo que antes era apenas uma caixa preta, algo desconhecido.

- **Ofuscação de código**: é o ato de criar códigos cada vez mais **difíceis de serem compreendidos por humanos**, dificultando o processo de RE.

- **Análise Estática**: foca no entendimento, análise ou modificação das funcionalidades de uma aplicação que **não está em execução (estado estático)**. Isso é feito por meio de ferramentas e procedimentos que entregam a capacidade de analisar arquivos em repouso.

- **Análise dinâmica**: foca no entendimento, análise ou modificação de uma aplicação enquanto ela **está em execução (estado dinâmico)**. Isso pode ser feito por meio de ferramentas e procedimentos que entregam a capacidade de ler e modificar código da aplicação enquanto ela está sendo executada.

Agora vamos voltar um pouco e entender como isso é feito para aplicações iOS.

Vale deixar claro desde já que os próximos dois capítulos deste livro, a análise inicial de arquivos e a análise dinâmica com Frida e Objection, não são assuntos separados da engenharia reversa, eles são as duas formas de praticá-la. Tudo que vem depois deste capítulo, seja lendo um `Info.plist` sem executar o app ou hookando um método em runtime, é engenharia reversa sendo aplicada, só que através de uma abordagem estática ou de uma abordagem dinâmica, dependendo do caso.

Este capítulo cobre os fundamentos que sustentam as duas abordagens, o formato do binário Mach-O, as ferramentas mais usadas pela comunidade e o `ipsw`, que vamos usar em profundidade para extrair e ler informações do binário antes mesmo de partir para hooking dinâmico.