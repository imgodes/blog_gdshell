---
title: Broadcast Receivers
---

Broadcast Receivers são componentes de aplicação e também mecanismos de Interprocess Communication (IPC) no Android. Eles **permitem que aplicativos recebam eventos enviados pelo sistema ou por outros apps na forma de _Intents_**.

Eles funcionam como ouvintes (listeners) que são ativados quando recebem broadcast Intents. Um exemplo clássico é quando o sistema envia uma Intent indicando que o dispositivo foi conectado à energia — um receiver pode reagir a esse evento.

### Exemplo prático

```java
public class MyBroadcastReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        String action = intent.getAction();

        if (action != null) {
            switch (action) {
                case Intent.ACTION_POWER_CONNECTED:
                    break;
                case Intent.ACTION_POWER_DISCONNECTED:
                    break;
                default:
                    break;
            }
        }
    }
}
```

- `MyBroadcastReceiver` é a classe base do receiver.
- `onReceive()` é chamado quando o evento ocorre.
- `intent.getAction()` retorna a ação que disparou o broadcast.
- `ACTION_POWER_CONNECTED` / `ACTION_POWER_DISCONNECTED` lidam com os eventos de energia conectada/desconectada.

<details>

<summary>Como identificar um BroadcastReceiver durante o pentest</summary>

#### BroadcastReceiver no AndroidManifest

Broadcast Receivers são declarados no `AndroidManifest.xml` usando a tag `<receiver>`. Eles geralmente acompanham um `<intent-filter>` que define quais ações (intents) o receiver pode escutar.

```xml title="AndroidManifest.xml"
<receiver android:name=".BootReceiver"
          android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.BOOT_COMPLETED" />
    </intent-filter>
</receiver>
```

Se `exported=true`, outros apps ou ferramentas como adb podem enviar broadcasts para esse componente.

#### BroadcastReceiver no Código Java

Um `BroadcastReceiver` escuta intents do sistema ou de outros apps e executa uma lógica quando o evento ocorre (sem interface gráfica).

```java
public class BootReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        Log.d("Receiver", "Intent recebida: " + intent.getAction());
        // Executa alguma lógica, como iniciar um serviço
        if ("android.intent.action.BOOT_COMPLETED".equals(intent.getAction())) {
            Intent i = new Intent(context, MyService.class);
            context.startService(i);
        }
    }
}
```

#### Como enviar um broadcast no Java

```java
Intent i = new Intent("android.intent.action.BOOT_COMPLETED");
sendBroadcast(i);
```

> Em apps reais, o sistema envia o broadcast `BOOT_COMPLETED` após o boot do dispositivo. Um atacante pode simular isso se o receiver estiver exportado.

#### Como chamar um BroadcastReceiver via linha de comando (ADB)

Você pode simular a emissão de um broadcast com o comando `adb shell am broadcast`.

```bash
adb shell am broadcast -a android.intent.action.BOOT_COMPLETED -n com.example.app/.BootReceiver
```

- `-a` define a **action** da intent
- `-n` especifica o receiver com `package/.Classe`

Esse tipo de chamada é útil para testar comportamento ou simular ataques (como spoof de broadcast).

</details>

## Enviando Broadcasts

Existem diferentes formas de envio de broadcasts, dependendo do tipo de recebedor:

| Método | Descrição |
| --- | --- |
| `sendOrderedBroadcast(Intent, String)` | Envia o broadcast para um receiver de cada vez. |
| `sendBroadcast(Intent)` | Envia para todos os receivers simultaneamente. |
| `LocalBroadcastManager.sendBroadcast(intent)` | Envia Intents apenas para objetos locais (deprecated a partir da API 28). |

## Considerações de segurança

A partir do Android 8.0 (API 26), há restrições no uso de `BroadcastReceiver` declarados via manifest para _implicit broadcasts_ — aqueles que não são direcionados explicitamente ao app.

Para manter a compatibilidade e segurança:

- Use `Context.registerReceiver()` para registrar receivers dinamicamente em tempo de execução.
- Prefira usar permissões e `exported=false` para evitar que outros apps abusem dos seus receivers.
