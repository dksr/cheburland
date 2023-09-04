import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { DataTable } from 'mantine-datatable'

import type { Topic } from '../../types'

type ForumTableProps = {
  topics: Topic[]
}

export const ForumTable: FC<ForumTableProps> = ({ topics }): JSX.Element => {
  const navigate = useNavigate()
  return (
    <DataTable
      highlightOnHover
      verticalSpacing="xl"
      w="100vh"
      records={topics}
      columns={[
        { accessor: 'title', title: 'Тема' },
        { accessor: 'replies_count', title: 'Ответы' }, // TODO: replace null to 0
      ]}
      onRowClick={({ id }) => navigate(`/forum/${id}`)}
    />
  )
}
