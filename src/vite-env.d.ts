/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLOUD_URL: string;
  readonly VITE_CLOUD_BUCKET: string;
  readonly VITE_CLOUD_API_KEY: string;
  readonly VITE_CLOUD_API_SECRET: string;
  readonly VITE_CLOUD_NAME: string;
  readonly VITE_API_KEY: stringp;
  readonly VITE_AUTH_DOMAIN: string;
  readonly VITE_PROJECT_ID: string;
  readonly VITE_STORAGE_BUCKET: string;
  readonly VITE_MESSAGING_SENDER_ID: string;
  readonly VITE_APP_ID: string;
  readonly VITE_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
