import { graphql, readInlineData } from "relay-runtime";

export function ServerComponent({ graphNode }) {
  const query = graphql`
    fragment ServerComponent on Country @inline {
      code
      name
    }
  `;

  const data = readInlineData(query, graphNode.country);

  return (
    <div className="p-10 border">
      <h1>Server Component using Fragment</h1>
      <pre className="text-white">{JSON.stringify({ data }, null, 2)}</pre>
    </div>
  );
}
