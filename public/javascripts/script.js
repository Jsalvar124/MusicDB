window.onload=(req, res)=>{
    let body=document.querySelector('body')
    let navBar=document.querySelector('nav');
    let darkButton=document.querySelector('.darkMode')
    let lightButton=document.querySelector('.lightMode')
    let boxes=document.querySelectorAll('.list-group-item')
    let summaryText=document.querySelectorAll('.summary-text')
    let icon=document.querySelector('.navbar-toggler-icon')
    let hamburger=document.querySelector('.navbar-toggler')
    let smallText=document.querySelectorAll('.text-muted')

    let brand=document.querySelector('a.navbar-brand')
    let navLinks=document.querySelectorAll('a.nav-link')

    darkButton.addEventListener('click', ()=>{
        body.style.backgroundColor='#2d3135'
        navBar.className="navbar navbar-expand-lg bg-dark";
        brand.style.color='#FFFFFF';
        icon.style.color='#FFFFFF8C';
        hamburger.style.cssText="border: solid #198754 1px; color: #1987548c"
        for (navLink of navLinks){
             navLink.style.color='#FFFFFF8C'
        }

        for (box of boxes){
            box.style.cssText='color:#FFFFFF8C; background-color:#212529'
        }

        for (text of summaryText){
            text.style.color='#FFFFFF8C'
        }

        for (text of smallText){
            text.style.color='#6C757D'
        }

        localStorage.setItem('mode', 'dark');

        //req.session.mode='dark'
     })

    lightButton.addEventListener('click', ()=>{
        body.style.backgroundColor='white'
        navBar.className="navbar navbar-expand-lg bg-light";
        brand.style.color='#000000E6';
        icon.style.color='#0000008c';
        hamburger.style.cssText="border: solid #0000001a 1px; color: #0000008c"
        for (navLink of navLinks){
             navLink.style.color='#0000008C'
        }

        for (box of boxes){
            box.style.cssText='color:#212529; background-color:white'
        }

        for (text of summaryText){
            text.style.color='#212529'
        }

        localStorage.setItem('mode', 'light');

    
    })


    if(localStorage.getItem('mode')=="dark"){
        body.style.backgroundColor='#2d3135'
        navBar.className="navbar navbar-expand-lg bg-dark";
        brand.style.color='#FFFFFF';
        icon.style.color='#FFFFFF8C';
        hamburger.style.cssText="border: solid #198754 1px; color: #1987548c"
        for (navLink of navLinks){
             navLink.style.color='#FFFFFF8C'
        }

        for (box of boxes){
            box.style.cssText='color:#FFFFFF8C; background-color:#212529'
        }

        for (text of summaryText){
            text.style.color='#FFFFFF8C'
        }

        for (text of smallText){
            text.style.color='#6C757D'
        }
    }



}