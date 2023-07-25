# Hexo Butterfly Snippets Best
实在没想到什么好名字就用这个吸引眼球的不要脸的名字了
`Butterfly` 和 `hexo` 的 `snippet` 我都整理了(小部分是直接用原库的)
我的 fork 源: [KakaWanYifan/VSCode-Hexo-Butterfly-Snippets](https://github.com/KakaWanYifan/VSCode-Hexo-Butterfly-Snippets)

以下是初代作者写的(功能补全了很多，你能想到的几乎都有)
# Hexo Butterfly Snippets

从`VSCode-Hexo-Next-Snippets` fork来的。

原作是和`Hexo Next`这个主题配套的，我进行了一些简单的修改，现在和`Hexo Butterfly`这个主题配套。

视频介绍：https://www.bilibili.com/video/BV1nf4y1179b/

已在`Visual Code`上架了，搜索`Hexo Butterfly Snippets`。

已开源：https://github.com/KakaWanYifan/VSCode-Hexo-Butterfly-Snippets

## 用法

### 补全

敲入`>`，然后会有提示，自动补全。

### 功能

- `>default`: Insert Default Note.
- `>primary`: Insert Primary Note.
- `>primary-no-icon`: Insert Primary No-Icon Note.
- `>success`: Insert Success Note.
- `>info`: Insert Info Note.
- `>warning`: Insert Warning Note.
- `>danger`: Insert Danger Note.
- `>mermaid`: Insert Mermaid Note.
- `>tabs`: Insert Tabs Note.
- `>tabs_tensorflow`: Insert Tabs TensorFlow Note.
- `>tabs_java_python`: Insert Tabs Java-Python Note.
- `>python`：Insert Python formula.
- `>java`：Insert Python formula.
- `>translate`：Insert Translate.
- `>emsp`：Insert \&emsp;
- `>sql`：Insert SQL formula.
- `>js`：Insert JavaScript formula.
- `>shell`：Insert Shell formula.
- `>refer`：Insert Refer.

### 自定义功能
修改`/snippets/markdown.json`，然后重新打包。

## 安装
已在`Visual Code`上架了，搜索`Hexo Butterfly Snippets`。

## 打包

clone源代码，安装插件`vsce`。
```
npm i vsce -g
```
在根目录，输入命令打包。
```
vsce package
```

## 发布
VSCode更新了发布方案，现在不能通过命令发布了，要通过网页上传。
https://marketplace.visualstudio.com/manage/publishers/KakaWanYifan

## 要求

`Visual Code`版本不低于 `1.41.0`

## LICENSE

MIT LICENSE.