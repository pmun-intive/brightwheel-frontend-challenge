export interface Address {
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface Company {
  id: string;
  starred: boolean;
  name: string;
  description: string;
  address: Address;
  image?: string;
}

export interface CompanyResponse {
  data: Company[];
  message: string | null;
  error: boolean;
}

export const INITIAL_COMPANY_DATA = [
  {
    id: "company.0",
    starred: false,
    name: "Adams - Flatley",
    description: "turn-key eco-centric functionalities",
    address: {
      address1: "5217 Nannie Pass",
      city: "La Habra",
      state: "NY",
      postalCode: "18050-9434",
      address2: "Suite 690",
    },
  },
];
