
import {createContext,useState} from 'react';
import { productsArray , getProductData} from './ProductStore';

 export const CartContext=createContext(
    {
        items:[],
        getProductQuantity: () =>{},
        addOneToCart: ()=>{},
        removeOneFromCart : () => {},
        deleteFromCart : () => {},
        getTotalCost: () => {}
    }
);
export function CartProvider({children}){
    const [cartProducts,setCartProducts] =useState([]);
     
    function getProductQuantity(id) {
      const quantity=cartProducts.find(product => product.id === id )?.quantity
        
        if(quantity === undefined){
            return 0;
        }
        return quantity;
    }
    function addOneToCart(id) {
        const quantity=getProductQuantity(id);
        if(quantity === 0){
            //product is not in cart
            setCartProducts([
                ...cartProducts,
                {
                    id:id,
                    quantity:1
                }
            ]
        )
        }
        else{
           setCartProducts(
             
                cartProducts.map(
                    product => 
                  product.id === id
                    ?{...product, quantity : product.quantity + 1 } // if statement is true
                    : product 
                )
           )
        }
    }
     function removeOneFromCart (id) {
        const quantity = getProductQuantity(id);
        if(quantity == 1){
            deleteFromCart(id);
        }
        else{
            setCartProducts(
                cartProducts.map(
                    product => 
                    product.id === id
                    ? {...product, quantity  : product.quantity - 1 }
                    :product
                )
            )
        }
     }
    function deleteFromCart(id) {
        setCartProducts(
            cartProducts => 
                cartProducts.filter(currentProduct=>{
                    return currentProduct.id != id;
                })
        )
    }
     
    function getTotalCost() {
        let totatCost=0;
        cartProducts.map((cartItem)=>{
           const productData = getProductData(cartItem.id);
           totatCost += (productData.price *  cartItem.quantity);
        });
        return totatCost;
    }
    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;