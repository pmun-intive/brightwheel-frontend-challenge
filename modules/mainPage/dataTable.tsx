import Star from "@components/icon/star";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@kiwicom/orbit-components";
import { useContext, useState } from "react";
import { CompanyResponse } from "services/types";
import useSearchApi from "services/useSearch";
import { CompanyDataContext } from "utils/context/companyDataContext";
import DataTableModal from "./modal";
import { TableButton, TableButtonTransparent } from "./styled";

/**
 * @component
 * @name CompanyDataTable
 * @description Creates a table responsible for rendering company data
 * @namespace modules mainPage/dataTable
 * @param {Company[]} data - responsible to show company data.
 */
const CompanyDataTable: React.FC<Pick<CompanyResponse, "data">> = ({
  data,
}) => {
  const { helper } = useContext(CompanyDataContext);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>("");
  const handleOpenImage = (imagePath: string) => {
    setImageSrc(imagePath);
    setShowModal(true);
  };

  const { patchStar } = useSearchApi();

  const updateStarred = async (companyId: string, starred: boolean) => {
    await patchStar(companyId, starred);
    await helper.handleFetchData();
  };
  return (
    <>
      {showModal && (
        <DataTableModal imageSrc={imageSrc} setShowModal={setShowModal} />
      )}

      <Table type="primary" compact={true}>
        <TableHead>
          <TableRow>
            <TableCell as="th">Name</TableCell>
            <TableCell as="th">Description</TableCell>
            <TableCell as="th">Address</TableCell>
            <TableCell as="th">Starred</TableCell>
            <TableCell as="th">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((companyData) => {
            return (
              <TableRow key={companyData.id}>
                <TableCell>{companyData.name}</TableCell>
                <TableCell>{companyData.description}</TableCell>
                <TableCell>
                  {companyData.address.address1} - {companyData.address.city}
                </TableCell>
                <TableCell align="center" verticalAlign="middle">
                  {companyData.starred ? (
                    <TableButtonTransparent
                      onClick={() =>
                        updateStarred(companyData.id, !companyData.starred)
                      }
                    >
                      <Star background="#FFC000" height="20px" width="20px" />
                    </TableButtonTransparent>
                  ) : (
                    <TableButtonTransparent
                      onClick={() =>
                        updateStarred(companyData.id, !companyData.starred)
                      }
                    >
                      <Star height="20px" width="20px" />
                    </TableButtonTransparent>
                  )}
                </TableCell>
                <TableCell>
                  {companyData.image ? (
                    <TableButton
                      onClick={() =>
                        companyData.image && handleOpenImage(companyData.image)
                      }
                    >
                      View Image
                    </TableButton>
                  ) : (
                    "No Image"
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default CompanyDataTable;
