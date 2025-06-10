+++
date = '2025-06-07T21:04:55+08:00'
draft = false
title = 'Python venv 用法'
+++

## `venv` 是什麼。

`venv` 是 Python 標準庫中用於建立**虛擬環境**的模組。

### 什麼是虛擬環境 (Virtual Environment)？

簡單來說，虛擬環境就是一個獨立的 Python 環境，它擁有自己的 Python 解釋器、庫和腳本目錄。

### 為什麼需要使用 `venv` (虛擬環境)？

在 Python 開發中，不同的專案可能需要不同版本的庫，或者同一個庫的不同版本。如果沒有虛擬環境，所有專案都共享全域的 Python 環境。這可能導致以下問題：

1.  **依賴衝突:** 專案 A 需要庫 X 的 1.0 版本，而專案 B 需要庫 X 的 2.0 版本。如果在全域環境中安裝，就會產生衝突。
2.  **環境混亂:** 隨著專案的增多，全域環境會安裝大量庫，管理起來非常困難。
3.  **專案移植性:** 將專案遷移到另一台機器時，很難準確地知道需要哪些庫以及它們的版本。

使用虛擬環境可以解決這些問題：

*   每個虛擬環境都是獨立的，專案 A 和專案 B 可以在各自的環境中安裝所需版本的庫，互不影響。
*   你可以為每個專案建立一個乾淨的環境，只安裝該專案需要的庫。
*   透過記錄虛擬環境中安裝的庫（通常使用 `pip freeze > requirements.txt`），可以輕鬆地在其他地方重建相同的環境。

## 如何使用 `venv`？


### 1. 建立虛擬環境

   *   **基本語法：**

       ```bash
       python3 -m venv <環境名>
       ```

       *   `<環境名>`：是你為虛擬環境起的名稱（通常放在專案資料夾內，例如 `.venv`、`env` 或 `my_project_env`）。
       *   這條命令會在目前目錄下建立一個名為 `<環境名>` 的資料夾，其中包含虛擬環境。

   *   **指定 Python 版本（關鍵）：**

       如果你系統上安裝了多個 Python 版本（例如 Python 3.8 和 Python 3.9），你需要使用特定版本的 `python` 命令來建立環境。 假設你要用 Python 3.8 建立環境：

       ```bash
       python3.8 -m venv <環境名> 
       ```

       *   **重要：**
           *   確保 `python3.8` 命令在你的系統上可用（你可以透過在終端中運行 `python3.8 --version` 來檢查）。如果不可用，你需要先安裝 Python 3.8，或者找到它的正確路徑。
           *   如果你只安裝了一個 Python 3 版本，通常直接使用 `python3` 命令即可。

### 2. 啟用虛擬環境

   啟用環境後，你後續的 `pip install` 命令安裝的套件都會被安裝到這個虛擬環境中。

   *   **Windows (cmd.exe):**

       ```bash
       <環境名>\Scripts\activate.bat
       ```

   *   **Windows (PowerShell):**

       ```powershell
       <環境名>\Scripts\Activate.ps1
       ```

   *   **Linux/macOS (bash/zsh):**

       ```bash
       source <環境名>/bin/activate
       ```

   啟用後，你的命令列提示符通常會發生變化，顯示目前啟用的環境名稱。

### 3. 安裝套件

   ```bash
   pip install <套件名>
   ```

   例如：

   ```bash
   pip install requests
   pip install numpy pandas
   ```

### 4. 列出已安裝的套件

   ```bash
   pip freeze
   ```

   這個命令會列出目前環境中安裝的所有套件及其版本號。通常，你會將輸出重定向到一個 `requirements.txt` 檔案中：

   ```bash
   pip freeze > requirements.txt
   ```

   這樣做的好處是，以後你可以在新的虛擬環境中，或者在另一台機器上，使用 `requirements.txt` 檔案快速重新建立相同的環境。

### 5. 從 `requirements.txt` 安裝套件

   ```bash
   pip install -r requirements.txt
   ```

### 6. 退出虛擬環境

   ```bash
   deactivate
   ```

   運行 `deactivate` 命令會退出目前啟用的虛擬環境，回到系統全域 Python 環境。

### 7. 刪除虛擬環境

   只需刪除虛擬環境資料夾即可：

   ```bash
   # Linux/macOS
   rm -rf <環境名>

   # Windows (cmd.exe)
   rmdir /s /q <環境名>

   # Windows (PowerShell)
   Remove-Item -Recurse -Force <環境名>
   ```

## 完整範例（假設你想使用 Python 3.8 建立一個名為 `.venv` 的環境）：

```bash
# 1. 建立環境 (使用 Python 3.8)
python3.8 -m venv .venv

# 2. 啟用環境 (Linux/macOS 範例)
source .venv/bin/activate

# 3. 安裝一些套件
pip install requests numpy

# 4. 列出已安裝的套件並儲存到 requirements.txt
pip freeze > requirements.txt

# 5. (稍後，在另一個環境或機器上) 從 requirements.txt 安裝
#    (先建立並啟用一個新環境，然後...)
#    pip install -r requirements.txt

# 6. 退出環境
deactivate

# 7. (以後，如果你不再需要這個環境) 刪除環境
#    rm -rf .venv  (Linux/macOS)
#    rmdir /s /q .venv (Windows cmd.exe)
```

## 關鍵點回顧：

*   使用 `python3 -m venv <環境名>` 建立環境。
*   使用特定版本的 `python` 命令（例如 `python3.8 -m venv`）來指定 Python 版本。
*   使用 `source <環境名>/bin/activate` (Linux/macOS) 或 `<環境名>\Scripts\activate.bat` (Windows) 啟用環境。
*   使用 `pip install` 安裝套件。
*   使用 `pip freeze > requirements.txt` 儲存套件列表。
*   使用 `pip install -r requirements.txt` 從列表安裝套件。
*   使用 `deactivate` 退出環境。
*   直接刪除環境資料夾來刪除環境。

只要你確保使用了正確版本的 `python` 命令來建立 `venv` 環境，就可以精確控制使用的 Python 版本。
