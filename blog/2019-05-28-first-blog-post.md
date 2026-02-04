---
slug: markdown
title: Features Markdown
authors: [slorber]
tags: []
---

Este post serve como **referência visual e funcional** de todas as features de Markdown/MDX usadas no blog.

Use como guia para escrita e validação de renderização.

<!-- truncate -->

---

## ##  Headings

##  Heading 1
## ##  Heading 2
## ## ##  Heading 3
## ## ## ##  Heading 4

---

## ##  Parágrafos

Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Novo parágrafo após linha em branco.

---

## ##  Ênfase

Texto em *itálico*  
Texto em **negrito**  
Texto em ***itálico + negrito***  
Texto em ~~tachado~~

---

## ##  Citações (Blockquote)

> Isto é uma citação.
>
> Pode ter múltiplas linhas.
>
> **Negrito**, *itálico* e `code` funcionam aqui também.

---

## ##  Listas

## ## ##  Lista não ordenada

- Item A
- Item B
  - Subitem B.1
  - Subitem B.2
- Item C

## ## ##  Lista ordenada

1. Primeiro
2. Segundo
3. Terceiro

---

## ##  Lista de tarefas

- [x] Markdown básico
- [x] Código
- [ ] Stepper
- [ ] Componentes customizados

---

## ##  Links

Link interno:
[Blog](/blog)

Link externo:
[Documentação Docusaurus](https://docusaurus.io)

---

## ##  Imagens

![Imagem de exemplo](/img/mask.png)

---

## ##  Código inline

Use o comando `apktool d app.apk` para descompilar o APK.

---

## ##  Bloco de código

```bash
apktool d app.apk
```

```java
public class MainActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
  }
}
```

## ## ##  Bloco de código com título

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## ## ##  Bloco de código com highlight  
```js
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return 'This text is highlighted!';
  }

  return 'Nothing highlighted';
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return 'This range is highlighted!';
  }
  // highlight-end

  return 'Nothing highlighted';
}
```

## ## ##  Bloco de codigo com highlight via metadata

```jsx {1,4-6,11}
import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
```

## ## ##  Com numero de linha
```jsx showLineNumbers
import React from 'react';

export default function MyComponent(props) {
  return <div>Foo</div>;
}
```

```jsx showLineNumbers=3
export default function MyComponent(props) {
  return <div>Foo</div>;
}
```

##  Separador horizontal

--- 

##  HTML Embutido
<div style={{ padding: "1rem", border: "1px solid ## 888" }}> <strong>HTML direto no MDX</strong> <p>Útil para casos pontuais.</p> </div>

##  Admonitions

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](## ).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](## ).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](## ).

:::

:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](## ).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](## ).

:::

##  Admonitions com título

:::note[Your Title **with** some _Markdown_ `syntax`!]

Some **content** with some _Markdown_ `syntax`.

:::

##  Nested admonitions
:::::info[Parent]

Parent content

::::danger[Child]

Child content

:::tip[Deep Child]

Deep child content

:::

::::

:::::

##  Tabs
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

## ##  Tabs - Valor padrão
Com valor padrão:

<Tabs
  defaultValue="apple"
  values={[
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    {label: 'Banana', value: 'banana'},
  ]}>
  <TabItem value="apple">This is an apple 🍎</TabItem>
  <TabItem value="orange">This is an orange 🍊</TabItem>
  <TabItem value="banana">This is a banana 🍌</TabItem>
</Tabs>

## ##  Tabs - sincronizadas

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + C to copy.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + C to copy.</TabItem>
</Tabs>

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + V to paste.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + V to paste.</TabItem>
</Tabs>

## ##  Tabs - customizando
<Tabs className="unique-tabs">
  <TabItem value="Apple">This is an apple 🍎</TabItem>
  <TabItem value="Orange">This is an orange 🍊</TabItem>
  <TabItem value="Banana">This is a banana 🍌</TabItem>
</Tabs>

##  Stepper

<Stepper
  steps={[
    {
      title: "Preparar o ambiente",
      description: "Instale Java, Android SDK e configure o PATH"
    },
    {
      title: "Descompilar o APK",
      description: "Use apktool para extrair os recursos"
    },
    {
      title: "Analisar o Manifest",
      description: "Verifique permissões e componentes exportados"
    }
  ]}
/>
