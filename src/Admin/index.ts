//LIST ONE PRODUCT
// Import the necessary MSSQL types
const sql = require('mssql');



// Define the type of the event target for the click event
const listproduct = document.getElementById('listone_button') as HTMLButtonElement;

// Add an event listener to the button
listproduct.addEventListener('click', listOneStoredProc);

// Define the function with the types of the parameters and return value
function listOneStoredProc(): void {
  // Create a configuration object for your MSSQL connection
  const config: sql.config = {
    user: 'yourUserName',
    password: 'yourPassword',
    server: 'yourServerName',
    database: 'yourDatabaseName',
  };

  // Create a connection to the database
  sql.connect(config, (err?: sql.MssqlError) => {
    if (err) console.log(err);

    // Create a request object to execute the stored procedure
    const request = new sql.Request();
    request.execute('yourStoredProcName', (err?: sql.MssqlError, result?: sql.IResult<any>) => {
      if (err) console.log(err);

      // Display the result of the stored procedure in the console
      console.log(result);
    });
  });
}

//DISPLAY ALL
// Define the type of the event target for the click event
const displayallproduct = document.getElementById('displayall_button') as HTMLButtonElement;

// Add an event listener to the button
displayallproduct.addEventListener('click', displayAllStoredProc);

// Define the function with the types of the parameters and return value
function displayAllStoredProc(): void {
  // Create a configuration object for your MSSQL connection
  const config: sql.config = {
    user: 'yourUserName',
    password: 'yourPassword',
    server: 'yourServerName',
    database: 'yourDatabaseName',
  };

  // Create a connection to the database
  sql.connect(config, (err?: sql.MssqlError) => {
    if (err) console.log(err);

    // Create a request object to execute the stored procedure
    const request = new sql.Request();
    request.execute('yourStoredProcName', (err?: sql.MssqlError, result?: sql.IResult<any>) => {
      if (err) console.log(err);

      // Display the result of the stored procedure in the console
      console.log(result);
    });
  });
}
//update product
interface ProductData {
    ProductId: string;
    ProductName: string;
    Description: string;
    Category: string;
    Price: number;
    ImageURL: string;
    CreatedAt: string;
  
  }
  
  const productid = document.querySelector('#product-id') as HTMLInputElement;
  const productname = document.querySelector('#product-name') as HTMLInputElement;
  const description = document.querySelector('#product_description') as HTMLInputElement;
  const category = document.querySelector('#prod_category') as HTMLInputElement;
  const price = document.querySelector('#prod_price') as HTMLInputElement;
  const imageurl = document.querySelector('#productimageurl') as HTMLInputElement;
  const createdat = document.querySelector('#product_CreatedAt') as HTMLInputElement;
  
  const updatebtn = document.getElementById('#updateproduct_btn') as HTMLButtonElement;
  const form = document.getElementById('#add-product-form') as HTMLFormElement;
  
  form.addEventListener('submit', async (event: Event) => {
    event.preventDefault();
        const data: ProductData = {
          ProductId: (document.querySelector('#product-id') as HTMLInputElement).value,
          ProductName: (document.querySelector('#product-name') as HTMLInputElement).value,
          Description: (document.querySelector('#product_description') as HTMLInputElement).value,
          Category: (document.querySelector('#prod_category') as HTMLSelectElement).value,
          Price: parseFloat((document.querySelector('#prod_price') as HTMLInputElement).value),
          ImageURL: (document.querySelector('#product_imageurl') as HTMLInputElement).value,
          CreatedAt: (document.querySelector('#product_CreatedAt') as HTMLInputElement).value,
          
        };
      
       
      
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add product');
      }
  
      alert('Product added successfully!');
    } catch (error) {
      console.error(error);
    }
  });
   

//Change Order status
 
const ChangeStatus = document.getElementById('updateorders_button') as HTMLButtonElement;

ChangeStatus.addEventListener('click', listOneStoredProc);

const sql = require('mssql');

const config = {
  user: 'yourUserName',
  password: 'yourPassword',
  server: 'yourServerName',
  database: 'yourDatabaseName',
};
function updateOrderStatus(req, res) {
  const orderId = req.body.orderId;

  // Create a new SQL connection
  sql.connect(config, function (err) {
    if (err) console.log(err);

    // Create a new SQL request
    const request = new sql.Request();

    // Set the name of the stored procedure to call
    request.input('orderId', sql.Int, orderId);
    request.execute('updateOrderStatus', function (err, recordset) {
      if (err) console.log(err);

      // Send a response back to the client
      res.status(200).send('Order status updated');
    });
  });
}

//delete a user
const softDeleteUser = document.getElementById('deleteuser_button') as HTMLButtonElement;

softDeleteUser.addEventListener('click',  deleteUser);

function deleteUser(): void {
  // Get the user ID from your HTML page
  const userIdInput = document.getElementById('userId') as HTMLInputElement;
  const userId = userIdInput.value;

  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Define the URL for the request
  const url = '/softDeleteUser';

  // Define the data to send in the request body
  const data = JSON.stringify({ userId });

  // Set the request method and content type header
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  // Handle the response from the server
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };

  // Send the request
  xhr.send(data);
}
const sql = require('mssql');

const config = {
  user: 'yourUserName',
  password: 'yourPassword',
  server: 'yourServerName',
  database: 'yourDatabaseName',
};

function softDeleteUser(req, res) {
  const userId = req.body.userId;

  // Create a new SQL connection
  sql.connect(config, function (err) {
    if (err) console.log(err);

    // Create a new SQL request
    const request = new sql.Request();

    // Set the name of the stored procedure to call
    request.input('userId', sql.Int, userId);
    request.execute('softDeleteUser', function (err, recordset) {
      if (err) console.log(err);

      // Send a response back to the client
      res.status(200).send('User soft deleted');
    });
  });
}
