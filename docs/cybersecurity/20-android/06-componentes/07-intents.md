---
title: Intents

---

Intents são objetos de mensagem usados pelo sistema Android e pelos aplicativos para **requisitar ações de outros componentes**. Eles são fundamentais para iniciar atividades, serviços ou enviar mensagens entre apps. Embora não sejam projetados exclusivamente como um mecanismo de IPC, podem ser usados para comunicação entre processos.

## Principais usos de Intents

### 1. Iniciar uma Activity

```java
Intent intent = new Intent(this, ContactDetailActivity.class);
intent.putExtra("contact_id", selectedContactId);
startActivity(intent);
```

- Cria uma _explicit intent_ para iniciar a `ContactDetailActivity`.
- Passa o ID do contato selecionado via `putExtra()` (chave-valor).

### 2. Iniciar um Service

```java
Intent intent = new Intent(this, DownloadService.class);
intent.putExtra("file_url", fileUrl);
startService(intent);
```

Inicia o `DownloadService` em segundo plano com a URL do arquivo.

### 3. Enviar um Broadcast

```java
Intent intent = new Intent("com.example.ACTION_BATTERY_LOW");
sendBroadcast(intent);
```

Envia um broadcast customizado que pode ser capturado por `BroadcastReceiver`s com o filtro adequado.

## Tipos de Intents

### Explicit Intents

Usadas quando sabemos exatamente qual componente queremos chamar.

```java
Intent intent = new Intent(this, TargetActivity.class);
startActivity(intent);
```

### Implicit Intents

Usadas quando não sabemos o componente de destino, mas sabemos a ação a ser realizada.

```java
Intent intent = new Intent(Intent.ACTION_VIEW);
intent.setData(Uri.parse("https://www.example.com"));
startActivity(intent);
```

### Extras

Podemos passar dados entre componentes com `putExtra()`:

```java
Intent intent = new Intent(this, TargetActivity.class);
intent.putExtra("key", "value");
startActivity(intent);
```

Esses dados são recuperados com `getIntent().getStringExtra("key")`.

## Intents e ADB

Durante pentests, é comum enviar Intents com o ADB para simular interações ou explorar falhas.

```bash
adb shell am start -n com.exemplo/.MainActivity
adb shell am broadcast -a com.exemplo.ACTION_TEST
```

- `am start`: inicia uma atividade.
- `am broadcast`: envia um broadcast.

## Considerações de Segurança

- Intents podem carregar dados sensíveis: valide sempre a entrada.
- Use `exported=false` em componentes que não devem receber Intents de fora do app.
- Verifique permissões antes de tratar uma Intent recebida.
