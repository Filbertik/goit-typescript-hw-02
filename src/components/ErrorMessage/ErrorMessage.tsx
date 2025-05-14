// Edit and typefix
import React from "react";
// Edit and typefix

import s from "./ErrorMessage.module.css";

// const ErrorMessage = ({ code, message }) => {
//     return <div className={s.error}>
//         <h2>{code}</h2>
//         <p>{message}</p>
//     </div>

// }

// Edit and typefix
interface ErrorMessageProps {
  message: string;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p className={s.error}>{message}</p>;
};
// Edit and typefix

export default ErrorMessage;
