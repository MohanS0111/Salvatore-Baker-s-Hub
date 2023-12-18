export type UserDetails = {
    id?: number;
    name: string;
    phoneNumber: string;
    emailAddress: string;
    password: string;
    address: {
      doorNo: string;
      streetName: string;
      city: string;
      state: string;
      pincode: string;
    };
};
  