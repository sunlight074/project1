import { setupWorker, SetupWorkerApi, rest } from 'msw';

import { getTemplate } from './mock_template';

const fakeEndpoint =
  (baseUrl: string | undefined) =>
  (url = '/') => {
    return new URL(url, baseUrl).toString();
  };


const fakeApi = fakeEndpoint('http://mock-api/');


const handlers = [rest.get(fakeApi('api/users'), getTemplate)];


const runWorker = (): SetupWorkerApi => setupWorker(...handlers);


export { handlers, fakeApi, runWorker };
