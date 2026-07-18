---
title: Componentes e IPC
---

O Android não tem uma função "main" — uma aplicação é uma soma de componentes declarados no `AndroidManifest.xml`: Activities, Services, Broadcast Receivers e Content Providers. Esses componentes raramente operam sozinhos, eles se comunicam entre si e com outros apps através de mecanismos de Interprocess Communication (IPC), como Intents, Binders e Deep Links. Entender esses mecanismos é essencial para pentest em Android, já que boa parte das vulnerabilidades exploráveis surge de componentes exportados de forma insegura.
