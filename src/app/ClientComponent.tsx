"use client";

import { useLazyLoadQuery } from "react-relay";
import { query } from "./country.query";
import { ClientFragmentComponent } from "./ClientFragmentComponent";
import type { CountryQuery as QueryType } from "./__generated__/CountryQuery.graphql";

export function ClientComponent() {
  const data = useLazyLoadQuery<QueryType>(
    query,
    { code: "US" },
    { fetchPolicy: "store-or-network" }
  );

  return (
    <div className="border p-10">
      <h1>Client Component using useLazyLoadQuery</h1>
      <p>Data from the query:</p>
      <pre>
        {JSON.stringify(
          {
            awsRegion: data.country.awsRegion,
            capital: data.country.capital,
            code: data.country.code,
            currency: data.country.currency,
            emoji: data.country.emoji,
            native: data.country.native,
          },
          null,
          2
        )}
      </pre>
      <ClientFragmentComponent country={data.country} />
    </div>
  );
}
