---
title: Binders
---

O Binder é o mecanismo de Interprocess Communication (IPC) central do Android. Ele **permite que processos diferentes se comuniquem de forma eficiente e segura, utilizando chamadas de procedimento remoto (Remote Procedure Call - RPC)**.

No Android, o Binder é usado para que um processo (cliente) invoque métodos em um serviço remoto como se estivesse no mesmo processo. Isso é fundamental para o funcionamento de vários componentes internos do Android. Um uso comum de Binder é com Services que utilizam AIDL (Android Interface Definition Language) para definir uma interface de comunicação entre processos.

## Exemplo prático com AIDL

### ICalculator.aidl

Este arquivo define a interface do serviço.

```java
interface ICalculator {
    int add(int a, int b);
}
```

> Essa interface será implementada no serviço e chamada pelo cliente.

### CalculatorService.java

Este é o serviço que implementa a lógica da interface:

```java
public class CalculatorService extends Service {
    private final ICalculator.Stub binder = new ICalculator.Stub() {
        @Override
        public int add(int a, int b) {
            return a + b;
        }
    };

    @Override
    public IBinder onBind(Intent intent) {
        return binder;
    }
}
```

**Comentários**:

- `ICalculator.Stub` é a implementação gerada pelo AIDL.
- `onBind()` retorna o Binder para que o cliente se conecte ao serviço.

## Cliente: MainActivity.java

```java
private ServiceConnection serviceConnection = new ServiceConnection() {
    @Override
    public void onServiceConnected(ComponentName name, IBinder service) {
        calculatorService = ICalculator.Stub.asInterface(service);
        performCalculations();
    }
    ...
};

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    Intent intent = new Intent();
    intent.setComponent(new ComponentName("com.example.calculatorservice", "com.example.calculatorservice.CalculatorService"));
    bindService(intent, serviceConnection, Context.BIND_AUTO_CREATE);
}

private void performCalculations() {
    if (calculatorService == null) return;

    try {
        int result = calculatorService.add(10, 5);
        // Exibir resultado na interface
    } catch (RemoteException e) {
        e.printStackTrace();
    }
}
```

**Comentários**:

- `bindService()` cria a conexão com o serviço.
- `onServiceConnected()` recupera o objeto do serviço remoto.
- `calculatorService.add(...)` executa o método remoto.

## Manifesto

Se o serviço rodar em outro processo, declare o atributo `android:process`:

```xml
<service
    android:name=".MyService"
    android:process=":remote" />
```

## Considerações

- Binders são invisíveis no Manifest; são parte da implementação do Service.
- O uso de AIDL é recomendado quando for necessário comunicar entre processos diferentes (IPC).
- Para comunicações dentro do mesmo processo, usar um `Bound Service` simples é suficiente.
