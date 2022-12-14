import React from 'react'
import { Skeleton ,Table } from 'antd';
import {useGetUser} from './hook'

const Home: React.FC = () => {
    const  {data , isLoading}= useGetUser()

    const columns = [
      {
        title: 'ชื่อ',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'อายุ',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'ที่อยู่',
        dataIndex: 'address',
        key: 'address',
      },
    ];

    return (
        <div className='container m-4'>
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