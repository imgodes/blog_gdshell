---
slug: markdown
title: Features Markdown
unlisted: true
authors: [slorber]
tags: []
---

Este post serve como **referência visual e funcional** de todas as features de Markdown/MDX usadas no blog.

Use como guia para escrita e validação de renderização.

<!-- truncate -->


---

## Headings

##  Heading 1
## Heading 2
###  Heading 3
#### Heading 4

---

## Parágrafos

Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Novo parágrafo após linha em branco.

---

## Ênfase

Texto em *itálico*  
Texto em **negrito**  
Texto em ***itálico + negrito***  
Texto em ~~tachado~~

---

## Citações (Blockquote)

> Isto é uma citação.
>
> Pode ter múltiplas linhas.
>
> **Negrito**, *itálico* e `code` funcionam aqui também.

---

## Listas

###  Lista não ordenada

- Item A
- Item B
  - Subitem B.1
  - Subitem B.2
- Item C

###  Lista ordenada

1. Primeiro
2. Segundo
3. Terceiro

---

## Lista de tarefas

- [x] Markdown básico
- [x] Código
- [ ] Stepper
- [ ] Componentes customizados

---

## Links

Link interno:
[Blog](/blog)

Link externo:
[Documentação Docusaurus](https://docusaurus.io)

---

## Imagens

![Imagem de exemplo](/img/mask.png)


<Figure src="/img/mask.png" alt="Imagem de um transistor" caption="Imagem x"/>


---

## Código inline

Use o comando `apktool d app.apk` para descompilar o APK.

---

## Bloco de código

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

###  Bloco de código com título

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

###  Bloco de código com highlight  
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

###  Bloco de codigo com highlight via metadata

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

###  Com numero de linha
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

Keywords: 
'info',
'success',
'danger',
'note',
'tip',
'warning',
'important',
'caution',
'security'

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

## Tabs - Valor padrão
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

## Tabs - sincronizadas

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + C to copy.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + C to copy.</TabItem>
</Tabs>

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + V to paste.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + V to paste.</TabItem>
</Tabs>

## Tabs - customizando
<Tabs className="unique-tabs">
  <TabItem value="Apple">This is an apple 🍎</TabItem>
  <TabItem value="Orange">This is an orange 🍊</TabItem>
  <TabItem value="Banana">This is a banana 🍌</TabItem>
</Tabs>

##  Stepper

import { Stepper } from '@site/src/components/Stepper';

<Stepper
  steps={[
    {
      title: "Preparar o ambiente",
      children: (
        <p>Instale <strong>Java 11+</strong>, <em>Android SDK</em> e configure o <code>PATH</code></p>
      )
    },
    {
      title: "Descompilar o APK",
      children: (
        <>
          <p>Use o <code>apktool</code> para extrair os recursos:</p>
          <pre><code>apktool d app.apk -o output/</code></pre>
        </>
      )
    },
    {
      title: "Analisar o Manifest",
      children: (
        <>
          <p>Verifique <strong>permissões</strong> e componentes exportados no arquivo:</p>
          <pre><code>output/AndroidManifest.xml</code></pre>
        </>
      )
    }
  ]}
/>

## Column

<Columns> 
  <Column className='text--left'>
    #### My First Column
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet porttitor eget dolor morbi. Varius vel pharetra vel turpis nunc.
  </Column>
  <Column className='text--center'>
    #### My Second Column
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet porttitor eget dolor morbi. Varius vel pharetra vel turpis nunc.
  </Column>
  <Column className='text--justify'>
    #### My Third Column
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet porttitor eget dolor morbi. Varius vel pharetra vel turpis nunc.
  </Column>
</Columns>

### Example With Image - Source
<Columns> 
  <Column className='text--center'>
    ![](/img/mask.png)
  </Column>
  <Column className='text--justify'> 
    #### My text column
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet porttitor eget dolor morbi. Varius vel pharetra vel turpis nuncSit amet porttitor eget dolor morbi. Varius vel pharetra vel turpis nunc.
  </Column>
</Columns>

###
Example With Code Block - Source
<Columns> 
  <Column className='col--8'> 
    ```bash
    cat /etc/hosts
    ```
    </Column>
    <Column>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet porttitor eget dolor morbi. Varius vel pharetra vel turpis nuncSit amet porttitor eget dolor morbi. Varius vel pharetra vel turpis nunc. 
    </Column>
</Columns>

# ImageOnClick
## Basic
<ImageOnClick imageUrl="/img/mask.png" altText="Dinosaur" buttonName="Click me" />

## Emoji

<ImageOnClick imageUrl="/img/mask.png" altText="Dinosaur" buttonName="🔎" />

# TimeLine Component


<Timeline variant="danger-darkest" horizontal>

<TimelineItem  variant='white' align='right' color='danger'  style={{ borderColor: 'danger', borderWidth: '5px', borderStyle: 'solid' , borderRadius:'20px'}}>
### 2024 
Year of the Dragon : The Dragon symbolizes power, strength, and good fortune. People born under this sign are often seen as confident, ambitious, and charismatic.
</TimelineItem>
<TimelineItem   variant='black' align='left' color='info' style={{ borderColor: 'info', borderWidth: '5px', borderStyle: 'solid' , borderRadius:'0'}} >
### 2023 
Year of the Rabbit : The Rabbit is associated with luck, peace, and gentleness. People born under this sign are often considered kind, compassionate, and artistic.
</TimelineItem>

<TimelineItem  variant='warning' align='right'>
### 2022
Year of the Tiger : The Tiger symbolizes bravery, courage, and determination. People born under this sign are known for their self-confidence and ability to overcome obstacles
</TimelineItem>
<TimelineItem  variant='info' align='left' >
### 2021
Year of the Ox : The Ox represents hard work, stability, and perseverance. People born under this sign are known for their reliability and dedication
</TimelineItem>

<TimelineItem variant='primary' align='right'>
### 2020
Year of the Rat : The Rat is associated with intelligence, prosperity, and resourcefulness. People born under this sign are often viewed as clever and opportunistic.
</TimelineItem>
<TimelineItem align='left'  variant='danger'>
### 2019
Year of the Pig : The Pig symbolizes abundance, generosity, and kindness. People born under this sign are renowned for their warm nature and good sense of humor.
</TimelineItem>

<TimelineItem  variant='success' align='right' >
### 2018
Year of the Dog : The Dog represents loyalty, faithfulness, and protection. People born under this sign are often perceived as honest, devoted, and loyal to their family and friends.
</TimelineItem>
<TimelineItem   variant='info' align='left' color='danger' >
### 2017
 Year of the Rooster : The Rooster is associated with bravery, self-confidence, and determination. People born under this sign are often considered dynamic and full of energy
</TimelineItem>

<TimelineItem  variant='white' align='right' color='info'>
### 2016
Year of the Monkey : The Monkey symbolizes intelligence, cleverness, and curiosity. People born under this sign are renowned for their sharp minds and ability to find creative solutions to problems
</TimelineItem>
<TimelineItem  variant='primary-darkest' align='left' color='primary-lightest'>
### 2015
Year of the Goat/Sheep : The Goat (or Sheep) represents gentleness, harmony, and creativity. People born under this sign are often seen as loving and artistic.
</TimelineItem>



</Timeline>
