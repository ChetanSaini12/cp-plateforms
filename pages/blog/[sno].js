import React from 'react'
import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { sno } = router.query

    return (
        <div>
            This is blog #{sno}
        </div>
    )
}

export default Post
