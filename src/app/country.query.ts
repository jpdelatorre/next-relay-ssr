import { graphql } from "relay-runtime";

export const query = graphql`
  query countryQuery($code: ID!) {
    country(code: $code) {
      awsRegion
      capital
      code
      continent {
        name
      }
      currency
      emoji
      native
      states {
        code
        name
      }
      ...ServerComponent
      ...ClientFragmentComponent
    }
  }
`;
