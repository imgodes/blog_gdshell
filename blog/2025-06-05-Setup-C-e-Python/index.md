---
slug: setupCPython
title: 'Cap. Linguagens de Alto Nível: Setup de C e Python'
tags: [tech]
image: /img/elkburp.png
draft: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- truncate -->

Para acompanhar os projetos práticos do livro, você precisará ter dois programas instalados no seu computador: o **GCC** (compilador de C) e o **Python**. Este guia vai te levar pelo processo passo a passo, independente do seu sistema operacional.

Não se preocupe se é sua primeira vez instalando algo assim — vamos com calma.

---

## O que é um terminal?

Antes de instalar qualquer coisa, precisamos falar sobre o **terminal** (também chamado de **linha de comando**). É um programa onde você digita instruções de texto para o computador executar, sem usar o mouse. Parece intimidador, mas você vai usar apenas alguns comandos simples.

> Imagem aqui: captura de tela de um terminal aberto, mostrando o cursor piscando aguardando um comando

Cada sistema operacional tem o seu:

- **Windows** — o terminal se chama **Prompt de Comando** (CMD) ou **PowerShell**. Você pode abri-lo pesquisando por "cmd" ou "PowerShell" no menu Iniciar.
- **macOS** — o terminal se chama **Terminal**. Está em Aplicativos → Utilitários → Terminal, ou você pode buscá-lo com Cmd + Espaço e digitar "Terminal".
- **Linux Ubuntu** — o terminal se chama **Terminal**. Você pode abri-lo com o atalho Ctrl + Alt + T ou buscando por "Terminal" no menu de aplicativos.

> Imagem aqui: lado a lado mostrando onde abrir o terminal no Windows (menu iniciar com "cmd"), macOS (spotlight com "Terminal") e Ubuntu (atalho Ctrl+Alt+T)

---

## Instalando o GCC (compilador de C)

O GCC é o programa responsável por transformar o código C que você escreve em algo que o computador consegue executar. Sem ele, seus programas em C não vão rodar.

<Tabs>
  <TabItem value="ubuntu" label="Linux Ubuntu" default>

Abra o Terminal e execute os dois comandos abaixo, um de cada vez. Após cada um, pressione Enter e aguarde terminar antes de digitar o próximo.

O primeiro atualiza a lista de programas disponíveis:
```bash
sudo apt update
```

O segundo instala o GCC:
```bash
sudo apt install gcc
```

Você verá uma mensagem perguntando se deseja continuar — responda com `S` (ou `Y` caso esteja em inglês) e pressione Enter.

> Imagem aqui: terminal Ubuntu mostrando a saída do `sudo apt install gcc` com a pergunta de confirmação

  </TabItem>
  <TabItem value="macos" label="macOS">

No macOS, o GCC vem junto com as **Ferramentas de Linha de Comando da Apple**. Para instalá-las, abra o Terminal e execute:

```bash
xcode-select --install
```

Uma janela vai aparecer perguntando se você quer instalar — clique em **Instalar** e aguarde. O download pode demorar alguns minutos dependendo da sua internet.

> Imagem aqui: janela pop-up do macOS perguntando para instalar as ferramentas de linha de comando, com o botão "Instalar" em destaque

  </TabItem>
  <TabItem value="windows" label="Windows">

No Windows, o processo tem mais um passo. Vamos instalar o GCC através de um pacote chamado **WinLibs**, que é a forma mais direta para iniciantes.

**Passo 1** — Acesse o site [winlibs.com](https://winlibs.com) e baixe a versão mais recente do GCC para Windows. Procure pela seção "Release versions" e baixe o arquivo `.zip` da versão **Win64** (MSVCRT).

> Imagem aqui: página do winlibs.com com a seção de download destacada, apontando para o arquivo zip correto

**Passo 2** — Extraia o arquivo `.zip` baixado. Dentro dele haverá uma pasta chamada `mingw64`. Mova essa pasta para `C:\mingw64`.

> Imagem aqui: explorador de arquivos do Windows mostrando a pasta mingw64 sendo movida para C:\

**Passo 3** — Agora precisamos informar ao Windows onde encontrar o GCC. Pesquise por "variáveis de ambiente" no menu Iniciar e clique em **Editar as variáveis de ambiente do sistema**.

> Imagem aqui: menu iniciar com "variáveis de ambiente" pesquisado e o resultado em destaque

**Passo 4** — Na janela que abriu, clique em **Variáveis de Ambiente**. Na seção "Variáveis do sistema", encontre a variável chamada **Path**, selecione-a e clique em **Editar**. Clique em **Novo** e adicione o caminho `C:\mingw64\bin`. Confirme clicando em **OK** em todas as janelas.

> Imagem aqui: janela de edição do Path com o novo valor C:\mingw64\bin adicionado

  </TabItem>
</Tabs>

### Verificando se o GCC foi instalado

Independente do seu sistema operacional, abra o terminal e execute:

```bash
gcc --version
```

Se a instalação deu certo, você verá algo parecido com isto:

```
gcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0
```

O número da versão pode ser diferente, mas o importante é que o comando respondeu sem erros. Se aparecer uma mensagem de erro dizendo que `gcc` não foi encontrado, revise os passos da instalação.

> Imagem aqui: terminal mostrando a saída do `gcc --version` com sucesso

---

## Instalando o GDB (depurador de C)

O GDB é o programa que permite inspecionar o que acontece dentro de um programa C enquanto ele executa — útil para encontrar erros difíceis de localizar só lendo o código.

<Tabs>
  <TabItem value="ubuntu" label="Linux Ubuntu" default>

Abra o Terminal e execute:

```bash
sudo apt install gdb
```

Confirme com `S` quando solicitado.

  </TabItem>
  <TabItem value="macos" label="macOS">

No macOS, o depurador que vem junto com as Ferramentas de Linha de Comando da Apple é o **LLDB** — ele cumpre o mesmo papel do GDB. Se você já executou o `xcode-select --install` na etapa anterior, o LLDB já está disponível.

Para verificar, execute:

```bash
lldb --version
```

Nos exemplos do livro que usarem `gdb`, substitua pelo comando `lldb`.

  </TabItem>
  <TabItem value="windows" label="Windows">

O GDB já vem incluído no pacote WinLibs que você baixou na etapa anterior. Não é necessário instalar nada a mais.

  </TabItem>
</Tabs>

### Verificando se o GDB foi instalado

No Ubuntu e Windows, execute:

```bash
gdb --version
```

Você verá algo como:

```
GNU gdb (Ubuntu 15.0.50.20240403-0ubuntu1) 15.0.50.20240403
```

No macOS, o comando equivalente é `lldb --version`.

> Imagem aqui: terminal mostrando a saída do `gdb --version` com sucesso

---

## Instalando o Python

O Python é uma linguagem de programação que também usaremos nos projetos. Diferente do C, o Python não precisa ser compilado — você executa os programas diretamente.

<Tabs>
  <TabItem value="ubuntu" label="Linux Ubuntu" default>

O Ubuntu geralmente já vem com o Python instalado. Para verificar, execute no terminal:

```bash
python3 --version
```

Se aparecer um número de versão (como `Python 3.12.3`), o Python já está instalado e você pode pular para a próxima seção.

Caso não esteja instalado, execute:

```bash
sudo apt install python3
```

  </TabItem>
  <TabItem value="macos" label="macOS">

Assim como no Ubuntu, o macOS pode já ter o Python instalado. Verifique com:

```bash
python3 --version
```

Se não estiver instalado, a forma mais simples é baixar o instalador oficial em [python.org/downloads](https://python.org/downloads). Clique no botão amarelo de download, abra o arquivo `.pkg` baixado e siga o assistente de instalação.

> Imagem aqui: página de download do python.org com o botão de download para macOS em destaque

  </TabItem>
  <TabItem value="windows" label="Windows">

**Passo 1** — Acesse [python.org/downloads](https://python.org/downloads) e clique no botão de download para Windows.

> Imagem aqui: página de download do python.org com o botão de download para Windows em destaque

**Passo 2** — Abra o instalador baixado. **Importante:** antes de clicar em "Install Now", marque a caixa **"Add Python to PATH"** na parte inferior da janela. Esse passo é essencial para que o terminal consiga encontrar o Python.

> Imagem aqui: janela do instalador do Python no Windows com a caixa "Add Python to PATH" destacada em vermelho

**Passo 3** — Clique em **Install Now** e aguarde a instalação terminar.

  </TabItem>
</Tabs>

### Verificando se o Python foi instalado

Abra um novo terminal (feche e abra de novo, se já estava aberto) e execute:

```bash
python3 --version
```

No Windows, pode ser necessário usar `python` sem o `3`:

```bash
python --version
```

Se a instalação deu certo, você verá algo como `Python 3.12.3`. Versão exata pode variar, o que importa é a ausência de erros.

> Imagem aqui: terminal mostrando a saída do `python3 --version` com sucesso

---

## Tudo pronto!

Com o GCC e o Python instalados, você está pronto para acompanhar os projetos práticos do livro. Sempre que precisar compilar um programa em C, usará o `gcc` no terminal. Sempre que precisar executar um script Python, usará o `python3`.

Pode voltar ao livro e continuar de onde parou.
