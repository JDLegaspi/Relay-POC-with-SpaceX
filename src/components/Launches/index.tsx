import { FC, useEffect, useState } from "react";
import graphql from "babel-plugin-relay/macro";
import { useRefetchableFragment } from "react-relay";
import { launchesLaunchesRefetch as launchesLaunchesRefetchType } from "./__generated__/launchesLaunchesRefetch.graphql";
import { LaunchesLaunchesPast$key } from "./__generated__/LaunchesLaunchesPast.graphql";

export type Launch = { mission_name: string | null } | null;

export interface LaunchesProps {
  launchesRef: LaunchesLaunchesPast$key;
}

const Launches: FC<LaunchesProps> = ({ launchesRef }) => {
  const [limit, setLimit] = useState<number>(5);

  const [{ launchesPast }, loadMore] = useRefetchableFragment<
    launchesLaunchesRefetchType,
    LaunchesLaunchesPast$key
  >(
    graphql`
      fragment LaunchesLaunchesPast on Query
      @refetchable(queryName: "launchesLaunchesRefetch")
      @argumentDefinitions(limit: { type: Int, defaultValue: 5 }) {
        launchesPast(limit: $limit) @required(action: THROW) {
          mission_name
        }
      }
    `,
    launchesRef
  );

  useEffect(() => {
    loadMore({ limit });
  }, [limit, loadMore]);

  return (
    <>
      {launchesPast.map((launch) => (
        <h4>{launch?.mission_name}</h4>
      ))}
      <button onClick={() => setLimit(limit + 5)}>Load more</button>
    </>
  );
};

export default Launches;
