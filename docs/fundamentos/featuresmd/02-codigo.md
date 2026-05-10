---
title: Código
draft: true
---

## Inline

Use o comando `apktool d app.apk` para descompilar o APK.

---

## Bloco simples

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

---

## Com título

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

---

## Com highlight por comentário

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

---

## Com highlight via metadata

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

---

## Com número de linha

```jsx showLineNumbers
import React from 'react';

export default function MyComponent(props) {
  return <div>Foo</div>;
}
```

Começando do 3:

```jsx showLineNumbers=3
export default function MyComponent(props) {
  return <div>Foo</div>;
}
```
