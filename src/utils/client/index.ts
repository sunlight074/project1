import KY, { type Options } from 'ky';

export type IKyInstance = typeof KY;

type IFetchOptions = Pick<Options, 'signal'>;

const defaultOptions: IFetchOptions = {
    signal: null,
};

export const mockApi = (options: IFetchOptions = defaultOptions): IKyInstance =>
 KY.extend({ ...options, prefixUrl: 'http://mock-api/' });

 