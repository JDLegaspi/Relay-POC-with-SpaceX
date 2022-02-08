/**
 * @generated SignedSource<<00057ea27742e1dfe590c1a37986444d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppLaunchesPast$data = {
  readonly launchesPast: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"Launches_pastLaunches">;
  } | null>;
  readonly " $fragmentType": "AppLaunchesPast";
};
export type AppLaunchesPast = AppLaunchesPast$data;
export type AppLaunchesPast$key = {
  readonly " $data"?: AppLaunchesPast$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppLaunchesPast">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": 5,
      "kind": "LocalArgument",
      "name": "limit"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./appLaunchesRefetch.graphql')
    }
  },
  "name": "AppLaunchesPast",
  "selections": [
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "limit",
            "variableName": "limit"
          }
        ],
        "concreteType": "Launch",
        "kind": "LinkedField",
        "name": "launchesPast",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Launches_pastLaunches"
          }
        ],
        "storageKey": null
      },
      "action": "THROW",
      "path": "launchesPast"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "bf8c0cf086ed70ea9320585f9a322a4c";

export default node;
