import { useEffect, useState } from "react";
import { fetchGraphQL } from "./utils/fetchGraphQL";
import "./App.css";
import type { CompanyProps } from "./components/Company";
import Company from "./components/Company";
import Launches, { Launch } from "./components/Launches";

function App() {
  const [launches, setLaunches] = useState<Launch[]>();
  const [companyInfo, setCompanyInfo] = useState<CompanyProps>();
  const [limit, setLimit] = useState<number>(5);

  // When the component mounts we'll fetch a repository name
  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query SpaceX {
        company {
          ceo
          employees
          founded
        }
        launchesPast(limit: ${limit}) {
          mission_name
        }
      }
    `)
      .then((response) => {
        if (!isMounted) {
          return;
        }
        const data = response.data;
        setLaunches(data.launchesPast);
        setCompanyInfo(data.company);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      isMounted = false;
    };
  }, [limit]);

  return (
    <div className="App">
      <h2>SpaceX</h2>
      {companyInfo ? (
        <Company
          ceo={companyInfo.ceo}
          employees={companyInfo.employees}
          founded={companyInfo.founded}
        />
      ) : null}
      <h2>Launches</h2>
      {!launches ? <h4>Loading...</h4> : <Launches launches={launches} />}
      <button onClick={() => setLimit(limit + 5)}>Load more</button>
    </div>
  );
}

export default App;
