import React from "react";
import { useSelector } from "react-redux";

const FormCard = () => {
  const formData = useSelector((state) => state.formData);

  return (
    <div>
      <h2>Form Data</h2>
      <p>Name: {formData.name}</p>
      <p>Age: {formData.age}</p>
      <p>Gender: {formData.gender}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
};

export default FormCard;
