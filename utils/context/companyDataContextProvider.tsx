import React, { useMemo } from "react";
import { CompanyDataContext } from "./companyDataContext";
import useFetchCompanyData from "utils/hooks/useFetchCompanyData";

interface StateGlobalProviderProps {
  children: React.ReactNode;
}

const CompanyDataContextProvider: React.FC<StateGlobalProviderProps> = ({
  children,
}: StateGlobalProviderProps) => {
  const companyDataHook = useFetchCompanyData();
  const { events, helper, states } = companyDataHook;

  const companyValue = useMemo(
    () => ({ events, helper, states }),
    [events, helper, states]
  );

  return (
    <CompanyDataContext.Provider value={companyValue}>
      {children}
    </CompanyDataContext.Provider>
  );
};

export default CompanyDataContextProvider;
