import { useQuery } from 'react-query';
import {type ResBodyGetTemplate, templateFn} from '../../../data_services/template'

export function useGetUser () {

    const { data, isLoading } = useQuery<ResBodyGetTemplate ,Error,ResBodyGetTemplate, string>({
        queryKey:'getTemplate',
        queryFn: async () => {
            return templateFn();
        }
    });

    return {
        data ,
        isLoading
    }

}