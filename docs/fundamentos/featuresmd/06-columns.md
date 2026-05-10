---
title: Columns
draft: true
---

## Três colunas com texto

<Columns>
  <Column className='text--left'>
    #### My First Column
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Column>
  <Column className='text--center'>
    #### My Second Column
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Column>
  <Column className='text--justify'>
    #### My Third Column
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Column>
</Columns>

---

## Imagem + texto

<Columns>
  <Column className='text--center'>
    ![](/img/mask.png)
  </Column>
  <Column className='text--justify'>
    #### My text column
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Column>
</Columns>

---

## Código + texto (col--8)

<Columns>
  <Column className='col--8'>

```bash
cat /etc/hosts
```

  </Column>
  <Column>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Column>
</Columns>
