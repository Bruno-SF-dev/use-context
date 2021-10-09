import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

import "../Pag1/styles.css";

const Pag2 = () => {
  return (
    <div class="container">
      <Formik
        initialValues={{
          last_name: "",
        }}
      >
        <Form>
          <label htmlFor="last_name">Sobrenome</label>
          <Field name="last_name" />
        </Form>
      </Formik>
      <Link to="/">Anterior</Link>
    </div>
  );
};

export default Pag2;
