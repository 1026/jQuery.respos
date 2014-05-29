#jQuery.respos

レスポンシブしても `position: absolute;` の位置と要素の大きさ計算して配置するやつ  
画像なくても大丈夫にした

##Demo
[http://1026.github.io/jQuery.respos/demo/](http://1026.github.io/jQuery.respos/demo/)

##Usage
    $('.item').respos('.hoge', {width: xxx, height: xxx});`

.item：position: absoute; で配置する要素
.hoge：基準になる要素。画像じゃない場合、optionでwidthとheight指定

##License
MIT
