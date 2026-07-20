---
title: Automatizando extração de backups
slug: /cybersecurity/iossecurity/introducao/automatebackup
---

Você pode automatizar tarefas como extração de backups usando scripts bash no seu host e a biblioteca libimobiledevice.

Abaixo um exemplo:
```bash
#!/bin/bash

BACKUP_PATH="$HOME/Device/Backups/"
EXTRACT_PATH="$HOME/Device/Data/"
APP_UID="5CAF9854-AE84-4ABB-A856-5DE570E96171"

# Create a backup
echo "Creating backup..."
idevicebackup2 backup "$BACKUP_PATH"

# Extract data from app directory
echo "Extracting data from app ($APP_UID)..."
scp -r root@10.11.1.1:/var/mobile/Containers/Data/Application/$APP_UID/ "$EXTRACT_PATH"
```

Esse script automatiza o processo de extração de backup e traz ele para seu host para análise local. Lembre-se de configurar as variáveis `BACKUP_PATH`, `EXTRACT_PATH` e `APP_UID` de acordo com sua situação.
