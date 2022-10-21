import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/schema.graphql",
  generates: {
    "src/generated/graphql.ts": {
      config: {
        useIndexSignature: true,
        contextType: "../index#MyContext",
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
