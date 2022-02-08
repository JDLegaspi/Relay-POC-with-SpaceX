/**
 * @generated SignedSource<<f5ec21eb8aaf12cd4553dc927359cefb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppSpaceXQuery$variables = {};
export type AppSpaceXQueryVariables = AppSpaceXQuery$variables;
export type AppSpaceXQuery$data = {
  readonly company: {
    readonly ceo: string | null;
    readonly employees: number | null;
    readonly founded: number | null;
  } | null;
  readonly launchesPast: ReadonlyArray<{
    readonly mission_name: string | null;
  } | null> | null;
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
},
v1 = [
  {
    "kind": "Literal",
    "name": "limit",
    "value": 5
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mission_name",
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
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Launch",
        "kind": "LinkedField",
        "name": "launchesPast",
        "plural": true,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": "launchesPast(limit:5)"
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
        "args": (v1/*: any*/),
        "concreteType": "Launch",
        "kind": "LinkedField",
        "name": "launchesPast",
        "plural": true,
        "selections": [
          (v2/*: any*/),
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
    "cacheID": "f6190aeadb81ed132f8826d35c7d5752",
    "id": null,
    "metadata": {},
    "name": "AppSpaceXQuery",
    "operationKind": "query",
    "text": "query AppSpaceXQuery {\n  company {\n    ceo\n    employees\n    founded\n  }\n  launchesPast(limit: 5) {\n    mission_name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "9a26298b653b02f616c23286f39224b2";

export default node;
