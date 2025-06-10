+++
date = '2025-06-08T00:00:00+08:00'
draft = false
title = 'pyenv 與 pyenv-win 全面教學'
tags = ["pyenv", "pyenv-win", "Python", "版本管理", "虛擬環境"]
categories = ["Python"]
+++

[pyenv](https://github.com/pyenv/pyenv) 是一個強大的 Python 版本管理工具，主要用於 Linux 和 macOS 系統。對於 Windows 使用者，推薦使用 [pyenv-win](https://github.com/pyenv-win/pyenv-win) 專案，它是 pyenv 在 Windows 上的移植版本。本教學將涵蓋這兩個工具的安裝、設定與基本使用。

---

## pyenv/pyenv-win 簡介

*   **作用**：讓你輕鬆安裝、管理並切換多個 Python 版本，而不會影響系統預設的 Python 環境。
*   **優點**：
    *   **版本隔離**：在使用者層級管理 Python 版本，避免與系統 Python 衝突。
    *   **專案獨立**：可以為不同專案設定獨立的 Python 版本。
    *   **易於切換**：透過簡單的指令即可快速切換 Python 版本。
*   **pyenv vs pyenv-win**：
    *   `pyenv`：原生支援 Linux、macOS 和其他類 Unix 系統。
    *   `pyenv-win`：專為 Windows 設計，安裝原生 Windows Python 版本。

---

## 安裝 pyenv (Linux/macOS)

在安裝 pyenv 之前，請確保你的系統已安裝必要的建置依賴項。具體依賴項列表請參考 [pyenv 官方文件](https://github.com/pyenv/pyenv/wiki#suggested-build-environment)。

#### 方法一：使用自動安裝程式 (推薦)

這個安裝程式會自動將 pyenv 及其常用外掛 (如 `pyenv-build`, `pyenv-virtualenv`, `pyenv-update`) 安裝到 `$HOME/.pyenv` 目錄。

```bash
curl -fsSL https://pyenv.run | bash
```

#### 方法二：使用 Homebrew (macOS)

如果你使用 Homebrew，這是安裝 pyenv 的便捷方式。

1.  更新 Homebrew 並安裝 pyenv：
    ```sh
    brew update
    brew install pyenv
    ```
2.  如果你想安裝 pyenv 的最新開發版本：
    ```sh
    brew install pyenv --head
    ```

#### 方法三：手動 GitHub Checkout

這種方法讓你更容易追蹤最新版本或貢獻程式碼。

1.  將 pyenv 儲存庫複製到你想要安裝的位置 (建議 `$HOME/.pyenv`)：
    ```bash
    git clone https://github.com/pyenv/pyenv.git ~/.pyenv
    ```
2.  (可選) 編譯 Bash 擴充功能以加速 pyenv (如果失敗不影響 pyenv 正常運作)：
    ```bash
    cd ~/.pyenv && src/configure && make -C src
    ```

---

## 安裝 pyenv-win (Windows)

pyenv-win 專為 Windows 設計，提供多種安裝方式。

#### 方法一：使用 PowerShell 安裝 (推薦)

這個方法會自動下載並安裝最新版本的 pyenv-win 到 `C:\Users\<YourUser>\.pyenv\pyenv-win`。

1.  **以管理員身份開啟 PowerShell**。
2.  執行以下命令：
    ```powershell
    Invoke-WebRequest -UseBasicParsing -Uri "https://raw.githubusercontent.com/pyenv-win/pyenv-win/master/pyenv-win/install-pyenv-win.ps1" -OutFile "./install-pyenv-win.ps1"; &"./install-pyenv-win.ps1"
    ```

#### 方法二：手動 Git 安裝

1.  開啟 PowerShell 或 CMD，執行：
    ```powershell
    git clone https://github.com/pyenv-win/pyenv-win.git $HOME\.pyenv\pyenv-win
    ```
2.  **配置環境變數** (參見下一節)。

#### 方法三：使用 pip 安裝 (適用於已有 Python 環境的使用者)

如果你已經安裝了 Python 並有 pip，可以使用 pip 安裝 pyenv-win。

```powershell
pip install pyenv-win --target $HOME\.pyenv\pyenv-win
```
安裝完成後，你可能需要手動配置環境變數。

#### 方法四：使用 Chocolatey

如果你使用 Chocolatey 套件管理器：

```powershell
choco install pyenv-win
```

---

## 配置環境變數

正確配置環境變數是 pyenv/pyenv-win 正常運作的關鍵。

### macOS/Linux/WSL (pyenv)

將以下內容加入你的 Shell 設定檔 (例如 `~/.bashrc`, `~/.zshrc`, `~/.profile`)。建議將這些行放在檔案的末尾。

```bash
export PYENV_ROOT="$HOME/.pyenv"
command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv init -)"
# 如果安裝了 pyenv-virtualenv 外掛，還需加上：
eval "$(pyenv virtualenv-init -)"
```

儲存檔案後，執行 `source ~/.bashrc` (或對應的設定檔) 或重啟終端機，使變更生效。

### Windows (pyenv-win)

你需要手動添加或修改系統環境變數。

1.  開啟「系統環境變數」設定 (搜尋「編輯系統環境變數」)。
2.  在「使用者變數」或「系統變數」中：
    *   新增一個變數，名稱為 `PYENV`，值為 pyenv-win 的安裝路徑 (預設為 `C:\Users\<YourUser>\.pyenv\pyenv-win`)。
    *   編輯 `Path` 變數，**添加**以下兩條路徑：
        *   `%PYENV%\bin`
        *   `%PYENV%\shims`
    *   確保這兩條路徑在 Path 列表中的優先順序較高。
3.  **重要**：如果你是 Windows 10 1905 或更新版本，並且遇到 `pyenv: command not found` 的問題，可能需要禁用內建的 Python 啟動器。前往「應用程式執行別名」(App Execution Aliases)，關閉 Python 的「App Installer」別名。
4.  重啟 PowerShell 或 CMD，或重啟你的 IDE 內建終端機，使環境變數生效。

#### 驗證安裝

開啟新的終端機視窗，執行以下命令：

```sh
pyenv --version
```

如果顯示 pyenv 或 pyenv-win 的版本號，則表示安裝成功。

---

## 安裝 Python 版本

pyenv/pyenv-win 透過 `pyenv install` 命令來安裝不同版本的 Python。

### macOS/Linux/WSL (pyenv)

*   列出所有可安裝的 Python 版本：
    ```bash
    pyenv install --list
    ```
*   安裝指定版本的 Python (例如 3.11.8)：
    ```bash
    pyenv install 3.11.8
    ```
    安裝過程可能需要編譯，請確保已安裝必要的建置依賴項。

### Windows (pyenv-win)

*   列出所有可安裝的 Python 版本：
    ```powershell
    pyenv install --list
    ```
*   安裝指定版本的 Python (例如 3.12.3)：
    ```powershell
    pyenv install 3.12.3
    ```
    部分版本的安裝可能會彈出安裝精靈，請按照提示完成安裝。你也可以使用 `-q` 參數進行靜默安裝 (如果支援)。

---

## 切換 Python 版本

pyenv/pyenv-win 提供了三種方式來切換 Python 版本：`global`, `local`, 和 `shell`。

### 全域切換 (`pyenv global`)

設定全域 Python 版本，這是你使用者帳戶的預設版本。

```sh
pyenv global <版本號>
```

例如：`pyenv global 3.12.3`

### 本地切換 (`pyenv local`)

在當前目錄及其子目錄中設定 Python 版本。這會在當前目錄下建立一個 `.python-version` 檔案。

```sh
pyenv local <版本號>
```

例如：`pyenv local 3.8.18`

### Shell 切換 (`pyenv shell`)

僅在當前 Shell 會話中設定 Python 版本。當前 Shell 關閉後，設定會失效。

```sh
pyenv shell <版本號>
```

例如：`pyenv shell 3.9.7`

### 同時使用多個版本

你可以指定多個版本，pyenv 會按照指定的順序尋找可執行的命令。

```sh
pyenv global <版本號1> <版本號2> ...
```

例如：`pyenv global 3.12.3 3.11.8 system` (優先使用 3.12.3，找不到則用 3.11.8，最後使用系統 Python)

### 查看當前使用的 Python 版本

```sh
pyenv version
```

### 查看所有已安裝的 Python 版本

```sh
pyenv versions
```

---

## 卸載 Python 版本

使用 `pyenv uninstall` 命令來移除已安裝的 Python 版本。

```sh
pyenv uninstall <版本號>
```

例如：`pyenv uninstall 3.8.18`

---

## 常見問題與解決方法

### 通用問題

*   **`pyenv: command not found`**：
    *   檢查環境變數是否配置正確，並確保 pyenv/pyenv-win 的 `bin` 和 `shims` 目錄已添加到 `Path` 中。
    *   重啟終端機或電腦。
    *   (Windows) 檢查是否禁用了內建的 Python 啟動器。
*   **安裝 Python 失敗 (編譯錯誤)**：
    *   (Linux/macOS) 確保已安裝所有必要的建置依賴項。
    *   檢查網路連接，部分版本的下載可能需要科學上網。
*   **`pip` 或 `pip3` 問題**：
    *   在切換 Python 版本後，建議更新 pip：`python -m pip install --upgrade pip`

### Windows 特有問題 (pyenv-win)

*   **安裝特定版本失敗**：
    *   pyenv-win 可能不支援非常老舊的 Python 版本。
    *   檢查 pyenv-win 的 GitHub 頁面或 issue 列表，看是否有關於該版本的已知問題。
*   **環境變數配置問題**：
    *   確保 `PYENV` 變數指向正確的安裝路徑。
    *   確保 `%PYENV%\bin` 和 `%PYENV%\shims` 已添加到 `Path` 中，並且優先順序正確。

---

## 進階用法

### 虛擬環境

*   **macOS/Linux/WSL (pyenv-virtualenv)**：
    如果你使用自動安裝程式或手動安裝了 `pyenv-virtualenv` 外掛，可以使用它來管理虛擬環境。
    *   建立虛擬環境 (基於指定 Python 版本)：
        ```bash
        pyenv virtualenv <Python版本號> <虛擬環境名稱>
        ```
        例如：`pyenv virtualenv 3.11.8 myenv`
    *   啟用虛擬環境：
        ```bash
        pyenv activate <虛擬環境名稱>
        ```
    *   停用虛擬環境：
        ```bash
        pyenv deactivate
        ```
    *   刪除虛擬環境：
        ```bash
        pyenv uninstall <虛擬環境名稱>
        ```

*   **Windows (venv)**：
    在 Windows 上，推薦使用 Python 內建的 `venv` 模組來建立虛擬環境。
    *   首先使用 `pyenv global` 或 `pyenv local` 切換到你想要的 Python 版本。
    *   在專案目錄下建立虛擬環境：
        ```powershell
        python -m venv <虛擬環境名稱>
        ```
        例如：`python -m venv myenv`
    *   啟用虛擬環境：
        ```powershell
        .\<虛擬環境名稱>\Scripts\activate
        ```
    *   停用虛擬環境：
        ```powershell
        deactivate
        ```

### 更新 pyenv/pyenv-win

*   **pyenv (Linux/macOS)**：
    *   如果使用 Homebrew 安裝：`brew upgrade pyenv`
    *   如果使用自動安裝程式或 Git 安裝 (並安裝了 `pyenv-update` 外掛)：`pyenv update`
    *   手動 Git 更新：`cd $(pyenv root) && git pull`
*   **pyenv-win (Windows)**：
    *   如果使用 PowerShell 安裝程式安裝：重新執行安裝命令。
    *   如果使用 Git 安裝：`cd $HOME\.pyenv\pyenv-win && git pull`
    *   如果使用 pip 安裝：`pip install --upgrade pyenv-win`

### 卸載 pyenv/pyenv-win

*   **pyenv (Linux/macOS)**：
    *   從 Shell 設定檔中移除所有 pyenv 相關的行。
    *   刪除 pyenv 的安裝目錄：`rm -rf $(pyenv root)`
    *   如果使用 Homebrew 安裝：`brew uninstall pyenv`
*   **pyenv-win (Windows)**：
    *   從系統環境變數中移除 `PYENV` 變數以及 `Path` 中包含 `%PYENV%` 的路徑。
    *   刪除 pyenv-win 的安裝目錄 (預設為 `C:\Users\<YourUser>\.pyenv\pyenv-win`)。
    *   如果使用 Chocolatey 安裝：`choco uninstall pyenv-win`

---

## 工作原理 (簡述)

pyenv/pyenv-win 的核心原理是透過修改系統的 `PATH` 環境變數來攔截 Python 相關命令。

1.  **Shims (墊片)**：pyenv/pyenv-win 會在 `PATH` 的最前面插入一個 `shims` 目錄。這個目錄包含許多與 Python 命令 (如 `python`, `pip`) 同名的可執行檔案 (墊片)。
2.  **攔截命令**：當你在終端機中執行 `python` 或 `pip` 時，系統會先在 `shims` 目錄中找到對應的墊片並執行它。
3.  **版本判斷**：墊片會根據你設定的全域、本地或 Shell 版本來判斷應該使用哪個 Python 版本。
4.  **轉發命令**：墊片將命令轉發給正確版本的 Python 可執行檔案。

這種機制使得你可以在不修改系統 Python 的情況下，靈活地切換和管理多個 Python 版本。

---

## 參考連結

*   [pyenv GitHub 儲存庫](https://github.com/pyenv/pyenv)
*   [pyenv-win GitHub 儲存庫](https://github.com/pyenv-win/pyenv-win)
*   [pyenv 官方文件](https://github.com/pyenv/pyenv#installation)
*   [pyenv-win 官方文件](https://github.com/pyenv-win/pyenv-win#installation)
*   [pyenv-virtualenv 外掛](https://github.com/pyenv/pyenv-virtualenv)

---

希望這份教學能幫助你更好地理解和使用 pyenv 和 pyenv-win 來管理你的 Python 環境！
