---
title: Content Providers

---

Content Providers são componentes fundamentais do Android para compartilhamento de dados entre aplicativos. Eles também funcionam como mecanismos de Interprocess Communication (IPC), permitindo que dados sejam acessados e manipulados por outras apps com permissões apropriadas.

Eles fornecem uma interface padronizada baseada em operações CRUD (_Create, Read, Update, Delete_). Os dados podem ser armazenados em SQLite, arquivos locais ou até em servidores remotos.

## Como identificar um Content Provider no AndroidManifest

### ContentProvider no AndroidManifest

No `AndroidManifest.xml`, os Content Providers são declarados com a tag `<provider>`, que define o `authorities` — parte essencial para montar o `content://URI`.

```xml
<provider
    android:name=".MyContentProvider"
    android:authorities="com.example.app.provider"
    android:exported="true"
    android:readPermission="com.example.READ"
    android:writePermission="com.example.WRITE" />
```

- O atributo `exported` define se outros apps podem acessar esse provider.
- O `authorities` será usado para montar a URI: `content://com.example.app.provider/`

### ContentProvider no Código Java

Um `ContentProvider` serve para compartilhar dados entre apps. Ele é acessado via URIs (`content://...`) e fornece métodos de CRUD: `query`, `insert`, `update`, `delete`.

### Como acessar um Content Provider via código Java

```java
Uri uri = Uri.parse("content://com.example.app.provider/users");
Cursor c = getContentResolver().query(uri, null, null, null, null);

if (c != null) {
    while (c.moveToNext()) {
        String username = c.getString(c.getColumnIndex("username"));
        Log.d("USER", username);
    }
    c.close();
}
```

### Como interagir com um Content Provider via linha de comando (ADB)

**Leitura de dados:**

```bash
adb shell content query --uri content://com.example.app.provider/users
```

**Inserção de dados:**

```bash
adb shell content insert --uri content://com.example.app.provider/users \
    --bind username:s:admin \
    --bind password:s:123456
```

- `--bind nome_do_campo:t:valor`, onde `t` pode ser: `s` (string), `i` (int), `l` (long), `b` (boolean), etc.

**Atualização de dados:**

```bash
adb shell content update --uri content://com.example.app.provider/users \
    --bind password:s:novaSenha \
    --where "username='admin'"
```

**Remoção de dados:**

```bash
adb shell content delete --uri content://com.example.app.provider/users \
    --where "username='admin'"
```

## Arquitetura

O acesso é feito por meio da classe `ContentResolver`, geralmente de forma assíncrona para não travar a UI. Um `CursorLoader` é usado para executar queries em segundo plano, mantendo a interface responsiva.

### Exemplo de consulta ao User Dictionary Provider

O trecho de código a seguir recupera palavras e seus respectivos idiomas do User Dictionary Provider. Esse provider é um `ContentProvider` do Android responsável por gerenciar o dicionário personalizado do usuário. Para realizar essa operação, o método `ContentResolver.query()` é chamado, o qual internamente invoca o método `query()` implementado pelo próprio `ContentProvider`. Esse processo permite que a aplicação acesse os dados de forma estruturada e segura.

```java
cursor = getContentResolver().query(
    UserDictionary.Words.CONTENT_URI, // identifica o Content Provider
    projection,                       // define quais colunas queremos
    selectionClause,                  // filtra os dados (WHERE)
    selectionArgs,                    // argumentos para o filtro
    sortOrder);                       // define a ordenação
```

## Criando um Content Provider

Content Providers devem estender a classe `ContentProvider` e implementar os métodos obrigatórios como `query()`, `insert()`, `update()`, `delete()` e `getType()`.

```java
public class MyContentProvider extends ContentProvider {
    // Implemente os métodos CRUD aqui
}
```

## Segurança

É essencial controlar o acesso aos Content Providers:

- Utilize permissões declaradas para leitura e escrita.
- Defina `android:exported="false"` quando não desejar acesso externo.
- Valide todos os dados recebidos de fontes externas.
