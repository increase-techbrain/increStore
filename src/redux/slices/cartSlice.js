import {createSlice} from "@reduxjs/toolkit";

const loadCart = ()=>{
    try{
        const data = localStorage.getItem("cart");
        return data ? JSON.parse(data): [];
    }catch{
        return [];
    }
};

const saveCart = (items) =>{
    localStorage.setItem("cart", JSON.stringify(items));

};


const initialState ={
    items: loadCart(),    
};

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers:{

        addToCart:(state, action) =>{
            const exist = state.items.find(
                (item)=>item.id === action.payload.id
            );

            if (exist){
                exist.quantity  +=1;
            }else{
                state.items.push({...action.payload, quantity:1})
            }
            saveCart(state.items);
        },

        removeFromCart:(state, action)=>{
            state.items = state.items.filter(
                (item)=> item.id !== action.payload
            );
            saveCart(state.items)
        },

        increaseQty: (state, action) =>{
            const item = state.items.find(
                (i) => i.id === action.payload
            );

            if (item) item.quantity +=1;

             saveCart(state.items)

        },

        decreaseQty: (state, action) =>{
            const item = state.items.find(
                (i)=> i.id === action.payload
            );

            if (item && item.quantity >1){
                item.quantity -=1; 

                  saveCart(state.items)
            } 
          
            else{
                state.items = state.items.filter(
                   (i) => i.id !== action.payload 
                )

            }


        },

        clearCart: (state)=>{
            state.items = [];
            localStorage.removeItem("cart")
        }

    },
});

export const {
    addToCart,
    removeFromCart,
    decreaseQty,
    increaseQty,
} = cartSlice.actions;

export default cartSlice.reducer;
