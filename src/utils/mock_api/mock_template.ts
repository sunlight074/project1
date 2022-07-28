import { type ResponseResolverFn } from './type';

import { GetTemplate, type ResBodyGetTemplate } from '../../data_services/template';

const mockGetTemplateResult: GetTemplate[] = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const getTemplate: ResponseResolverFn = (_req, res, ctx) => {
  return res(
    ctx.json<ResBodyGetTemplate>({
      result: mockGetTemplateResult,
    }),
    ctx.delay(500),
  );
};

export { getTemplate };
