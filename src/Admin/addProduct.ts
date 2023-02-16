
let productSection = document.getElementById("div_products") as HTMLDivElement
interface Products{
  ProductId: string;
  ProductName: string;
  Description: string;
  Category: string;
  Price: number;
  ImageURL: string;
  CreatedAt: string;
  }
let Product:Products[]=[]


function allProducts(){
    fetch('http://localhost:3002/api/cartitems/8fe3f01c-5d55-41ca-93ef-a84dcf27c2f8',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }

        }).then(res => res.json())
        .then(data => {
            this.items = data;

        })
}

function getProducts(){
    fetch("http://localhost:4000/products")
    .then((response) => response.json())
    .then((data) => {
        Product = data
        return data;
    }).catch(error => console.error(error));
}
console.log("helo")
getProducts()

function updateProduct(){

}

function displayProducts(){
    Product.forEach((a)=>{
        let html =`
        <div class="todo" onclick="">
            <h1>${a.ProductName}</h1>
            <p>${a.Price}</p>
            <p>${a.Category}</p>
        </div>
        `
    console.log(Product)
        productSection.innerHTML += html
    })
}
displayProducts()

// function showProducts(){
//     Task.forEach((a) => {
//         let html = `
//                   <div class="task" style ="display:flex;flex-direction:column;gap:5px; margin-top:10px;" onclick="popTask(${a.id})" >                      
//                           <img src="${a.TaskImage}" style="width:98%;height:100px">
//                           <p>${a.dates}</p>  
//                           <p>${a.TaskName}</p>   
//                           <p>${Math.abs(a.Days)} Streaks</p>  
                                      
//                   </div>`;
  
//         activities.innerHTML += html;
//       });
// }

