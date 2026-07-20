---
title: Setup para pentest/RE
slug: /cybersecurity/iossecurity/introducao/setup
---

Eu não vou me arriscar listando versões certinhas e ferramentas, pois é muito fácil de essa lista ficar desatualizada. Por outro lado, o que posso fazer é citar as fontes para te ajudar na sua busca!

## Versão compatível

Sempre valide se o seu dispositivo, versão e ferramenta de jailbreak são compatíveis com a sua realidade. Se atente ao fato de que mesmo tendo um iPhone vulnerável, é necessário que ele esteja também em uma versão compatível. E claro, a ferramenta de jailbreak precisa funcionar também.

Link: [The Apple Wiki](https://theapplewiki.com/wiki/Jailbreak)

## Computador e Acessórios

Não é impossível de forma alguma fazer pentest/engenharia reversa de apps iOS em Linux ou Windows, mas é inegável que a experiência realizando essas atividades usando um Mac é bem mais fluida.

Fora isso, é ideal também que tenha um cabo com saída uma USB-A e a outra lightning. Na minha experiência, usar adaptadores funcionou.

Link: [Lightning Cables](https://docs.website-msw.pages.dev/docs/reference/compatibility-chart/#lightning-cables)

## Antes de começar o Jailbreak

Antes sair tentando rodar já o Jailbreak, leia a documentação inteira no que se refere a sua versão, pesquise no YouTube, pergunte para amigos e em fóruns, mas não faça sem pesquisar antes de forma alguma. 

## Depois do Jailbreak

Depois do Jailbreak, é tudo mais fácil, aqui vai uma lista de coisas para se fazer:
> Dei preferência para citar as fontes de onde baixar, ao invés de providenciar um tutorial que vai ficar desatualizado provavelmente.
>
> Uma alternativa, é que você instale as ferramentas abaixo apenas quando for conveniente. Afinal elas não são um requisito como um todo, mas serão utilizadas em diferentes partes do trabalho.

- Instale o Xcode no seu computador;
- Certifique se tem um gerenciador de pacotes instalado após o Jailbreak (como Cydia, Sileo ou Zebra);
- Instale o Frida no iOS (via gerenciador de pacotes) e no seu computador (via pip), ambos na mesma versão (https://frida.re/docs/home/);
- Instale o SSL Kill Switch via gerenciador de pacotes e se não encontrar tente seguir o que está no Github (https://github.com/nabla-c0d3/ssl-kill-switch2);
- Instale o Radare2 (https://github.com/radareorg/radare2);
- Você pode instalar o Filza ou iFile se quiser, mas não vi necessidade no meu caso;
- Instale o objection no seu computador (https://github.com/sensepost/objection);
- Instale o Ghidra no seu computador (https://github.com/nationalsecurityagency/ghidra);
- Instale o libimobiledevice no seu computador (https://libimobiledevice.org/);
