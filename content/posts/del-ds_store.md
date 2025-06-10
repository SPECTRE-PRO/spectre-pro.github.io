+++
date = '2025-06-09T13:43:37+08:00'
draft = false
title = '如何在 Mac 上刪除 GitHub 倉庫中的 .DS_Store 檔案並避免再次出現'
tags = ["Mac", "GitHub", ".DS_Store", "Git", ".gitignore"]
categories = ["Git"]
+++

## 如何在 Mac 上刪除 GitHub 倉庫中的 .DS_Store 檔案並避免再次出現

`.DS_Store` 檔案是 macOS 作業系統自動在資料夾中建立的隱藏檔案，用於儲存資料夾的自訂屬性，例如圖示位置或背景圖片。雖然它們在本地檔案系統中很有用，但在 Git 倉庫中卻常常造成困擾，因為它們會隨著檔案的移動或刪除而頻繁變動，導致不必要的版本控制變更，並可能在不同作業系統的使用者之間產生衝突。

本篇文章將引導您如何在 Mac 上從您的 Git 倉庫中刪除這些 `.DS_Store` 檔案，並設定 `.gitignore` 以防止它們在未來被意外地加入到版本控制中。

### 步驟 1：開啟終端機並導航到您的倉庫目錄

首先，開啟您的「終端機」應用程式。您可以在「應用程式」->「工具程式」中找到它，或者使用 Spotlight 搜尋 (Command + Space) 輸入「終端機」來開啟。

使用 `cd` (change directory) 命令導航到您的 Git 倉庫的根目錄。請將 `/path/to/your/repository` 替換為您實際的倉庫路徑。

```shell
cd /path/to/your/repository
```

例如，如果您的倉庫位於您的桌面上的名為 `my-project` 的資料夾中，指令可能會是：

```shell
cd ~/Desktop/my-project
```

### 步驟 2：尋找並刪除倉庫中的 .DS_Store 檔案

接下來，我們將使用一個命令來尋找並從 Git 的追蹤中移除所有 `.DS_Store` 檔案。這個命令會遞歸地搜尋當前目錄（您的倉庫根目錄）及其所有子目錄中的 `.DS_Store` 檔案，並使用 `git rm` 命令將它們從 Git 索引中移除。

```shell
find . -name .DS_Store -print0 | xargs -0 git rm --cached --ignore-unmatch
```

*   `find . -name .DS_Store -print0`: 這部分命令會在當前目錄 (`.`) 中尋找所有名為 `.DS_Store` 的檔案，並使用 `-print0` 選項以 null 字元分隔找到的檔案路徑，這有助於正確處理包含空格或其他特殊字元的檔案名。
*   `xargs -0`: 這部分命令接收 `find` 命令輸出的以 null 字元分隔的檔案列表，並將這些檔案作為參數傳遞給後面的 `git rm` 命令。`-0` 選項確保 `xargs` 也使用 null 字元作為分隔符。
*   `git rm --cached --ignore-unmatch`: 這部分命令將指定的檔案從 Git 的暫存區 (index) 中移除，但會保留您工作目錄中的檔案。使用 `--cached` 是因為您通常只想停止 Git 追蹤這些檔案，而不是從您的本地檔案系統中實際刪除它們。`--ignore-unmatch` 選項則確保即使某些檔案未被找到或未被 Git 追蹤，命令也不會因此失敗。

如果您確定要從本地檔案系統中也刪除這些檔案，可以使用 `git rm -f --ignore-unmatch` 代替 `--cached`。

### 步驟 3：建立或修改 .gitignore 檔案以忽略 .DS_Store

為了防止 `.DS_Store` 檔案在未來再次被意外地加入到 Git 倉庫中，我們需要將它們添加到 `.gitignore` 檔案中。`.gitignore` 檔案用於指定 Git 應該忽略的檔案和資料夾模式。

如果您的倉庫根目錄中還沒有 `.gitignore` 檔案，您可以建立一個：

```shell
touch .gitignore
```

然後，將 `.DS_Store` 模式添加到 `.gitignore` 檔案中。這可以通過編輯檔案手動完成，或者使用以下命令：

```shell
echo ".DS_Store" >> .gitignore
```

這個命令會將一行包含 `.DS_Store` 的文字添加到 `.gitignore` 檔案的末尾。如果檔案已經存在，它會將內容附加到現有內容之後。

### 步驟 4：提交變更並推送到 GitHub

現在，您已經從 Git 追蹤中移除了 `.DS_Store` 檔案，並配置了 `.gitignore` 來忽略它們。接下來，您需要提交這些變更並將其推送到您的 GitHub 倉庫。

首先，將 `.gitignore` 檔案的變更添加到暫存區：

```shell
git add .gitignore
```

如果您使用了 `git rm --cached`，您可能還需要將 `.DS_Store` 檔案的移除操作添加到暫存區。最簡單的方法是使用 `git add .`，但請確保您只添加了您想要提交的變更。或者，您可以再次執行 `git rm --cached --ignore-unmatch` 命令，它會將移除操作添加到暫存區。

然後，提交您的變更。請提供一個有意義的提交訊息，例如「移除 .DS_Store 檔案並更新 .gitignore」。

```shell
git commit -m "移除 .DS_Store 檔案並更新 .gitignore"
```

最後，將您的本地變更推送到 GitHub 倉庫的遠端分支。請將 `main` 替換為您實際使用的分支名稱（例如 `master` 或其他分支）。

```shell
git push origin main
```

完成這些步驟後，您的 GitHub 倉庫將不再包含 `.DS_Store` 檔案，並且 Git 將來會自動忽略它們。
