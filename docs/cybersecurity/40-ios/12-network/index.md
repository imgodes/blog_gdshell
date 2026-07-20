---
title: Comunicação Segura

---

# Comunicação Segura

Comunicação Segura é outro conjunto de práticas e mecanismos implementados pela Apple para garantir que o tráfego de rede de uma aplicação fique protegido contra interceptação e manipulação. No iOS, isso acontece principalmente através de criptografia em trânsito, validação de certificados e políticas de segurança impostas diretamente pelo sistema, e não deixadas a critério do desenvolvedor.

## HTTPS por padrão

HTTPS Everywhere não é o nome oficial de uma feature da Apple, mas descreve bem uma diretriz real aplicada no iOS. O sistema exige que aplicações usem conexões seguras por padrão através do App Transport Security, conhecido pela sigla ATS, e esse sim é um mecanismo oficial. Conexões HTTP simples são bloqueadas por padrão, o que obriga o uso de HTTPS com configurações consideradas seguras, como TLS moderno e certificados válidos.

## VPN e segurança em redes Wifi

Esse tópico representa um conjunto de funcionalidades do iOS, ainda que o nome usado aqui seja conceitual. O sistema suporta nativamente conexões VPN e aplica medidas de segurança em redes Wifi para proteger os dados do usuário. Isso aparece na capacidade de estabelecer túneis seguros para o tráfego de rede, em avisos sobre redes inseguras, na ausência de conexão automática a redes desconhecidas e no uso de randomização do endereço MAC para reduzir o rastreamento do dispositivo entre redes diferentes.

## Referências

- Apple Developer Documentation. Preventing Insecure Network Connections. Disponível em: https://developer.apple.com/documentation/security/preventing_insecure_network_connections
