import { FC, Suspense } from "react";
import "./App.css";
import type { AppSpaceXQuery as GeneratedAppSpaceXQuery } from "./__generated__/AppSpaceXQuery.graphql";
import Company from "./components/Company";
import Launches from "./components/Launches";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  PreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "./utils/relay";

const AppSpaceXQuery = graphql`
  query AppSpaceXQuery {
    company {
      ceo
      employees
      founded
    }
    launchesPast(limit: 5) {
      mission_name
    }
  }
`;

const preloadedSpaceXAppQuery = loadQuery<GeneratedAppSpaceXQuery>(
  RelayEnvironment,
  AppSpaceXQuery,
  {}
);

const App: FC<{
  preloadedQuery: PreloadedQuery<GeneratedAppSpaceXQuery, {}>;
}> = ({ preloadedQuery }) => {
  const { company, launchesPast: launches } =
    usePreloadedQuery<GeneratedAppSpaceXQuery>(AppSpaceXQuery, preloadedQuery);

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
      {!launches ? <h4>Loading...</h4> : <Launches launches={launches} />}
    </>
  );
};

const AppRoot: FC = () => (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <div className="App">
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedSpaceXAppQuery} />
      </Suspense>
    </div>
  </RelayEnvironmentProvider>
);

export default AppRoot;
