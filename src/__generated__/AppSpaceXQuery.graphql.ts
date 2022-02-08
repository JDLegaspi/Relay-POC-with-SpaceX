/**
 * @generated SignedSource<<9df5f0fe482b029d43f2b2ed07d4b19f>>
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
  readonly " $fragmentSpreads": FragmentRefs<"AppLaunchesPast">;
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
        "name": "AppLaunchesPast"
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
    "cacheID": "a92961c36068463a42d6c6ed84e71f31",
    "id": null,
    "metadata": {},
    "name": "AppSpaceXQuery",
    "operationKind": "query",
    "text": "query AppSpaceXQuery {\n  company {\n    ceo\n    employees\n    founded\n  }\n  ...AppLaunchesPast\n}\n\nfragment AppLaunchesPast on Query {\n  launchesPast(limit: 5) {\n    ...Launches_pastLaunches\n    id\n  }\n}\n\nfragment Launches_pastLaunches on Launch {\n  mission_name\n}\n"
  }
};
})();

(node as any).hash = "0b7cef37ac2e2b8eaaaae62a120203f2";

export default node;
