---
title: Bypass de SSL Pinning
slug: /cybersecurity/iossecurity/analisedinamica/objection/bypasssslpinning
---

# Bypass de SSL Pinning

Para desativar o SSL pinning do app:

```
ios sslpinning disable
```

Isso desliga o pinning implementado pelo app, permitindo interceptar o tráfego de rede com ferramentas como Burp Suite ou mitmproxy, mesmo quando o app tenta validar o certificado do servidor contra uma cópia embutida no bundle.
