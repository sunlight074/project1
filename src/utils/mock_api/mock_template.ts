import { type ResponseResolverFn } from './type';

import { GetTemplate, type ResBodyGetTemplate } from '../../data_services/template';

const mockGetTemplateResult: GetTemplate[] = [
  {
    userId: 1,
    id: 1,
    title: 'test-1',
    completed: false,
  },
  {
    userId: 2,
    id: 2,
    title: 'test-2',
    completed: true,
  },
  {
    userId: 3,
    id: 3,
    title: 'test-3',
    completed: false,
  },
];

const getTemplate: ResponseResolverFn = (_req, res, ctx) => {
  return res(
    ctx.json<ResBodyGetTemplate>({
      result: mockGetTemplateResult,
    }),
  );
};

export { getTemplate };
