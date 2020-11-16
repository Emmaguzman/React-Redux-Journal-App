const { useState } = require("react");

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const reset = (newFormState=initialState) => {
    setValues(initialState);
  };
  const handleInputChange = ({ target }) => {
    
    setValues({
      ...values,
      [target.name]: target.value,
    });
    //console.log(values);
  };
  return [values, handleInputChange, reset];
};
