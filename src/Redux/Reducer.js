
var initialData = {
    name: "manjari",
  };
  const basicReducer = (storedata = initialData, action) => {
    if (action.type === "name") {
      return {
        name: action.username,
      };
    }
    return storedata;
  };
  
  export default basicReducer;