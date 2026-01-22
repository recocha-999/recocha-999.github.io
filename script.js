let peppa = document.getElementById('con-pe');
let hps = document.getElementById('arr');
let hpi = document.getElementById('aba');
let huevo = document.getElementById('huevo');
let cab = document.getElementById('cab');
let hh = document.getElementsByClassName('hh');
let perro = document.getElementById('perro');
let imgpe = document.getElementById('imgpe');
let hu = document.getElementById('hu');
let cl = document.getElementById('click');
let emp = document.getElementById('empezar');

perro.style.opacity = '0';

 let audio = new Audio('./peppa.mp3');
    
   
    audio.loop = true;


window.addEventListener('beforeunload', () => {
    audio.pause();
    audio.currentTime = 0;
});

click.addEventListener('touchstart', () => {
    
    document.body.removeChild(emp);
    
     
   
});




peppa.addEventListener('touchstart', () => {

audio.play();

perro.style.opacity = '1';

    hu.style.opacity = '0';
    
    
    
    peppa.style.transition = '2s' ;
    cab.style.transition = '2s';
    cab.style.transform = 'rotate(-45deg) translate(-9px,-2px)';
    
    setTimeout(() => {
        hpi.style.opacity = '0';
        huevo.style.backgroundImage = ` url("./h-b.png")`;
        
    },200);
    peppa.style.transform = 'translateY(-54px)';
    
    
    
    
    setTimeout(() => {
        
        peppa.style.transform = 'translate(60px,-54px)';
        cab.style.transition = '5000ms';
        cab.style.backgroundImage = ` url("./cab-aso.png")`
    },2200);
   setTimeout(() => {
   
        peppa.style.transform = 'translate(70px,0px)';
        cab.style.transform = ' rotate(-20deg) translate(-2px, 0px)';
        
   },4200);
   
   setTimeout(() => {
      
      hu.innerHTML = 'Ahora toca el huevo🔥😏' 
      hu.style.opacity = '1';
       
       
   },4700);
   
   
    
    
    
    
    
},{once:true});


huevo.addEventListener('touchstart', () => {

   hu.style.opacity = '0';
   
      huevo.style.backgroundImage = '';
   for(let i = 0; i < 2; i++) {
   
      hh[i].style.opacity = '1';
    
    }
    
    setTimeout(() => {
        hps.style.transition = '1s';
        hps.style.transformOrigin = 'bottom left';
        hps.style.transform = 'rotate(-90deg) translate(1px,3px)';
       
    },1000);
    
    setTimeout(() => {
        
        perro.style.transition = '800ms';
        perro.style.transform = 'translateY(-80px)';
        
        
    },1800);
    
    setTimeout(() => {
        
        perro.style.transition = '1500ms';
        perro.style.transform = 'translate(-30px,20px) rotate(0deg) scale(4)';
        perro.style.zIndex = '2';
        
        hu.innerHTML = 'Toca el perrito';
        hu.style.opacity = '1';
        perro.addEventListener('touchstart', () => {
         hu.style.opacity = '0';  
           
            
           
               
           imgpe.src = './pe_ca.png';
            
          let bollo = document.createElement('div'); 
          
          bollo.id = 'bollo' ;  
          bollo.style.opacity = '0';
          bollo.style.top=  '13px';
          bollo.style.left= '15px';
          bollo.style.boxShadow = '0px 0px 10px #f6f6f6'
          
          perro.appendChild(bollo); 
           
            setTimeout( () => {
                
                bollo.style.transition = '1s';
                bollo.style.opacity = '1';
                
                
                
                
            },1000);
            
            setTimeout( () => {
                
                bollo.style.transform = 'translateY(5px)';
                
            },1500);
            
           setTimeout(() => {
               
               bollo.style.transition = '2s';
               bollo.style.top = '-50px';
               bollo.style.transform = 'scale(35) translate(0px,0px) rotate(45deg)';
               
              
               
               
           },3000);
           
           setTimeout(() => {
               
               bollo.style.transition = '1s';
            bollo.style.opacity = '0';
            bollo.style.transform = 'scale(0.1)'       
               
               
           },4000);
           
           setTimeout(() => {
               
               perro.removeChild(bollo);
               document.body.appendChild(bollo);
               bollo.style.transform = 'scale(1)';
               bollo.style.width = '1px';
               bollo.style.height = '1px';       
               
               bollo.style.transition = '3s';
               bollo.style.top = '';
               bollo.style.left = '';
               bollo.style.animation = '1s crecer linear 0s 1 both'
               
           }, 5400);
            
            
        });
        
        
        
    },4000);
    
    
    
    
}, {once : true});    
    
