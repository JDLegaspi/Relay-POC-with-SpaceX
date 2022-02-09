/**
 * @generated SignedSource<<2a33f602afea3ae621541d0f2e308f53>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type launchesLaunchesRefetch$variables = {
  limit?: number | null;
};
export type launchesLaunchesRefetchVariables = launchesLaunchesRefetch$variables;
export type launchesLaunchesRefetch$data = {
  readonly " $fragmentSpreads": FragmentRefs<"LaunchesLaunchesPast">;
};
export type launchesLaunchesRefetchResponse = launchesLaunchesRefetch$data;
export type launchesLaunchesRefetch = {
  variables: launchesLaunchesRefetchVariables;
  response: launchesLaunchesRefetch$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": 5,
    "kind": "LocalArgument",
    "name": "limit"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "limit",
    "variableName": "limit"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "launchesLaunchesRefetch",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "LaunchesLaunchesPast"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "launchesLaunchesRefetch",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5e26166898921981592b1fd040729d97",
    "id": null,
    "metadata": {},
    "name": "launchesLaunchesRefetch",
    "operationKind": "query",
    "text": "query launchesLaunchesRefetch(\n  $limit: Int = 5\n) {\n  ...LaunchesLaunchesPast_1UvIyz\n}\n\nfragment LaunchesLaunchesPast_1UvIyz on Query {\n  launchesPast(limit: $limit) {\n    mission_name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "b8538f3f8605bc693fa21c3a8b9be603";

export default node;
