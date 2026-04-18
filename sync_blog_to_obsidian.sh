#!/bin/bash

# ─── Configuração ───────────────────────────────────────────
VAULT="/Users/gabrielguedes/Documents/notes/notes"
ATTACHMENTS="/Users/gabrielguedes/Documents/notes/notes/Obsidian/Attachements"
BLOG="/Users/gabrielguedes/tech/projects/blog_gdshell"

# Pastas de destino no Obsidian (ajuste conforme sua estrutura)
OBSIDIAN_BLOG="$VAULT/Blog"
OBSIDIAN_FUNDAMENTOS="$VAULT/Fundamentos"
OBSIDIAN_CYBER="$VAULT/Cybersecurity"

# ─── Copiar Posts do Blog → Obsidian ────────────────────────
echo "📝 Copiando posts do blog..."
rsync -av --include="*.md" --include="*.mdx" --exclude="*" \
  "$BLOG/blog/" "$OBSIDIAN_BLOG/"

# ─── Copiar Docs Fundamentos → Obsidian ─────────────────────
echo "📚 Copiando Fundamentos..."
rsync -av --include="*.md" --include="*.mdx" --exclude="*" \
  "$BLOG/docs/fundamentos/" "$OBSIDIAN_FUNDAMENTOS/"

# ─── Copiar Docs Cybersecurity → Obsidian ───────────────────
echo "🔐 Copiando Cybersecurity..."
rsync -av --include="*.md" --include="*.mdx" --exclude="*" \
  "$BLOG/docs/cybersecurity/" "$OBSIDIAN_CYBER/"

# ─── Copiar Imagens → Obsidian Attachments ──────────────────
echo "🖼️  Copiando imagens..."
rsync -av --include="*.png" --include="*.jpg" --include="*.jpeg" \
  --include="*.gif" --include="*.svg" --include="*.webp" --exclude="*" \
  "$BLOG/static/img/" "$ATTACHMENTS/"

echo "✅ Sync concluído!"
