# Hugo Theme Fluidity 使用指南與可自定義選項

這份指南基於 `hugo-theme-fluidity` 主題的 `theme.toml` 和 `exampleSite/hugo.yaml` 檔案。

## 1. 安裝主題

你可以使用 Git Submodule 或 Hugo Modules 來安裝主題。

**使用 Git Submodule:**

在你的 Hugo 專案根目錄下執行：

```bash
git submodule add https://github.com/wayjam/hugo-theme-fluidity.git themes/hugo-theme-fluidity
```

**使用 Hugo Modules:**

在你的 `hugo.toml` 或 `hugo.yaml` 中添加：

```yaml
module:
  imports:
    - path: github.com/wayjam/hugo-theme-fluidity
```

然後執行 `hugo mod tidy` 和 `hugo mod vendor`。

## 2. 配置 `hugo.toml` 或 `hugo.yaml`

將主題名稱添加到你的主配置文件中：

```yaml
theme: hugo-theme-fluidity
```

然後，在配置文件中添加 `params` 部分來配置主題的各種選項。以下是一些重要的可自定義選項：

### 基本配置

*   `baseURL`: 網站的基礎 URL。
*   `languageCode`: 網站語言，例如 `en` 或 `zh-cn`。
*   `defaultContentLanguage`: 預設內容語言。
*   `title`: 網站標題。
*   `enableRobotsTXT`: 是否生成 `robots.txt`。
*   `summaryLength`: 文章摘要的長度。
*   `hasCJKLanguage`: 如果你的網站包含 CJK (中日韓) 語言，請設置為 `true`。
*   `enableEmoji`: 是否啟用 Emoji。

### 菜單配置 (`menus`)

自定義網站頂部導航菜單的項目。

```yaml
menus:
  main:
    - identifier: home
      pageRef: /
      weight: 10
    - identifier: post
      pageRef: /posts
      weight: 20
    - identifier: tag
      pageRef: /tags
      weight: 30
    - identifier: archive
      pageRef: /archives
      weight: 40
    - identifier: about
      pageRef: /about
      weight: 50
    - identifier: search
      pageRef: /search
      weight: 60
```

### 輸出配置 (`outputs`)

配置不同頁面類型的輸出格式。

```yaml
outputs:
  home:
  - html
  - rss
  section:
  - html
  - rss
  taxonomy:
  - html
  - term:
  - html
```

### Markdown 配置 (`markup`)

配置 Markdown 渲染選項。

```yaml
markup:
  defaultMarkdownHandler: goldmark
  goldmark:
    extensions:
      passthrough:
        enable: true
        delimiters:
          block:
            - ["$$", "$$"]
            - ["\\[", "\\]"]
          inline:
            - ["\\(", "\\)"]
```

### 模塊配置 (`module`)

如果你使用 Hugo Modules，這裡配置模塊的導入和掛載。

```yaml
module:
  hugoVersion:
    min: 0.128.0
  # imports:
  #   - path: github.com/wayjam/hugo-theme-fluidity
  mounts:
    - source: assets
      target: assets
    - source: content
      target: content
    - source: hugo_stats.json
      disableWatch: true
      target: assets/notwatching/hugo_stats.json
```

### 主題參數 (`params`)

這是主題特有的配置部分，提供了許多自定義選項：

*   `description`: 網站描述。
*   `fullContentRSS`: RSS 輸出是否包含完整文章內容。
*   `mainSections`: 在首頁顯示的主要文章分類。
*   `pageSize`: 控制不同頁面類型顯示的文章數量 (`home`, `list`, `archives`)。
    ```yaml
    pageSize:
      home: 5
      list: 5
      archives: 20
    ```
*   `listPage`: 自定義列表頁面顯示。
    ```yaml
    listPage:
      numCategoriesToShow: 1 # 列表頁面摘要中顯示的分類數量
      numTagsToShow: 3       # 列表頁面摘要中顯示的標籤數量
      showSummary: false     # 是否在列表頁面顯示文章摘要
    ```
*   `social`: 配置社交媒體鏈接和分享按鈕。
    ```yaml
    social:
      twitter: 'Your_Twitter_username'
      github: 'Your_GitHub_username'
      linkedin: 'Your_LinkedIn_username'
      whatsapp: 'Your_WhatsApp_username'

      share:
        disabled: false
        disableByType: # content type
          - not-exist
        platforms: # 可用平台: [redidit, x, facebook, google, telegram]
          - name: reddit
          - name: x
          - name: facebook
          # - name: telegram # 禁用平台
          - name: linkedin
          - name: whatsapp
          # 自定義平台示例
          - name: FullExample
            urlPattern: "https://example.com?link={permalink}&title={title}&tags={tags}&description={description}&via={via}&user={user}"
      connect:
        platforms: # 可用平台: [github, x, linkedin, whatsapp]
          - github
          - x
          # - linkedin # 禁用平台
          - whatsapp
    ```
*   `articleMetadata`: 配置文章元數據的位置 (`header`, `sidebar`, `none`)。
    ```yaml
    articleMetadata:
      position: header
    ```
*   `toc`: 配置文章目錄。
    ```yaml
    toc:
      disabled: false # 是否禁用目錄
    ```
*   `relatedPosts`: 配置相關文章。
    ```yaml
    relatedPosts:
      disabled: false # 是否禁用相關文章
      disableByType: [page] # 按內容類型禁用
    ```
*   `comment`: 配置評論系統。
    ```yaml
    comment:
      disabled: false # 是否禁用評論
      disableByType: [page] # 按內容類型禁用
      thirdParty: |
        your comment script will be loaded here # 在這裡添加第三方評論系統的腳本
    ```
*   `search`: 配置搜索功能。
    ```yaml
    search:
      disabled: false # 是否禁用搜索
      provider: pagefind # 可用提供者: google, pagefind
    ```
*   `math`: 配置數學公式排版支持。
    ```yaml
    math: false # 全局啟用或禁用
    mathEngine: mathJax # 渲染引擎: mathJax | katex
    ```
*   `enableEmoji`: 是否啟用 Emoji (也可以在頂層配置)。

## 3. 創建內容

在 `content` 目錄下創建你的 Markdown 文件來撰寫文章和頁面。

*   文章通常放在 `content/posts` 目錄下。
*   獨立頁面 (如關於頁面) 可以直接放在 `content` 目錄下。

在 Markdown 文件的 Front Matter 中，設置文章的元數據：

```markdown
---
title: "文章標題"
date: 2023-10-27T10:00:00+08:00
categories: ["分類"]
tags: ["標籤1", "標籤2"]
---

文章內容...
```

## 4. 自定義樣式和腳本

主題的樣式和腳本文件位於 `themes/hugo-theme-fluidity/assets` 目錄下。建議在你的主專案的 `assets` 目錄下創建同名文件來覆蓋主題文件，以便於主題更新。

*   `assets/css/style.css`: 主題的主要樣式文件。
*   `assets/css/highlight.css`: 代碼高亮樣式文件。
*   `assets/js/main.js`: 主題的主要 JavaScript 文件。

## 5. 自定義佈局

主題的佈局文件位於 `themes/hugo-theme-fluidity/layouts` 目錄下。建議在你的主專案的 `layouts` 目錄下創建同名文件來覆蓋主題文件。

*   `_default`: 包含默認的佈局文件。
*   `partials`: 包含可重用的佈局片段。

## 6. 運行網站

在你的 Hugo 專案根目錄下執行：

```bash
hugo server
```

## 7. 生成靜態網站

執行：

```bash
hugo
```

生成的靜態文件在 `public` 目錄中。

希望這份 Markdown 格式的指南能幫助你更好地使用 `hugo-theme-fluidity` 主題。
