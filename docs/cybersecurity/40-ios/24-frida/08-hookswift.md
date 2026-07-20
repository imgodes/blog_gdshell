---
title: Hookando um Método em Swift

---

# Hookando um Método em Swift

Para hookar um método em Swift, primeiro é preciso conhecer o nome mangled do método e a assinatura da classe. Depois de encontrar esses valores, usando ferramentas como o `frida-discover` ou o `frida-trace`, o Frida pode ser usado para hookar o método diretamente.

O exemplo abaixo hooka um método de detecção de jailbreak do DVIA-v2:

```js
var myMethod = Module.findExportByName(null, "$s7DVIA_v232JailbreakDetectionViewControllerC12isJailbrokenSbyF");

if (myMethod) {
    Interceptor.attach(myMethod, {
        onEnter: function (args) {
            console.log("Hooked Swift method: JailbreakDetectionViewController +isJailbroken");
            // é possível inspecionar ou modificar args aqui
        },
        onLeave: function (retval) {
            console.log("Returned Swift value:", retval);
            // é possível inspecionar ou modificar retval aqui
        }
    });
} else {
  console.log("Hooking Swift method failed!");
}
```

Para rodar o script no DVIA-v2:

```bash
frida -U -n DVIA-v2 -l ios_hook_swift.js
```

O mesmo princípio se aplica a outros alvos comuns em Swift, como o hook de `NSURLSession` para bypass de SSL pinning, útil para interceptar tráfego de rede e analisar chamadas de API que deveriam estar protegidas.
