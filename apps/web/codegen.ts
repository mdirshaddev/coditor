import type { CodegenConfig } from '@graphql-codegen/cli';

const graphqlCodegenConfig: CodegenConfig = {
  schema: './src/modules/data/graphql/schema.graphql',
  documents: './src/**/*.gql',
  generates: {
    './src/generated/generates.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query'
      ],
      config: {
        fetcher: 'graphql-request'
      }
    }
  },
  hooks: {
    afterAllFileWrite: ['prettier -w']
  }
};

export default graphqlCodegenConfig;
