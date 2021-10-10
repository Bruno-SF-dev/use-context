import { useContext } from "react";
import { FormContext } from "../../contexts/formContext";

import "./styles.css";

const ShowState = () => {
  const { formState } = useContext(FormContext);

  return (
    <div className="state">
      <p>
        <span>name:</span> {formState.name}
      </p>
      <p>
        <span>last_name:</span> {formState.last_name}
      </p>
      <p>
        <span>age:</span> {formState.age}
      </p>
      <p>
        <span>country:</span> {formState.country}
      </p>
      <p>
        <span>city:</span> {formState.city}
      </p>
      <p>
        <span>occupation:</span> {formState.occupation}
      </p>
      <p>
        <span>level:</span> {formState.level}
      </p>
    </div>
  );
};

export default ShowState;
