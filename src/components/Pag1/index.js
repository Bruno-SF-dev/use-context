import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FormContext } from "../../contexts/formContext";

import "./styles.css";

const Pag1 = () => {
  const history = useHistory();

  const { formState, setFormState } = useContext(FormContext);

  const next = (form) => {
    setFormState({ ...formState, ...form.values });
    history.push("/last-name");
  };

  return (
    <div class="container">
      <Formik initialValues={formState}>
        {(form) => (
          <>
            <Form>
              <div className="fields">
                <div>
                  <label htmlFor="name">Nome:</label>
                  <Field name="name" />
                </div>
                <div>
                  <label htmlFor="last_name">Sobrenome:</label>
                  <Field name="last_name" />
                </div>
                <div>
                  <label htmlFor="age">Idade:</label>
                  <Field name="age" />
                </div>
              </div>
            </Form>
            <div className="buttons">
              <button type="button" className="next" onClick={() => next(form)}>
                Próxima
              </button>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Pag1;
