---
title: Application Sandbox Folders

---

# Application Sandbox Folders

Depois da instalação, o iOS cria um ambiente isolado, o sandbox, para cada aplicação, impedindo que apps acessem dados uns dos outros. Esse isolamento é dividido em dois containers separados, cada um com seu próprio identificador único (UUID).

## Bundle Container e Data Container

O *Bundle Container* fica em `/private/var/containers/Bundle/Application/<UUID>/`. É onde fica **o binário assinado da aplicação e todos os recursos estáticos que vieram empacotados** no IPA. Esse container é **somente leitura** em produção e é **substituído inteiro a cada atualização do app**, o que faz seu UUID mudar sempre que uma nova versão é instalada.

O Data Container fica em `/var/mobile/Containers/Data/Application/<UUID>/`. É o **sandbox de dados da app**, onde ficam os diretórios padrão descritos abaixo. Esse container **persiste entre atualizações, só é recriado se o app for desinstalado**, então seu UUID se mantém estável enquanto a app continua no dispositivo.

Essa separação importa porque qualquer credencial, token ou cache que valha a pena procurar está sempre no **Data Container, nunca no Bundle**. Comparar os dois UUIDs antes e depois de um update também serve como um jeito rápido de confirmar que você está olhando para o container certo.

## Diretórios padrão

- **Documents**: dados criados pelo próprio usuário, que devem persistir entre sessões e podem ser expostos via iTunes ou Finder, dependendo da configuração do app.
- **Library**: preferências, caches e outros dados internos da aplicação. O subdiretório `Caches/` pode ser limpo automaticamente pelo sistema quando o armazenamento do dispositivo está cheio.
- **tmp**: arquivos temporários que não precisam sobreviver entre sessões e podem ser removidos pelo sistema a qualquer momento.

Saber onde cada tipo de dado costuma ficar acelera bastante a análise de armazenamento local durante um pentest, já que credenciais, tokens ou dados sensíveis guardados fora do lugar esperado, como diretamente em `Documents/` sem qualquer proteção adicional, são um problema recorrente.

## Referências

- Apple Developer Documentation. File System Programming Guide. Disponível em: https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html