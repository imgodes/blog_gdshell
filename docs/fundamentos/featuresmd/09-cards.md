---
title: Cards
draft: true
---

## Props disponíveis

| Prop | Tipo | Descrição |
|------|------|-----------|
| `title` | string | Título exibido no header |
| `text` | string | Texto do corpo da card |
| `image` | string | URL da imagem de capa |
| `avatar` | objeto | `{ src, name, subtitle }` |
| `avatarLayout` | string | `'vertical'` ou `'horizontal'` (padrão) |
| `avatarSize` | string | `'xs'`, `'sm'`, `'md'`, `'xl'` (padrão `'xl'`) |
| `actions` | array | `[{ label, variant }]` - botões no rodapé |
| `headerColor` | string | Cor de fundo do header (hex, rgb, nome) |
| `bodyColor` | string | Cor de fundo do corpo |
| `footerColor` | string | Cor de fundo do rodapé |
| `shadow` | string | Sombra: `'lw'`, `'md'`, `'tl'` |
| `cyberpunk` | boolean | Aplica estética cyberpunk sutil |

---

## Simples

<Card
  title="Lorem Ipsum"
  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida."
  shadow="tl"
  actions={[{ label: "Ver mais" }]}
/>

---

## Com avatar

<Card
  avatar={{ src: "https://avatars.githubusercontent.com/u/97809069?v=4", name: "Docux (@Juniors017)", subtitle: "humble contributor" }}
  avatarLayout="vertical"
  headerColor="#205d3b"
  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida."
  bodyColor="black"
  footerColor="#205d3b"
  actions={[{ label: "Like" }, { label: "Comment" }, { label: "Share" }]}
/>

---

## Com imagem de capa + avatar no header

<Card
  avatar={{ src: "https://avatars.githubusercontent.com/u/97809069?v=4", name: "Docux (@Juniors017)", subtitle: "humble contributor" }}
  avatarLayout="vertical"
  headerColor="rgb(33 126 209)"
  image="https://img.freepik.com/vecteurs-libre/dino-mignon-jouant-illustration-icone-vecteur-dessin-anime-planche-roulettes-concept-icone-sport-animal-isole_138676-7099.jpg"
  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida."
  bodyColor="white"
  footerColor="#2887bf"
  actions={[{ label: "Like" }, { label: "Comment" }, { label: "Share" }]}
/>

---

## Só imagem com botões coloridos

<Card
  image="https://img.freepik.com/vecteurs-libre/dino-triceratops-mignon-illustration-icone-vecteur-dessin-anime-camera-technologie-animale-isolee-plat_138676-6762.jpg"
  footerColor="#e37c77"
  actions={[
    { label: "Like", variant: "success" },
    { label: "Comment", variant: "warning" },
    { label: "Share", variant: "danger" },
  ]}
/>

---

## Só imagem

<Card
  image="https://img.freepik.com/vecteurs-libre/dinosaure-mignon-qui-s-etend-icone-vecteur-dessin-anime-illustration-concept-icone-sport-animal-isole-plat_138676-9213.jpg"
/>

---

## Cyberpunk - simples

<Card
  cyberpunk
  title="Sistema comprometido"
  text="Acesso não autorizado detectado. Protocolo de contenção iniciado. Todos os logs foram criptografados."
  actions={[{ label: "Investigar" }, { label: "Ignorar" }]}
/>

---

## Cyberpunk - com avatar

<Card
  cyberpunk
  avatar={{ src: "https://avatars.githubusercontent.com/u/97809069?v=4", name: "AGENT_0x4F", subtitle: "red team operator" }}
  avatarLayout="horizontal"
  avatarSize="md"
  title="Briefing"
  text="Objetivo: exfiltração silenciosa. Janela de operação: 4h. Sem rastros."
  actions={[{ label: "Aceitar missão" }]}
/>

---

## Cyberpunk - com subcomponentes

<Card cyberpunk shadow="tl">
  <CardHeader>
    <h3>Acesso root</h3>
  </CardHeader>
  <CardBody>
    ```bash
    sudo nmap -sV -p- 192.168.1.0/24
    ```
  </CardBody>
  <CardFooter>
    <button className="button button--secondary button--block">Executar</button>
  </CardFooter>
</Card>

---

## Legado com subcomponentes

<Card shadow="tl">
  <CardHeader>
    <h3>Título manual</h3>
  </CardHeader>
  <CardBody>
    Conteúdo com **markdown** e `código` via subcomponentes.
  </CardBody>
  <CardFooter>
    <button className="button button--secondary button--block">Ver mais</button>
  </CardFooter>
</Card>
