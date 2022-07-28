import { DefaultRequestBody, PathParams, ResponseResolver, RestContext, RestRequest } from 'msw';

export type ResponseResolverFn = ResponseResolver<RestRequest<DefaultRequestBody, PathParams>, RestContext>;