const container = document.getElementById('container')
const UserName = document.getElementById('UserName')
const Email = document.getElementById('Email')
const Password = document.getElementById('Password')
const form_signup = document.getElementById('form-signup')

function products(){
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
}


    async function signUp(){
        let userName = UserName.value
        let email = Email.value
        let password = Password.value
        let found = false
        let text = ""
        if (userName.length <= 5) {
            text = "the username is less then 5";
            found = true
        } 
        if (password.length < 8) {
            text += found? " and the password is less then 8":"the password is less then 8"
            found = true
        } 
        if(found){
            alert(text)
            form_signup.action = "index.html"
        } else{
            const UserName = document.getElementById('UserName')
const Email = document.getElementById('Email')
const Password = document.getElementById('Password')
try {
            let response = await fetch("https://655309665449cfda0f2e03c5.mockapi.io/Names", {
                method: 'POST',
                body: JSON.stringify({
                    userName: Password.value,
                    email:Email.value,
                    password:password.value
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            let data = await response.json()
            console.log(data);
        }catch(error){
            console.error(`Download error: ${error.message}`);
        }

        
            // form_signup.action = "sginin.html"
        }
    }