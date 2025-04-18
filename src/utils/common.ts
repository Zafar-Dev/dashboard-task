export const isValidEmail = (email: string) =>
  new RegExp(/^\S+@\S+\.\S+$/).test(email);

export const isEmpty = <T>(value: T): boolean => {
    if (value === null || value === undefined) {
      return true;
    }
  
    if (typeof value === 'string') {
      return value.trim() === '';
    }
  
    if (Array.isArray(value)) {
      return value.length === 0;
    }
  
    if (typeof value === 'object') {
      return Object.keys(value).length === 0;
    }
  
    return false;
  };