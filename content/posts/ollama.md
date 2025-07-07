---
title: "在本地運行大型語言模型：Ollama 指南"
date: 2025-07-07
draft: false
categories: ["AI", "LLM", "本地部署"]
tags: ["Ollama", "大型語言模型", "本地AI", "開源"]
---

## 為什麼您需要使用 Ollama？

在當今快速發展的 AI 世界中，大型語言模型 (LLM) 已成為我們日常工作和生活中不可或缺的一部分。然而，許多強大的 LLM 服務通常需要雲端連結或訂閱。Ollama 提供了一個卓越的解決方案，讓您可以在**本地電腦上運行大型語言模型**！

使用 Ollama 的主要優勢包括：

*   **隱私與安全性**：您的數據和對話完全保留在本地，無需擔心敏感資訊上傳到第三方伺服器。
*   **離線使用**：一旦模型下載完成，即使沒有網路連接，您也可以繼續使用 LLM。
*   **成本效益**：無需支付基於使用量的 API 費用，長期而言可以節省大量成本。
*   **客製化與實驗**：Ollama 讓您可以輕鬆地嘗試不同的模型，甚至可以根據自己的需求客製化模型行為。
*   **開發便利**：提供簡單易用的 CLI 和 REST API，方便開發者將 LLM 整合到自己的應用程式中。
*   **硬體利用**：充分利用您的本地 GPU 資源，提供更快的推理速度。

Ollama 讓 AI 的強大功能觸手可及，不再受限於雲端服務的限制。

## 如何使用 Ollama？

Ollama 的安裝和使用都非常簡潔。以下是開始使用的基本步驟：

### 1. 安裝 Ollama

Ollama 支援多種作業系統，您可以根據您的系統選擇合適的安裝方式：

*   **macOS**：
    [下載 Ollama for macOS](https://ollama.com/download/Ollama-darwin.zip)
*   **Windows**：
    [下載 Ollama for Windows](https://ollama.com/download/OllamaSetup.exe)
*   **Linux**：
    在終端機中執行以下命令：
    ```shell
    curl -fsSL https://ollama.com/install.sh | sh
    ```
    您也可以參考[手動安裝指南](https://github.com/ollama/ollama/blob/main/docs/linux.md)。
*   **Docker**：
    Ollama 官方提供了 Docker 鏡像 `ollama/ollama`，您可以在 Docker Hub 上找到：
    [Ollama Docker 鏡像](https://hub.docker.com/r/ollama/ollama)

### 2. 快速開始：運行您的第一個模型

安裝完成後，您就可以立即運行並與大型語言模型互動。例如，要運行並與 Gemma 3 模型聊天：

```shell
ollama run gemma3
```

Ollama 會自動下載 Gemma 3 模型（如果尚未下載），然後您就可以在終端機中開始與它對話。

### 3. 模型庫探索

Ollama 支援許多流行的開源模型，您可以在 [ollama.com/library](https://ollama.com/library) 找到完整的模型列表。一些常見的模型包括：

| 模型名稱         | 參數     | 大小    | 下載指令                |
| :--------------- | :------- | :------ | :---------------------- |
| Gemma 3          | 4B       | 3.3GB   | `ollama run gemma3`     |
| Llama 3.3        | 70B      | 43GB    | `ollama run llama3.3`   |
| Mistral          | 7B       | 4.1GB   | `ollama run mistral`    |
| Code Llama       | 7B       | 3.8GB   | `ollama run codellama`  |
| LLaVA            | 7B       | 4.5GB   | `ollama run llava`      |

**注意事項**：運行大型模型需要足夠的記憶體。建議至少有 8 GB RAM 以運行 7B 模型，16 GB 以運行 13B 模型，以及 32 GB 以運行 33B 模型。

### 4. 客製化模型

Ollama 允許您透過 `Modelfile` 文件來客製化現有模型，例如設定系統指令或修改參數。

1.  **下載基礎模型**：
    ```shell
    ollama pull llama3.2
    ```
2.  **創建 `Modelfile`**：
    創建一個名為 `Modelfile` 的文件，內容如下：
    ```
    FROM llama3.2

    # 設定 temperature，數值越高越有創意，越低則越連貫
    PARAMETER temperature 1

    # 設定系統訊息
    SYSTEM """
    你現在是超級瑪利歐兄弟中的瑪利歐。請僅以瑪利歐的身份回答問題。
    """
    ```
3.  **創建並運行客製化模型**：
    ```shell
    ollama create mario -f ./Modelfile
    ollama run mario
    >>> hi
    Hello! It's your friend Mario.
    ```
    更多關於 `Modelfile` 的資訊，請參考 [Modelfile 文檔](docs/modelfile.md)。

## 結語

Ollama 為個人用戶和開發者提供了一個簡單、強大且注重隱私的平台，讓您能夠在本地運行和管理大型語言模型。無論是進行個人實驗、開發智慧型應用程式，還是只是想享受在本地環境中與 AI 互動的樂趣，Ollama 都是一個值得嘗試的絕佳工具。立即下載並開始您的本地 AI 之旅吧！