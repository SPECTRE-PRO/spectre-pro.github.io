
---
title: "探索 Browser_Use_WebUI：本地網頁介面自動化利器"
date: 2024-05-16
draft: false
categories: ["自動化", "網頁開發"]
tags: ["Python", "JavaScript", "WebUI", "瀏覽器控制", "自動化測試"]
---
## 什麼是 Browser_Use_WebUI？

`Browser_Use_WebUI` 是一個 [GitHub](https://github.com/browser-use/web-ui) 專案，旨在提供一種機制，用於程式化地控制瀏覽器，使其能夠開啟並與本地機器上運行的網頁使用者介面（WebUI）進行互動。簡單來說，它允許您透過程式碼來自動化對本地端 WebUI 的操作。

## 為何需要使用它？

在許多場景下，我們可能需要自動化地與本地端運行的網頁應用程式或介面進行互動。例如：

*   **自動化測試：** 對於開發中的本地 WebUI，進行自動化的功能測試或介面回歸測試。
*   **開發輔助：** 在開發過程中自動執行某些操作，例如填充表單、點擊按鈕，以節省手動操作的時間。
*   **資料抓取與處理：** 從本地 WebUI 中自動提取特定資訊。
*   **特定任務自動化：** 任何需要程式控制瀏覽器來操作本地網頁介面的場景。

`Browser_Use_WebUI` 專案提供了一個基礎框架，讓您可以更方便地實現這些自動化任務，特別適用於需要對瀏覽器行為進行精細控制的環境。

## 如何使用它？

該專案主要利用 Python 來驅動瀏覽器，並輔以 JavaScript 處理前端頁面上的互動及內容解析。以下是其核心組成部分和使用方式概述：

### 核心檔案與功能：

*   **`Src/main.py`**:
    這個檔案是專案的主要入口點，負責啟動瀏覽器並導航到您指定的本地 WebUI 地址。根據專案說明，它可能支援選擇使用的瀏覽器類型和埠號。
*   **`Src/first_page.js`**:
    這個 JavaScript 檔案可能用於處理頁面的初始加載、點擊特定元素或執行其他進入頁面後的第一步操作，為後續互動奠定基礎。
*   **`Src/parser.py` & `Src/parser.js`**:
    這兩個檔案通常協同工作，一個在 Python 後端，一個在 JavaScript 前端，用於解析網頁內容並從中提取所需數據。`parser.js` 可能負責在瀏覽器端執行解析邏輯，而 `parser.py` 則可能處理從前端獲取到的資料或啟動解析過程。

### 執行步驟：

1.  **準備環境：**
    首先，確保您的系統上安裝了 Python 環境以及專案所需的任何依賴（如果有的話）。您需要將 `Browser_Use_WebUI` 專案從 GitHub 克隆到您的本地機器。

2.  **啟動主程式：**
    透過運行 `Src/main.py` 來啟動瀏覽器控制流程。根據專案的 README，您可能需要提供參數來指定要使用的瀏覽器類型（例如 Chrome, Firefox）和 WebUI 運行的埠號。

    ```bash
    python Src/main.py
    # 根據專案實際實現，可能需要傳遞參數來設定瀏覽器類型和埠號
    # 例如：python Src/main.py --browser chrome --port 8080 (這僅為範例，具體參數請參考專案文檔)
    ```

3.  **瀏覽器自動化：**
    一旦 `main.py` 運行，它將控制一個瀏覽器實例開啟您目標的本地 WebUI。接下來，`Src/first_page.js` 和 `Src/parser.js` 等相關 JavaScript 腳本可能會被注入或執行，以實現頁面互動和資料解析。

4.  **獲取與處理結果：**
    `Src/parser.py` 將負責根據 `parser.js` 實現的邏輯獲取解析結果，並可在 Python 環境中進行進一步的處理。

儘管專案的 README 較為簡潔，但其提供的資訊揭示了一個用於簡化本地 WebUI 自動化的強大潛力。如果您需要進行相關的自動化任務，`Browser_Use_WebUI` 是一個值得探索的起點。
```

好的，這是一篇關於 `Browser_Use_WebUI` 的繁體中文教學文章，採用 Hugo markdown 格式輸出：

```markdown
---
title: "使用 Browser_Use_WebUI 讓 AI 智慧瀏覽與操作網頁"
date: 2025-07-07
draft: false
categories: ["AI", "網頁自動化", "LLM", "工具"]
tags: ["Browser_Use_WebUI", "Gradio", "AI Agents", "LLM", "Python", "Docker"]
---

## 引言

在人工智慧日益發展的今天，讓 AI 代理能夠理解並操作網頁，就像人類一樣，是許多應用場景的關鍵。`Browser_Use_WebUI` 專案正是為此而生，它在 `browser-use` 核心能力的基礎上，提供了一個直觀且功能強大的 Web 使用者介面（WebUI），讓使用者能更輕易地控制 AI 進行網頁互動，實現自動化任務。

## 為何需要使用 Browser_Use_WebUI？

`Browser_Use_WebUI` 不僅將複雜的 AI 網頁操作簡化，更帶來了多項實用功能，使其成為開發者和普通使用者不可或缺的工具：

*   **使用者友善的圖形介面 (WebUI)**
    *   `Browser_Use_WebUI` 基於 Gradio 框架構建，提供了一個直觀且易於操作的網頁介面。這意味著即使您不熟悉命令列操作，也能輕鬆啟動 AI 代理，並透過簡單的點擊和輸入來控制其進行網頁瀏覽和任務執行。

*   **廣泛的 LLM 支援**
    *   該工具已深度整合多種主流的大型語言模型 (LLMs)，包括 Google、OpenAI、Azure OpenAI、Anthropic、DeepSeek、Ollama 等。這讓使用者可以根據自己的需求和偏好，靈活選擇最強大的 AI 模型來驅動網頁任務，未來也計劃支援更多模型。

*   **自訂瀏覽器支援與高畫質錄影**
    *   一個獨特且實用的功能是，`Browser_Use_WebUI` 允許您使用自己電腦上的瀏覽器實例。這解決了重複登入網站、處理身份驗證挑戰的繁瑣問題。您的 AI 代理可以直接使用您已登入的帳號進行操作，極大地提高了效率。此外，此功能還支援高畫質的螢幕錄影，方便您回顧和分析 AI 的操作過程。

*   **持久的瀏覽器會話**
    *   您可以選擇在 AI 任務完成後，仍保持瀏覽器視窗開啟。這使得您可以完整地檢視 AI 代理的互動歷史和當前狀態，對於調試、學習和連續性任務非常有用，無需每次都重新啟動瀏覽器會話。

總而言之，`Browser_Use_WebUI` 降低了 AI 網頁自動化的門檻，讓更多人能夠利用 AI 的力量來優化日常工作和開發流程。

## 如何安裝與使用 Browser_Use_WebUI？

您可以選擇透過本地安裝或 Docker 來部署 `Browser_Use_WebUI`。

### 選項 1：本地安裝 (推薦)

本地安裝能讓您更靈活地控制環境，適合進行開發和客製化。

#### 步驟 1：複製專案程式碼
首先，打開您的終端機或命令提示字元，複製專案的 GitHub 儲存庫：
```bash
git clone https://github.com/browser-use/web-ui.git
cd web-ui
```

#### 步驟 2：設定 Python 環境
我們強烈建議使用 `uv` 工具來管理 Python 虛擬環境，它速度更快且效率更高。
```bash
uv venv --python 3.11
```
激活您的虛擬環境：
*   **Windows (命令提示字元):**
    ```cmd
    .venv\Scripts\activate
    ```
*   **Windows (PowerShell):**
    ```powershell
    .\\.venv\\Scripts\\Activate.ps1
    ```
*   **macOS / Linux:**
    ```bash
    source .venv/bin/activate
    ```

#### 3: 安裝依賴庫
在激活的虛擬環境中，安裝所有必要的 Python 套件：
```bash
uv pip install -r requirements.txt
```
接著，安裝 Playwright 瀏覽器核心：
```bash
playwright install --with-deps
```
如果您只希望安裝特定瀏覽器，例如 Chromium：
```bash
playwright install chromium --with-deps
```

#### 步驟 4：配置環境變數
複製範例環境檔案，並根據您的需求進行設定：
*   **Windows (命令提示字元):**
    ```bash
    copy .env.example .env
    ```
*   **macOS / Linux / Windows (PowerShell):**
    ```bash
    cp .env.example .env
    ```
用您偏好的文字編輯器打開 `.env` 檔案，填入您的 API Keys (例如 OpenAI API Key) 和其他相關設定。

**自訂瀏覽器設定 (可選):**
如果您希望使用自己的瀏覽器實例，請在 `.env` 中設定 `BROWSER_PATH` 和 `BROWSER_USER_DATA`。
*   **Windows 範例:**
    ```env
    BROWSER_PATH="C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
    BROWSER_USER_DATA="C:\\Users\\YourUsername\\AppData\\Local\\Google\\Chrome\\User Data"
    ```
    > **注意:** 將 `YourUsername` 替換為您實際的 Windows 使用者名稱。
*   **Mac 範例:**
    ```env
    BROWSER_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    BROWSER_USER_DATA="/Users/YourUsername/Library/Application Support/Google/Chrome"
    ```
設定完成後，請關閉所有 Chrome 視窗，並透過非 Chrome 瀏覽器 (如 Firefox 或 Edge) 打開 WebUI。在 WebUI 的瀏覽器設定中勾選「Use Own Browser」選項。

#### 步驟 5：運行 WebUI
現在，萬事俱備，執行以下命令啟動 WebUI：
```bash
python webui.py --ip 127.0.0.1 --port 7788
```
然後，打開您的網頁瀏覽器，導航至 `http://127.0.0.1:7788` 即可開始使用。

### 選項 2：Docker 安裝

如果您更偏好容器化部署，Docker 是個快速上手的選擇。

#### 先決條件
*   您的系統已安裝 Docker 和 Docker Compose。
    *   [Docker Desktop](https://www.docker.com/products/docker-desktop/) (適用於 Windows/macOS)
    *   [Docker Engine](https://docs.docker.com/engine/install/) 和 [Docker Compose](https://docs.docker.com/compose/install/) (適用於 Linux)

#### 步驟 1：複製專案程式碼
```bash
git clone https://github.com/browser-use/web-ui.git
cd web-ui
```

#### 步驟 2：配置環境變數
與本地安裝相同，複製範例環境檔案並編輯 `.env`，填入您的 API Keys 和其他設定。
*   **Windows (命令提示字元):**
    ```bash
    copy .env.example .env
    ```
*   **macOS / Linux / Windows (PowerShell):**
    ```bash
    cp .env.example .env
    ```

#### 步驟 3：Docker 建置與運行
運行以下命令來建置 Docker 映像檔並啟動容器：
```bash
docker compose up --build
```
對於 ARM64 系統 (例如 Apple Silicon Macs)，請執行以下命令：
```bash
TARGETPLATFORM=linux/arm64 docker compose up --build
```

#### 步驟 4：訪問 WebUI 和 VNC
*   **Web-UI**: 在瀏覽器中打開 `http://localhost:7788`。
*   **VNC Viewer (觀察瀏覽器互動)**: 在瀏覽器中打開 `http://localhost:6080/vnc.html`。
    *   預設的 VNC 密碼是 `"youvncpassword"`。
    *   您可以在 `.env` 文件中設定 `VNC_PASSWORD` 來更改此密碼。

## 結語

`Browser_Use_WebUI` 讓 AI 網頁自動化變得前所未有的簡單和強大。無論是進行資料抓取、自動化填表，還是更複雜的網頁操作，它都能成為您AI工具箱中的利器。立即嘗試安裝並透過其直觀的介面，體驗 AI 瀏覽網頁的無限可能吧！
```