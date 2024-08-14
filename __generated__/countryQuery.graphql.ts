/**
 * @generated SignedSource<<250cff38cea6cf811d33164a77c735e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type countryQuery$variables = {
  code: string;
};
export type countryQuery$data = {
  readonly country: {
    readonly awsRegion: string;
    readonly capital: string | null | undefined;
    readonly code: string;
    readonly continent: {
      readonly name: string;
    };
    readonly currency: string | null | undefined;
    readonly emoji: string;
    readonly native: string;
    readonly states: ReadonlyArray<{
      readonly code: string | null | undefined;
      readonly name: string;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"ClientFragmentComponent" | "ServerComponent">;
  } | null | undefined;
};
export type countryQuery = {
  response: countryQuery$data;
  variables: countryQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "code"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "code",
    "variableName": "code"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "awsRegion",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "capital",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "code",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "Continent",
  "kind": "LinkedField",
  "name": "continent",
  "plural": false,
  "selections": [
    (v5/*: any*/)
  ],
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currency",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "emoji",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "native",
  "storageKey": null
},
v10 = [
  (v4/*: any*/),
  (v5/*: any*/)
],
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "State",
  "kind": "LinkedField",
  "name": "states",
  "plural": true,
  "selections": (v10/*: any*/),
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "countryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v11/*: any*/),
          {
            "kind": "InlineDataFragmentSpread",
            "name": "ServerComponent",
            "selections": (v10/*: any*/),
            "args": null,
            "argumentDefinitions": []
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ClientFragmentComponent"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "countryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v11/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8aad5dcd98c126beb19925a81b5d010e",
    "id": null,
    "metadata": {},
    "name": "countryQuery",
    "operationKind": "query",
    "text": "query countryQuery(\n  $code: ID!\n) {\n  country(code: $code) {\n    awsRegion\n    capital\n    code\n    continent {\n      name\n    }\n    currency\n    emoji\n    native\n    states {\n      code\n      name\n    }\n    ...ServerComponent\n    ...ClientFragmentComponent\n  }\n}\n\nfragment ClientFragmentComponent on Country {\n  continent {\n    name\n  }\n}\n\nfragment ServerComponent on Country {\n  code\n  name\n}\n"
  }
};
})();

(node as any).hash = "42d0e214ed280ef13382cd2b52b4f75d";

export default node;
