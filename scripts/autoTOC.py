#!/usr/bin/env python3
"""Gera um Table of Contents em Markdown a partir de uma pasta de docs do Docusaurus.

Lê a árvore de diretórios, extrai o `title` do front matter de cada doc e monta
os links seguindo exatamente as regras de slug do Docusaurus:
  - prefixos numéricos (ex: "02-", "10_", "03.") são removidos de cada segmento;
  - páginas index.md/README.md/<pasta>.md apontam para a URL do diretório,
    com barra final;
  - demais docs apontam para /<diretorio>/<arquivo>, sem barra final.

Uso:
    python3 scripts/autoTOC.py -d docs/cybersecurity/02-iossecurity
    python3 scripts/autoTOC.py -d docs/cybersecurity/02-iossecurity -o toc.md
"""

import argparse
import re
import sys
from pathlib import Path

# Mesma regex usada pelo DefaultNumberPrefixParser do @docusaurus/plugin-content-docs
IGNORED_PREFIX_RE = re.compile(r"^\d+[-_.]\d+")
NUMBER_PREFIX_RE = re.compile(r"^(?P<num>\d+)\s*[-_.]+\s*(?P<rest>[^-_.\s].*)$")

INDEX_NAMES = {"index", "readme"}
MD_EXTENSIONS = {".md", ".mdx"}
INDENT = "  "


def strip_number_prefix(segment: str) -> str:
    if IGNORED_PREFIX_RE.match(segment):
        return segment
    match = NUMBER_PREFIX_RE.match(segment)
    return match.group("rest") if match else segment


def extract_front_matter(text: str) -> str | None:
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        return None
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            return "\n".join(lines[1:i])
    return None


def extract_title(md_path: Path) -> str | None:
    try:
        text = md_path.read_text(encoding="utf-8")
    except OSError:
        return None
    front_matter = extract_front_matter(text)
    if front_matter is None:
        return None
    match = re.search(r"^title:\s*(.+?)\s*$", front_matter, re.MULTILINE)
    if not match:
        return None
    title = match.group(1)
    if len(title) >= 2 and title[0] == title[-1] and title[0] in "\"'":
        title = title[1:-1]
    return title


def find_index_file(dir_path: Path) -> Path | None:
    candidates = INDEX_NAMES | {dir_path.name.lower()}
    for child in sorted(dir_path.iterdir(), key=lambda p: p.name):
        if (
            child.is_file()
            and child.suffix.lower() in MD_EXTENSIONS
            and child.stem.lower() in candidates
        ):
            return child
    return None


def sort_key(path: Path):
    match = NUMBER_PREFIX_RE.match(path.name)
    if match:
        return (0, int(match.group("num")), path.name)
    return (1, 0, path.name)


def iter_children(dir_path: Path, index_file: Path | None):
    entries = []
    for child in dir_path.iterdir():
        if child.is_dir():
            entries.append(child)
        elif child.suffix.lower() in MD_EXTENSIONS and child != index_file:
            entries.append(child)
    return sorted(entries, key=sort_key)


def build_url(base_url: str, rel_parts: list[str], trailing_slash: bool) -> str:
    stripped = [strip_number_prefix(part) for part in rel_parts]
    path = "/".join(stripped)
    url = f"{base_url}/{path}" if path else base_url
    return f"{url}/" if trailing_slash else url


def render(dir_path: Path, rel_parts: list[str], depth: int, base_url: str, lines: list[str], warnings: list[str]):
    index_file = find_index_file(dir_path)

    if index_file is not None:
        title = extract_title(index_file)
        if title is None:
            warnings.append(f"{index_file}: sem 'title' no front matter, usando o nome da pasta")
            title = dir_path.name
        url = build_url(base_url, rel_parts, trailing_slash=True)
        lines.append(f"{INDENT * depth}* [{title}]({url})")
        child_depth = depth + 1
    else:
        warnings.append(f"{dir_path}: sem index/README, itens listados sem item pai")
        child_depth = depth

    for entry in iter_children(dir_path, index_file):
        if entry.is_dir():
            render(entry, rel_parts + [entry.name], child_depth, base_url, lines, warnings)
        else:
            title = extract_title(entry)
            if title is None:
                warnings.append(f"{entry}: sem 'title' no front matter, usando o nome do arquivo")
                title = entry.stem
            url = build_url(base_url, rel_parts + [entry.stem], trailing_slash=False)
            lines.append(f"{INDENT * child_depth}* [{title}]({url})")


def find_docs_root(start: Path) -> Path | None:
    for ancestor in (start, *start.parents):
        if ancestor.name == "docs":
            return ancestor
    return None


def main():
    parser = argparse.ArgumentParser(description="Gera um Table of Contents em Markdown para uma pasta de docs do Docusaurus.")
    parser.add_argument("-d", "--dir", required=True, help="Diretório raiz a partir do qual gerar o TOC")
    parser.add_argument("-o", "--output", help="Arquivo de saída (default: stdout)")
    parser.add_argument("--base-url", default="/docs", help="Prefixo de URL usado pelo Docusaurus (default: /docs)")
    args = parser.parse_args()

    root = Path(args.dir).resolve()
    if not root.is_dir():
        sys.exit(f"Diretório não encontrado: {root}")

    docs_root = find_docs_root(root)
    if docs_root is None:
        sys.exit('Não foi possível localizar uma pasta "docs" nos diretórios ancestrais de -d. Use --base-url junto de um -d relativo à raiz de docs, se sua estrutura for diferente.')

    rel_parts = list(root.relative_to(docs_root).parts)

    lines: list[str] = []
    warnings: list[str] = []
    render(root, rel_parts, 0, args.base_url, lines, warnings)

    output = "\n".join(lines) + "\n"
    if args.output:
        Path(args.output).write_text(output, encoding="utf-8")
    else:
        sys.stdout.write(output)

    if warnings:
        print("\n--- avisos ---", file=sys.stderr)
        for warning in warnings:
            print(warning, file=sys.stderr)


if __name__ == "__main__":
    main()
