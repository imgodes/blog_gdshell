---
title: Deep Links

---

Deep Links são mecanismos de Interprocess Communication (IPC) que permitem que um link (por exemplo, em um site ou e-mail) abra diretamente uma atividade dentro de um app Android.

Eles melhoram a experiência do usuário ao permitir navegação direta para conteúdo específico, sem precisar navegar manualmente pelo app.

## Tipos de Deep Link

### 1. Standard Deep Link

Permite que um app responda a URIs customizadas como `app://myapp/products/cpu`.

Exemplo de código HTML:

```html
<a href="app://myapp/products/cpu">Ver CPU</a>
```

Configuração no `AndroidManifest.xml`:

```xml
<activity android:name=".ProductsActivity">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="app"
              android:host="myapp"
              android:pathPrefix="/products/" />
    </intent-filter>
</activity>
```

**Explicando os campos**:

- `scheme="app"`: define o protocolo.
- `host="myapp"`: define o domínio personalizado.
- `pathPrefix="/products/"`: define o caminho base aceito pela atividade.

Tratamento no código:

```java
public class ProductActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_planet);

        Intent intent = getIntent();
        String action = intent.getAction();
        Uri data = intent.getData();

        if (Intent.ACTION_VIEW.equals(action) && data != null) {
            String productName = data.getLastPathSegment();

            if (productName.equals("cpu")) {
                // Buscar e exibir informações do produto "cpu"
            }
        }
    }
}
```

## 2. Android App Links

São versões mais seguras dos deep links. Utilizam URLs HTTPS e exigem verificação de domínio.

Exemplo HTML:

```html
<a href="https://www.myapp.com/products/cpu">Ver CPU</a>
```

`AndroidManifest.xml`:

```xml
<activity android:name=".ProductsActivity">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="https"
              android:host="www.myapp.com"
              android:pathPrefix="/products/" />
    </intent-filter>
</activity>
```

App Links garantem que apenas o proprietário do domínio possa registrar a URL, evitando que outros apps se registrem como handler do link.

## Riscos de segurança

- Qualquer app pode interceptar _standard deep links_ (sem App Links), se o domínio não for validado.
- Parâmetros maliciosos em URLs podem causar problemas:

```
https://www.myapp.com/home?uid=50&token=xyz
```

Sem validação adequada, isso pode dar acesso a dados de outros usuários.

### Boas práticas

- Prefira Android App Links ao invés de esquemas customizados.
- Sempre valide dados recebidos via `Intent.getData()`.
- Nunca exponha dados sensíveis via parâmetros de URL.
