export interface Signup {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  location: Location;
}

export interface Location {
  cityName: string;
  longitude: number;
  latitude: number;
}
