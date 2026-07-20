---
title: Binário Mach-O

---

# Binário Mach-O

O binário com o qual vamos interagir durante a engenharia reversa é um arquivo Mach-O, que pode ser o executável principal da aplicação, uma biblioteca `.dylib`, ou alguma extensão do Kernel.

Mach-O é a abreviação de *Mach object file format*, o formato de arquivo usado para executáveis em sistemas baseados no kernel Mach, como visto no capítulo de Core OS. É esse formato que estrutura o binário compilado que fica dentro do App Bundle, e é nele que ferramentas de disassembly, decompiladores e frameworks de dump de classes operam.
