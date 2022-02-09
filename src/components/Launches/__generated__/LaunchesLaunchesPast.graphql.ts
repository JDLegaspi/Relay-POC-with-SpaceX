/**
 * @generated SignedSource<<6a518f7a181ca457ad80b11b4a7a3824>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LaunchesLaunchesPast$data = {
  readonly launchesPast: ReadonlyArray<{
    readonly mission_name: string | null;
  } | null>;
  readonly " $fragmentType": "LaunchesLaunchesPast";
};
export type LaunchesLaunchesPast = LaunchesLaunchesPast$data;
export type LaunchesLaunchesPast$key = {
  readonly " $data"?: LaunchesLaunchesPast$data;
  readonly " $fragmentSpreads": FragmentRefs<"LaunchesLaunchesPast">;
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
      "operation": require('./launchesLaunchesRefetch.graphql')
    }
  },
  "name": "LaunchesLaunchesPast",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "mission_name",
            "storageKey": null
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

(node as any).hash = "b8538f3f8605bc693fa21c3a8b9be603";

export default node;
