/*const h1 = document.querySelector('h1');
const letters = h1.innerHTML.split('');

h1.innerHTML = '';
h1.style.opacity = 1;

const spanArray = letters.map(
   letter => {
      const item = document.createElement('span');
      item.classList.add('letter');
      item.innerHTML = letter;
      h1.appendChild(item);
      

     const rect = item.getBoundingClientRect();
      item.style.left = rect.left + 'px';
      item.x = rect.left;
      item.style.top = rect.top + 'px';
      item.y = rect.top;

      return item;
   }
);

spanArray.forEach(span => {
  //span.style.position = 'absolute';
})


setTimeout( () => {
   gsap.to('.letter', {
      duration: 1,
      opacity: 1,
      color: `rgb(252, 251, 221)`,
      scale: 1.3,
      top: 100,
      delay: function(i, el){
         return i * 0.2
      },
      left: function(i, el){
         return el.x - i*10
      }
   })
}, 1000)*/