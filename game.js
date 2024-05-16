
//adding evevt to the function 
 document.getElementById('set').addEventListener('click', popup)
 document.getElementById('x').addEventListener('click', closepopup)
 document.getElementById('play').addEventListener('click',startgame)
 document.getElementById('nextstage').addEventListener('click' ,nextlevel)
 document.getElementById('mus').addEventListener('click' ,openvideo)
 document.getElementById('closex').addEventListener('click' ,closevideo)
 toggle = document.getElementsByClassName('slider')[0]; 
 toggle.addEventListener('click', music);
 

 let tsecond;
 let sum=0;
 let musicMode;
 let randomindex;
 let prevdiv=0;
 let chance;
 let level=1;
 let time=9;
 let timeOfLevel=3000;
 let spaceid;
 let indexid;
 let allscore=0;
 let names;
 let selectedtime;;
 let seconds;

// the scr of the alien was selected by the user 
let selectesalein;

// array with all the alien//
 let allaliendiv=document.querySelectorAll('.chosealien');

// array with all the astrunaut//
 let allastrunutdiv=document.querySelectorAll('.astrunat');
 // array with all the astrunaut//
 let allspceship=document.querySelectorAll('.astro');

 musicMode=document.getElementById('musicmode');
 for (let index = 1; index < 5; index++) {
  let i='background'+index;
  document.getElementById(i).addEventListener('click',changebackground)
}  
  

for (let index = 1; index < 4; index++) {
  let i='alien'+index;
  document.getElementById(i).addEventListener('click',changealien)
}  
  
for (let index = 0; index < allspceship.length; index++) {
  allspceship[index].addEventListener('click' ,score)
}

 
//fucfion: 
 

 function popup()
 {
   document.getElementById('popup').style.display="block" 
 }


 function closepopup()
 {
   document.getElementById('popup').style.display="none" 
 }

 function changebackground(Event)
 {
  
 let newimg= Event.target.id;
 
 let id= newimg.substring(10, 11)

 if(id==1)
 {
  document.body.style.backgroundImage='url(background/background1.jpg)';
  document.getElementById('background1').style.borderColor='red'
  document.getElementById('background2').style.borderColor='dodgerblue'
  document.getElementById('background3').style.borderColor='dodgerblue'
  document.getElementById('background4').style.borderColor='dodgerblue'

 }
  
 if(id==2)
 {
  document.body.style.backgroundImage='url(background/background2.jpg)';
  document.getElementById('background1').style.borderColor='dodgerblue'
  document.getElementById('background2').style.borderColor='red'
  document.getElementById('background3').style.borderColor='dodgerblue'
  document.getElementById('background4').style.borderColor='dodgerblue'
 }
  
 if(id==3)
 {
  document.body.style.backgroundImage='url(background/background3.jpg)';
  document.getElementById('background1').style.borderColor='dodgerblue'
  document.getElementById('background2').style.borderColor='dodgerblue'
  document.getElementById('background3').style.borderColor='red'
  document.getElementById('background4').style.borderColor='dodgerblue'
 }
  
 if(id==4)
 {
  document.body.style.backgroundImage='url(background/background4.jpg)';
  document.getElementById('background1').style.borderColor='dodgerblue'
  document.getElementById('background2').style.borderColor='dodgerblue'
  document.getElementById('background3').style.borderColor='dodgerblue'
  document.getElementById('background4').style.borderColor='red'
}
  
}



 

function changealien(Event){
  document.querySelector(`#${selectesalein}`).style.borderColor='dodgerblue'  
  document.querySelector( `#${selectesalein}`).classList.remove('selectedalien');
 
  selectesalein=Event.target.id;
 
  document.querySelector( `#${selectesalein}`).classList.add('selectedalien');
  document.querySelector(`#${selectesalein}`).style.borderColor='red'
  
  

}
onload = () =>{
  selectesalein='alien3'
  selectedtime=10;
 
}



 function startgame()
 {
     selectedtime=document.getElementById('select').value;
     seconds=selectedtime;
     tsecond=setInterval(fsecond,1000)
     document.getElementById('scores').innerHTML=0;
     document.getElementById('level').innerHTML=level;
     document.getElementById('play').removeEventListener('click',startgame)
     jumpastrunaut();
 }     
     
    

  
function jumpastrunaut(){
    
   chance=Math.floor(Math.random() * (time));
   randomindex=Math.floor(Math.random() * 8);
    while(prevdiv==randomindex)
    {
       randomindex=Math.floor(Math.random() * 8);
    } 
    
    allspceship[prevdiv].addEventListener('click' ,score);
   if(chance>5)

  {
    
    allastrunutdiv[randomindex].classList.add('selectediv');
    prevdiv=randomindex;
    if (seconds>0) {
      setTimeout(clearastronut, timeOfLevel)
    }
     else
     {
       allastrunutdiv[prevdiv].classList.remove('selectediv');
       finishgame();
       
     }
  }  
   
  else{
     
    
    allastrunutdiv[randomindex].style.background=`url('picturealien/${selectesalein}.png') no-repeat center`;
    allastrunutdiv[randomindex].style.backgroundSize = "70% 100%";
    prevdiv=randomindex;
    if (seconds>0) {

      setTimeout(clearalien,timeOfLevel)
    }
   
    else{
      allastrunutdiv[prevdiv].style.background="";
      finishgame()
    }
    
   }
  
  
}  

function clearastronut(){
  allastrunutdiv[prevdiv].classList.remove('selectediv');
  jumpastrunaut() ;
 
} 

function clearalien(){
  allastrunutdiv[prevdiv].style.background="";
  jumpastrunaut() ;
}

function score(Event){
    
  spaceid=Event.target.id
  console.log(spaceid)
  indexid=spaceid.substring(5, 6)
 
  
  if (indexid==(randomindex+1)) {
     if(chance>5)
     {
      allspceship[randomindex].style.transform=" rotate(2deg)"
      setTimeout(clearotate,250)
      sum=sum+10;
      allspceship[randomindex].removeEventListener('click' ,score);
     }
    
    
    else{
      sum=sum-10;
      allspceship[randomindex].removeEventListener('click' ,score);
      allspceship[randomindex].style.transform=" rotate(2deg)"
      setTimeout(clearotate,250)
    }
    document.getElementById('scores').innerHTML=sum;
  }
   
}  
  
function fsecond()
{
   
  

       if (seconds==-1)
        { 
        stopsecond()

          
        } 
        else{
        document.getElementById('time').innerHTML=seconds;
        seconds= seconds-1;
       }

}     
  function stopsecond()
  {
    clearInterval(tsecond)
    
  }
  
 function finishgame()
 {
  
  timeOfLevel-=1000;
  time+=3;
  if(chance<5)
  allastrunutdiv[prevdiv].style.background="";
  else
  allastrunutdiv[prevdiv].classList.remove('selectediv');
  console.log("finish game")
  
   Message()
 }

 function Message()
 {
  if(level==1)
  {
    
    names=document.getElementById('name').value;
    document.getElementById('numscore').innerHTML=`${names} צברת  בשלב זה ${sum} נקודות`
    document.getElementById('succesmesage').style.display="block" ;
  }
  
  else{
  document.getElementById('sumscore').innerHTML=`צברת בשלב זה ${sum} נקודות`
  document.getElementById('againmesege').style.display="block" 
 
  }
  allscore+=sum;
  localStorage.setItem("point" ,allscore);
}
  
function nextlevel()
 {
  

  if(level==1){
    console.log("next level")
    seconds=selectedtime;
    document.getElementById('succesmesage').style.display="none" 
    tsecond=setInterval(fsecond,1000)
    level++;
    document.getElementById('level').innerHTML=level;
    
    sum=0;
    document.getElementById('scores').innerHTML=sum;
    
   
    jumpastrunaut();
    }
      
  }

    
   function openvideo(){
    document.getElementById('video').style.display="block" 
   }     
         
        
   function closevideo(){
    document.getElementById('video').style.display="none" 
  }     
    
 function  clearotate()
 {
  allspceship[randomindex].style.transform=" rotate(0deg)"
 }
  function music()
  {
    console.log(23)
    let audio = document.getElementsByClassName('music')[0];

    if (toggle.classList.contains('off')) 
    {
      toggle.classList.remove('off');
      toggle.classList.add('on');
      audio.currentTime = 0;
      audio.play();
      musicMode.textContent = 'דלוק';
    }
    else{
       
        toggle.classList.remove('on');
        toggle.classList.add('off');
        audio.pause();
        musicMode.textContent = 'כבוי';
    }
  }    
   
 