
// let drinks = []
// let drinksPrices = []


// document.getElementById("drink1").addEventListener("click", añadirMartini)
// document.getElementById("drink2").addEventListener("click", añadirCappuccino)
// document.getElementById("drink3").addEventListener("click", añadirLatte)
// document.getElementById("drink4").addEventListener("click", añadirMojito)
// document.getElementById("meal1").addEventListener("click", añadirMeal1)
// document.getElementById("meal2").addEventListener("click", añadirMeal2)
// document.getElementById("meal3").addEventListener("click", añadirMeal3)
// document.querySelector("html").addEventListener("change", getTotal)



//  function añadirMartini(){
//     martini = document.getElementById("drink1")
    

//      if (martini.checked == true){
//         nombre = document.getElementById("martini").textContent
//         precio = document.getElementById("precioMartini").textContent
//          drinks.push(nombre)
//          drinksPrices.push(precio)
//          document.getElementById("drink").innerText =  `${drinks.join('\n')}`
//          document.getElementById("drinkPrice").innerText = `${drinksPrices.join('\n')}`
       
//      }
        
//      }
 

//      function añadirCappuccino() { 
//         cappuccino = document.getElementById("drink2")
//         if (cappuccino.checked == true){
//             nombre2 = document.getElementById("cappuccino").textContent
//             precio2 = document.getElementById("precioCappuccino").textContent
//              drinks.push(nombre2)
//              drinksPrices.push(precio2)
//              document.getElementById("drink").innerText = `${drinks.join('\n')} `
//              document.getElementById("drinkPrice").innerText = `${drinksPrices.join('\n')}`
           
//      }
//       }

//       function añadirLatte() { 
//         latte = document.getElementById("drink3")
//         if (latte.checked == true){
//             nombre2 = document.getElementById("latte").textContent
//             precio2 = document.getElementById("precioLatte").textContent
//              drinks.push(nombre2)
//              drinksPrices.push(precio2)
//              document.getElementById("drink").innerText = `${drinks.join('\n')} `
//              document.getElementById("drinkPrice").innerText = `${drinksPrices.join('\n')}`
           
//      }
//       }

//       function añadirMojito() { 
//         mojito = document.getElementById("drink4")
//         if (mojito.checked == true){
//             nombre2 = document.getElementById("mojito").textContent
//             precio2 = document.getElementById("precioMojito").textContent
//              drinks.push(nombre2)
//              drinksPrices.push(precio2)
//              document.getElementById("drink").innerText = `${drinks.join('\n')} `
//              document.getElementById("drinkPrice").innerText = `${drinksPrices.join('\n')}`
            

//      }
//       }


//       function añadirMeal1() { 
//         meal1 = document.getElementById("meal1")
//         if (meal1.checked == true){
//             nombre2 = document.getElementById("nombreMeal1").textContent
//             precio2 = document.getElementById("precioMeal1").textContent
//              drinks.push(nombre2)
//              drinksPrices.push(precio2)
//              document.getElementById("drink").innerText = `${drinks.join('\n')} `
//              document.getElementById("drinkPrice").innerText = `${drinksPrices.join('\n')}`
             

//      }
//       }


//       function añadirMeal2() { 
//         meal2 = document.getElementById("meal2")
//         if (meal2.checked == true){
//             nombre2 = document.getElementById("nombreMeal2").textContent
//             precio2 = document.getElementById("precioMeal2").textContent
//              drinks.push(nombre2)
//              drinksPrices.push(precio2)
//              document.getElementById("drink").innerText = `${drinks.join('\n')} `
//              document.getElementById("drinkPrice").innerText = `${drinksPrices.join('\n')}`
            

//      }
//       }

      
//       function añadirMeal3() { 
//         meal2 = document.getElementById("meal3")
//         if (meal3.checked == true){
//             nombre2 = document.getElementById("nombreMeal3").textContent
//             precio2 = document.getElementById("precioMeal3").textContent
//              drinks.push(nombre2)
//              drinksPrices.push(precio2)
//              document.getElementById("drink").innerText = `${drinks.join('\n')} `
//              document.getElementById("drinkPrice").innerText = `${drinksPrices.join('\n')}`
             

//      }
//       }


//       function getTotal(){
//         let total = 0;
      
//         for (let i = 0; i < drinksPrices.length; i++) {
//           let num = Number(drinksPrices[i].replace("$", "").replace(/\./g, ""));
//           total += num;
//         }
      
//         let formattedTotal = "$" + total.toLocaleString("es-CL", {
//           minimumFractionDigits: 0,
//           maximumFractionDigits: 0,
//         });
      
//         document.getElementById("finalPrice").innerText = formattedTotal;
//       }


$(document).ready(function () {

  let tragos = []

  $(".tragos input").on("click", (event)=>{
    let input = event.target
    let estado = input.checked
    let nombre = input.dataset.nombre
    let precio = Number(input.dataset.precio)
    if(estado){
      tragos.push({nombre, precio})
    } else{
      tragos = tragos.filter(trago => trago.nombre != nombre)
    }
    actualizarOrden(tragos)
  } )

  function actualizarOrden(orden){

    $("#detailsOrder")
    let filas = ""
    let total = 0
    orden.forEach(trago => {
      total += trago.precio
      let formattedPrice = "$" + trago.precio.toLocaleString("es-CL", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        
        })
      filas+= `
       <tr>
          <td>${trago.nombre}</td>
          <td style="float: right;">${formattedPrice}</td>
       </tr>
      `
      
      
    });

    let formattedTotal = "$" + total.toLocaleString("es-CL", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    
    })
    $("#detailsOrder").html(filas)
    $("#finalPrice").text(formattedTotal)

    


  }

});


