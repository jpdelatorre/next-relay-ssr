/**
 * @generated SignedSource<<18ce970763908759efee701ab693bc9f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ServerComponent$data = {
  readonly code: string;
  readonly name: string;
  readonly " $fragmentType": "ServerComponent";
};
export type ServerComponent$key = {
  readonly " $data"?: ServerComponent$data;
  readonly " $fragmentSpreads": FragmentRefs<"ServerComponent">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "ServerComponent"
};

(node as any).hash = "91381fa169f489dd807576161ba77202";

export default node;
