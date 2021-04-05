export interface StatusInterface {
  alive: boolean;
  applicationName: string;
  grpcPort: string;
  restPort: string;
  env: string;
  message: string;
}
