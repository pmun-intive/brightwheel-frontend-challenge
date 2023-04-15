import { createContext, Dispatch, FormEvent, SetStateAction } from "react";
import { Company, CompanyResponse, INITIAL_COMPANY_DATA } from "services/types";

interface States {
  value: string;
  isLoading: boolean;
  errorAndMessage: Omit<CompanyResponse, "data">;
  companyData: Company[];
  starredQty: number;
}

interface Helper {
  handleFetchData: (event?: FormEvent<HTMLFormElement>) => Promise<void>;
}

interface Events {
  setValue: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setErrorAndMessage: Dispatch<SetStateAction<Omit<CompanyResponse, "data">>>;
  setCompanyData: Dispatch<SetStateAction<Company[]>>;
}

interface CompanyContextType {
  events: Events;
  helper: Helper;
  states: States;
}

const SETUP_VALUE = {
  states: {
    value: "",
    isLoading: false,
    errorAndMessage: { error: false, message: "" },
    companyData: INITIAL_COMPANY_DATA,
    starredQty: 0,
  },
  helper: { handleFetchData: () => {} },
  events: {
    setValue: () => {},
    setLoading: () => {},
    setErrorAndMessage: () => {},
    setCompanyData: () => {},
  },
};
//@ts-ignore
export const CompanyDataContext = createContext<CompanyContextType>();
