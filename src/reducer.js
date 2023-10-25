export const initialState={
    orders: [],
    basket: [],
    user: null,
};
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item],
            };
            case 'UPDATE_QUANTITY':
              return {
                ...state,
                basket: state.basket.map(item => {
                  if (item.id === action.id) {
                    return {
                      ...item,
                      quantity: item.quantity + action.quantity,
                    };
              }
            return item;
            }),
            };
            case 'ADD_TO_ORDER':
                return {
                  ...state,
                  orders: [...state.orders, action.item],
                };
              case 'REMOVE_FROM_ORDER':
                return {
                  ...state,
                  orders: state.orders.filter(item => item.id !== action.id),
                };

        case 'REMOVE_FROM_BASKET':
            
        const itemIndex = state.basket.findIndex(item => item.id === action.id);

        if (itemIndex !== -1) {
          const updatedBasket = [...state.basket];
          const item = updatedBasket[itemIndex];
  
          if (item.quantity > 1) {
            item.quantity -= 0.5;
          } else {
            updatedBasket.splice(itemIndex, 1);
          }
  
          return {
            ...state,
            basket: updatedBasket,
          };
        }
            
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
            case 'REMOVE_ALL_FROM_BASKET':
                return {
                    ...state,
                    basket: [],
                };
                case 'ADD_BASKET_TO_ORDERS':
                    return {
                      ...state,
                      orders: [...state.orders, ...state.basket],
                      basket: [],
                    };
                    case 'REMOVE_SINGLE_ITEM_FROM_ORDERS':
                        const itemIndexToRemove = state.orders.findIndex(
                          (orderItem) => orderItem.id === action.id
                        );
                  
                        if (itemIndexToRemove >= 0) {
                          const newOrders = [
                            ...state.orders.slice(0, itemIndexToRemove),
                            ...state.orders.slice(itemIndexToRemove + 1),
                          ];
                  
                          return {
                            ...state,
                            orders: newOrders,
                          };
                        } else {
                          console.log(`Can't remove product (id: ${action.id}) as it's not in the orders!`);
                          return state;
                        }
                
        default: 
            return state;    
    }
}

export default reducer ;