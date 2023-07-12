//alert("loading");
function addNewWEField()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let we0b=document.getElementById("we");
    let weAddButton0b=document.getElementById("weAddButton");
    we0b.insertBefore(newNode,weAddButton0b);
}

function addNewAQField()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    let aq0b=document.getElementById("aq");
    let aqAddButton0b=document.getElementById("aqAddButton");

    aq0b.insertBefore(newNode,aqAddButton0b);

}


function generateCV(){
    // console.log("generating CV");
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;
    // direct
    document.getElementById("nameT2").innerHTML=nameField;
    // contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    // address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("gmailT").innerHTML=document.getElementById("mailField").value;

    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;

    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedinField").value;

    let lang=document.getElementById("objectiveField").value;
    let text="";
    for(let x of lang)
    {
        text+=x;
        document.getElementById("objectiveT").innerHTML="<pre>"+text+"</pre>";
    }
   
  let wes=document.getElementsByClassName("weField");
    let str="";
    for(let a of wes)
    {
      //document.getElementById("weT").innerHTML='\r\n';
       str = str + a.value +"<br>"+"<li>";
       document.getElementById("weT").innerHTML="<li>"+str+"<br>";
    }




    let aqs=document.getElementsByClassName("eqField");
    let str1="";
    for(let a of aqs)
    {
      //document.getElementById("weT").innerHTML='\r\n';
       str1 = str1 + a.value +"<br>"+"<li>";
       document.getElementById("aqT").innerHTML="<li>"+str1+"<br>";
    }
   


 /* let aqs=document.getElementsByClassName("eqField");
  let str1="";
  for(let e of aqs)
  {
     str1 = str1 + "<li> ${e.value} </li>  ";
  }
  document.getElementById("aqT").innerHTML=str1;*/

  document.getElementById('cv-form').style.display="none";
  document.getElementById('cv-template').style.display='block';


}

function printCV(){
    window.print();
  }