---
title: Lendo Arquivos plist com ipsw

---

# Lendo Arquivos plist com ipsw

Com o comando `ipsw plist` dá para converter arquivos plist para um formato JSON legível, e ainda encadear a saída com o `jq` para aplicar os filtros que forem necessários.

```bash
# Lendo o arquivo Info.plist
ipsw plist Info.plist

# Usando jq para melhorar a leitura da saída
ipsw plist Info.plist --no-color | jq .
```

O comando também aceita dados via pipe:

```bash
# Passando a saída do cat como entrada para o ipsw
cat Info.plist | ipsw plist
```

Como vimos no capítulo de estrutura do sandbox, arquivos plist podem receber dados em tempo de execução, então monitorar essas mudanças com o `ipsw` é uma boa forma de acompanhar o que o app está escrevendo enquanto é usado. Também é possível excluir arquivos que geram ruído demais durante esse monitoramento.

```bash
# Monitorando um diretório de plists
ipsw plist --watch ~/Library/Preferences

# Excluindo um padrão de arquivos que não interessa
ipsw plist --watch /System/Library/LaunchDaemons --exclude "com.apple.*.plist"
```
