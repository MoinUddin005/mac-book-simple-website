function extraCost(value, isIncreasing, ssd, Delivery ){
    
    const cost = document.getElementById(value);
    
     
        if(isIncreasing == true){
            
            return cost.innerText = 180;
            
        }
        else if(ssd == 512){
            return cost.innerText = 100;
        }
        else if(Delivery == 21){
            return cost.innerText = 20;
        }
        else if(isIncreasing == 0){
            return cost.innerText = 0;
        }

}
 
// all input 
function getinput(element){
    const cost = document.getElementById(element + '-total');
    const value = parseInt(cost.innerText);
    return value;

}

// all amount calcualtion
function totalCost(){
    const memoryTotal = getinput('memory');
    const strogeTotal = getinput('stroge');
    const DeliveryTotal = getinput('Delivery');
    const subtotales = memoryTotal + strogeTotal + DeliveryTotal + 1299;
    const subtotale = document.getElementById('total-price');
    subtotale.innerText = subtotales;

    const pomoTotal = document.getElementById('total');
    pomoTotal.innerText = subtotales;


}
// pomo code update
   document.getElementById('apply-btn').addEventListener('click', function(){
       const pomoInput = document.getElementById('pomo-input');
       const promoinputvalue = pomoInput.value;
       if(promoinputvalue == 'stevekaku'){
        const pomoTotal = document.getElementById('total-price');
        const total = parseInt(pomoTotal.innerText);
        const pomocodetotal = total-(total * 0.2);


         document.getElementById('total').innerText = pomocodetotal;
         
    
    }
    pomoInput.value = "";
    
   })
   
//memory button update
document.getElementById('memory-16GB-btn').addEventListener('click', function(){
     extraCost('memory-total', true,0,0);
     totalCost();
})


document.getElementById('memory-8GB-btn').addEventListener('click', function(){
    extraCost('memory-total', 0,0,0);
    totalCost();
})

//storge button update
document.getElementById('stroge-256GB-btn').addEventListener('click', function(){
    extraCost('stroge-total', 0,0 , 0);
    totalCost();
})
document.getElementById('stroge-512GB-btn').addEventListener('click', function(){
    extraCost('stroge-total',false,512,2);
    totalCost();
})

document.getElementById('stroge-1TbGB-btn').addEventListener('click', function(){
    extraCost('stroge-total', true , 0 , 0);
    totalCost();
})

// delivery update

document.getElementById('free-Delivery').addEventListener('click', function(){
    extraCost('Delivery-total',0,0,0);
    totalCost();
})

document.getElementById('paid-Delivery').addEventListener('click', function(){
    extraCost('Delivery-total',false,0,21);
    totalCost();
})