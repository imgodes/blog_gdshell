---
title: Bypass de Jailbreak Detection

---

# Bypass de Jailbreak Detection

Muitos apps implementam detecção de jailbreak para impedir sua execução em dispositivos comprometidos. O Objection consegue contornar isso com um único comando:

```
ios jailbreak disable
```

Esse comando desativa os mecanismos mais comuns de detecção de jailbreak dentro do app, permitindo que ele rode normalmente mesmo em um dispositivo com jailbreak ativo. Vale lembrar que, como visto no capítulo de mitigações de exploit, nem toda detecção é feita através de um método nomeado e hookável, algumas rotinas em Swift dependem de checagens em endereços de memória específicos, que exigem análise estática prévia em uma ferramenta como Ghidra antes de conseguir um bypass efetivo.
