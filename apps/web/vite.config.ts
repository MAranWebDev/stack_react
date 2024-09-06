import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';

interface PropsType {
  mode: string;
}

// https://vitejs.dev/config/
export default ({ mode }: PropsType) => {
  // To allow env variables in this file
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    resolve: { alias: { '@': '/src' } },
    server: { port: +process.env.VITE_CLIENT_PORT! },
  });
};
