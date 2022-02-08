/**
 * @generated SignedSource<<d0aca3eee304b75f270036cfc4aa3321>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Launches_pastLaunches$data = ReadonlyArray<{
  readonly mission_name: string | null;
  readonly " $fragmentType": "Launches_pastLaunches";
}>;
export type Launches_pastLaunches = Launches_pastLaunches$data;
export type Launches_pastLaunches$key = ReadonlyArray<{
  readonly " $data"?: Launches_pastLaunches$data;
  readonly " $fragmentSpreads": FragmentRefs<"Launches_pastLaunches">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "Launches_pastLaunches",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "mission_name",
      "storageKey": null
    }
  ],
  "type": "Launch",
  "abstractKey": null
};

(node as any).hash = "940540b76cc5bebba323fe015405a012";

export default node;
