# Как отсортировать элементы в случайном порядке?!
Random sorting of items. 

[Пример](https://codepen.io/xakplant/pen/VqjdbP)
## HTML
```HTML
<div id="block">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
  <div>11</div>
</div>
```
## JS
```JS
let parent = document.getElementById('block');
let childs = parent.children;
childs = Array.from(childs);

function putToCache(elem, cache){
    if(cache.indexOf(elem) != -1){
        return;
    }
    var i = Math.floor(Math.random()*(cache.length + 1));
    cache.splice(i, 0, elem);
}
function madness(){
    var cache = [];
    return function(a, b){
        putToCache(a, cache);
        putToCache(b, cache);
        return cache.indexOf(b) - cache.indexOf(a);
    }
}
function shuffle(arr){
    var compare = madness();
    return arr.sort(compare);
}

childs = shuffle(childs);

childs.map((e, idx)=>{
    parent.insertAdjacentElement('beforebegin', e);
});
```

[Почему такая сложная сортировка?!](https://habr.com/post/358094/)
