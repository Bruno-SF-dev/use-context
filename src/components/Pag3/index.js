import { Field, Form, Formik } from "formik";
import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { FormContext } from "../../contexts/formContext";

import { Icons, toast } from "react-toastify";

import "../Pag1/styles.css";
import schema from "../../schema";
import { ErrorsContext } from "../../contexts/errorsContext";

const Pag3 = () => {
  const history = useHistory();
  const toastId = useRef(null);

  const { formState, setFormState } = useContext(FormContext);
  const { formErrors, setFormErrors } = useContext(ErrorsContext);

  const goBack = (form) => {
    setFormState({ ...formState, ...form.values });
    history.push("/last-name");
  };

  const submit = async (form) => {
    if (!form.isValid) {
      const errors = Object.keys(form.errors);

      console.log(errors);

      setFormState({ ...formState, ...form.values });
      setFormErrors([...errors]);

      toast.error("Preencha todos os campos.");

      return history.push("/");
    }

    toastId.current = toast.info("Enviando", {
      icon: () => <div className="loader"></div>,
      autoClose: false,
    });

    setTimeout(async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/facebook/react"
        );

        setFormState({ ...formState, ...form.values });
        alert(JSON.stringify(form.values, null, 2));
        setFormErrors([]);

        toast.update(toastId.current, {
          render: "Enviado.",
          icon: Icons.success,
          type: toast.TYPE.SUCCESS,
          autoClose: 3000,
        });
      } catch (e) {
        setFormState({ ...formState, ...form.values });
        setFormErrors([]);

        toast.update(toastId.current, {
          render: "Falha ao enviar.",
          icon: Icons.error,
          type: toast.TYPE.ERROR,
          theme: "colored",
          autoClose: 8000,
        });

        history.push("/");
      }
    }, 3000);
  };

  return (
    <div className="container">
      <Formik
        initialValues={formState}
        validationSchema={schema}
        validateOnMount
        onSubmit={(values) => {
          setFormState({ ...formState, ...values });
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(form) => (
          <>
            <Form id="end">
              <div className="fields">
                <div
                  className={formErrors.includes("occupation") ? "error" : ""}
                >
                  <label htmlFor="occupation">Profissão:</label>
                  <Field name="occupation" />
                </div>
                <div className={formErrors.includes("level") ? "error" : ""}>
                  <label htmlFor="level">Nível:</label>
                  <Field name="level" />
                </div>
              </div>
            </Form>
            <div className="buttons">
              <button type="button" onClick={() => goBack(form)}>
                Anterior
              </button>

              <button type="button" onClick={() => submit(form)}>
                Enviar
              </button>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Pag3;
