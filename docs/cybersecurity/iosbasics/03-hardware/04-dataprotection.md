---
title: Data Protection Classes
---

# Data Protection Classes

As Data Protection Classes definem em qual estado o dispositivo precisa estar para que um arquivo específico possa ser acessado. Os três estados relevantes são dispositivo bloqueado, desbloqueado e o momento logo após o primeiro desbloqueio depois de ligar o aparelho.

## Principais classes

- `NSFileProtectionComplete`: o arquivo só pode ser acessado quando o dispositivo está desbloqueado. É a proteção mais restritiva e a recomendada para dados sensíveis.
- `NSFileProtectionCompleteUntilFirstUserAuthentication`: o arquivo fica disponível a partir do primeiro desbloqueio depois de ligar o aparelho, mesmo que o dispositivo seja bloqueado novamente em seguida.
- `NSFileProtectionCompleteUnlessOpen`: o arquivo continua acessível se já estiver aberto no momento em que o dispositivo é bloqueado.
- `NSFileProtectionNone`: nenhuma proteção é aplicada. Deve ser evitada para qualquer dado sensível.

Aplicar a proteção mais forte em código é simples:

```objectivec
[[NSFileManager defaultManager] setAttributes:@{
    NSFileProtectionKey: NSFileProtectionComplete
} ofItemAtPath:path error:nil];
```

O mesmo conceito se aplica a credenciais guardadas no Keychain, onde o atributo equivalente controla quando aquele item pode ser lido:

```objectivec
@{
  (__bridge id)kSecAttrAccessible: (__bridge id)kSecAttrAccessibleWhenUnlocked
}
```

## Referências

- Apple Developer Documentation. File System Programming Guide. Disponível em: https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html
