# Как отсортировать элементы в случайном порядке?!
Random sorting of items. 
[Пример]('https://codepen.io/xakplant/pen/VqjdbP')
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

function compareNumeric(a, b) {
  let i = parseInt(Math.random() * 10);
  if (i % 2 == 0)return 1;
  if (i % 2 != 0)return -1;
}
childs.sort(compareNumeric);    
childs.map((e, idx)=>{
    parent.insertAdjacentElement('beforebegin', e);
});
```
