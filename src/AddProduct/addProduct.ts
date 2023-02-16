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

const btn = document.getElementById('#submit') as HTMLButtonElement;
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
 
  

//  form.addEventListener('click', () => {
//    const ProductId = productid.value
//     const ProductName = productname.value
//     const Description = description.value
//     const Category = category.value
//     const Price = price.value
//     const ImageURL = imageurl.value
//     const CreatedAt = createdat.value

//     console.log(ProductId,ProductName,Description,Category,Price,ImageURL,CreatedAt);
    
//  });













