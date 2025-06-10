+++
date = '2025-06-07T21:04:55+08:00'
draft = false
title = 'Python venv 用法詳解'
tags = ["Python", "venv", "虛擬環境"]
categories = ["Python"]
+++

## `venv` 是什麼？

`venv` 是 Python 標準庫中用於建立**輕量級虛擬環境**的模組。從 Python 3.3 版本開始，`venv` 就已經內建在 Python 中，無需額外安裝。

### 什麼是虛擬環境 (Virtual Environment)？

虛擬環境是一個獨立的目錄樹，其中包含 Python 安裝及其一系列額外的套件。它與系統全域的 Python 環境隔離。當你在虛擬環境中安裝套件時，這些套件只會安裝到該環境中，不會影響到全域或其他虛擬環境。

### 為什麼需要使用 `venv` (虛擬環境)？

在 Python 專案開發中，經常會遇到以下挑戰：

1.  **依賴衝突 (Dependency Conflicts):** 不同的專案可能依賴於同一個套件的不同版本。例如，專案 A 需要 `requests` 套件的 1.x 版本，而專案 B 需要 `requests` 套件的 2.x 版本。如果在全域環境中安裝，這兩個版本會互相覆蓋，導致其中一個專案無法正常運行。
2.  **環境污染 (Environment Pollution):** 隨著開發的專案越來越多，全域 Python 環境可能會安裝大量的套件，其中許多套件可能只被特定專案使用。這使得全域環境變得臃腫且難以管理。
3.  **專案隔離 (Project Isolation):** 虛擬環境為每個專案提供了一個乾淨、獨立的工作空間。你只需要在該環境中安裝專案所需的套件，避免了不必要的套件干擾。
4.  **專案可移植性 (Project Portability):** 透過記錄虛擬環境中安裝的套件及其版本（通常使用 `pip freeze > requirements.txt`），可以輕鬆地在其他機器或環境中精確地重建相同的專案依賴環境。這對於團隊協作和部署應用程式至關重要。

使用虛擬環境是 Python 開發的最佳實踐之一，它能有效解決依賴管理和環境隔離的問題。

## 如何使用 `venv`？

使用 `venv` 的基本流程包括建立環境、啟用環境、安裝套件、管理套件以及退出環境。

### 1. 建立虛擬環境

使用 `python -m venv` 命令來建立一個新的虛擬環境。

*   **基本語法：**

    ```bash
    python -m venv <環境路徑>
    ```

    *   `<環境路徑>`：指定虛擬環境要建立在哪個目錄下。這可以是一個相對路徑或絕對路徑。通常，習慣將虛擬環境建立在專案的根目錄下，並命名為 `.venv`、`env` 或 `venv`。例如，在專案目錄下執行 `python -m venv .venv` 會在當前目錄建立一個名為 `.venv` 的子目錄作為虛擬環境。

*   **指定 Python 版本：**

    `python -m venv` 命令會使用執行該命令的 `python` 解釋器來建立虛擬環境。如果你系統上安裝了多個 Python 版本（例如 Python 3.8 和 Python 3.9），並且希望使用特定版本來建立環境，你需要確保你使用的 `python` 命令指向的是你想要的版本。

    例如，如果你想使用 Python 3.8 建立環境：

    ```bash
    python3.8 -m venv <環境路徑>
    ```

    或者，如果你知道特定 Python 版本的完整路徑：

    ```bash
    /usr/local/bin/python3.8 -m venv <環境路徑>
    ```

    *   **重要：** 確保你使用的 `python` 命令（如 `python3.8`）在你的系統上是可用的，並且指向正確的 Python 版本。你可以透過執行 `python --version` 或 `python3.8 --version` 來檢查。

*   **常用選項：**

    *   `-h, --help`: 顯示幫助訊息並退出。
    *   `--system-site-packages`: 如果指定此選項，新建立的虛擬環境將能夠存取系統全域 Python 環境中的套件。預設情況下，虛擬環境是完全隔離的。
    *   `--clear`: 如果指定的環境目錄已經存在，則在建立前先清空該目錄。
    *   `--without-pip`: 建立一個沒有安裝 `pip` 的虛擬環境。這在某些特殊情況下可能有用，但通常不建議使用。
    *   `--upgrade-deps`: 升級虛擬環境中的核心依賴（如 `pip`, `setuptools`, `wheel`）到最新版本。

    例如，建立一個可以存取系統套件的環境：

    ```bash
    python -m venv --system-site-packages .venv
    ```

### 2. 啟用虛擬環境

啟用虛擬環境是為了讓你的終端會話使用該環境中的 Python 解釋器和套件。啟用後，命令列提示符通常會顯示環境名稱。

*   **Windows (命令提示字元 `cmd.exe`):**

    ```bash
    <環境路徑>\Scripts\activate.bat
    ```

*   **Windows (PowerShell):**

    ```powershell
    <環境路徑>\Scripts\Activate.ps1
    ```

*   **Linux/macOS (Bash 或 Zsh):**

    ```bash
    source <環境路徑>/bin/activate
    ```

    或者使用點號 (`.`) 作為 `source` 的縮寫：

    ```bash
    . <環境路徑>/bin/activate
    ```

啟用成功後，你的終端提示符前面會顯示虛擬環境的名稱，例如 `(.venv) your_username@your_machine:~$`。

### 3. 安裝套件

啟用虛擬環境後，使用 `pip` 命令安裝的套件將會被安裝到當前虛擬環境的 `site-packages` 目錄中。

```bash
pip install <套件名>
```

你可以一次安裝多個套件：

```bash
pip install requests numpy pandas
```

指定套件版本：

```bash
pip install requests==2.28.1
```

### 4. 列出已安裝的套件

使用 `pip freeze` 命令可以列出當前虛擬環境中安裝的所有套件及其精確的版本號。

```bash
pip freeze
```

這個命令的輸出格式非常適合用於建立 `requirements.txt` 檔案，以便記錄專案的依賴。

### 5. 儲存和載入專案依賴 (`requirements.txt`)

為了方便在不同環境或機器上重建相同的專案依賴，通常會將 `pip freeze` 的輸出儲存到一個名為 `requirements.txt` 的檔案中。

*   **儲存依賴：**

    ```bash
    pip freeze > requirements.txt
    ```

    這會在當前目錄下建立或覆蓋 `requirements.txt` 檔案，其中包含了環境中所有套件及其版本資訊。

*   **從 `requirements.txt` 安裝依賴：**

    在新的虛擬環境中，或者在另一台機器上，你可以使用以下命令根據 `requirements.txt` 檔案安裝所有列出的套件：

    ```bash
    pip install -r requirements.txt
    ```

    這會自動下載並安裝檔案中指定的所有套件及其版本。

### 6. 退出虛擬環境

當你完成在虛擬環境中的工作後，可以使用 `deactivate` 命令退出環境，回到系統全域的 Python 環境。

```bash
deactivate
```

退出後，命令列提示符會恢復到啟用前的狀態。

### 7. 刪除虛擬環境

刪除虛擬環境非常簡單，只需刪除建立環境時指定的目錄即可。

*   **Linux/macOS:**

    ```bash
    rm -rf <環境路徑>
    ```

*   **Windows (命令提示字元 `cmd.exe`):**

    ```bash
    rmdir /s /q <環境路徑>
    ```

*   **Windows (PowerShell):**

    ```powershell
    Remove-Item -Recurse -Force <環境路徑>
    ```

    請注意，在刪除虛擬環境之前，請確保你已經退出了該環境（使用 `deactivate` 命令）。

## 完整範例

假設你在一個名為 `my_project` 的目錄中工作，並希望使用系統預設的 Python 3 版本建立一個名為 `.venv` 的虛擬環境，然後安裝 `requests` 和 `beautifulsoup4` 套件。

```bash
# 進入專案目錄
cd my_project

# 1. 建立虛擬環境 (使用系統預設的 python3)
python3 -m venv .venv

# 2. 啟用虛擬環境 (以 Linux/macOS 為例)
source .venv/bin/activate

# 啟用後，提示符應顯示 (.venv)

# 3. 安裝專案所需的套件
pip install requests beautifulsoup4

# 4. 列出已安裝的套件並儲存到 requirements.txt
pip freeze > requirements.txt

# 查看 requirements.txt 的內容
# cat requirements.txt # Linux/macOS
# type requirements.txt # Windows

# 5. (假設你在另一個終端或機器上) 建立一個新的環境並從 requirements.txt 安裝
#    cd my_project
#    python3 -m venv new_env
#    source new_env/bin/activate # 或 Windows 對應的啟用命令
#    pip install -r requirements.txt
#    deactivate # 退出 new_env

# 6. 退出當前虛擬環境 (.venv)
deactivate

# 7. (如果你不再需要 .venv 環境) 刪除環境目錄
#    rm -rf .venv # Linux/macOS
#    rmdir /s /q .venv # Windows cmd.exe
```

## 總結

`venv` 模組提供了一個簡單有效的方式來管理 Python 專案的依賴。透過為每個專案建立獨立的虛擬環境，可以避免套件衝突，保持環境整潔，並提高專案的可移植性。掌握 `venv` 的使用是每個 Python 開發者的基本技能。
