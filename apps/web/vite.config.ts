import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';

interface Props {
  mode: string;
}

// https://vitejs.dev/config/
export default ({ mode }: Props) => {
  // To allow env variables in this file
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const port = Number(process.env.VITE_CLIENT_PORT) || 5173;

  return defineConfig({
    plugins: [react()],
    resolve: { alias: { '@': '/src' } },
    server: { port },
  });
};
