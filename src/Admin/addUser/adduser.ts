const AddUser = document.getElementById('adduser') as HTMLFormElement;
const delUserbtn = document.getElementById('delete') as HTMLInputElement;
const addUserbtn = document.getElementById('submit') as HTMLInputElement;


delUserbtn.addEventListener('click', async (e) => {
    e.preventDefault();

;

    const Email = document.getElementById('email') as HTMLInputElement;

    


    const Users = await deleteUsers(Email.value)
    
})

const deleteUsers = async(Email:string) => {
    console.log(Email);
    let response = await fetch("http://localhost/4000/users/deactivateuser",{
        method:"POST",
        body: JSON.stringify({
            
            Email,
            

        })
        
    })
    if(response.status === 200){
        let Users = await response.json();
        return Users;
    } else{
        console.log("error");
        
    }
    
}





