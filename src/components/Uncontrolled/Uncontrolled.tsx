import './Uncontrolled.scss';
import { useRef, useState } from 'react';
import { schema } from '../../utils/validation';
import { ValidationError } from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addForm } from '../../store/slices/form.slice';
import { changePass, textColor } from '../../utils/passwordStrength';

export const Uncontrolled = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmitFunc = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setNameError('');
    setAgeError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setTermsError('');
    setImageError('');

    try {
      let img: FileList | null | undefined = null;
      if (imageInput.current?.files !== null) img = imageInput.current?.files;
      await schema.validate({
        name: nameInput.current?.value,
        age: ageInput.current?.value,
        email: emailInput.current?.value,
        password: passwordInput.current?.value,
        confirmPassword: confirmPasswordInput.current?.value,
        gender: genderInput.current?.value,
        terms: termsInput.current?.checked,
        picture: img
      }, { abortEarly: false })

      const reader = new FileReader();
      if (img !== undefined && img !== null) {
        reader.readAsDataURL(img[0])
        reader.onloadend = () => {
          const base64string = reader.result
          if (typeof base64string === 'string') {
            const formData = {
              name: nameInput.current!.value,
              age: Number(ageInput.current!.value),
              email: emailInput.current!.value,
              password: passwordInput.current!.value,
              confirmPassword: confirmPasswordInput.current!.value,
              gender: genderInput.current!.value,
              terms: termsInput.current!.checked,
              picture: base64string
            }
            dispatch(addForm(formData))
            navigate("/")
          }
        }
      }
    }
    catch (error) {
      if (error instanceof ValidationError) {

        error.inner.forEach(er => {
          switch (er.path) {
            case 'name': setNameError(er.errors[0]); break;
            case 'age': setAgeError(er.errors[0]); break;
            case 'email': setEmailError(er.errors[0]); break;
            case 'password': setPasswordError(er.errors[0]); break;
            case 'confirmPassword': setConfirmPasswordError(er.errors[0]); break;
            case 'terms': setTermsError(er.errors[0]); break;
            case 'picture': setImageError(er.errors[0]); break;
          }
        })
      }
    }
  }

  const nameInput = useRef<HTMLInputElement>(null);
  const ageInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const confirmPasswordInput = useRef<HTMLInputElement>(null);
  const genderInput = useRef<HTMLInputElement>(null);
  const termsInput = useRef<HTMLInputElement>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [termsError, setTermsError] = useState('');
  const [imageError, setImageError] = useState('');

  const [passErCount, setPassErCount] = useState<number>(-1);

  return (
    <section>
      <div className="container">
        <h2>Uncontrolled</h2>

        <form onSubmit={(ev) => onSubmitFunc(ev)}>

          <div className="block">
            <label htmlFor="name" className="label">Name</label>
            <input ref={nameInput} className="input" id="name" name="name" type="text" />
            <p className="error">{nameError}</p>
          </div>

          <div className="block">
            <label htmlFor="age" className="label">Age</label>
            <input className="input" id="age" ref={ageInput} type="text" name="age" />
            <p className="error">{ageError}</p>
          </div>

          <div className="block">
            <label htmlFor="email" className="label">Email</label>
            <input className="input" id="email" ref={emailInput} type="text" name="email" />
            <p className="error">{emailError}</p>
          </div>

          <div className="block">
            <label htmlFor="password" style={{ color: textColor(passErCount) }} className="label" >Password</label>
            <input className="input" id="password" ref={passwordInput} type="text" onChange={(ev) => changePass(ev, setPassErCount)} />
            <p className="error">{passwordError}</p>
          </div>

          <div className="block">
            <label htmlFor="checkPassword" className="label">Confirm Password</label>
            <input className="input" ref={confirmPasswordInput} id="confirmPassword" type="text" />
            <p className="error">{confirmPasswordError}</p>
          </div>

          <div className="label">Gender</div>
          <div className="block radios">
            <div className="radio">
              <input className="input" ref={genderInput} type="radio" id="male" value="male" checked />
              <label htmlFor="male" className="label">Male</label>
            </div>
            <div className="radio">
              <input className="input" ref={genderInput} type="radio" id="female" value="female" />
              <label htmlFor="female" className="label">Female</label>
            </div>
          </div>

          <div className="block flex">
            <input type="checkbox" id="terms" ref={termsInput} />
            <label htmlFor="terms" className="label">Accept Terms and Conditions </label>
            <p className="error">{termsError}</p>
          </div>

          <div className="block">
            <label htmlFor="picture" className="label" style={{ marginBottom: '20px' }}>Upload picture</label>
            <input type="file" id="picture" ref={imageInput} accept="image/png, image/jpeg" />
            <p className="error">{imageError}</p>
          </div>
          {/* countries */}

          <button className="btn">Submit</button>
        </form>
      </div>
    </section>
  )
}
