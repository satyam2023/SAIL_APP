export interface INearbyCustomerBody {
    lat: number;
    long: number;
  }
  
  export type INearbyCustomerResponse = INearbyCustomer[];
  
  export interface INearbyCustomer {
    id: string;
    location_lat: string;
    location_long: string;
    company_name: string;
    address: string;
    distance: string;
  }