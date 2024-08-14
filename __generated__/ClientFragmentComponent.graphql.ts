/**
 * @generated SignedSource<<5ed57d081965a29317fcb10dd0c45e2e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientFragmentComponent$data = {
  readonly continent: {
    readonly name: string;
  };
  readonly " $fragmentType": "ClientFragmentComponent";
};
export type ClientFragmentComponent$key = {
  readonly " $data"?: ClientFragmentComponent$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClientFragmentComponent">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClientFragmentComponent",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Continent",
      "kind": "LinkedField",
      "name": "continent",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Country",
  "abstractKey": null
};

(node as any).hash = "a32940f6e4598c99ece804c62ba15acd";

export default node;
