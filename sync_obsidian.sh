#!/bin/bash

# ─── Configuração ───────────────────────────────────────────
VAULT="/Users/gabrielguedes/Documents/notes/notes"
ATTACHMENTS="/Users/gabrielguedes/Documents/notes/notes/Obsidian/Attachements"
BLOG="/Users/gabrielguedes/tech/projects/blog_gdshell"

# Pastas de origem no Obsidian (ajuste conforme sua estrutura)
OBSIDIAN_BLOG="$VAULT/Blog"
OBSIDIAN_FUNDAMENTOS="$VAULT/Fundamentos"
OBSIDIAN_CYBER="$VAULT/Cybersecurity"

# ─── Copiar Posts do Blog ────────────────────────────────────
echo "📝 Copiando posts do blog..."
rsync -av --include="*.md" --include="*.mdx" --exclude="*" \
  "$OBSIDIAN_BLOG/" "$BLOG/blog/"

# ─── Copiar Docs - Fundamentos ───────────────────────────────
echo "📚 Copiando Fundamentos..."
rsync -av --include="*.md" --include="*.mdx" --exclude="*" \
  "$OBSIDIAN_FUNDAMENTOS/" "$BLOG/docs/fundamentos/"

# ─── Copiar Docs - Cybersecurity ─────────────────────────────
echo "🔐 Copiando Cybersecurity..."
rsync -av --include="*.md" --include="*.mdx" --exclude="*" \
  "$OBSIDIAN_CYBER/" "$BLOG/docs/cybersecurity/"

# ─── Copiar Imagens ──────────────────────────────────────────
echo "🖼️  Copiando imagens..."
rsync -av --include="*.png" --include="*.jpg" --include="*.jpeg" \
  --include="*.gif" --include="*.svg" --include="*.webp" --exclude="*" \
  "$ATTACHMENTS/" "$BLOG/static/img/"

echo "✅ Sync concluído!"
