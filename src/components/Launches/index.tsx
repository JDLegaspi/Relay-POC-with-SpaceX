import { FC } from "react";
import { useFragment, useRefetchableFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Launches_pastLaunches$key } from "./__generated__/Launches_pastLaunches.graphql";

export type Launch = { mission_name: string | null } | null;

export interface LaunchesProps {
  launchesRef: Launches_pastLaunches$key;
}

const Launches: FC<LaunchesProps> = ({ launchesRef }) => {
  const data = useFragment(
    graphql`
      fragment Launches_pastLaunches on Launch @relay(plural: true) {
        mission_name
      }
    `,
    launchesRef
  );

  return (
    <>
      {data.map((launch) => (
        <h4>{launch?.mission_name}</h4>
      ))}
    </>
  );
};

export default Launches;
