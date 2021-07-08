let initialState = {
    categories: [
      {name:'ELECTRONICS',displayName:'ELECTRONICS 💻',description:'ELECTRONICS'},
      {name:'Food',displayName:'Food 🍽',description:'Food'},
      {name:'all categories',displayName:'all categories',description:'all categories'},
    ],
    activeCategory:'all categories',
  }


  const reducerCategory = (state = initialState, action) => {
    let { type, payload } = action;
  
    switch (type) {
      case 'active':
        let activeCategory = payload;
        let categories = state.categories;
        return { activeCategory, categories };
  
      case 'RESET':
        return initialState;
  
      //   case "all categories":
      // activeCategory = "all categories";
      // categories = initialState.categories;
      // return { activeCategory, categories };

      default:
        return state;
    }
  }
  
  export const setActiveCategory = (category) => {
    return {
      type: 'active',
      payload: category
    }
  }

  export const allProducts = () => {
    return {
      type: "all categories",
    };
  };
  
  export const reset = () => {
    return {
      type: 'RESET'
    }
  }
  
  export default reducerCategory;