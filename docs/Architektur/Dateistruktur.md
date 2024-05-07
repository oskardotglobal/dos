# Dateistruktur

## Konfigurationsdateien

- `.gitignore` - [Git](Bibliotheken%20und%20Tools/Git.md)-Konfigurationsdatei, um Dateien von der Versionierung zu enthalten
- `.idea` (in PhpStorm ausgeblendet), `qodana.yaml` - IntelliJ- / PhpStorm-Konfigurationsdateien
- `tsconfig.json` - [Typescript](Bibliotheken%20und%20Tools/Typescript.md)-Konfigurationsdatei
- `package.json` - [Node](Bibliotheken%20und%20Tools/Node.md)-Paketmanifest. Enthält Abhängigkeiten und deren Versionen sowie Scripts. Wird verwaltet von [pnpm](Bibliotheken%20und%20Tools/pnpm.md)
- `vite.config.ts` - [Vite](Bibliotheken%20und%20Tools/Vite.md)-Konfigurationsdatei.
- `postcss.config.js` - PostCSS-Konfigurationsdatei. PostCSS ist eine Abhängigkeit zur Verwendung von [Tailwind](Bibliotheken%20und%20Tools/TailwindCSS.md) mit [Vite](Bibliotheken%20und%20Tools/Vite.md).
- `tailwind.config.js` - [Tailwind](Bibliotheken%20und%20Tools/TailwindCSS.md)-Konfigurationsdatei
- `src/vite-env.d.ts` - [Typescript](Bibliotheken%20und%20Tools/Typescript.md)-Konfigurationsdatei zur Verwendung mit Vite. Ermöglicht Typisierung von Vite-Utilities mit [Typescript](Bibliotheken%20und%20Tools/Typescript.md). Siehe [Typescript-Dokumentation](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-)

## Quelltext

- `index.html` - Haupt-HTML-Datei.
- `src/main.tsx` - Einstiegspunkt des Programms.
- `src/components` - [React](Bibliotheken%20und%20Tools/React.md)-Komponenten
- `src/lib` - alle Funktionen und Klassen
- `src/styles` - alle CSS-Stylesheets, Konfiguration für [Tailwind](Bibliotheken%20und%20Tools/TailwindCSS.md)
- `node_modules` - externe [NodeJS](Bibliotheken%20und%20Tools/Node.md)-Bibliotheken

## Andere

- `LICENSE` - Lizenz
- `.git` (ausgeblendet) - [Git](Bibliotheken%20und%20Tools/Git.md)-Versionierungsverzeichnis