const container = document.getElementById('container')
const UserName = document.getElementById('UserName')
const Email = document.getElementById('Email')
const Password = document.getElementById('Password')
const form_signup = document.getElementById('form-signup')
products()
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

let API = "https://655309665449cfda0f2e03c5.mockapi.io/users"
async function signUp(){
    // var errorm = document.getElementById("error")
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
    } else{

        try {
        let response = await fetch(API, {
            method: 'POST',
            body: JSON.stringify({
                userName,
                email,
                password
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

        window.location.replace("sginin.html")
    }
}

async function  SignIn() {
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let form_signin = document.getElementById('form-signin')
    email = email.value
    password = password.value
    if (password.length < 8) {
        alert("the password is less then 8")
    }else{
        let response = await fetch(API);
        let data = await response.json()
        let user = data.find(user => {
            return user.email === email && user.password === password;
        })
        console.log(user);
        if (user === undefined){
            alert("the email or password is not correct")
        }else{
            window.location.replace("Home.html")
            // form_signin.href = "Home.html"
        }
    }

}
