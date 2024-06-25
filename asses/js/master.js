let _main =  document.getElementsByTagName('main')[0]
let _div = document.querySelector('main>div')
let _img = document.querySelectorAll('main img')
window.addEventListener('scroll',()=>{
    let _scrollY = window.scrollY
    let _maxScrollY = _main.clientHeight 
    let _percent = (_scrollY * 100 ) / _maxScrollY 
    console.log(_percent);
    
    if(0<_percent<30){
        _img[2].style.top = 100 + '%'
        _img[3].style.top = -100 + '%'
        _img[4].style.top = 100 + '%'
        _img[5].style.top = -100 + '%'
    }
    if(_percent > 30 ){
        _img[2].style.top = 0
        _img[3].style.top = 0
        console.log(2);
    }

     if(_percent > 60){
         console.log(222)
         _img[4].style.top = 0
         _img[5].style.top = 0
     }
    
    
})
