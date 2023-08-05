
import { useLoaderData, type LoaderFunctionArgs } from 'react-router-dom'


export const getTestAsyncFunc = (id?: string): Promise<{ data?: string }> => {
    return new Promise(((resolve, reject) => {
        try {
            resolve({ data: 'test ' + id })
        } catch (e) {
            reject({ data: null })
        }
    }))
}

export async function loader({ params }: LoaderFunctionArgs): Promise<{ data?: string }> {
    const { data } = await getTestAsyncFunc(params.podcastId);

    return { data };
}


const ChildrenElementRoot = () => {
    const { data } = useLoaderData() as { data?: string }
    return <h1>{data}</h1>
}


export default ChildrenElementRoot