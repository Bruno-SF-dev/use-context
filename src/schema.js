import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().required(),
  last_name: Yup.string().required(),
  age: Yup.string().required(),
  country: Yup.string().required(),
  city: Yup.string().required(),
  occupation: Yup.string().required(),
  level: Yup.string().required(),
});
