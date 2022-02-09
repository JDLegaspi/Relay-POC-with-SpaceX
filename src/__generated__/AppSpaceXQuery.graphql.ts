/**
 * @generated SignedSource<<ae29c901ccdb1cb6adb192577e753cbf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppSpaceXQuery$variables = {};
export type AppSpaceXQueryVariables = AppSpaceXQuery$variables;
export type AppSpaceXQuery$data = {
  readonly company: {
    readonly ceo: string | null;
    readonly employees: number | null;
    readonly founded: number | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"LaunchesLaunchesPast">;
};
export type AppSpaceXQueryResponse = AppSpaceXQuery$data;
export type AppSpaceXQuery = {
  variables: AppSpaceXQueryVariables;
  response: AppSpaceXQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "concreteType": "Info",
  "kind": "LinkedField",
  "name": "company",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "ceo",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "employees",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "founded",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppSpaceXQuery",
    "selections": [
      (v0/*: any*/),
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "LaunchesLaunchesPast"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppSpaceXQuery",
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "limit",
            "value": 5
          }
        ],
        "concreteType": "Launch",
        "kind": "LinkedField",
        "name": "launchesPast",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "mission_name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "launchesPast(limit:5)"
      }
    ]
  },
  "params": {
    "cacheID": "090600cc7bbf059156868f65bbff371d",
    "id": null,
    "metadata": {},
    "name": "AppSpaceXQuery",
    "operationKind": "query",
    "text": "query AppSpaceXQuery {\n  company {\n    ceo\n    employees\n    founded\n  }\n  ...LaunchesLaunchesPast\n}\n\nfragment LaunchesLaunchesPast on Query {\n  launchesPast(limit: 5) {\n    mission_name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "4fa4ada91814ba43f289891eb228bc51";

export default node;
