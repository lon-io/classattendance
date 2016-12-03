export interface User {
  email: string;
  password: string;
  confirmPassword: string; // required, value must be equal to password
  firstname: string;
  middlename: string;
  lastname: string;
  matric_no?: string;
  rfid_uid?: string;
  gender: string;
  role: string;
  level?: number;
  title?: string;
  specialization?: string;
}