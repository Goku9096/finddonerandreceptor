let userinput=document.querySelector("input");
let clicked=document.getElementById("button");
let cleared=document.getElementById("clear");
/*
function result(){
    let result=userinput.value;
    if(result.length===0){return};
    let crelement=document.createElement("div");
    let set=crelement.setAttribute("id","task")
    crelement.innerText=result;
    let holder=document.getElementById("out");
    holder.append(crelement);
    console.log(crelement);

};
*/
function result(){
let userInput=userinput.value;
if(userInput.length===0){return};


let holder=document.getElementById("out");

holder.style.color="red";

switch(userInput){

case "A+":
    let apo=`A+ : O+', A'+, A'-, O'-.`;
    holder.append(apo);
    console.log(apo);
break;
case "B+":
    let bpo=`O'+, B'+, B'-, O'-.`;
    holder.append(bpo);
    console.log(bpo);
    break;
case "O+":
    let opo=`O'+, O'-.`;
    holder.append(opo);
    console.log(opo);
break;
case "AB+":
    let ABNEGATIVE=`TO EVERYONE`;
    holder.append(ABNEGATIVE);    
break;
    case "A-":
        let ano=`A- : A'-, O'-.`;
        holder.append(ano);
        console.log(ano);
    break;
    case "B-":
        let bno=`B'-, O'-.`;
        holder.append(bno);
        console.log(bno);
        break;
    case "O-":
        let ono=` O'-.`;
        holder.append(ono);
        console.log(ono);
        break;    
    case "AB-":
        let ABPOSITIVE=`AB'-, A'-, B'-, O'-.`  ;
        holder.append(ABPOSITIVE);
        console.log(ABPOSITIVE);  
break;

case "a+":
    let sapo=`A+ : O+', A'+, A'-, O'-.`;
    holder.append(sapo);
    console.log(sapo);
break;
case "b+":
    let sbpo=`O'+, B'+, B'-, O'-.`;
    holder.append(sbpo);
    console.log(sbpo);
    break;
case "o+":
    let sopo=`O'+, O'-.`;
    holder.append(sopo);
    console.log(sopo);
break;
case "ab+":
    let sABNEGATIVE=`TO EVERYONE`;
    holder.append(sABNEGATIVE);
    console.log(sABNEGATIVE);    
break;
    case "a-":
        let Sano=`A- : A'-, O'-.`;
        holder.append(Sano);
        console.log(Sano);
    break;
    case "b-":
        let sbno=`B'-, O'-.`;
        holder.append(sbno);
        console.log(sbno);
        break;
    case "o-":
        let sono=` O'-.`;
        holder.append(sono);
        console.log(sono);
        break;    
    case "ab-":
        let sABPOSITIVE=`AB'-, A'-, B'-, O'-.`  ;
        holder.append(sABPOSITIVE);
        console.log(sABPOSITIVE);  
break;

default:
    let Default="pleas enter correct blood group";
    holder.append(Default);
    
};

};

function donate(){
    let userInput=userinput.value;
    if(userInput.length===0){return}; 
   
    let holder2=document.getElementById("holder");
    holder2.style.color="green";

    switch(userInput){
    
    case "A+":
        let apo=`A+ :A'+, AB'+.`;
        let creat=document.createElement("div");
        let set=creat.setAttribute("id","creater");
         creat.innerText=apo;
        holder2.append(creat);
        console.log(creat);
    break;
    case "B+":
        let bpo=` B'+, AB'+.`;
        holder2.append(bpo);
        console.log(bpo);
        break;
    case "O+":
        let opo=`O'+, A'+, B'+, AB'+.`;
        holder2.append(opo);
        console.log(opo);
    break;
    case "AB+":
        let ABNEGATIVE=`AB+.`;
        holder2.append(ABNEGATIVE);    
    break;
        case "A-":
            let ano=`A'-,  A'+, AB'-, AB'+.`;
            holder2.append(ano);
            console.log(ano);
        break;
        case "B-":
            let bno=`B'-, B'+', AB'+, AB'-.`;
            holder2.append(bno);
            console.log(bno);
            break;
        case "O-":
            let ono=`TO EVERYONE.`;
            holder2.append(ono);
            console.log(ono);
            break;    
        case "AB-":
            let ABPOSITIVE=`AB'-, AB'+.`  ;
            holder2.append(ABPOSITIVE);
            console.log(ABPOSITIVE);  
    break;
    
    case "a+":
        let sapo=`A'+, AB'+.`;
        holder2.append(sapo);
        console.log(sapo);
    break;
    case "b+":
        let sbpo=` B'+, AB'+.`;
        holder2.append(sbpo);
        console.log(sbpo);
        break;
    case "o+":
        let sopo=`O'+, A'+, B'+, AB'+.`;
        holder2.append(sopo);
        console.log(sopo);
    break;
    case "ab+":
        let sABNEGATIVE=`AB+`;
        holder2.append(sABNEGATIVE);
        console.log(sABNEGATIVE);    
    break;
        case "a-":
            let Sano=`A'+, A'-, AB'-, AB'+.`;
            holder2.append(Sano);
            console.log(Sano);
        break;
        case "b-":
            let sbno=`B'-, AB'-, B'+, AB'+.`;
            holder2.append(sbno);
            console.log(sbno);
            break;
        case "o-":
            let sono=` TO EVERY ONE.`;
            holder2.append(sono);
            console.log(sono);
            break;    
        case "ab-":
            let sABPOSITIVE=`AB'-, AB'+.`  ;
            holder2.append(sABPOSITIVE);
            console.log(sABPOSITIVE);  
    break;
    
    default:
        let Default="pleas enter correct blood group";
        holder2.append(Default);
        
    };
    
    };
    

function clear(){
  let result="";
  userinput.value=result 
};
cleared.addEventListener("click",clear);
userinput.addEventListener("keyup",function(e){
    if(e.keyCode===0){
clear();
    }
});

clicked.addEventListener("click",result);
userinput.addEventListener("keyup",function(e){
    if(e.keyCode===13){
        result();
    };
});
clicked.addEventListener("click",donate);
userinput.addEventListener("keyup",function(e){
    if(e.keyCode===13){
       donate();
    };
});

