---
title: "使用 Browser-use Web UI"
date: 2025-06-10T19:30:00+08:00
draft: false
tags: ["Browser-use", "Web UI", "AI"]
categories: ["教學"]
---

這篇文章將詳細介紹如何安裝和使用基於 Gradio 的 Browser-use Web UI。Browser-use 是一個旨在讓 AI 代理能夠存取網站的專案，而 Web UI 則提供了一個使用者友善的介面來與瀏覽器代理互動。
<!--more-->

## 專案特色

*   **WebUI**: 基於 Gradio 建構，支援 Browser-use 的大部分功能，提供使用者友善的介面。
*   **擴展的 LLM 支援**: 整合了多種大型語言模型 (LLM)，包括 Google、OpenAI、Azure OpenAI、Anthropic、DeepSeek、Ollama 等，並計劃未來支援更多模型。
*   **自訂瀏覽器支援**: 允許使用自己的瀏覽器，無需重新登入網站或處理其他身份驗證問題。此功能還支援高畫質螢幕錄影。
*   **持久性瀏覽器會話**: 可以選擇在 AI 任務之間保持瀏覽器視窗開啟，以便查看 AI 互動的完整歷史記錄和狀態。

## 安裝指南

有兩種安裝 Browser-use Web UI 的方法：本地安裝和 Docker 安裝。

### 選項 1: 本地安裝

請參閱 [快速入門指南](https://docs.browser-use.com/quickstart#prepare-the-environment) 或按照以下步驟進行。

#### 步驟 1: 克隆儲存庫

開啟終端機並執行以下命令：

```bash
git clone https://github.com/browser-use/web-ui.git
cd web-ui
```

#### 步驟 2: 設定 Python 環境

建議使用 [uv](https://docs.astral.sh/uv/) 來管理 Python 環境。

使用 uv (推薦):

```bash
uv venv --python 3.11
```

啟動虛擬環境：

*   Windows (命令提示字元):
    ```cmd
    .venv\Scripts\activate
    ```
*   Windows (PowerShell):
    ```powershell
    .\\.venv\\Scripts\\Activate.ps1
    ```
*   macOS/Linux:
    ```bash
    source .venv/bin/activate
    ```

#### 步驟 3: 安裝依賴項

安裝 Python 套件：

```bash
uv pip install -r requirements.txt
```

在 playwright 中安裝瀏覽器。

```bash
playwright install --with-deps
```

或者您可以執行以下命令安裝特定的瀏覽器：

```bash
playwright install chromium --with-deps
```

#### 步驟 4: 配置環境

1.  複製範例環境檔案：
    *   Windows (命令提示字元):
        ```bash
        copy .env.example .env
        ```
    *   macOS/Linux/Windows (PowerShell):
        ```bash
        cp .env.example .env
        ```
2.  使用您偏好的文字編輯器開啟 `.env` 檔案，並新增您的 API 金鑰和其他設定。

#### 步驟 5: 享受 web-ui

1.  **運行 WebUI**:
    ```bash
    python webui.py --ip 127.0.0.1 --port 7788
    ```
2.  **存取 WebUI**: 開啟您的網頁瀏覽器並導航至 `http://127.0.0.1:7788`。
3.  **使用您自己的瀏覽器 (可選)**:
    *   將 `BROWSER_PATH` 設定為您瀏覽器的可執行檔路徑，將 `BROWSER_USER_DATA` 設定為您瀏覽器的使用者資料目錄。如果您想使用本地使用者資料，請將 `BROWSER_USER_DATA` 留空。
        *   Windows
            ```env
             BROWSER_PATH="C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
             BROWSER_USER_DATA="C:\\Users\\YourUsername\\AppData\\Local\\Google\\Chrome\\User Data"
            ```
            > 注意: 在 Windows 系統上，將 `YourUsername` 替換為您的實際 Windows 使用者名稱。
        *   Mac
            ```env
             BROWSER_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
             BROWSER_USER_DATA="/Users/YourUsername/Library/Application Support/Google/Chrome"
            ```
    *   關閉所有 Chrome 視窗。
    *   在非 Chrome 瀏覽器 (例如 Firefox 或 Edge) 中開啟 WebUI。這很重要，因為持久性瀏覽器上下文將在運行代理時使用 Chrome 資料。
    *   在瀏覽器設定中勾選「使用自己的瀏覽器」選項。

### 選項 2: Docker 安裝

#### 先決條件

*   已安裝 Docker 和 Docker Compose
    *   [Docker Desktop](https://www.docker.com/products/docker-desktop/) (適用於 Windows/macOS)
    *   [Docker Engine](https://docs.docker.com/engine/install/) 和 [Docker Compose](https://docs.docker.com/compose/install/) (適用於 Linux)

#### 步驟 1: 克隆儲存庫

開啟終端機並執行以下命令：

```bash
git clone https://github.com/browser-use/web-ui.git
cd web-ui
```

#### 步驟 2: 配置環境

1.  複製範例環境檔案：
    *   Windows (命令提示字元):
        ```bash
        copy .env.example .env
        ```
    *   macOS/Linux/Windows (PowerShell):
        ```bash
        cp .env.example .env
        ```
2.  使用您偏好的文字編輯器開啟 `.env` 檔案，並新增您的 API 金鑰和其他設定。

#### 步驟 3: Docker 建置和運行

```bash
docker compose up --build
```

對於 ARM64 系統 (例如 Apple Silicon Macs)，請運行以下命令：

```bash
TARGETPLATFORM=linux/arm64 docker compose up --build
```

#### 步驟 4: 享受 web-ui 和 vnc

*   Web-UI: 在您的瀏覽器中開啟 `http://localhost:7788`
*   VNC Viewer (用於觀看瀏覽器互動): 開啟 `http://localhost:6080/vnc.html`
    *   預設 VNC 密碼: "youvncpassword"
    *   可以透過在 `.env` 檔案中設定 `VNC_PASSWORD` 來更改


## 影片教學演示
感謝 @richard-devbot。發布了全新且精心設計的 WebUI。[影片教學演示](https://github.com/browser-use/web-ui/issues/1)。
