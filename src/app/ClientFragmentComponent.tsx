"use client";
import { graphql, useFragment } from "react-relay";
import type { ClientFragmentComponent$key as ClientFragmentType } from "./__generated__/ClientFragmentComponent.graphql";

export function ClientFragmentComponent({
  country,
}: {
  country: ClientFragmentType;
}) {
  const fragment = graphql`
    fragment ClientFragmentComponent on Country {
      continent {
        name
      }
    }
  `;

  const data = useFragment(fragment, country);

  return (
    <div className="border p-10">
      Client Component with Fragment
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
