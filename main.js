const container = document.getElementById('container')

fetch("https://fakestoreapi.com/products")
    .then(Response => Response.json())
    .then(data => {console.log(data);
        for (let i = 0; i < data.length; i++) {
            container.insertAdjacentHTML("afterbegin",
            `<div class="box">
            <img class="image" src="${data[i].image}" alt="">
            <h5>${data[i].title}</h5>
            <h4>${data[i].price}$</h4>
            </div>
            `)
            
        }
    })