import React, { FC } from "react";

export type Launch = { mission_name: string | null } | null;

export interface LaunchesProps {
  launches: readonly Launch[] | null;
}

const Launches: FC<LaunchesProps> = ({ launches }) => {
  return (
    <>
      {launches?.map((launch) => (
        <h4>{launch?.mission_name}</h4>
      ))}
    </>
  );
};

export default Launches;
