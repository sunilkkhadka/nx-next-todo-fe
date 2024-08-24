<h1 align="center">
 NextJs Monorepo Skeleton
</h1>

## ▶️ Getting Started

1. Install [Nx](nx.dev) globally
   ```bash
     pnpm add  --global nx@latest
   ```
2. Clone the repo
   ```bash
    mkdir <folder_name> && cd $_ && git clone git@github.com:bj-budhathoki/next_skleton.git .
   ```
3. Install dependencies

   ```bash
   pnpm install

   ```

4. initialize git hook with husky
   ```bash
   npx husky install
   ```
5. To create a new nextJS application
   ```bash
     nx generate @nx/next:application --name=test-project --no-interactive
   ```
6. To create a component
   ```bash
    nx g @nx/next:component <component name> --directory shared/src/components/<component name>
   ```
   **Note: 📖 If you want to remove apps/projects**

```bash
   nx g remove <app-name>-e2e
   nx g remove <app-name>
```

## 📖 Introduction

This nextjs_skeletin template has a bunch of folders, code examples, and configurations. Feel free to edit or remove them, including this README!

## 📖 Conventions

Folder Name 👉 Kebab case <br/>
<code> Example: folder-name another-folder-name </code>

File Name 👉 Kebab case <br/>
<code> Example: folder-name another-folder-name </code>

Variable Name 👉 snake case/ camel case <br/>
<code> snake case: variable_name </code> <br/>
<code> camel case: variableName </code>

Function Name 👉 camel case <br/>
<code> Example: functionName </code>

<!-- file structure section -->

## 📁 File Tree

See below the file tree to understand the project structure.

<details>
 <summary>View file tree</summary>

> Folders and file structure.

```txt
📦skeleton
┣ 📂apps
┃ ┣ 📂docs
┃ ┃ ┣ 📂app
┃ ┃ ┃ ┣ 📜app-root-provider.tsx
┃ ┃ ┃ ┣ 📜favicon.ico
┃ ┃ ┃ ┣ 📜layout.tsx
┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┣ 📂containers
┃ ┃ ┃ ┣ 📜dates.tsx
┃ ┃ ┃ ┣ 📜form-example.tsx
┃ ┃ ┃ ┗ 📜table-example.tsx
┃ ┃ ┣ 📂public
┃ ┃ ┃ ┗ 📜.gitkeep
┃ ┃ ┣ 📂store
┃ ┃ ┃ ┗ 📜config.ts
┃ ┃ ┣ 📂types
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┣ 📜.DS_Store
┃ ┃ ┣ 📜.eslintrc.json
┃ ┃ ┣ 📜index.d.ts
┃ ┃ ┣ 📜jest.config.ts
┃ ┃ ┣ 📜next-env.d.ts
┃ ┃ ┣ 📜next.config.js
┃ ┃ ┣ 📜project.json
┃ ┃ ┣ 📜tsconfig.json
┃ ┃ ┣ 📜tsconfig.spec.json
┃ ┃ ┗ 📜tsconfig.tsbuildinfo
┃ ┣ 📂docs-e2e
┃ ┃ ┣ 📂src
┃ ┃ ┃ ┣ 📂e2e
┃ ┃ ┃ ┃ ┗ 📜app.cy.ts
┃ ┃ ┃ ┣ 📂fixtures
┃ ┃ ┃ ┃ ┗ 📜example.json
┃ ┃ ┃ ┗ 📂support
┃ ┃ ┃ ┃ ┣ 📜app.po.ts
┃ ┃ ┃ ┃ ┣ 📜commands.ts
┃ ┃ ┃ ┃ ┗ 📜e2e.ts
┃ ┃ ┣ 📜.eslintrc.json
┃ ┃ ┣ 📜cypress.config.ts
┃ ┃ ┣ 📜project.json
┃ ┃ ┗ 📜tsconfig.json
┣ 📂libs
┃ ┣ 📂shared
┃ ┃ ┣ 📂src
┃ ┃ ┃ ┣ 📂lib
┃ ┃ ┃ ┃ ┣ 📂components
┃ ┃ ┃ ┃ ┃ ┣ 📂Icons
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜icons.spec.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜icons.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📂breadcrumbs
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜breadcrumbs.spec.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜breadcrumbs.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📂buttons
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜action-icon-button.spec.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜action-icon-button.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜button.spec.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜button.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜user-button.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📂check-box-input
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜check-box-group-input.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜check-box-nput.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📂datepicker-provider
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜datepicker-provider.spec.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜datepicker-provider.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📂direction-switcher
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜direction-switcher.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📂error
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜error.spec.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜error.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📂lang-switcher
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lang-switcher.spec.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜lang-switcher.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📂number-text-input
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜number-text-input.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📂overlay-dialog
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜overlay-dialog.spec.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜overlay-dialog.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📂page-not-found
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜page-not-found.spec.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page-not-found.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📂password-text-input
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜password-text-input.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📂radio-input
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜radio-group-input.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜radio-input.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📂select-input
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜select-input.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📂social-buttons
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜social-buttons.spec.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜social-buttons.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📂table
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜table.spec.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜table.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📂text-input
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜text-input.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📂textarea-input
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜textarea-input.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📂theme-switcher
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜theme-switcher.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜.DS_Store
┃ ┃ ┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┃ ┃ ┣ 📂hooks
┃ ┃ ┃ ┃ ┃ ┣ 📜use-confirmation-modal.ts
┃ ┃ ┃ ┃ ┃ ┗ 📜use-notification.ts
┃ ┃ ┃ ┃ ┣ 📂types
┃ ┃ ┃ ┃ ┃ ┗ 📜index.ts
┃ ┃ ┃ ┃ ┣ 📂utils
┃ ┃ ┃ ┃ ┃ ┣ 📜Provider.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜authOptions.ts
┃ ┃ ┃ ┃ ┃ ┣ 📜emotion.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜firebase.config.ts
┃ ┃ ┃ ┃ ┃ ┣ 📜storeConfig.ts
┃ ┃ ┃ ┃ ┃ ┗ 📜theme.ts
┃ ┃ ┃ ┃ ┗ 📜.DS_Store
┃ ┃ ┃ ┣ 📜.DS_Store
┃ ┃ ┃ ┣ 📜index.ts
┃ ┃ ┃ ┗ 📜server.ts
┃ ┃ ┣ 📜.DS_Store
┃ ┃ ┣ 📜.eslintrc.json
┃ ┃ ┣ 📜README.md
┃ ┃ ┣ 📜project.json
┃ ┃ ┣ 📜tsconfig.json
┃ ┃ ┗ 📜tsconfig.lib.json
┃ ┣ 📜.DS_Store
┃ ┗ 📜.gitkeep
┣ 📂tools
┃ ┗ 📜tsconfig.tools.json
┣ 📜.DS_Store
┣ 📜README.md
┣ 📜commitlint.config.js
┣ 📜jest.config.ts
┣ 📜jest.preset.js
┣ 📜lint-staged.config.js
┣ 📜nx.json
┣ 📜package.json
┣ 📜pnpm-lock.yaml
┣ 📜renovate.json
┗ 📜tsconfig.base.json
```

</details>

<!-- Feature section -->

## ✨ Features

This template features all the latest tools and web development best practices. Some of the tools are listed below 👇

#### 📊 Legend

✅ : Implemented <br/>
⌛ : In progress <br/>
⏰ : Thinking <br/>

#### 📘 Package Manager

| Name                     | Description                                | status |
| ------------------------ | ------------------------------------------ | ------ |
| [pnpm](https://pnpm.io/) | Fast, disk space efficient package manager | ✅     |

#### 🏗️ Build System

| Name                  | Description                                                    | status |
| --------------------- | -------------------------------------------------------------- | ------ |
| [Nx](https://nx.dev/) | Next generation build system with first-class monorepo support | ✅     |

#### 🔥 Framework

| Name                          | Description                     | status |
| ----------------------------- | ------------------------------- | ------ |
| [NextJs](https://nextjs.org/) | The React framework for the web | ✅     |

#### 💄 Design System and Animations

| Name                                                          | Description                                           | status |
| ------------------------------------------------------------- | ----------------------------------------------------- | ------ |
| [ant design](https://ant.design/)                             | A fully featured react component library              | ✅     |
| [@tabler/icons-react](https://tabler-icons-react.vercel.app/) | Beautiful &consistent icons                           | ✅     |
| [Framer motion](https://www.framer.com/motion/)               | A production-ready motion library for React           | ✅     |
| [TanStack Table](https://tanstack.com/table/)                 | Headless UI for building powerful tables & data grids | ✅     |

#### 🏬 Data Fetching

| Name                                                | Description                                           | status |
| --------------------------------------------------- | ----------------------------------------------------- | ------ |
| [TanStack Query](https://tanstack.com/query/latest) | Powerful asynchronous state management                | ✅     |
| [axios](https://axios-http.com/docs/intro)          | Promise based HTTP client for the browser and node.js | ⏰     |

#### 🏬 State Management and Hooks

| Name                                          | Description                                     | status |
| --------------------------------------------- | ----------------------------------------------- | ------ |
| [Typescript](https://www.typescriptlang.org/) | TypeScript is JavaScript with syntax for types. | ✅     |
| [react-use](https://www.typescriptlang.org/)  | TypeScript is JavaScript with syntax for types. | ⏰     |

#### ❄️ Internationalization

| Name                                                                | Description                         | status |
| ------------------------------------------------------------------- | ----------------------------------- | ------ |
| [next-intl](https://next-intl-docs.vercel.app/docs/getting-started) | Next.js internationalization (i18n) | ✅     |

#### 🔐 Authetication

| Name                                     | Description                | status |
| ---------------------------------------- | -------------------------- | ------ |
| [firebase](https://firebase.google.com/) | Authentication             | ⌛     |
| [Next-auth](https://next-auth.js.org/)   | Authentication for Next.js | ⌛     |

#### 🏬 Type Checking

| Name                                          | Description                                     | status |
| --------------------------------------------- | ----------------------------------------------- | ------ |
| [Typescript](https://www.typescriptlang.org/) | TypeScript is JavaScript with syntax for types. | ✅     |

#### 📉 Linter and Prettier

| Name                                                                         | Description                                                                                    | status |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------ |
| [👺 Eslint](https://eslint.org/)                                             | Find and fix problems in your JavaScript code                                                  | ✅     |
| [💅 Prettier](https://prettier.io/)                                          | Prettier- An opinionated code formatter                                                        | ✅     |
| [💩 lint-staged]()                                                           | Run linters against staged git files and don't let 💩 slip into your code base                 | ✅     |
| [🐶 Husky](https://typicode.github.io/husky/)                                | Husky improves your commits and more 🐶 woof!                                                  | ✅     |
| [📓 Commitlint](https://commitlint.js.org/#/)                                | Lint commit messages                                                                           | ✅     |
| [🔢 standard version](https://commitlint.js.org/#/)                          | A utility for versioning using semver and CHANGELOG generation powered by Conventional Commits | ⏰     |
| [Validte branch name](https://github.com/JsonMa/validate-branch-name#readme) | validate git branch name                                                                       | ✅     |

#### 🚫 Form/validation

| Name                                   | Description                                                          | status |
| -------------------------------------- | -------------------------------------------------------------------- | ------ |
| [React hook form](react-hook-form.com) | Performant,flexible and extensible forms with easy-to-use validation | ✅     |
| [Zod](https://zod.dev/)                | TypeScript-first schema validation with static type inference        | ✅     |

#### 🧪 Test

| Name                                                                             | Description                                                          | status |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------ |
| [jest](https://www.cypress.io/)                                                  | A delightful JavaScript Testing Framework with a focus on simplicity | ✅     |
| [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) | React Testing Library                                                | ✅     |
| [cypress](https://www.cypress.io/)                                               | Test. Automate. Accelerate.[end-to-end testing]                      | ✅     |

#### ➕ Additional

| Name                                       | Description                                                                                  | status |
| ------------------------------------------ | -------------------------------------------------------------------------------------------- | ------ |
| [Partytown](https://partytown.builder.io/) | Relocate resource intensive third-party scripts off of the main thread and into a web worker | ⏰     |

#### 📈 Analysis

| Name                                                                          | Description                                       | status |
| ----------------------------------------------------------------------------- | ------------------------------------------------- | ------ |
| [why-did-you-render](https://github.com/welldone-software/why-did-you-render) | Notify you about potentially avoidable re-renders | ⏰     |
