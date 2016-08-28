在Mac 系统 Sublime中配置运行JS环境
1. 首先到 nodejs.org 下载 Node.js 安装包并安装。
2. 打开 Sublime Text 2 编辑器。选择菜单 Tools --> Build System --> new Build System... 
3. 将文件保存为 JavaScript.sublime-build 该文件会保存到sublime 指定的user 文件夹
4. 文件内容为：
{
        "cmd": ["/usr/local/bin/node", "$file"],
        "file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
        "selector": "source.javascript"
}

5. 重新启动 Sublime Text 2. 勾选菜单 Tools --> Build System --> JavaScript
6. 可以使用 command + b 来执行JavaScript 程序.

