export interface RemarkConfig {
  plugins?: (string | unknown[])[];
  [key: string]: unknown;
}

declare const config: RemarkConfig;
export default config;
