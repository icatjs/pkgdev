pkgdev
========================

基于ICAT+Backbone的组件包开发工具，便于快速搭建组件包开发环境。

## Installation

Either through forking or by using [npm](https://www.npmjs.com) (the recommended way):

```{bash}
npm install -g pkgdev
```
And pkgdev will be installed in to your bin path.


## Usage

```{bash}
pkgdev [folderName]
```

执行命令行问答，获取创建信息。无folderName表示在当前文件夹下创建。

```{bash}
npm install && gulp
```

创建完毕后，进入文件夹执行此命令，即可开发

> tip: 有时候npm install之后无法安装gulp-sass，可以把文件夹中的gulp-sass.zip解压到node_modules中，然后执行gulp


## License

MIT