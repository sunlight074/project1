import { type GenResponseBody } from '../type';
import { mockApi } from '../../utils/client';

// https://jsonplaceholder.typicode.com

export interface GetTemplate {
  key: string,
  name: string,
  age: number,
  address: string,
}

export type ResBodyGetTemplate = GenResponseBody<GetTemplate[]>;

export async function templateFn(): Promise<ResBodyGetTemplate> {
    return mockApi()
        .get(`api/users`)
        .json<ResBodyGetTemplate>();
}