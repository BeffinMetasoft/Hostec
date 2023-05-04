import React, { useEffect } from 'react'
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { viewShopper } from '../../../api/AdminRequest';
// const data = [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         email:"wert@gamial.com",
//         phone: 'New York No. 1 Lake Park',
//     },
//     {
//         key: '2',
//         name: 'Joe Black',
//         age: 42,
//         email:"qwert@gamial.com",
//         address: 'London No. 1 Lake Park',
//     },
//     {
//         key: '3',
//         name: 'Jim Green',
//         email:"qwert@gamial.com",
//         age: 32,
//         address: 'Sydney No. 1 Lake Park',
//     },
//     {
//         key: '4',
//         name: 'Jim Red',
//         email:"wert@gamial.com",
//         age: 32,
//         address: 'London No. 2 Lake Park',
//     },
// ];

function ViewShopper() {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const [shoppers,setShoppers]= useState([])

    useEffect(()=>{
       const getShoppers=async()=>{
        try {
            const {data} = await viewShopper()
            console.log(data,'12355');
            setShoppers(data.shoppers)
        } catch (error) {
            console.log(error.message);
        }
       }
       getShoppers()
    },[])
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: 'ID',
            dataIndex: 'shopperId',
            key: 'shopperId',
            width: '30%',
            ...getColumnSearchProps('shopperId'),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '30%',
            ...getColumnSearchProps('name'),
        },
        
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: '20%',
            ...getColumnSearchProps('email'),
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
            key: 'phone',
            ...getColumnSearchProps('phone'),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
    ];
    return (
        <div className='flex justify-center'>
            <div className='w-5/6 mt-16'>
                <Table columns={columns} dataSource={shoppers} />
            </div>
        </div>
    )
}

export default ViewShopper