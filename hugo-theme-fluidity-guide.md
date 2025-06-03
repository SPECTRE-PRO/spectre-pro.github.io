# Hugo Theme Fluidity 使用指南

這份指南將幫助您了解如何配置和自定義 `hugo-theme-fluidity` 主題。

## 1. 引言

`hugo-theme-fluidity` 是一個簡潔、響應式的 Hugo 主題，專為個人博客設計。它提供了豐富的配置選項，讓您可以輕鬆打造個性化的網站。

## 2. 安裝

要安裝 `hugo-theme-fluidity` 主題，您可以將其作為 Git Submodule 添加到您的 Hugo 站點的 `themes` 目錄中：

```bash
git submodule add https://github.com/wayjam/hugo-theme-fluidity.git themes/hugo-theme-fluidity
```

或者，您可以直接下載主題檔案並將其解壓縮到 `themes` 目錄中。

在您的 `hugo.yaml` 檔案中設定主題：

```yaml
theme: hugo-theme-fluidity
```

## 3. 基本配置 (hugo.yaml)

以下是 `hugo.yaml` 中一些重要的基本配置：

```yaml
baseURL: "您的網站 URL" # 例如: https://your-domain.com/
languageCode: "en-us" # 您的網站語言代碼
defaultContentLanguage: "en" # 預設內容語言
title: "您的網站標題" # 顯示在頁眉和瀏覽器標題欄
enableRobotsTXT: true
summaryLength: 100 # 文章摘要長度
hasCJKLanguage: false # 如果您的網站包含中文、日文或韓文，請設定為 true
enableEmoji: true # 啟用 Emoji

# 必須設定，用於主題的程式碼高亮樣式
pygmentsUseClasses: true
pygmentsCodefences: true

outputs:
  home:
  - html
  - rss
  section:
  - html
  - rss
  taxonomy:
  - html
  term:
  - html

menus:
  main: # 配置頁眉導航選單
    - identifier: home
      pageRef: /
      weight: 10
      name: Home # 選單顯示名稱
    - identifier: post
      pageRef: /posts
      weight: 20
      name: Posts
    # 添加更多選單項目...

# 數學排版配置 (如果需要)
markup:
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

module:
  hugoVersion:
    min: "0.128.0"
  # 如果使用 hugo mod，請取消註釋以下內容
  # imports:
  #   - path: github.com/wayjam/hugo-theme-fluidity
```

## 4. 主題參數 (params)

在 `hugo.yaml` 的 `params` 部分，您可以配置主題的各種選項：

```yaml
params:
  description: '您的網站描述' # 顯示在頁腳的關於區塊
  fullContentRSS: true # RSS 輸出是否包含全文

  mainSections: # 指定哪些 Section 的文章會顯示在首頁
    - posts

  pageSize: # 控制不同頁面的文章列表大小
    home: 5 # 首頁文章數量
    list: 10 # 列表頁面文章數量 (分類、標籤等)
    archives: 20 # 歸檔頁面文章數量

  listPage: # 自定義列表頁面顯示
    numCategoriesToShow: 1 # 在列表摘要中顯示的分類數量
    numTagsToShow: 3 # 在列表摘要中顯示的標籤數量
    showSummary: false # 是否在列表頁面顯示文章摘要

  social: # 社交連結和分享配置
    twitter: '您的 Twitter 用戶名'
    github: '您的 GitHub 用戶名'
    linkedin: '您的 LinkedIn 用戶名'
    whatsapp: '您的 WhatsApp 用戶名'

    share: # 文章分享按鈕配置
      disabled: false # 全局禁用分享按鈕
      disableByType: # 按內容類型禁用分享按鈕
        - not-exist # 示例：禁用 'not-exist' 類型的文章分享
      platforms: # 要顯示的分享平台列表
        - name: reddit
        - name: x
        - name: facebook
        # - name: telegram # 禁用 Telegram 分享
        - name: linkedin
        - name: whatsapp
        # 添加自定義分享平台
        # - name: CustomPlatform
        #   urlPattern: "https://example.com?link={permalink}&title={title}" # 使用佔位符

    connect: # 頁腳社交連結配置
      platforms: # 要顯示的社交連結平台列表
        - github
        - x
        # - linkedin # 禁用 LinkedIn 連結
        - whatsapp

  articleMetadata: # 文章元數據顯示位置
    position: header # 可選值: header, sidebar, none

  toc: # 文章目錄配置
    disabled: false # 全局禁用目錄

  relatedPosts: # 相關文章配置
    disabled: false # 全局禁用相關文章
    disableByType: [page] # 按內容類型禁用相關文章

  comment: # 評論配置
    disabled: false # 全局禁用評論
    disableByType: [page] # 按內容類型禁用評論
    thirdParty: | # 第三方評論系統程式碼
      <!-- 將您的第三方評論系統程式碼貼在這裡 -->
      <!-- 例如 Disqus, utterances, Giscus 等 -->
      <!-- 如果留空，將使用 Hugo 內建的 Disqus 模板 (需要設定 disqusShortname) -->

  search: # 搜尋配置
    disabled: false # 全局禁用搜尋
    provider: pagefind # 可選值: google, pagefind

  math: false # 全局啟用數學排版 (MathJax 或 KaTeX)
  mathEngine: mathJax # 可選值: mathJax, katex

  logo: '/path/to/your/logo.png' # 網站 Logo 圖片路徑 (相對於 static 或 assets 目錄)
```

## 5. 文章 Front Matter 配置

在您的文章 (Markdown 檔案) 的 Front Matter 中，您可以設定以下參數來控制文章的顯示：

```yaml
---
title: "您的文章標題"
date: 2023-10-27T10:00:00+08:00
lastmod: 2023-10-27T10:00:00+08:00 # 最後修改日期 (如果與 date 不同)
author: "作者名稱" # 顯示在文章元數據中
role: "作者角色" # 顯示在作者名稱旁邊 (可選)
featured: true # 設定為 true 使文章成為特色文章 (只在首頁顯示一篇)
toc: true # 是否顯示文章目錄 (預設根據字數和全局配置判斷)
tags: ["標籤1", "標籤2"] # 文章標籤
categories: ["分類"] # 文章分類
# 其他 Hugo 內建的 Front Matter 參數...
---

您的文章內容...
```

## 6. 自定義佈局和樣式

`hugo-theme-fluidity` 使用 Tailwind CSS 進行樣式設計。如果您熟悉 Tailwind CSS，您可以通過以下方式進一步自定義主題的外觀：

*   **修改佈局檔案**: 您可以修改 `themes/hugo-theme-fluidity/layouts/` 目錄下的佈局檔案 (`_default/single.html`, `_default/list.html`, `_default/home.html` 等) 和 `themes/hugo-theme-fluidity/layouts/partials/` 目錄下的 partials 檔案來改變頁面的結構和內容。
*   **修改 Tailwind 配置**: 您可以修改主題根目錄下的 `tailwind.config.js` 檔案來擴展或修改 Tailwind CSS 的配置。
*   **添加自定義 CSS**: 您可以在您的站點的 `assets/css/` 目錄下創建 CSS 檔案，並在 `hugo.yaml` 中配置，以便覆蓋主題的樣式。

請注意，直接修改主題檔案可能會在更新主題時產生衝突。建議通過 Hugo 的檔案查找順序來覆蓋主題檔案，例如將修改後的 partials 檔案放在您站點的 `layouts/partials/` 目錄下。

## 7. 國際化 (i18n)

主題支援國際化。您可以通過修改 `themes/hugo-theme-fluidity/i18n/` 目錄下的語言檔案 (`en.yaml`, `zh-cn.yaml`, `zh-hk.yaml` 等) 來翻譯主題中的文字。您也可以在您站點的 `i18n/` 目錄下添加或修改語言檔案。

## 8. 其他

*   **運行範例站點**: 主題提供了一個範例站點 (`exampleSite/`)，您可以參考其配置和內容來了解主題的使用方法。您可以使用以下命令在本地運行範例站點：

    ```bash
    cd themes/hugo-theme-fluidity/exampleSite
    hugo server
    ```

希望這份指南對您有所幫助！如果您有其他問題，建議查看主題的 GitHub 倉庫以獲取更多資訊。
