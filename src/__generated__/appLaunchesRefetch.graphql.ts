/**
 * @generated SignedSource<<baf5643a06ff0903a72da85c9fee87fd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type appLaunchesRefetch$variables = {
  limit?: number | null;
};
export type appLaunchesRefetchVariables = appLaunchesRefetch$variables;
export type appLaunchesRefetch$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AppLaunchesPast">;
};
export type appLaunchesRefetchResponse = appLaunchesRefetch$data;
export type appLaunchesRefetch = {
  variables: appLaunchesRefetchVariables;
  response: appLaunchesRefetch$data;
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
    "name": "appLaunchesRefetch",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "AppLaunchesPast"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "appLaunchesRefetch",
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
    "cacheID": "a50031e13174d44b612fed2265687f8c",
    "id": null,
    "metadata": {},
    "name": "appLaunchesRefetch",
    "operationKind": "query",
    "text": "query appLaunchesRefetch(\n  $limit: Int = 5\n) {\n  ...AppLaunchesPast_1UvIyz\n}\n\nfragment AppLaunchesPast_1UvIyz on Query {\n  launchesPast(limit: $limit) {\n    ...Launches_pastLaunches\n    id\n  }\n}\n\nfragment Launches_pastLaunches on Launch {\n  mission_name\n}\n"
  }
};
})();

(node as any).hash = "bf8c0cf086ed70ea9320585f9a322a4c";

export default node;
