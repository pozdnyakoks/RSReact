
import './Controlled.scss';
// import { useForm } from "react-hook-form";
// import { TForm } from '../../utils/types';
// import { yupResolver } from "@hookform/resolvers/yup";
// import { schema } from '../../utils/validation';

export const Controlled = () => {

  // const { register, handleSubmit, formState: { errors }, reset } = useForm(
  //   {
  //     resolver: yupResolver(schema),
  //     mode: 'onChange',
  //   }
  // );

  // const onSubmitFunc = (data: TForm) => {
  //   console.log(data)
  //   reset();
  // }

  return (
    <section>
      <div className="container">
        <h2>Controlled</h2>
      </div >
    </section >
  )
}
{/* <form onSubmit={handleSubmit(onSubmitFunc)}>

  <div className="block">
    <label htmlFor="name" className="label">Name</label>
    <input className="input" id="name" type="text" {...register('name')} />
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
    <label htmlFor="picture" className="label" style={{ marginBottom: '20px' }}>Upload picture</label>
    <input type="file" id="picture" accept="image/png, image/jpeg" {...register("picture")} />
    <p className="error">{errors.picture?.message}</p>
  </div>
  {/* countries */}

  // <button className="btn">Submit</button>
// </form> */}