import React from 'react'
import { Skeleton ,Table } from 'antd';
import {useGetUser} from './hook'

const Home: React.FC = () => {
    const  {data , isLoading}= useGetUser()

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ];

    return (
        <div className='m-10'>
            {
            isLoading ? 
                (
                  <Skeleton active />
                ) : ( 
                    <Table dataSource={data?.result} columns={columns} />
                )
            }
        </div>
    )
}
export default Home