import { Resolvers } from "../generated/graphql";

import { queries } from "./queries";

export const resolvers: Resolvers = {
  ...queries,
};
