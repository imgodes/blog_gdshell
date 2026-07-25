---
title: Introdução ao Pentest Android
---

O pentest em aplicações Android envolve a engenharia reversa das mesmas. Isso pode ser feito pelo processo dos arquivos criados no Android, pela análise estática do código da aplicação ou pela análise dinâmica do comportamento do app em tempo de execução.

Para executar cada uma dessas atividades é necessário ter um ambiente devidamente configurado com as ferramentas certas. Nos próximos tópicos eu descrevo algumas delas, mas cabe aqui fazer uma breve descrição de "procedimentos" (por falta de nome melhor) e ferramentas para que você se situe melhor:

<Stepper>
  <Step title="Procedimentos/Técnicas">
  - **Reverse Engineering (RE)**: RE é o ato de reverter as funcionalidades de uma aplicação, sistema, protocolo, arquivo ou qualquer outra coisa, com o objetivo de **entender seu funcionamento interno**. Dessa forma, a **desmistificar** o funcionamento de algo que antes era apenas uma caixa preta, algo desconhecido.
  - **Ofuscação de código**: é o ato de criar códigos cada vez mais **difíceis de serem compreendidos por humanos**, dificultando o processo de RE.
  - **Análise Estática**: foca no entendimento, análise ou modificação das funcionalidades de uma aplicação que **não está em execução (estado estático)**. Isso é feito por meio de ferramentas e procedimentos que entregam a capacidade de analisar arquivos em repouso.
  - **Análise dinâmica**: foca no entendimento, análise ou modificação de uma aplicação enquanto ela **está em execução (estado dinâmico)**. Isso pode ser feito por meio de ferramentas e procedimento
  </Step>
  <Step title="Ferramentas">
    - [APKTool](https://apktool.org/), [Jadx](https://github.com/skylot/jadx) e [JD-GUI](https://java-decompiler.github.io/): são ferramentas de análise estática, o objetivos delas é "desmontar" uma aplicação android para que possa ser analisada.
    - [KernelSU](https://kernelsu.org/pt_BR/) e [Magisk](https://github.com/topjohnwu/Magisk): são ferramentas que tem o objetivo de prover acesso de root ao dispositivo, como veremos mais adiante, isso é útil de várias formas diferentes. Ambos possuem módulos para que possamos ditar como queremos que as interações com o root aconteçam, podendo inclusive limitar o acesso a ele de acordo com as nossas necessidades.
    - [Frida](https://frida.re/docs/home/) e [Objection](https://github.com/sensepost/objection): são ferramentas de instrumentação dinâmica que nos dão a capacidade de modificar o comportamento do app enquanto ele está sendo executado por meio de hooks.
    - [MobSF](https://github.com/mobsf/mobile-security-framework-mobsf): é uma ferramenta que analisa uma aplicação e gera um relatório da sua postura de segurança (não é tão incrível quanto parece).
  </Step>
</Stepper>

O objetivo deste capítulo é criar uma boa base quanto a teoria das principais ferramentas que você vai interagir durante o pentest. É claro que é difícil entender alguns conceitos sem ter os visto na prática, e se você se sentir assim, fique a vontade para pular para o capítulo de [setup do ambiente](/docs/cybersecurity/android/setupdoambiente/) onde você configurá na prática as principais ferramentas.