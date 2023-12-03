import { ValidationError } from "yup";
import { schema } from "./validation";
import { ChangeEvent } from "react";


export const changePass = async (ev: ChangeEvent<HTMLInputElement>, setPassErCount: React.Dispatch<React.SetStateAction<number>>) => {
  try {
    await schema.validate({ password: ev.target.value }, { abortEarly: false })
  } catch (error) {
    if (error instanceof ValidationError) {
      const erAr: string[] = [];
      error.inner.forEach(er => {
        if (er.path === 'password') erAr.push(er.errors[0])
      })
      setPassErCount(erAr.length)
    }
  }
}

export const textColor = (passErCount: number) => {
  let color = '';
  switch (passErCount) {
    case 5: color = 'red'; break;
    case 0: color = 'green'; break;
    case 1:
    case 2:
    case 3: color = 'yellow'; break;
    default: color = 'inherit'
  }
  return color
}