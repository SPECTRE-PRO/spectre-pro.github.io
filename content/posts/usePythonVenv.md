+++
date = '2025-06-07T20:03:55+08:00'
draft = false
title = 'Python venv用法'
+++

## `venv` 是什么。

`venv` 是 Python 标准库中用于创建**虚拟环境**的模块。

### 什么是虚拟环境 (Virtual Environment)？

简单来说，虚拟环境就是一个独立的 Python 环境，它拥有自己的 Python 解释器、库和脚本目录。

### 为什么需要使用 `venv` (虚拟环境)？

在 Python 开发中，不同的项目可能需要不同版本的库，或者同一个库的不同版本。如果没有虚拟环境，所有项目都共享全局的 Python 环境。这可能导致以下问题：

1.  **依赖冲突:** 项目 A 需要库 X 的 1.0 版本，而项目 B 需要库 X 的 2.0 版本。如果在全局环境中安装，就会产生冲突。
2.  **环境混乱:** 随着项目的增多，全局环境会安装大量库，管理起来非常困难。
3.  **项目移植性:** 将项目迁移到另一台机器时，很难准确地知道需要哪些库以及它们的版本。

使用虚拟环境可以解决这些问题：

*   每个虚拟环境都是独立的，项目 A 和项目 B 可以在各自的环境中安装所需版本的库，互不影响。
*   你可以为每个项目创建一个干净的环境，只安装该项目需要的库。
*   通过记录虚拟环境中安装的库（通常使用 `pip freeze > requirements.txt`），可以轻松地在其他地方重建相同的环境。

## 如何使用 `venv`？


### 1. 创建虚拟环境

   *   **基本语法：**

       ```bash
       python3 -m venv <环境名>
       ```

       *   `<环境名>`：是你为虚拟环境起的名称（通常放在项目文件夹内，例如 `.venv`、`env` 或 `my_project_env`）。
       *   这条命令会在当前目录下创建一个名为 `<环境名>` 的文件夹，其中包含虚拟环境。

   *   **指定 Python 版本（关键）：**

       如果你系统上安装了多个 Python 版本（例如 Python 3.8 和 Python 3.9），你需要使用特定版本的 `python` 命令来创建环境。 假设你要用 Python 3.8 创建环境：

       ```bash
       python3.8 -m venv <环境名> 
       ```

       *   **重要：**
           *   确保 `python3.8` 命令在你的系统上可用（你可以通过在终端中运行 `python3.8 --version` 来检查）。如果不可用，你需要先安装 Python 3.8，或者找到它的正确路径。
           *   如果你只安装了一个 Python 3 版本，通常直接使用 `python3` 命令即可。

### 2. 激活虚拟环境

   激活环境后，你后续的 `pip install` 命令安装的包都会被安装到这个虚拟环境中。

   *   **Windows (cmd.exe):**

       ```bash
       <环境名>\Scripts\activate.bat
       ```

   *   **Windows (PowerShell):**

       ```powershell
       <环境名>\Scripts\Activate.ps1
       ```

   *   **Linux/macOS (bash/zsh):**

       ```bash
       source <环境名>/bin/activate
       ```

   激活后，你的命令行提示符通常会发生变化，显示当前激活的环境名称。

### 3. 安装包

   ```bash
   pip install <包名>
   ```

   例如：

   ```bash
   pip install requests
   pip install numpy pandas
   ```

### 4. 列出已安装的包

   ```bash
   pip freeze
   ```

   这个命令会列出当前环境中安装的所有包及其版本号。通常，你会将输出重定向到一个 `requirements.txt` 文件中：

   ```bash
   pip freeze > requirements.txt
   ```

   这样做的好处是，以后你可以在新的虚拟环境中，或者在另一台机器上，使用 `requirements.txt` 文件快速重新创建相同的环境。

### 5. 从 `requirements.txt` 安装包

   ```bash
   pip install -r requirements.txt
   ```

### 6. 退出虚拟环境

   ```bash
   deactivate
   ```

   运行 `deactivate` 命令会退出当前激活的虚拟环境，回到系统全局 Python 环境。

### 7. 删除虚拟环境

   只需删除虚拟环境文件夹即可：

   ```bash
   # Linux/macOS
   rm -rf <环境名>

   # Windows (cmd.exe)
   rmdir /s /q <环境名>

   # Windows (PowerShell)
   Remove-Item -Recurse -Force <环境名>
   ```

## 完整示例（假设你想使用 Python 3.8 创建一个名为 `.venv` 的环境）：

```bash
# 1. 创建环境 (使用 Python 3.8)
python3.8 -m venv .venv

# 2. 激活环境 (Linux/macOS 示例)
source .venv/bin/activate

# 3. 安装一些包
pip install requests numpy

# 4. 列出已安装的包并保存到 requirements.txt
pip freeze > requirements.txt

# 5. (稍后，在另一个环境或机器上) 从 requirements.txt 安装
#    (先创建并激活一个新环境，然后...)
#    pip install -r requirements.txt

# 6. 退出环境
deactivate

# 7. (以后，如果你不再需要这个环境) 删除环境
#    rm -rf .venv  (Linux/macOS)
#    rmdir /s /q .venv (Windows cmd.exe)
```

## 关键点回顾：

*   使用 `python3 -m venv <环境名>` 创建环境。
*   使用特定版本的 `python` 命令（例如 `python3.8 -m venv`）来指定 Python 版本。
*   使用 `source <环境名>/bin/activate` (Linux/macOS) 或 `<环境名>\Scripts\activate.bat` (Windows) 激活环境。
*   使用 `pip install` 安装包。
*   使用 `pip freeze > requirements.txt` 保存包列表。
*   使用 `pip install -r requirements.txt` 从列表安装包。
*   使用 `deactivate` 退出环境。
*   直接删除环境文件夹来删除环境。

只要你确保使用了正确版本的 `python` 命令来创建 `venv` 环境，就可以精确控制使用的 Python 版本。
