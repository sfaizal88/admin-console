import * as yup from "yup"

export const schema = yup
  .object({
    email: yup.string()
    .email('Invalid email format')
    .required("Email address required")
    .test('is-aelf-email', 'Allow only aelf email', (value) => {
        if (!value) return true; // If value is empty, let required validation handle it
        return value.endsWith('@aelf.io');
    }),
});