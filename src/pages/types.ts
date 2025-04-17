
export interface User {
    name: {
      first: string;
      last: string;
    };
    email: string;
    phone: string;
    picture: {
      large: string;
    };
    location: {
      city: string;
      country: string;
    };
  }
  
  export interface FormData {
    name: string;
    email: string;
    message: string;
  }
  
  export interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
  }