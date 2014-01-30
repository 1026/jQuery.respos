#jQuery.respos

レスポンシブしても `position: absolute;` の位置と要素の大きさ計算して配置するやつ  
どっちも画像があることが前提

##Demo
[http://1026.github.io/jQuery.respos/demo/](http://1026.github.io/jQuery.respos/demo/)

##Usage
    $('.hoge > img').respos('.item');`

.hoge > .item：基準になる（レスポンシブでサイズ変わる）画像  
.item：`position: absoute;` で配置する要素（中に画像を置く）

##License
MIT
