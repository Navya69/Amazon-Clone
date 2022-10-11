const leftbtn= document.querySelector(".l-btn");
const rightbtn= document.querySelector(".r-btn");

rightbtn.addEventListener('click',function(e) {
    console.log("done");
 const conent=document.querySelector('.product-slide')
 conent.scrollLeft+=1100;
e.preventDefault();
}
);
leftbtn.addEventListener('click',function(e) {
    console.log("done");
 const conent=document.querySelector('.product-slide')
 conent.scrollLeft-=1100;
e.preventDefault();
}
);
const leftbtn1= document.querySelector(".btn-1b");
const rightbtn1= document.querySelector(".btn-1a");

rightbtn1.addEventListener('click',function(e) {
    console.log("done");
 const conent=document.querySelector('.product-slide-1')
 conent.scrollLeft+=1100;
e.preventDefault();
}
);
leftbtn1.addEventListener('click',function(e) {
    console.log("done");
 const conent=document.querySelector('.product-slide-1')
 conent.scrollLeft-=1100;
e.preventDefault();
}
);