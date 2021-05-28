# Lyrics Website : Config Guide
## 歌词网站模版：配置指南

Put your lyrics into `data.js`, such as following:
将您的歌词放入`data.js`中，如下：
```Javascript
{
        'title': 'Title 您的标题',
        'artist': 'Artist 艺术家名称',
        'content': [
            'Some lines 一些行',
            'Another line 另一行',
            '\n',
            'A blank line 空行（空行用backslash+n占位）'
        ]
 },
```

And also the template will replace `'\n'` as `<br />` automatically when loading the lyric contents.
还有，加载歌词内容时模版会自动将`'\n'`替换成标签`<br />`。
