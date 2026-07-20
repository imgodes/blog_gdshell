---
title: Kernel / Runtime Integrity

---

# Kernel Integrity e Runtime Integrity

## Kernel Integrity

A integridade do kernel garante que o kernel do iOS não foi alterado antes de ser executado. Essa validação acontece durante o processo de boot, descrito no capítulo sobre a Chain of Trust, e é reforçada em runtime por mecanismos de proteção adicionais.

Qualquer tentativa de carregar um kernel modificado falha, o que faz com que técnicas de exploração precisem contornar essas verificações para conseguir execução privilegiada no dispositivo.

## Runtime Integrity

A Runtime Integrity não é um componente único e nomeado, mas um conjunto de mecanismos do iOS que garantem que o código não seja alterado ou explorado durante a execução. Isso inclui validação contínua de assinatura de código, restrições de memória e proteções contra injeção.

O sistema impede a execução de código dinâmico não assinado, bloqueia modificações em regiões de memória marcadas como executáveis e dificulta técnicas como injeção de código ou hooking sem que antes se contornem essas proteções, seja via jailbreak ou pela desativação explícita delas.

Juntos, esses dois conjuntos de mecanismos formam a base que sustenta a confiança do sistema depois que ele já está de pé, complementando o que a Chain of Trust garante no momento do boot.

## Referências

- Apple Platform Security Guide. System integrity protections. Disponível em: https://support.apple.com/guide/security/welcome/web
