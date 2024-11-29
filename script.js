const natija = document.getElementById("natija");
const input = document.getElementById("inp1");
const belgi = document.getElementById("belgi");
const input2 = document.getElementById("inp2");
const button = document.getElementById("btn");

function calc(){
    if(belgi.value === "+"){
            natija.innerText = +inp1.value + +inp2.value;

            inp1.value = "";
            inp2.value = "";
        
        } else if( belgi.value === "-"){
            natija.innerText = +inp1.value - +inp2.value;
            inp1.value = "";
            inp2.value = "";
        }else if ( belgi.value  === "*"){
            natija.innerText = +inp1.value * +inp2.value;
            inp1.value = "";
            inp2.value = "";
        }else if( belgi.value  === "/"){
            natija.innerText = +inp1.value / +inp2.value;
            inp1.value = "";
            inp2.value = "";
        }else{
        
            natija.innerText = "ma`lumot notogri";
            inp1.value = "";
            inp2.value = "";
        }
        
}

// const button = document.getElementById("btn");

// function changestyle(){
//     button.style.color = "purple";
//     button.style.backgroundColor = "yellow";
//     button.style.textAlign = "center";
//     button.style.display = "flex";
//     button.style.alignItems = "center";
//     button.style.justifyContent = "center";
    

    
// }