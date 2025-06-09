+++
date = '2025-06-08T00:00:00+08:00'
draft = false
title = 'pyenv 全面教程'
+++

# pyenv 全面教程

[pyenv](https://github.com/pyenv/pyenv) 是一个强大的 Python 版本管理工具，可让你轻松安装和切换多个 Python 版本。*Windows 用户请使用 [pyenv-win](https://github.com/pyenv-win/pyenv-win) 项目。*

---

## pyenv 简介

- *作用*：管理多个 Python 版本，轻松切换。
- *优点*：不污染系统 Python，支持用户级别的版本隔离。
- *Windows 用户*：请使用 [pyenv-win](https://github.com/pyenv-win/pyenv-win)。

---

## 各平台安装 pyenv/pyenv-win

### macOS 安装

1. 安装 [Homebrew](https://brew.sh/)（如已安装可跳过）
   bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   
2. 安装 pyenv
   bash
   brew install pyenv
   
3. （可选）安装 pyenv-virtualenv
   bash
   brew install pyenv-virtualenv
   

### Linux/WSL 安装

1. 使用 curl 安装：
   bash
   curl https://pyenv.run | bash
   
2. 或手动 clone：
   bash
   git clone https://github.com/pyenv/pyenv.git ~/.pyenv
   

### Windows 安装（pyenv-win）

#### 方法一：使用 PowerShell 安装（推荐）

1. *以管理员身份打开 PowerShell*
2. 执行以下命令（会自动下载最新版 pyenv-win）：
   powershell
   Invoke-WebRequest -UseBasicParsing -Uri "https://pyenv.run" -OutFile "./pyenv-win-install.ps1"
   .\pyenv-win-install.ps1
   
   > 该脚本自动将 pyenv 安装到 C:\Users\<YourUser>\.pyenv\pyenv-win

#### 方法二：手动安装

1. 打开 PowerShell，运行：
   powershell
   git clone https://github.com/pyenv-win/pyenv-win.git $HOME\.pyenv\pyenv-win
   

2. 配置环境变量（见下文）

---

## 配置环境变量

### macOS/Linux/WSL

将以下内容加入你的 shell 配置文件（如 ~/.bashrc、~/.zshrc）：

bash
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv init -)"
# 如使用 pyenv-virtualenv，还需加上：
eval "$(pyenv virtualenv-init -)"

保存并执行 source ~/.bashrc 或重启终端。

### Windows (pyenv-win)

1. *添加环境变量（以用户变量为例）*  
   打开*系统环境变量*设置，添加以下内容：

   - PYENV 变量，值为：  
     C:\Users\<YourUser>\.pyenv\pyenv-win
   - 编辑 Path 变量，*添加*：
     - %PYENV%\bin
     - %PYENV%\shims

2. *重启 PowerShell 或 CMD*

3. *验证是否生效*
   sh
   pyenv --version
   

---

## 安装 Python 版本

### macOS/Linux/WSL

- 列出可用版本：
  bash
  pyenv install --list
  
- 安装指定版本：
  bash
  pyenv install 3.11.8
  

### Windows (pyenv-win)

- 列出可用版本：
  powershell
  pyenv install --list
  
- 安装指定版本：
  powershell
  pyenv install 3.12.3
  

---

## 切换 Python 版本

### 全局切换

- 所有平台通用：
  sh
  pyenv global 3.12.3
  

### 本地（项目）切换

- 在项目目录下运行（会生成 .python-version 文件）：
  sh
  pyenv local 3.8.18

---

## 卸载 Python 版本

- 所有平台通用：
  sh
  pyenv uninstall 3.8.18
  

---

## 常见问题与解决方法

### Windows 特有问题

- *pyenv: command not found*
  - 检查环境变量 Path 是否配置正确。
  - 重启 PowerShell/CMD。
- *安装 Python 失败*
  - 检查网络，部分版本下载需科学上网。
  - pyenv-win 不支持老旧 Python 2 版本。

### 通用问题

- 缺依赖/编译错误（Linux/macOS）：
  - 需提前安装依赖，见上文。
- pip/pip3 问题：
  - 升级 pip：python -m pip install --upgrade pip

---

## 高级用法

### pyenv-virtualenv（Mac/Linux/WSL）

- 创建虚拟环境：
  bash
  pyenv virtualenv 3.11.8 myenv
  pyenv activate myenv
  

### Windows 虚拟环境

- 推荐用 venv：
  powershell
  python -m venv myenv
  .\myenv\Scripts\activate
  

### 查看已安装的 Python 版本

- 所有平台通用：
  sh
  pyenv versions
  

### 卸载 pyenv/pyenv-win

- 删除安装目录和环境变量即可。

---

## 参考链接

- [pyenv GitHub](https://github.com/pyenv/pyenv)
- [pyenv-win (Windows)](https://github.com/pyenv-win/pyenv-win)
- [pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv)
- [pyenv 官方文档](https://github.com/pyenv/pyenv#installation)

---

> *Tip:*  
> Windows 用户推荐使用 [pyenv-win](https://github.com/pyenv-win/pyenv-win)，并结合 [venv](https://spectrepro.pro/posts/pythonvenv/) 管理虚拟环境；Mac/Linux 推荐结合 pyenv-virtualenv。