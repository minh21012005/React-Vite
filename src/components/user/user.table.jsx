import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useState } from 'react';


const UserTable = () => {

    const [dataUser, setDataUser] = useState([])

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
    ];

    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        console.log('render')

    }

    loadUser();

    return (
        <Table columns={columns} dataSource={dataUser} />
    )
}

export default UserTable;