import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { execSync } from 'child_process';

// Get Git info at build time
const gitCommitHash = execSync('git rev-parse --short HEAD').toString().trim();
const gitBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

export default defineConfig({
  plugins: [react()],
  define: {
    __GIT_COMMIT_HASH__: JSON.stringify(gitCommitHash),
    __GIT_BRANCH__: JSON.stringify(gitBranch),
  },
});
