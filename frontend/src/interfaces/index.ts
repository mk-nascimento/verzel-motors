export interface TokenResponse {
  access_token: string;
  token_type: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface Vehicle {
  name: string;
  make: string;
  model: string;
  photo: string;
  price: number;
  id: number;
  user_id: number;
}

export interface VehicleListResponse {
  vehicles: Vehicle[];
}
