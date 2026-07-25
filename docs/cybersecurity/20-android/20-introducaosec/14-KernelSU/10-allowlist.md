---
title: Componente - AllowList
---

## AllowList

A allowlist é a estrutura que guarda quais UIDs do sistema têm permissão de elevar privilégios:
- **Em tempo de execução**, ela é mantida como uma lista ligada em memória de kernel, definida no arquivo `kernel/allowlist.c` do projeto, junto com um bitmap auxiliar usado para consultas rápidas de UID.
- **Para sobreviver a reinicializações**, essa estrutura é persistida em disco num arquivo binário cujo caminho está literalmente definido no código-fonte como uma constante: `#define KERNEL_SU_ALLOWLIST "/data/adb/ksu/.allowlist"`. O trabalho de carregar esse arquivo na inicialização e salvá-lo quando algo muda é feito por rotinas de kernel dedicadas (`ksu_load_work` e `ksu_save_work` no código-fonte).

O caminho suportado e seguro para alterar quem está na allowlist é sempre pelo app KernelSU Manager, que se comunica com o kernel através da interface de comando (a mesma interface prctl/supercall usada para o resto da administração), concedendo ou revogando root por app através da interface gráfica.

### Fonte
> https://github.com/tiann/KernelSU/blob/main/kernel/allowlist.c