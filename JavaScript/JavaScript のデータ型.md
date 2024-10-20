# JavaScript のデータ型

下記の JavaScript コードの出力は何になるでしょうか？

``` javascript
const person = {name: 'John'};
const newPerson = person;

newPerson.name = 'David';
console.log(person.name);
```

`person`オブジェクトは変更されてないから、出力は`John`に決まっていると思った方、注意が必要です。

正解は、`David`が出力されることになります。

ここでのポイントは、JavaScript ではデータの型として「基本型」と「参照型」を持つ ということです。

## 基本型 と オブジェクト型
JavaScript の型には
