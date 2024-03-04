import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'sbm9u6',
  e2e: {
    baseUrl: 'https://DanMBonneville.github.io/sudoku',
    setupNodeEvents(on, config) {},
  },

  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
});
