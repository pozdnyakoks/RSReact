import * as yup from "yup";
import { ref } from 'yup';

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

yup.addMethod(yup.string, 'email', function validateEmail() {
  return this.matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {
    message: 'Please type correct email',
    name: 'email',
    excludeEmptyString: true,
  });
});

const FILE_SIZE = 102400;
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/png"
];

export const schema = yup.object().shape({
  name: yup.string().required().matches(/^[A-ZА-ЯЁ].*$/, { message: 'it should start from capital letter' }),
  age: yup.number().required().moreThan(0),
  email: yup.string().required().email(),
  password: yup.string().required()
    .matches(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|=]/, getCharacterValidationError("special"))
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  confirmPassword: yup.string()
    .required("Please re-type your password")
    .oneOf([ref("password")], "Passwords does not match").required(),
  gender: yup.string().required(),
  terms: yup.bool().required().oneOf([true], "You must accept the terms and conditions"),
  picture: yup
    .mixed<FileList>()
    .required("A file is required")
    .test(
      "fileSize",
      "Max allowed size is 100KB",
      (value: FileList) => {
        return value[0] && value[0].size <= FILE_SIZE
      }
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      value => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
    )
});