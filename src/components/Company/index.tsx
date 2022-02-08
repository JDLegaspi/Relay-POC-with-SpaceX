import React, { FC } from "react";

export interface CompanyProps {
  ceo: string | null;
  employees: number | null;
  founded: number | null;
}

const Company: FC<CompanyProps> = ({ ceo = "", employees, founded }) => {
  return (
    <div>
      <p>CEO: {ceo}</p>
      {employees ? <p>Employees: {employees}</p> : null}
      {founded ? <p>Founded: {founded}</p> : null}
    </div>
  );
};

export default Company;
