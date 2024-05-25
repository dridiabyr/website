import React, { createContext, useState } from "react";
import { food_list, restaurantList } from "../../assets/assets";
export const StoreContext = createContext(null);

const StorecontextProvider = (props) => {
  const [order, setOrder] = useState([])

  //   const orderButton = (newValue) => {
  // // adding to the state managment the new value
  // setOrder(old value with new value) respon
  // // navigate with useNavigate to order page
  //   }

  const contextValue = {
    food_list: food_list,
    restaurantList: restaurantList,
    order,
    setOrder,
    // orderButton,
  };


  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StorecontextProvider;
