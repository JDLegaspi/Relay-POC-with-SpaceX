import React, { FC } from "react";

export interface CompanyProps {
  ceo: string;
  employees: number;
  founded: number;
}

const Company: FC<CompanyProps> = ({ ceo, employees, founded }) => {
  return (
    <div>
      <p>CEO: {ceo}</p>
      <p>Employees: {employees}</p>
      <p>Founded: {founded}</p>
    </div>
  );
};

export default Company;
