export interface Profile {
  name: string;
  email: string;
  location: Location;
}

export interface Location {
  cityName: string;
  longitude: number;
  latitude: number;
}
