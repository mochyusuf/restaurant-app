/* eslint-disable no-useless-return */
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register();
    return;
  }
  console.log('SERVICE WORKER TIDAK DI SUPPORT OLEH BROUSER');
};

export default swRegister;
