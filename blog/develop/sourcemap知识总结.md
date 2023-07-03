---
slug: Summary of Sourcemap
title: Summary of Sourcemap
date: 2022-07-26
authors: XyanZhang
tags: [sourcemap]
keywords: [sourcemap]
---

## 1. Sourcemap

sourcemap 是一种映射关系，将编译后的代码映射回源代码，方便调试。

```js
// sourcemap 格式
{
  version: 3, // sourcemap 版本, 一般为 3
  file: 'out.js', // 编译后的文件名
  sourceRoot: '', // 源码根目录
  sources: ['foo.js', 'bar.js'], // 源文件名
  sourcesContent: ['foo();', 'bar();'], // 源文件内容
  names: ['src', 'maps', 'are', 'fun'], // 转换前的变量名
  mappings: 'AAgBC,SAAQ,CAAEA' // 位置映射
}
```

### mappings

mappings 是 sourcemap 中最重要的部分，它是一个字符串，用来表示源码和编译后代码的映射关系。通过`;`和`,` 分隔；`;`表示行，`,`表示列。

## VLQ 编码: 每个mapping 都是通过VLQ编码来表示的

一共五位，分别有不同的含义：

- 转换后代码的第几列（行数通过分号 ; 来确定）
- 转换前的哪个源码文件，保存在 sources 里的，这里通过下标索引
- 转换前的源码的第几行
- 转换前的源码的第几列
- 转换前的源码的哪个变量名，保存在 names 里的，这里通过下标索引

### sourcemap 使用

source-map: <https://www.npmjs.com/package/source-map>

## webpack 中sourcemap 配置

