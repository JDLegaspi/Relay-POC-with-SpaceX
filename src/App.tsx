import { FC, Suspense, useEffect, useState } from "react";
import "./App.css";
import type { AppSpaceXQuery as AppSpaceXQueryType } from "./__generated__/AppSpaceXQuery.graphql";
import type {
  AppLaunchesPast,
  AppLaunchesPast$key,
} from "./__generated__/AppLaunchesPast.graphql";
import type { appLaunchesRefetch } from "./__generated__/appLaunchesRefetch.graphql";
import Company from "./components/Company";
import Launches from "./components/Launches";
import graphql from "babel-plugin-relay/macro";
import { usePreloadedQuery } from "react-relay";
import {
  loadQuery,
  RelayEnvironmentProvider,
  useRefetchableFragment,
} from "react-relay/hooks";
import RelayEnvironment from "./utils/relay";

const AppSpaceXQuery = graphql`
  query AppSpaceXQuery {
    company {
      ceo
      employees
      founded
    }
    ...AppLaunchesPast
  }
`;

const preloadedAppSpaceXQuery = loadQuery<AppSpaceXQueryType>(
  RelayEnvironment,
  AppSpaceXQuery,
  {}
);

const App: FC = () => {
  const [limit, setLimit] = useState<number>(5);

  const data = usePreloadedQuery<AppSpaceXQueryType>(
    AppSpaceXQuery,
    preloadedAppSpaceXQuery
  );

  const [{ launchesPast }, loadMore] = useRefetchableFragment<
    appLaunchesRefetch,
    AppLaunchesPast$key
  >(
    graphql`
      fragment AppLaunchesPast on Query
      @refetchable(queryName: "appLaunchesRefetch")
      @argumentDefinitions(limit: { type: Int, defaultValue: 5 }) {
        launchesPast(limit: $limit) @required(action: THROW) {
          ...Launches_pastLaunches
        }
      }
    `,
    data
  );

  useEffect(() => {
    loadMore({ limit });
  }, [limit, loadMore]);

  const { company } = data;

  return (
    <>
      <h2>SpaceX</h2>
      {company ? (
        <Company
          ceo={company.ceo}
          employees={company.employees}
          founded={company.founded}
        />
      ) : null}
      <h2>Launches</h2>
      <Launches
        // @ts-ignore
        launchesRef={launchesPast.filter((launch) => launch !== null)}
      />
      <button onClick={() => setLimit(limit + 5)}>Load more</button>
    </>
  );
};

const AppRoot: FC = () => (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <div className="App">
      <Suspense fallback={"Loading..."}>
        <App />
      </Suspense>
    </div>
  </RelayEnvironmentProvider>
);

export default AppRoot;
