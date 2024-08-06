let string="";
let btn=document.querySelectorAll(".button");
Array.from(btn).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            string=string+e.target.innerHTML+eval(string);
            document.querySelector(".input").value=string;
        }
        else if(e.target.innerHTML=="Ac"){
            string=""
            document.querySelector(".input").value=string;
        }
        else if(e.target.innerHTML=="C"){
            string=string.slice(0,string.length-1);
            document.querySelector(".input").value=string;
        }
        else{
        console.log(e.target)
        string=string+e.target.innerHTML;
        console.log(string);
        document.querySelector("input").value=string;
        } 
    })
})