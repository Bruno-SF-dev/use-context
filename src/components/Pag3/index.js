import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FormContext } from "../../contexts/formContext";

import "../Pag1/styles.css";

const Pag3 = () => {
  const history = useHistory();

  const { formState, setFormState } = useContext(FormContext);

  const goBack = (form) => {
    setFormState({ ...formState, ...form.values });
    history.push("/last-name");
  };

  return (
    <div class="container">
      <Formik
        initialValues={formState}
        onSubmit={(values) => {
          setFormState({ ...formState, ...values });
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(form) => (
          <>
            <Form id="end">
              <div className="fields">
                <div>
                  <label htmlFor="occupation">Profissão:</label>
                  <Field name="occupation" />
                </div>
                <div>
                  <label htmlFor="level">Nível:</label>
                  <Field name="level" />
                </div>
              </div>
            </Form>
            <div className="buttons">
              <button type="button" onClick={() => goBack(form)}>
                Anterior
              </button>
              <button type="submit" form="end">
                Finalizar
              </button>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Pag3;
