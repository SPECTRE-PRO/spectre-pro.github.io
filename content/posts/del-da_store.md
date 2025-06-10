+++
date = '2025-06-09T13:43:37+08:00'
draft = false
title = '如何在 Mac 上刪除 GitHub 倉庫中的 .DS_Store 檔案'
+++

## 如何在 Mac 上刪除 GitHub 倉庫中的 .DS_Store 檔案

### 步驟 1：在終端機中找到你的倉庫

打開終端應用程式，並使用 `cd` 命令導航到你的倉庫根目錄。例如，如果你的倉庫位於 `/Users/xxx/Desktop/xxx`，你可以使用以下指令：

```shell
cd /Users/xxx/Desktop/xxx
```

### 步驟 2：刪除 .DS_Store 檔案

若要尋找並刪除倉庫中的所有 .DS_Store 檔案，請執行下列命令：

```shell
find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch
```

此命令將遞歸搜尋倉庫中的所有 .DS_Store 檔案，並使用 `git rm` 命令將其刪除。

### 步驟 3：建立 .gitignore 檔案

如果您的倉庫中沒有 .gitignore 檔案，您可以建立一個，以防止將來新增 .DS_Store 檔案。執行以下命令：

```shell
touch .gitignore
echo .DS_Store > .gitignore
```

第一個指令建立一個空的 .gitignore 檔案，第二個指令將 `.DS_Store` 模式加入到該檔案。

### 步驟 4：將變更推送到 GitHub

現在，.DS_Store 檔案已被刪除，並且 .gitignore 檔案已建立，您可以提交更改並將其推送到您的 GitHub 倉庫。執行以下命令：

```shell
git add .gitignore
git commit -m '.DS_Store removed'
git push origin main
```

第一個命令將 .gitignore 檔案新增至暫存區；第二個命令提交更改並附帶有意義的訊息；第三個命令將更改推送到 GitHub 倉庫的 `main` 分支。
