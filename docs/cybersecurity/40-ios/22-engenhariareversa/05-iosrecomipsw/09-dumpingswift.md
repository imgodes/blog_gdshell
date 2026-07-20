---
title: Dumping de Classes Swift

---

# Dumping de Classes Swift

Se o app é escrito em Swift, o `swift-dump` do `ipsw` extrai e demangla os nomes de classes e métodos, algo mais difícil de conseguir com as ferramentas tradicionais de dump feitas originalmente para Objective-C.

No macOS:

```bash
ipsw swift-dump ./Payload/DVIA-v2.app/DVIA-v2 > ./swift_dump_mangled.txt
ipsw swift-dump ./Payload/DVIA-v2.app/DVIA-v2 --demangle > ./swift_dump_demangled.txt
```

No Ubuntu:

```bash
SWIFT_DEMANGLE="$(find /usr/libexec -type f -executable -name "swift-demangle")"

ipsw swift-dump ./Payload/DVIA-v2.app/DVIA-v2 > ./swift_dump_mangled.txt
ipsw swift-dump ./Payload/DVIA-v2.app/DVIA-v2 | $SWIFT_DEMANGLE --simplified > ./swift_dump_demangled.txt
```

Esse comando extrai todas as classes Swift do binário, com os nomes de método tanto na forma mangled quanto demangled, salvando o resultado nos arquivos indicados. Vale registrar que, no momento da escrita, essa ferramenta ainda está em desenvolvimento ativo, e algumas funcionalidades podem não estar implementadas ou podem apresentar comportamento inconsistente.

Depois que o `swift-dump` terminar, vá até o diretório de saída e revise os símbolos extraídos. Os símbolos demangled trazem nomes de classe, nomes de método e outros metadados Swift que dão uma base concreta para a análise, algo que antes exigia recorrer diretamente ao binário em um desmontador.
