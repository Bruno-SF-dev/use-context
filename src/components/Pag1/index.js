import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

import "./styles.css";

const Pag1 = () => {
  return (
    <div class="container">
      <Formik
        initialValues={{
          name: "",
        }}
      >
        <Form>
          <label htmlFor="name">Nome</label>
          <Field name="name" />
        </Form>
      </Formik>
      <Link to="/last-name">Próxima</Link>
    </div>
  );
};

export default Pag1;
