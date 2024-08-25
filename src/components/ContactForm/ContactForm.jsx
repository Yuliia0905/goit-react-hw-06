import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";

const phoneRegExp = /^[\d-]+$/;
const ContactsValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must have min 3 characters")
    .max(50, "Contact name must be less than 50 characters"),
  number: Yup.string()
    .matches(phoneRegExp, "Invalid phone number!")
    .required("Phone number is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactsValidationSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Ivan Petrov"
          />
          <ErrorMessage
            className={css.errorText}
            name="name"
            component="span"
          />
        </label>
        <label className={css.label}>
          Number
          <Field
            className={css.input}
            type="tel"
            name="number"
            placeholder="050-123-45-67"
          />
          <ErrorMessage
            className={css.errorText}
            name="number"
            component="span"
          />
        </label>
        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
