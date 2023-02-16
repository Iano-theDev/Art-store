
let loginBtn = document.getElementById("login-btn")! as HTMLButtonElement;
let form = document.querySelector(".form")! as HTMLDivElement;


loginBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let email = document.getElementById("email")! as HTMLInputElement;
    let password = document.getElementById("password")! as HTMLInputElement;
    
   if (email.value === "" || password.value === "") {

        let error = document.createElement("p");
        error.innerHTML = "Please fill all fields";
        error.style.color = "red";
        error.style.fontSize = "12px";
        form.appendChild(error);
        setTimeout(() => {
            error.remove();
        }, 3000);
    }else{
        let authData = await login(email.value, password.value);
        if (authData) {
            let user = authData['user']
            let token = authData['token']
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);
            // if (user.is_admin === true) {
            //     window.location.href = "../admin/admin.html";
            // } else {
            window.location.href = "../../../index.html";
            
        }
    }

   

});



const login = async (email: string, password: string) => {
    let response = await fetch("https://localhost:4000/users/login", {
        method: "POST",
        body: JSON.stringify({
            Email:email,
            Password:password
        }),
        headers: {
            "content-type": "application/json"
        }
    });
    
    if (response.status === 401) {
        let error = document.createElement("p");
        error.innerHTML = "Invalid email or password";
        error.style.color = "red";
        error.style.fontSize = "12px";
        form.appendChild(error);
        setTimeout(() => {
            error.remove();
        }, 3000);
    } else if (response.status === 200) {
        return await response.json();
    } else {
        
        let error = document.createElement("p");
        error.innerHTML = "An error occured";
        error.style.color = "red";
        error.style.fontSize = "12px";
        form.appendChild(error);
        setTimeout(() => {
            error.remove();
        }, 3000);
    }
    }


