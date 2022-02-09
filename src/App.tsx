import { FC, Suspense } from "react";
import "./App.css";
import type { AppSpaceXQuery as AppSpaceXQueryType } from "./__generated__/AppSpaceXQuery.graphql";
import Company from "./components/Company";
import Launches from "./components/Launches";
import graphql from "babel-plugin-relay/macro";
import { usePreloadedQuery } from "react-relay";
import { loadQuery, RelayEnvironmentProvider } from "react-relay/hooks";
import RelayEnvironment from "./utils/relay";

const AppSpaceXQuery = graphql`
  query AppSpaceXQuery {
    company {
      ceo
      employees
      founded
    }
    ...LaunchesLaunchesPast
  }
`;

const preloadedAppSpaceXQuery = loadQuery<AppSpaceXQueryType>(
  RelayEnvironment,
  AppSpaceXQuery,
  {}
);

const App: FC = () => {
  const data = usePreloadedQuery<AppSpaceXQueryType>(
    AppSpaceXQuery,
    preloadedAppSpaceXQuery
  );

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
      <Suspense fallback={"Loading..."}>
        <Launches launchesRef={data} />
      </Suspense>
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
