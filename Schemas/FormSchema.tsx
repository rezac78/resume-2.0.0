import * as yup from "yup";

export const SchemaForm = yup.object({
        user_name: yup.string().required("نمی شود خالی باشد  It cannot be empty Es darf nicht leer sein"),
        user_email: yup.string().email().required("نمی شود خالی باشد It cannot be empty Es darf nicht leer sein"),
        message: yup.string().required("نمی شود خالی باشد It cannot be empty Es darf nicht leer sein"),
});