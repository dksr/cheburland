import type { FC } from 'react'

import {
  // Badge,
  // Box,
  Flex,
  // Paper,
  // Text
} from '@mantine/core'

// import { Reactions } from '@/components'
//
// import comments from '../../data.json'
// import { useForum } from '@/hooks/useForum'
// import { Topic } from '@/pages/forum/types'
// import { useGetCommentQuery } from '@/app/redux'

export const CommentList: FC = () => {
  // const currentTopicId = parseInt(location.pathname.replace(/\D/g, ''))
  // const { data } = useGetCommentQuery(currentTopicId)
  //
  // console.log(data)
  // const findTopic = () => {
  //   const currentTopicId = parseInt(location.pathname.replace(/\D/g, ''))
  //   const findCurrentTopic = allData.find((topic: Topic )=> topic.id === currentTopicId)
  //   if (findCurrentTopic) {
  //     return findCurrentTopic
  //   }
  // }
  return (
    <Flex direction="column" gap="md">
      {/*{findTopic().comments.map((item: Topic) => (*/}
      {/*  <Paper withBorder p="md" key={item.id}>*/}
      {/*    <Flex justify="space-between">*/}
      {/*      <Box>*/}
      {/*        <Text fz="xs" fw={500} fs="italic">*/}
      {/*          {item.author_name}*/}
      {/*        </Text>*/}
      {/*        <Text>{item.message}</Text>*/}
      {/*      </Box>*/}
      {/*      <Box>*/}
      {/*        <Badge>{item.created_at}</Badge>*/}
      {/*      </Box>*/}
      {/*    </Flex>*/}
      {/*    <Reactions commentId={id} />*/}
      {/*  </Paper>*/}
      {/*))}*/}
    </Flex>
  )
}
