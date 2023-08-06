import { FC } from 'react'
import { useLoaderData } from 'react-router-dom'
import { IPodcast } from '../../../../../../podcast/domain/models/Podcast.types'
import { Content } from '../../../../../../common/view/components/content'

const ChildrenElementTest: FC = () => {
    const { id } = useLoaderData() as IPodcast
    return <Content>
        <div className=' text-white'>Current {id}</div>
    </Content>

}

export default ChildrenElementTest
