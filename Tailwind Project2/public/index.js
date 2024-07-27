let hum = document.getElementById('hum');
let menu = document.getElementById('menu')
let moon = document.querySelectorAll('#moon')
let navs = document.querySelector('nav')
let b = document.body ;
let images = document.querySelectorAll('#im')
let divs = Array.from(document.querySelectorAll('#divs'))
let changer = document.getElementById('changer')
let front_divs = document.querySelectorAll('#front-div')
let back_divs = document.querySelectorAll('#back-div')
let changed_div = document.getElementById('changed-div')

changed_div.onclick=()=>{
    changer.classList.toggle('moving')
    changer.style.cssText=' transition: all 0.3s linear;'
    front_divs.forEach((fdiv)=>{
        fdiv.classList.toggle('front-r');
    })

    back_divs.forEach((bdiv)=>{
        bdiv.classList.toggle('rotated');
    })
        changed_div.classList.toggle('changed_div2')
        changed_div.classList.add('changed_div')
        changed_div.style.transition='all 0.3s linear '



}

hum.onclick=()=>{
    menu.classList.toggle('hidden')
   
}

moon.forEach((moon)=>{
    moon.onclick=function(){
        b.classList.toggle('dark')
    }
})

window.onscroll =()=>{
    if(window.scrollY >= 80 && b.className != 'dark' ){
        navs.style.backgroundColor='white'
        navs.style.boxShadow='0px 5px 10px gray'
    } 
    else if(b.className == 'dark'&& window.scrollY >= 80 ){
        navs.style.backgroundColor='rgb(15 23 42)'
        navs.style.boxShadow='0px 5px 10px rgb(15 23 42)'
    }
    else {
        navs.style.backgroundColor='transparent'
        navs.style.boxShadow='0px 0px 00px transparent'
    }
}


images.forEach((img)=>{
    img.addEventListener('click',function(e){
        images.forEach((img=>{
            img.classList.remove('active')
            document.querySelector(`${e.target.dataset.div}`).style.display = 'hidden';

            divs.forEach((di)=>{
                di.style.display='none'
            })

        }))
        e.target.classList.add('active')

        document.querySelector(`${e.target.dataset.div}`).style.display='block';
        document.querySelector(`${e.target.dataset.div}`).classList.add('animation')

    })
})

