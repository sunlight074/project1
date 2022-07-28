import React from 'react'
import {useGetUser} from './hook'

const Home: React.FC = () => {
    const  {data , isLoading}= useGetUser()
    console.log('data =>' ,data)
    return (
        <div className='mx-5'>
            {
            isLoading ? 
                (
                    <div>กำลังโหลดข้อมูล ..</div> 
                ) : ( 
                    // <div className='flex text-red-500'>
                    //     {
                    //         data?.result.map((value ,index) => 
                    //             <li key={index}>
                    //                 <ul>{value.userId}</ul>
                    //                 <ul>{value.title}</ul>
                    //             </li>
                    //         )
                    //     }
                    // </div>
                    <table className="table-auto">
                        <thead>
                            <tr>
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td>Malcolm Lockyer</td>
                            <td>1961</td>
                            </tr>
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}
export default Home