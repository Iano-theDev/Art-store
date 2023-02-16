/* 

function ChangeStatus(){
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
} */
