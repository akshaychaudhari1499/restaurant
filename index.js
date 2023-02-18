
function getMenu() {
    fetch("https://free-food-menus-api-production.up.railway.app/burgers").then((response) => response.json()).then((response) => {
        for (item in response) {           
            let dp = document.getElementById("pr");          

            dp.innerHTML += `<div class="card" style="width: 18rem;">
                <img src="${response[item].img}" class="card-img-top" alt="response[item]">
                <div class="card-body" style="padding: 0.5rem 0.5rem;" >   
                <span style="display:flex ;justify-content:space-between;color:black"> 
                <p class="card-title" >${response[item].name}</p>
                <p class="card-text">Price : ${response[item].price}</p>
                </span>      
                </div>   
               </div><br/>`

        }

       
    }



    )
}

getMenu();

function placeOrder(){

    console.log('Hello Mr Akshay');

    const takeOrder =new Promise((resolve, reject) => {
        setTimeout( 
             ()=>{ 
                let burgers = {}         
                console.log('placing order,please wait...');
                        fetch("https://free-food-menus-api-production.up.railway.app/burgers").then((response) => response.json()).then((response) => {
                                         
                            for(let i = 0; i <3; i++){
                            burgers[i] = response[i].name;
                             }
                            //console.log(burgers);
                        })
                        resolve(burgers);                  
        
        },2500)
        })
        
        
        takeOrder.then(
            response => {
            console.log("You have ordered for these burgers")
            console.log(response)
            if(response){
            const orderPrep=new Promise((resolve, reject) => {   
                setTimeout(() => {
                    let order={
                        order_status:true,
                        paid:false
                    }
                    resolve(order);        
                },1500)      
                })
                
            orderPrep.then(response => {
                console.log("You have ordered for burgers and the payment is pending");
                console.log(response)
                if(response){
                    const payOrder=new Promise((resolve, reject) => {  
                    setTimeout(() => {
                        let order={
                            order_status:true,
                            paid:true
                        }
                        resolve(order);
                    
                    },1000)
                })
                  payOrder.then(response => {
                    console.log("Payment Recieved ")
                    console.log(response)
                   if(response){  
                    function thankyouFnc(){ alert("Thanks for the order ! Your order has been placed")}
                    thankyouFnc()}})}})}})
        
                          
           
                  
        
        
        // function placeOrder(){
        //     let order={order_status:true,
        //         paid:true}
        // console.log('placing the order')
        //     setTimeout(
        //         function takeOrder() {
        //             console.log('place order')
        //             fetch("https://free-food-menus-api-production.up.railway.app/burgers").then((response) => response.json()).then((response) => {
        //                 let burgers = {}
                   
        //                 for(let i = 0; i <3; i++){
        //                 burgers[response[i].id] = response[i].name;
        //             }
        //             console.log(burgers)
        //         return burgers
                
                
        //         })
        //         },2500)
        
        // console.log("checking the preparation of the orders...")
        //     setTimeout(function orderPrep(){
        
        //     order.order_status=true;
        //     order.paid=true;
        
        // console.log(order);
        // return order;
        
        //     },1500)
            
        //     console.log("checking the payment...")
        //     setTimeout(function payOrder(){
        //         order.order_status=true;
        //         order.paid=true;
            
        // console.log(order);
        // return order;
        
        //     },1000)
        
        //     if (order.paid){
        //         thankyouFnc()
        //     }
           
           
        //     function thankyouFnc(){
        //         alert("Thank you ! Your order has been placed")
        //     }
        
        // }



}
