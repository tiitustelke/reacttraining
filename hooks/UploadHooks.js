import {useState} from 'react';

const useUploadForm = (callback) => {
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
  });

  const handleInputChange = (title, text) => {
    // console.log(name, text);
    setInputs((inputs) => {
      return {
        ...inputs,
        [title]: text,
      };
    });
  };
  return {
    handleInputChange,
    inputs,
  };
};

export default useUploadForm;
