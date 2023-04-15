import { FormEvent, useEffect, useState } from "react";
import { Company, CompanyResponse, INITIAL_COMPANY_DATA } from "services/types";
import useSearchApi from "services/useSearch";

const useFetchCompanyData = () => {
  const [value, setValue] = useState<string>("");
  const [starredQty, setStarredQty] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorAndMessage, setErrorAndMessage] = useState<
    Omit<CompanyResponse, "data">
  >({ error: false, message: null });
  const [companyData, setCompanyData] =
    useState<Company[]>(INITIAL_COMPANY_DATA);

  const { getSearchValues, getStarQty } = useSearchApi();

  /**
   * @function
   * @name handleFetchData
   * @description Function responsible for getting the values where starred equal true.
   * @param {FormEvent} event FormEvent responsible for the action when submitting form.
   */
  const handleFetchData = async (event?: FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }

    setLoading(true);
    const response = await getSearchValues(value);

    setLoading(false);
    if (response.error) {
      setErrorAndMessage({
        ...errorAndMessage,
        error: true,
        message: response.message,
      });
    }

    if (response.data.length > 0) {
      setCompanyData(response.data);
    }
  };

  const handleStarQty = async () => {
    const response = await getStarQty();
    if (response.data && response.data.length > 0) {
      setStarredQty(response.data.length);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  useEffect(() => {
    handleStarQty();
  }, [companyData]);

  return {
    states: { companyData, errorAndMessage, isLoading, starredQty, value },
    events: { setValue, setLoading, setErrorAndMessage, setCompanyData },
    helper: { handleFetchData },
  };
};

export default useFetchCompanyData;
