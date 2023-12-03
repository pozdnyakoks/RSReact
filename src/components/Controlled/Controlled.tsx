
import './Controlled.scss';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ref } from 'yup';

type TForm = {
  name: string,
  email: string,
  age: number,
  password: string,
  confirmPassword: string,
  gender: string,
  terms: boolean;
  picture: FileList
}

export const Controlled = () => {

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

  const schema = yup.object().shape({
    name: yup.string().required().matches(/^[A-ZА-ЯЁ].*$/, { message: 'it should start from capital letter' }),
    age: yup.number().required().moreThan(0),
    email: yup.string().required().email(),
    password: yup.string().required().matches(/[0-9]/, getCharacterValidationError("digit"))
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
          console.log(value)
          return value[0] && value[0].size <= FILE_SIZE
        }
      )
      .test(
        "fileFormat",
        "Unsupported Format",
        value => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
      )
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
      resolver: yupResolver(schema),
      mode: 'onChange',
    }
  );

  const onSubmitFunc = (data: TForm) => {
    console.log(data)
    reset();
  }
  return (
    <section>
      <div className="container">
        <h2>Controlled</h2>
        <form onSubmit={handleSubmit(onSubmitFunc)}>

          <div className="block">
            <label htmlFor="name" className="label">Name</label>
            <input className="input" id="name" type="text" {...register("name")} />
            <p className="error">{errors.name?.message}</p>
          </div>

          <div className="block">
            <label htmlFor="age" className="label">Age</label>
            <input className="input" id="age" type="text" {...register("age")} />
            <p className="error">{errors.age?.message}</p>
          </div>

          <div className="block">
            <label htmlFor="email" className="label">Email</label>
            <input className="input" id="email" type="text" {...register("email")} />
            <p className="error">{errors.email?.message}</p>
          </div>

          <div className="block">
            <label htmlFor="password" className="label">Password</label>
            <input className="input" id="password" type="text" {...register("password")} />
            <p className="error">{errors.password?.message}</p>
          </div>

          <div className="block">
            <label htmlFor="checkPassword" className="label">Confirm Password</label>
            <input className="input" id="confirmPassword" type="text" {...register("confirmPassword")} />
            <p className="error">{errors.confirmPassword?.message}</p>
          </div>

          <div className="label">Gender</div>
          <div className="block radios">
            <div className="radio">
              <input className="input" type="radio" id="male" value="male" {...register("gender")} checked />
              <label htmlFor="male" className="label">Male</label>
            </div>
            <div className="radio">
              <input className="input" type="radio" id="female" value="female" {...register("gender")} />
              <label htmlFor="female" className="label">Female</label>
            </div>
          </div>

          <div className="block flex">
            <input type="checkbox" id="terms"  {...register("terms")} />
            <label htmlFor="terms" className="label">Accept Terms and Conditions </label>
            <p className="error">{errors.terms?.message}</p>
          </div>

          <div className="block">
            <label htmlFor="picture" className="label">Upload picture</label>
            <input type="file" id="picture" accept="image/png, image/jpeg" {...register("picture")} />
            <p className="error">{errors.picture?.message}</p>
          </div>
          {/* countries */}

          <button>Submit</button>
        </form>
      </div >
    </section >
  )
}