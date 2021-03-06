import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ErrorsContext } from "../../contexts/errorsContext";
import { FormContext } from "../../contexts/formContext";

import "../Pag1/styles.css";

const Pag2 = () => {
  const history = useHistory();

  const { formState, setFormState } = useContext(FormContext);
  const { formErrors } = useContext(ErrorsContext);

  const next = (form) => {
    setFormState({ ...formState, ...form.values });
    history.push("/age");
  };

  const goBack = (form) => {
    setFormState({ ...formState, ...form.values });
    history.push("/");
  };

  return (
    <div className="container">
      <Formik initialValues={formState}>
        {(form) => (
          <>
            <Form>
              <div className="fields">
                <div className={formErrors.includes("country") ? "error" : ""}>
                  <label htmlFor="country">País:</label>
                  <Field name="country" />
                </div>
                <div className={formErrors.includes("city") ? "error" : ""}>
                  <label htmlFor="city">Cidade:</label>
                  <Field name="city" />
                </div>
              </div>
            </Form>
            <div className="buttons">
              <button
                type="button"
                className="go-back"
                onClick={() => goBack(form)}
              >
                Anterior
              </button>
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

export default Pag2;
