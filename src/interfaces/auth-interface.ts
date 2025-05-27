// Register

export interface RegisterInterface {
  email: string;
  password: string;
  displayName: string;
}

export interface RegisterResponseInterface {
  uid: string;
  photoURL: string | null;
  displayName: string;
}

// Google
export interface GoogleCredentials {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

// auth redux interface
export interface AuthSliceInterface {
  uid: string;
  status: string;
  email: string;
  displayName: string;
  photoURL: string | null;
  errorMessage: string;
}
