# Линтинг

Важно чтобы код написанный командой разработчиков выглядел максимально
приближенно к тому, как будто его писал один человек. В этом нам помогают
инструменты по автоматизации проверки и форматирования кода.

**ESLint** - самый популярный линтер. Выполняет статический анализ кода, помогая
обнаружить проблемы с форматированием и найти ошибки еще до момента выполнения
кода.

**Prettier** - не проверяет качество кода, а просто его форматирует.
Поддерживает форматирование JavaScript, JSX, Flow, TypeScript, HTML, JSON, CSS и
многих других языков.

# Установка зависимостей

Добавим в проект следующие пакеты.

```bash
npm install --save-dev prettier husky lint-staged
```

Устанавливать ESLint не нужно, эта библиотека и ее конфигурация по умолчанию
включены в проект созданный с `create-react-app`.

{% hint style='info' %} Для того чтобы правильно работали пакеты `husky` и
`lint-staged`, до их установки в проекте уже должен быть инициализирован git.
`create-react-app`, при создании проекта, автоматически добавляет локальный
git-репозиторий, если его еще нет. {% endhint %}

# Создание конфигурации

В корневой папке проекта, на одном уровне с `package.json` создайте следующие
файлы.

{% hint style='info' %} Создавать файлы конфигурации необходимо в редакторе кода
или через терминал командой `touch`. Некоторые файлы конфигурации имеют
нестандартные имена и создать их, особенно в проводнике Windows, будет не
возможно. {% endhint %}

## .prettierrc

Создает конфигурацию для [Prettier](https://prettier.io/docs/en/index.html).

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid",
  "proseWrap": "always"
}
```

## .lintstagedrc

Создает конфигурацию для [lint-staged](https://github.com/okonet/lint-staged).

```json
{
  "src/**/*.{json,css,scss,md}": ["prettier --write", "git add"],
  "src/**/*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write", "git add"]
}
```

## .huskyrc

Создает конфигурацию для [husky](https://github.com/typicode/husky), чтобы перед
каждым коммитом запускался линтинг c настройками из `lint-staged`.

```json
{
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```

# Плагины

Ссылки на плагины для VSCode.

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Ссылки на документацию по интеграции плагинов в популярные редакторы.

- [Prettier editor integration](https://prettier.io/docs/en/editors.html)
- [ESLint editor integration](https://eslint.org/docs/user-guide/integrations)

# Настройки VSCode

Для комфортной работы, после установки плагинов, нужно добавить несколько
настроек редактора для автосохранения и форматирования файлов.

```json
{
  "files.autoSave": "onFocusChange",
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true
}
```
