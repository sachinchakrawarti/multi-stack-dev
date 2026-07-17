# VS Code Extensions

This project recommends the following Visual Studio Code extensions to improve the development experience.

> **Workspace Recommendations**
>
> When you open this project in VS Code, you'll be prompted to install the recommended extensions from `.vscode/extensions.json`.

## Recommended Extensions

| Extension | Identifier | Marketplace |
|-----------|------------|-------------|
| File Tree Grabber | `aidankmcalister.file-tree-grabber` | https://marketplace.visualstudio.com/items?itemName=aidankmcalister.file-tree-grabber |
| Marp for VS Code | `marp-team.marp-vscode` | https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode |

## Install from VS Code

1. Open **Extensions** (`Ctrl + Shift + X`).
2. Search for the extension by **Name** or **Identifier**.
3. Click **Install**.

## Install from Command Line

```bash
code --install-extension aidankmcalister.file-tree-grabber
code --install-extension marp-team.marp-vscode
```

## Workspace Recommendations

The project includes recommended extensions in:

```text
.vscode/extensions.json
```

Example:

```json
{
  "recommendations": [
    "aidankmcalister.file-tree-grabber",
    "marp-team.marp-vscode"
  ]
}
```

## Why These Extensions?

### File Tree Grabber
- Copy project folder structures.
- Generate file trees for documentation.
- Export file tree with file contents for AI prompts.

### Marp for VS Code
- Write presentation slides in Markdown.
- Live preview while editing.
- Export presentations to HTML, PDF, and PowerPoint.
- Supports custom themes and CSS.
- Ideal for creating technical presentations and course materials.