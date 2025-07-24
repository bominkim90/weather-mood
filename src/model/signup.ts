export interface Signup {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface Location {
  longitude: number | null;
  latitude: number | null;
}
