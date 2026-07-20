---
title: Hookando um Método em Objective-C

---

# Hookando um Método em Objective-C

Suponha que você queira hookar um método em Objective-C de um app iOS. O exemplo abaixo hooka o método de detecção de jailbreak do DVIA-v2:

```js
if (ObjC.classes.JailbreakDetection) {
    var myClass = ObjC.classes.JailbreakDetection;
    var myMethod = myClass["+ isJailbroken"];

    Interceptor.attach(myMethod.implementation, {
        onEnter: function(args) {
            console.log("Hooked ObjC method: JailbreakDetection +isJailbroken");
            // é possível inspecionar ou modificar args aqui
        },
        onLeave: function(retval) {
            console.log("Returned ObjC value:", retval);
            // é possível inspecionar ou modificar retval aqui
        }
    });
} else {
  console.log("Hooking ObjC method failed!");
}
```

Esse script hooka o método `isJailbroken` da classe `JailbreakDetection`, registra no console quando o método é chamado através do `onEnter`, e registra o valor de retorno através do `onLeave`.

Para rodar o script no DVIA-v2:

```bash
frida -U -n DVIA-v2 -l ios_hook_objc.js
```

Isso anexa o script ao processo do app e ativa o hook no método especificado.
