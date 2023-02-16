"use strict";
const productname = document.getElementById('product-name');
const productid = document.getElementById('product-id');
const price = document.getElementById('prod_price');
const category = document.getElementById('prod_category');
const btn = document.getElementById('addbtn');
const form = document.getElementById('add-product-form');
btn.addEventListener('click', () => {
    const ProductName = productname.value;
    const ProductId = productid.value;
    const Price = price.value;
    const Category = category.value;
    console.log(ProductName, ProductId, Price, Category);
});
