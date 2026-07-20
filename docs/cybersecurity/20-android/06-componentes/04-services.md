---
title: Services

---

Um Service (Serviço) é um componente de aplicação Android que **realiza operações de longa duração em segundo plano, sem fornecer uma interface de usuário**.

Basicamente, eles podem executar tarefas em background, como sincronizações, notificações ou execução de código persistente.

## Como identificar um Service durante o pentest

### Service no `AndroidManifest.xml`

No `AndroidManifest.xml`, Services são declarados dentro da tag `<application>`, usando a tag `<service>`. Se estiver com `android:exported="true"`, outros apps podem iniciar esse service.

```xml
<service android:name=".MyService"
         android:exported="true" />
```

### Service no código Java

Um `Service` no Android representa um componente que roda em segundo plano, sem interface com o usuário. Ele pode ser usado para sincronizações, processamento de dados ou execução contínua de tarefas.

```java
public class MyService extends Service {

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        // Lógica executada em background
        String param = intent.getStringExtra("input");
        Log.d("MyService", "Recebido: " + param);
        return START_STICKY;
    }

    @Override
    public IBinder onBind(Intent intent) {
        return null; // Ignorado para serviços não vinculados
    }
}
```

### Como iniciar um service

Um Service pode ser iniciado por qualquer outro componente (Activity, Receiver, etc) via uma `Intent`. Se estiver `exported="true"`, pode ser iniciado inclusive por apps de terceiros.

```java
Intent i = new Intent(this, MyService.class);
i.putExtra("input", "backup-database");
startService(i);
```

Se o serviço estiver `exported`, ele pode ser invocado diretamente por linha de comando:

```bash
adb shell am startservice -n com.example.app/.MyService --es input "backup-database"
```

- `-n` especifica o nome completo do serviço no formato `package/.Classe`
- `--es` adiciona um extra do tipo string

> Obs: substitua `com.example.app` e `.MyService` com os nomes reais do pacote e do serviço.

Existem três tipos de serviços no Android:

## Foreground Service (Serviço em Primeiro Plano)

Serviços em primeiro plano realizam operações que exigem a atenção do usuário. Eles fornecem notificações ao usuário e continuam executando mesmo quando o aplicativo está minimizado ou sem interação.

Esses serviços **devem** exibir notificações informando que estão em execução.

Exemplos: tocadores de música e apps de navegação.

## Background Service (Serviço em Segundo Plano)

Serviços em segundo plano realizam tarefas que **não exigem interação do usuário**.

Desde o Android API nível 26 (Android 8.0 Oreo), serviços em segundo plano não têm permissão para rodar a menos que o app esteja em primeiro plano. Essa mudança foi feita para preservar os recursos do sistema e otimizar a vida útil da bateria.

## Bound Service (Serviço Vinculado)

Serviços vinculados permitem que outros componentes da aplicação se conectem a eles chamando `bindService()`. Eles fornecem uma interface de cliente-servidor que permite que componentes, até mesmo de diferentes processos, interajam usando IPC (Interprocess Communication).

### Exemplo de implementação de um Service

```java
public class ExampleService extends Service {
    int startMode;
    IBinder binder;
    boolean allowRebind;
    ...
}
```

Comentário:

- `startMode`: indica como o serviço deve se comportar se for finalizado.
- `IBinder`: interface para os clientes que se conectarem ao serviço.
- `allowRebind`: se `true`, o método `onRebind()` será chamado quando um novo cliente se conectar.

### Ciclo de Vida

Semelhante às Activities, serviços têm métodos de callback de ciclo de vida que devem ser implementados para monitorar mudanças de estado. Quando criado com `startService()`, o ciclo de vida segue um caminho diferente do uso de `bindService()`.

## Declaração no AndroidManifest.xml

Todos os serviços devem ser registrados no arquivo `AndroidManifest.xml`.

```xml
<manifest ...>
    <application ...>
        <service android:name=".MyForegroundService"/>
        <service android:name=".MyBackgroundService"/>
    </application>
</manifest>
```

## Métodos importantes

- Para iniciar um serviço **em primeiro plano**: `startService()`
- Para permitir que outros componentes se conectem a um serviço: `bindService()`
