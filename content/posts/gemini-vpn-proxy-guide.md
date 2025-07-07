---
title: "Gemini VPN 代理伺服器使用指南"
date: 2025-07-07T14:00:00+08:00
draft: false
categories: ["教學"]
tags: ["VPN", "代理", "Gemini API", "開發"]
---

## 什麼是 Gemini VPN 代理伺服器？

Gemini VPN 代理伺服器是一個簡單的 Node.js 代理伺服器，專為 Google Generative Language API (Gemini API) 設計。它允許您將對 Gemini API 的請求透過本地代理伺服器進行路由。這對於多種目的都非常有用，例如：

*   **偵錯與日誌記錄：** 您可以輕鬆地攔截和檢查所有進出 Gemini API 的請求和回應，這對於開發和偵錯應用程式非常有幫助。
*   **繞過網路限制：** 在某些網路環境下，直接存取 Gemini API 可能會受到限制。透過本地代理，您可以繞過這些限制，確保您的應用程式能夠順利與 API 通信。
*   **安全與隱私：** 雖然此代理伺服器主要用於開發目的，但它也可以在某些情況下提供額外的控制層，例如在內部網路中統一管理 API 流量。

## 為什麼需要使用它？

當您在開發使用 Gemini API 的應用程式時，可能會遇到以下情境：

1.  **需要詳細了解 API 請求和回應的內容：** 透過代理伺服器，您可以輕鬆地在本地環境中查看所有 API 流量，這比直接在程式碼中加入日誌輸出更為方便和全面。
2.  **開發環境的網路限制：** 有些公司或學校網路可能會限制對特定外部服務的存取。使用本地代理可以讓您的開發環境繞過這些限制。
3.  **測試不同的 API 端點：** 如果您需要測試不同版本的 Gemini API 或自訂的 API 端點，透過配置代理伺服器可以輕鬆切換目標 URL。

## 如何使用 Gemini VPN 代理伺服器？

Gemini VPN 代理伺服器提供了多種部署和使用方式，其中最推薦的是使用 Docker。

### 1. 使用 Docker (推薦)

Docker 提供了一個輕量級且獨立的環境來運行代理伺服器，避免了環境配置的複雜性。

**拉取預建的 Docker 映像：**

如果您已經安裝了 Docker，可以直接從 Docker Hub 拉取預建的映像：

```bash
docker pull spectrpro/gemini-vpn
```

**運行代理伺服器：**

拉取映像後，您可以運行代理伺服器。預設情況下，它將在 `34562` 埠上監聽。

```bash
docker run -d -p 34562:34562 --name gemini-vpn spectrpro/gemini-vpn
```

這將在後台運行一個名為 `gemini-vpn` 的容器，並將容器的 `34562` 埠映射到您主機的 `34562` 埠。代理伺服器將在 `http://localhost:34562` 上可訪問。

**使用 Claw Cloud 運行：**

您也可以利用 [Claw Cloud](https://console.run.claw.cloud/signin?link=RGXA3AIOBR4S) 這樣的平台來部署和運行 Docker 容器，這對於不熟悉 Docker 命令列的用戶來說更為方便。具體設定請參考 [Gemini VPN GitHub 專案中的 Claw Cloud 設定指南](https://github.com/spectre-pro/gemini-vpn?tab=readme-ov-file#claw-cloud-setting)。

### 2. 使用 Docker 建置和運行 (如果您想自訂映像)

如果您需要對代理伺服器進行修改或自訂，可以自己建置 Docker 映像。

1.  **克隆儲存庫：**
    ```bash
    git clone https://github.com/spectre-pro/gemini-vpn.git
    cd gemini-vpn
    ```
2.  **建置 Docker 映像：**
    ```bash
    docker build -t spectrpro/gemini-vpn .
    ```
3.  **運行 Docker 容器：**
    ```bash
    docker run -d -p 34562:34562 --name gemini-vpn spectrpro/gemini-vpn
    ```

### 3. 本地運行 (Node.js)

如果您已經有 Node.js 環境，也可以直接在本地運行代理伺服器。

1.  **克隆儲存庫：**
    ```bash
    git clone https://github.com/spectre-pro/gemini-vpn.git
    cd gemini-vpn
    ```
2.  **安裝依賴項：**
    ```bash
    npm install
    ```
3.  **啟動伺服器：**
    ```bash
    node src/main.js
    ```
    伺服器將預設在 `http://localhost:34562` 上運行。

### 配置選項

代理伺服器可以使用環境變數進行配置：

*   `PORT`: 代理伺服器將監聽的埠號。預設為 `34562`。
    *   範例：`PORT=8080 node src/main.js`
*   `TARGET_API_URL`: 目標 API 的基本 URL。預設為 `https://generativelanguage.googleapis.com`。
    *   範例：`TARGET_API_URL=https://api.example.com node src/main.js`

### 使用範例

代理伺服器運行後，您只需將您的 Gemini API 請求的目標 URL 從 `https://generativelanguage.googleapis.com` 更改為您的代理伺服器地址 (例如 `http://localhost:34562`)。

**原始請求範例：**

```
POST https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent
Content-Type: application/json
{
  "contents": [
    {
      "parts": [
        {"text": "Hello, Gemini!"}
      ]
    }
  ]
}
```

**透過代理伺服器的請求範例：**

```
POST http://localhost:34562/v1beta/models/gemini-pro:generateContent
Content-Type: application/json
{
  "contents": [
    {
      "parts": [
        {"text": "Hello, Gemini!"}
      ]
    }
  ]
}
```

代理伺服器會自動將此請求轉發到 `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent` 並將回應返回給您。

希望這篇指南能幫助您更好地理解和使用 Gemini VPN 代理伺服器！
