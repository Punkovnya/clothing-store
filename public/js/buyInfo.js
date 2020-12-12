let ar = [0,0,0,0,0,0,0,0,0];
let count = [1,1,1,1,1,1,1,1,1];
let price=[1000,650,700,800,1110,1280,600,550,1300];
let total=0;

timer = setInterval(function () {
   if(total!=0)
     $("#buttonBuy").css( {"display":"block"})
   
    if(total==0)$("#buttonBuy").css( {"display":"none"})
   
}, 10)



function plus1() {

count[0]++;  
total=total+price[0];
$("#count1").text(count[0]);
}
function plus2() {

count[1]++;  
total=total+price[1];
$("#count2").text(count[1]);
}

function plus3() {

count[2]++;  
total=total+price[2];
$("#count3").text(count[2]);
}

function plus4() {

count[3]++;  
total=total+price[3];
$("#count4").text(count[3]);
}
function plus5() {

count[4]++;  
total=total+price[4];
$("#count5").text(count[4]);
}
function plus6() {

count[5]++;  
total=total+price[5];
$("#count6").text(count[5]);
}
function plus7() {

count[6]++;  
total=total+price[6];
$("#count7").text(count[6]);
}
function plus8() {

count[7]++;  
total=total+price[7];
$("#count8").text(count[7]);
}
function plus9() {

count[8]++;  
total=total+price[8];
$("#count9").text(count[8]);
}


 function min1() {
    if(count[0]==1){ 
        ar[0]=0;
$("#item1").remove();
total=total-price[0];}
else {
    count[0]--;  
total=total-price[0];
$("#count1").text(count[0]);
}

}
 function min2() {
    if(count[1]==1){ 
        ar[1]=0;
$("#item2").remove();
total=total-price[1];}
else {
    count[1]--;  
total=total-price[1];
$("#count2").text(count[1]);
}

}
 function min3() {
    if(count[2]==1){ 
        ar[2]=0;
$("#item3").remove();
total=total-price[2];}
else {
    count[2]--;  
total=total-price[2];
$("#count3").text(count[2]);
}

}

 function min4() {
    if(count[3]==1){ 
        ar[3]=0;
$("#item4").remove();
total=total-price[3];}
else {
    count[3]--;  
total=total-price[3];
$("#count4").text(count[3]);
}

}
 function min5() {
    if(count[4]==1){ 
        ar[4]=0;
$("#item5").remove();
total=total-price[4];}
else {
    count[4]--;  
total=total-price[4];
$("#count5").text(count[4]);
}

}
 function min6() {
    if(count[5]==1){ 
        ar[5]=0;
$("#item6").remove();
total=total-price[5];}
else {
    count[5]--;  
total=total-price[5];
$("#count6").text(count[5]);
}

}
 function min7() {
    if(count[6]==1){ 
        ar[6]=0;
$("#item7").remove();
total=total-price[6];}
else {
    count[6]--;  
total=total-price[6];
$("#count7").text(count[6]);
}

}
 function min8() {
    if(count[7]==1){ 
        ar[7]=0;
$("#item8").remove();
total=total-price[7];}
else {
    count[7]--;  
total=total-price[7];
$("#count8").text(count[7]);
}

}
 function min9() {
    if(count[8]==1){ 
        ar[8]=0;
$("#item9").remove();
total=total-price[8];}
else {
    count[8]--;  
total=total-price[8];
$("#count9").text(count[8]);
}

}
    function totalprice(){
     $("#all-price").html("$ "+total+" USD");
    }
setInterval("totalprice()",40);

 
function buy1() { 
    if(ar[0]==0)
        ar[0]=1;
    if(ar[0]==1){
        $("#cardyfi").append(" <div class=card-item id=item1><div class=text-card>STRANGERGEAR ПАЛЬТО (КОРИЧНЕВОЕ) 001</div><div class=minus onclick=min1()>-</div><div class=count id=count1>1</div><div class=minus onclick=plus1()>+</div><div class=price>$1000 USD</div> </div>");
         total=total+price[0];
ar[0]=2;
}
 
}
function buy2() { 
    if(ar[1]==0)
        ar[1]=1;
    if(ar[1]==1){
         $("#cardyfi").append(" <div class=card-item id=item2><div class=text-card>STRANGERGEAR КОФТА (ЧЕРНАЯ) 010</div><div class=minus onclick=min2()>-</div><div class=count id=count2>1</div><div class=minus onclick=plus2()>+</div><div class=price>$650 USD</div> </div>");
         total=total+price[1];
ar[1]=2;
}

}
function buy3() { 
    if(ar[2]==0)
        ar[2]=1;
    if(ar[2]==1){
        $("#cardyfi").append("<div class=card-item id=item3><div class=text-card>STRANGERGEAR РУБАШКА (ЧЕРНАЯ) 100</div><div class=minus onclick=min3()>-</div><div class=count id=count3>1</div><div class=minus  onclick=plus3()>+</div><div class=price>$700 USD</div> </div>");
        total=total+price[2];
ar[2]=2;
}   
 
}
function buy4() { 
    if(ar[3]==0)
        ar[3]=1;
    if(ar[3]==1){
        $("#cardyfi").append(" <div class=card-item id=item4><div class=text-card>STRANGERGEAR КУРТКА (ЧЕРНАЯ) 101</div><div class=minus onclick=min4()>-</div><div class=count id=count4>1</div><div class=minus onclick=plus4()>+</div><div class=price>$800 USD</div> </div>");
         total=total+price[3];
ar[3]=2;
}
 
}
function buy5() { 
    if(ar[4]==0)
        ar[4]=1;
    if(ar[4]==1){
         $("#cardyfi").append(" <div class=card-item id=item5><div class=text-card>STRANGERGEAR ПАЛЬТО (ЧЕРНОЕ) 001</div><div class=minus onclick=min5()>-</div><div class=count id=count5>1</div><div class=minus onclick=plus5()>+</div><div class=price>$1110 USD</div> </div>");
         total=total+price[4];
ar[4]=2;
}

}
function buy6() { 
    if(ar[5]==0)
        ar[5]=1;
    if(ar[5]==1){
        $("#cardyfi").append("<div class=card-item id=item6><div class=text-card>STRANGERGEAR ПАЛЬТО (ЧЕРНОЕ) 001</div><div class=minus onclick=min6()>-</div><div class=count id=count6>1</div><div class=minus  onclick=plus6()>+</div><div class=price>$1280 USD</div> </div>");
        total=total+price[5];
ar[5]=2;
}   
 
}
function buy7() { 
    if(ar[6]==0)
        ar[6]=1;
    if(ar[6]==1){
        $("#cardyfi").append(" <div class=card-item id=item7><div class=text-card>STRANGERGEAR КАРДИГАН (ЧЕРНЫЙ) 000</div><div class=minus onclick=min7()>-</div><div class=count id=count7>1</div><div class=minus onclick=plus7()>+</div><div class=price>$600 USD</div> </div>");
         total=total+price[6];
ar[6]=2;
}
 
}
function buy8() { 
    if(ar[7]==0)
        ar[7]=1;
    if(ar[7]==1){
         $("#cardyfi").append(" <div class=card-item id=item8><div class=text-card>STRANGERGEAR ПЛАТЬЕ (КРАСНОЕ) 111</div><div class=minus onclick=min8()>-</div><div class=count id=count8>1</div><div class=minus onclick=plus8()>+</div><div class=price>$550 USD</div> </div>");
         total=total+price[7];
ar[7]=2;
}

}
function buy9() { 
    if(ar[8]==0)
        ar[8]=1;
    if(ar[8]==1){
        $("#cardyfi").append("<div class=card-item id=item9><div class=text-card>STRANGERGEAR ПАЛЬТО (БЕЖЕВОЕ) 001</div><div class=minus onclick=min9()>-</div><div class=count id=count9>1</div><div class=minus  onclick=plus9()>+</div><div class=price>$1300 USD</div> </div>");
        total=total+price[8];
ar[8]=2;
}   
 
}
