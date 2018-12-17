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
