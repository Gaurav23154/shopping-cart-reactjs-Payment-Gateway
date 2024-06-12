
const productsArray=[
    {
        id:'1',
    title:'Coffee',
    price:80  
    },
    {
        id:'2',
    title:'Sunglasses',
    price: 453
    },
    {
        id:'3',
    title:'Camera',
    price:24599  
    }
]
function getProductData(id){
    let productData=productsArray.find(product => product.id === id)
    if(productData==undefined){
        console.log("Product data does not exist for ID: "+ id);
        return undefined;
    }
    return productData;    
}
export { productsArray,getProductData}