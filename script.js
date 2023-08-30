
// image = 4 (0 , 1 , 2 , 3)

let flag = 0;   // hamne yha par ek flag bnaya h flag ek aisa cheej jo ki indicate karega ki koin se no. ka slide chal raha h . flag ke starting ka no. 0 h taaki  wo array se match ho.


function controller(x){   // yha hamne ek or function bnaya h jo ki arrow ko control karega ki hamne -1 karna h arrow mw ki +1 iss function me ham "x" nam ka ek variable pass kiya hai. or iss function ko call ham onclick event ke through html page pr arrow k andr karenge. yha par x me ye -1 receive ho rha hai jab ham left arrow par click kar rahe hai to or vice-versa. 
   flag = flag + x ;
   slideshow(flag);  // here we again call the slide show function .

   /* left -> 2 + (-1) = 1; no. image will be show 
      right -> 2 + 1 = 3;   no. image will be show  
       
      yha ham left click karenge to hamne 0 no. ka image show hoga or right click karenge to 2 no ka image jo ki third image h.*/

}


slideshow(flag);  // here we call the function . and pass flag as a perameter inside the function. 


// here we make a function for showing the slides */
function slideshow(num){   // here we make a variable for "num" for receive the flag value.
   let slides = document.getElementsByClassName("slide"); // here we select the all the slides through the id inside the html.
 

   //3 no. ke baad agr +1 karte hai to 4 no. ka i mage present hio nahi h or ye same problem left side me bhi aa rahi h to hmne yha condition apply kiya hai or check kiya hai .
   if(num == slides.length){  // yha check kiya gya h ki jo no pass kiya gya h "num" ki value slide ki length(4) k barabar aa jaye to flag ko or num lo reset karke 0 par le jaao. 
      flag = 0;  // flag ko reset kara h 0 pr.
      num = 0;  // num ko bhi reset kiya h 0 pr.
   }
   if(num < 0){   // agr no. (num) jo h 0 se kam ho jaye to flag or num ko set kar do array ke length - 1 ke barabar jo ki (slides.length) h.
       flag = slides.length - 1;
       num = slides.length -1;
   }
   
   for( let y of slides){  // ham jab left right click kar rahe hai to ek sath saari image show ho rahi h iswke liye ham kya karenge ki jo image pehle se display ho rahi h usse hide kar denge with the use of ther for() loop
      y.style.display = "none";  // here y is a vaqriaable which show the slides no. ab iss slides wale array me jitne bhi image hai wo y me pass hoga  olr hamne style k through un sab image ko jo ki pehle se show ho rahi h unhe hide kar diya hai.
      //jaise hi lideshow() function call ho sbse pehle saare slide ko hide kar do or jo no. pass kiya gya h us no. ki slide ko visible bna do. 
   }
    
   console.log(num);
   // 0 no. wale image ko visible banana h kyuki array ki counting 0 se strt hoti hai or hame 0 no. wlw slide ko visible bnana hai to hamne uper flag bnaya h.
   slides[num].style.display = "block";  // yha hamne ky kiya h ki "num" variable me jo bhi no. pass hoga utne no. wale image ko visible kr dia jayega. 
   

   /* yha par hamne flag ko 0 kar diya kyuki pehla jo image tha uska no. array me 0 tha ussi array ki value ko flag ke through hamne yha function pass kiya h or usko receive "num" me kiya
      or yha hamne saare slide ko select kar rakha tha us slide me hamne 0 no. wala side pass kiya ki 0 no. wale slide ko display block karwa do mtlb visible karwa do. yha par hamara pehla 
      slide visible ho chuka h with text. */

      // ab ham chhte hai ki jab koi arrow button par click kare to 2 or 3 saare slide visible ho.
     // uper hamne ky kiya h ki "num" variable me jo bhi no. pass hoga utne no. wale image ko visible kr dia jayega.
     /* ab ham chahte hai ki left wala arrrow click ho to current no. ke slid me  -1 kare jo no. aayega us no. ki slide ko show kare or jab ham right side wale arrow
     ko click kare to current no. ke slid me +1 kare jo no. aayega us no. ki slide ko show kare . */
     
}