import Head from "next/head";

import Input from "@components/input";
import { PrimaryButton } from "@components/button/styled";
import Spinner from "@components/icon/spinner";
import { useContext } from "react";
import {
  Header,
  HeaderError,
  SearchFieldSet,
  SearchForm,
  TableSection,
} from "modules/mainPage/styled";
import CompanyDataTable from "modules/mainPage/dataTable";
import { CompanyDataContext } from "utils/context/companyDataContext";

export default function Home() {
  const { events, states, helper } = useContext(CompanyDataContext);

  const { value, isLoading, errorAndMessage, starredQty } = states;
  const { setValue } = events;
  const { handleFetchData } = helper;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <h2>Let's search for a company</h2>
        <h4>Total Star: {starredQty}</h4>
      </Header>

      <SearchForm
        onSubmit={(e) => {
          handleFetchData(e);
        }}
      >
        <SearchFieldSet>
          <Input
            id="searchCompany"
            label="Search for Company"
            value={value}
            setValue={setValue}
          />
          <PrimaryButton type="submit">Search</PrimaryButton>
        </SearchFieldSet>
      </SearchForm>

      {isLoading && <Spinner />}
      {!isLoading && !errorAndMessage.error && (
        <TableSection>
          <CompanyDataTable />
        </TableSection>
      )}
      {!isLoading && errorAndMessage.error && (
        <HeaderError>
          <h2>{errorAndMessage.message}</h2>
        </HeaderError>
      )}
    </>
  );
}
