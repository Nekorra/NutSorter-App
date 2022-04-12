import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nutsorter.nutsorter',
  appName: 'NutSorter',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    iosScheme: 'ionic'
  },
  ios: {
    "contentInset": "always"
  }
};  

export default config;
