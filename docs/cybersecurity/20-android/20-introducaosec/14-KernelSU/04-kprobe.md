---
title: Componente - kprobe
---

## kprobe
`kprobe` é um mecanismo nativo do kernel Linux, que permite instrumentar dinamicamente qualquer rotina do kernel em tempo de execução, sem precisar recompilar nada. A documentação oficial do kernel explica que, quando um `kprobe` é registrado, o subsistema faz uma cópia da instrução que está sendo monitorada e substitui os primeiros bytes dessa instrução por uma instrução de breakpoint (no caso de x86 e x86_64, a instrução `int3`). 

Quando a execução chega naquele ponto, o processador dispara a interrupção, **o kernel desvia a execução para o handler registrado, executa a lógica customizada, e depois retoma a execução normal a partir da cópia da instrução original**. 

Em kernels que suportam `CONFIG_KPROBES` (o caso da maioria dos kernels GKI), o KernelSU usa esse mecanismo para interceptar as chamadas de sistema de que precisa (como as relacionadas a acesso e execução de arquivos) sem precisar patchear o código-fonte do kernel diretamente. Em kernels mais antigos ou sem esse suporte, a alternativa é inserir manualmente as chamadas de hook no código-fonte do kernel durante a compilação, o que é mais invasivo e menos portátil.

### Fonte 
> https://docs.kernel.org/trace/kprobes.html