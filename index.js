const quote=document.querySelector('.generate');
const btn=document.querySelector('.generateQuote');
const author=document.querySelector('.author')

btn.addEventListener('click',generatequote)
generatequote();

 function generatequote(){
  fetch('https://type.fit/api/quotes')
  .then(res => (res.json()))
  .then(data => {
    const randomindex=Math.floor(Math.random() * data.length);
    
    quote.innerHTML=data[randomindex].text;
    author.innerHTML=data[randomindex].author;
  })
}