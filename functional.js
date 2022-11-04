/*
1.how to use js with html and css
2.get element or elements from DOM
  2-1 getElementById
  2-2 getElementByClassName
  2-3 querySelector
  2-4 querySelectorAll
3. dynamically add element to the dom: document.createElement
     3-5: set value to the innerHTML
4. get value from a dom element 
      4-1:  use innerText(h1, p, h5, div, span , strong, )     
      4-2: use value (input , textarea) ;
      4-3: use value if the tag is input 
      4-4: use innerText in js if the html tag is textArea or other;
5. add event listener (event handler)     ;
     5-1:click, focus, blur, mousemove, keyup, keydown, onchange;
     5-2: addEventListener onClick="myHandler()"
6. use function 
7.eventDelegete;
7-1 : class id to parent tags;

*/
document.getElementById('input-filed').addEventListener('mousemove',
     function () {
          console.log('btn-clicked');
     }
);
console.log(nenj);