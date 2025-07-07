---
title: "Open WebUI：您的個人化離線 AI 助手 — 深入解析與安裝指南"
date: 2024-07-29 10:00:00
draft: false
categories: ["AI", "大語言模型", "開源"]
tags: ["OpenWebUI", "Ollama", "AI", "自主託管", "RAG", "Docker"]
---

## 什麼是 Open WebUI？

在快速發展的 AI 領域中，Open WebUI 作為一個強大且用戶友好的開源平台脫穎而出。它是一個可擴展、功能豐富的自託管 AI 平台，專為完全離線操作而設計。無論您是開發者、研究人員，還是僅僅想在本地運行大型語言模型 (LLM) 的愛好者，Open WebUI 都提供了無與倫比的彈性和控制。它不僅支援 Ollama 和 OpenAI 相容的 API，更內建了 RAG (檢索增強生成) 推理引擎，使其成為一個功能全面的 AI 部署解決方案。

## 為什麼您需要使用 Open WebUI？

Open WebUI 的設計理念是讓 AI 技術觸手可及，同時賦予用戶完全的控制權。以下是您應該考慮使用 Open WebUI 的幾個關鍵原因：

*   **本地化與隱私至上**：它設計為完全離線運行，確保您的數據和對話保持私密，不會離開您的本地環境。這對於處理敏感信息或追求極致隱私的用戶來說至關重要。
*   **多樣化模型支援**：Open WebUI 不僅原生支援 Ollama，還能無縫整合任何相容 OpenAI API 的服務，包括 LMStudio、GroqCloud、Mistral、OpenRouter 等。這意味著您可以輕鬆地切換和利用多種大型語言模型。
*   **強大的 RAG 能力**：內建的檢索增強生成 (RAG) 功能是其核心亮點之一。您可以將本地文件直接載入對話中，或將文件添加到文件庫，透過簡單的 `#` 命令即可在查詢中引用，極大地豐富了 AI 的知識來源。它甚至支援網路搜尋，將搜尋結果直接注入您的對話中。
*   **友好的用戶體驗**：憑藉其響應式設計和對漸進式網路應用程式 (PWA) 的支援，Open WebUI 在桌面、筆記本電腦和行動裝置上都能提供流暢的原生應用程式體驗。
*   **豐富的互動功能**：支援完整的 Markdown 和 LaTeX 語法，讓您的對話更加豐富。更有免手持語音/視訊通話功能，進一步增強互動性。
*   **模型建構器與客製化**：透過網頁介面輕鬆建立 Ollama 模型、自定義角色/代理，並從 Open WebUI 社區導入模型，實現高度個性化的 AI 體驗。
*   **原生 Python 函數調用**：您可以輕鬆地將自己的純 Python 函數（BYOF, Bring Your Own Function）集成到 LLM 中，擴展模型的功能。
*   **圖像生成整合**：與 AUTOMATIC1111 API、ComfyUI (本地) 和 OpenAI DALL-E (外部) 等圖像生成工具無縫整合，為您的對話增添視覺元素。
*   **強大的擴展性**：支援 Pipelines 和 Open WebUI 插件框架，允許您集成自定義邏輯和 Python 庫，實現如速率限制、使用監控、即時翻譯和有害訊息過濾等高級功能。
*   **安全與權限管理**：提供基於角色的訪問控制 (RBAC) 和細粒度的權限管理，確保只有授權用戶才能訪問 Ollama，且模型創建/拉取權限僅限管理員。
*   **持續更新與社群支持**：開發團隊致力於不斷改進 Open WebUI，定期提供更新、錯誤修復和新功能。同時，活躍的 Discord 社群隨時提供幫助和討論。

## 如何開始使用 Open WebUI？

Open WebUI 提供了多種簡單的安裝方式，讓您可以快速部署。

### 1. 透過 Python pip 安裝

如果您偏好使用 Python 環境，可以透過 `pip` 輕鬆安裝 Open WebUI。
**請注意：** 建議使用 **Python 3.11** 以避免相容性問題。

1.  **安裝 Open WebUI**：打開您的終端機，執行以下命令：

    ```bash
    pip install open-webui
    ```

2.  **運行 Open WebUI**：安裝完成後，執行以下命令啟動 Open WebUI 伺服器：

    ```bash
    open-webui serve
    ```

    您將可以在瀏覽器中訪問 `http://localhost:8080` 來使用 Open WebUI。

### 2. 使用 Docker 快速啟動 (推薦)

Docker 是最推薦的安裝方式，它提供了便捷、隔離的部署環境。
**重要提示：** 為確保資料不丟失，請在 Docker 命令中包含 `-v open-webui:/app/backend/data` 以正確掛載您的資料庫。

#### Ollama 在您的本地電腦上

如果 Ollama 已在您的電腦上運行，Open WebUI 可以透過 `host.docker.internal` 連接到它。

```bash
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

#### Ollama 在不同的伺服器上

若 Ollama 位於另一台伺服器，您需要透過 `OLLAMA_BASE_URL` 指定其 URL：

```bash
docker run -d -p 3000:8080 -e OLLAMA_BASE_URL=https://example.com -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

#### 運行 Open WebUI 並啟用 Nvidia GPU 支援

如果您有 Nvidia GPU，可以使用 `:cuda` 標籤的映像檔並啟用 GPU 支援：

```bash
docker run -d -p 3000:8080 --gpus all --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:cuda
```

#### 僅為 OpenAI API 使用而安裝

如果您只打算使用 OpenAI 相容的 API，則無需 Ollama：

```bash
docker run -d -p 3000:8080 -e OPENAI_API_KEY=your_secret_key -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

#### 安裝 Open WebUI 並內建 Ollama 支援 (單一容器)

這種方法將 Open WebUI 和 Ollama 打包到一個單一容器中，設置更為簡約：

*   **帶 GPU 支援**：

    ```bash
    docker run -d -p 3000:8080 --gpus=all -v ollama:/root/.ollama -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:ollama
    ```

*   **僅 CPU**：

    ```bash
    docker run -d -p 3000:8080 -v ollama:/root/.ollama -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:ollama
    ```

無論哪種 Docker 安裝方式，安裝完成後，您通常可以透過 `http://localhost:3000` 訪問 Open WebUI。

#### 故障排除：伺服器連線錯誤

如果您遇到連線問題（特別是當 WebUI Docker 容器無法到達 Ollama 伺服器時），可以嘗試使用 `--network=host` 標誌。請注意，這會將端口從 `3000` 更改為 `8080`：

```bash
docker run -d --network=host -v open-webui:/app/backend/data -e OLLAMA_BASE_URL=http://127.0.0.1:11434 --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

#### 保持 Docker 安裝更新

要將您的 Docker 安裝更新到最新版本，您可以使用 [Watchtower](https://containrrr.dev/watchtower/)：

```bash
docker run --rm --volume /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --run-once open-webui
```

### 3. 其他安裝方法

Open WebUI 也支援 Docker Compose、Kustomize 和 Helm 等多種安裝選項。您可以查閱 [Open WebUI 官方文檔](https://docs.openwebui.com/getting-started/) 或加入他們的 [Discord 社群](https://discord.gg/5rJgQTnV4s) 獲取更詳細的指導。

### 離線模式

如果您在離線環境中運行 Open WebUI，可以將 `HF_HUB_OFFLINE` 環境變數設置為 `1`，以防止程式嘗試從網路下載模型：

```bash
export HF_HUB_OFFLINE=1
```

## 結語

Open WebUI 提供了一個全面、靈活且強大的平台，讓您能夠在本地端充分利用大型語言模型的潛力。無論是為了隱私、客製化，還是為了探索 RAG 和其他先進功能，Open WebUI 都是一個非常值得嘗試的解決方案。立即選擇您偏好的安裝方式，開始您的 AI 探索之旅吧！