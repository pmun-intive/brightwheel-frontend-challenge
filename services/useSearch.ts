import axios from "axios";
import { Company, CompanyResponse } from "./types";

/**
 * @function
 * @name useSearchApi
 * @description Hook responsible for dealing with api calls
 * @namespace services services/useSearch
 * @param {string} imageSrc - Source of the image that will be rendered
 */
const useSearchApi = () => {
  return {
    /**
     * @function
     * @name getSearchValues
     * @description Function responsible for searching companies based on their names
     * @param {string} name - param to search for a name like the one it is being sent
     */
    getSearchValues: async (name: string) => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_ROUTE}/search/?name_like=${name}&_page=0&_limit=10`;
      try {
        const data: Company[] = await axios
          .get(apiUrl)
          .then((response) => response.data);
        return { data, error: false, message: null };
      } catch (error) {
        const message = "An error occurred. Please try again later!";
        return { data: [], error: true, message };
      }
    },
    /**
     * @function
     * @name patchStar
     * @description Function responsible for patching the user data and changing the star value
     * @param {string} companyId - Value to search for the specific company that will have its value changed
     * @param {string} starred - The start value that will be changed
     */
    patchStar: async (companyId: string, starred: boolean) => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_ROUTE}/search/${companyId}`;
      try {
        const data: Company[] = await axios
          .patch(apiUrl, { starred })
          .then((response) => response.data);
        return { data, error: false, message: null };
      } catch (error) {
        const message = "Could not change starred. Please try again later!";
        return { data: [], error: true, message };
      }
    },
    /**
     * @function
     * @name getStarQty
     * @description Function responsible for getting the values where starred equal true.
     */
    getStarQty: async () => {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_ROUTE}/search/?starred=true`;
      try {
        const data: Company[] = await axios
          .get(apiUrl)
          .then((response) => response.data);
        return { data, error: false, message: null };
      } catch (error) {
        const message = "Could not change starred. Please try again later!";
        return { data: [], error: true, message };
      }
    },
  };
};

export default useSearchApi;
