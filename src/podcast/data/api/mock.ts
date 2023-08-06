import { IPodcastServerData } from "../models/Podcast"

async function mockApi(id?:string): Promise<IPodcastServerData> {
    return new Promise(((resolve, reject) => {
        try {
            resolve({ id:'test ' + id})
        } catch (e) {
            reject({ data: null })
        }
    }))
}

export default mockApi