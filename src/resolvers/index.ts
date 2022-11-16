import { Resolvers } from "../generated/graphql";

import { Conference } from "./Conference";
import { Query } from "./Query";

export const resolvers: Resolvers = {
  Query,
  Conference,
};
