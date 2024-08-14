import { initRelayEnvironment } from "@/relay-environment";
import { fetchQuery } from "relay-runtime";
import { query } from "./country.query";
import { RelayProvider } from "./RelayProvider";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import { ClientComponent } from "./ClientComponent";
import { ServerComponent } from "./ServerComponent";

export default async function Home() {
  const env = initRelayEnvironment(undefined);
  const graphNode = await fetchQuery(env, query, { code: "US" }).toPromise();

  // if we set this to undefined, the client will fetch the data again
  // const initialRecords = undefined;
  const initialRecords = env.getStore().getSource().toJSON() as RecordMap;

  return (
    <main className="p-10">
      <h1>NextJS with Relay SSR and client hydration</h1>
      <ServerComponent graphNode={graphNode} />
      <RelayProvider initialRecords={initialRecords}>
        <ClientComponent />
      </RelayProvider>
    </main>
  );
}
