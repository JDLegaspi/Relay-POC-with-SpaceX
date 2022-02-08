import React, { FC } from "react";

export type Launch = { mission_name: string };

export interface LaunchesProps {
  launches: Launch[];
}

const Launches: FC<LaunchesProps> = ({ launches }) => {
  return (
    <>
      {launches.map((launch) => (
        <h4>{launch.mission_name}</h4>
      ))}
    </>
  );
};

export default Launches;
