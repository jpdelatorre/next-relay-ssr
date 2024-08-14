import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from "relay-runtime";
import type { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";

const HTTP_ENDPOINT = "https://countries.trevorblades.com/";

export const fetchFn: FetchFunction = async (request, variables) => {
  const resp = await fetch(HTTP_ENDPOINT, {
    method: "POST",
    headers: {
      Accept:
        "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
      "Content-Type": "application/json",
      // <-- Additional headers like 'Authorization' would go here
    },
    body: JSON.stringify({
      query: request.text, // <-- The GraphQL document composed by Relay
      variables,
    }),
  });

  return await resp.json();
};

function createRelayEnvironment(initialRecords: RecordMap | undefined) {
  return new Environment({
    network: Network.create(fetchFn),
    store: new Store(new RecordSource(initialRecords)),
  });
}

let relayEnvironment: Environment | undefined;

export function initRelayEnvironment(initialRecords: RecordMap | undefined) {
  const environment =
    relayEnvironment ?? createRelayEnvironment(initialRecords);

  // For SSG and SSR always create a new Relay environment.
  if (typeof window === "undefined") {
    return environment;
  }

  // Create the Relay environment once in the client
  // and then reuse it.
  if (!relayEnvironment) {
    relayEnvironment = environment;
  }

  return relayEnvironment;
}
