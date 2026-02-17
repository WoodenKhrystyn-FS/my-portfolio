import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { execSync } from 'child_process';

// Get the current Git branch name
const gitBranch = execSync('git rev-parse --abrev-ref HEAD').toString().trim();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __GIT_COMMIT_HASH__: JSON.stringify(gitCommitHash),
  },
})
