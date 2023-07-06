
import React from 'react'
import "antd/dist/antd";
import { Table } from 'antd';
import { SearchOutlined,FileSearchOutlined,BorderOutlined} from '@ant-design/icons';

export default function SurveyMang
() {


  
	// Sample Data for the table
	const dataSource = [
		{ key: '1', username: 'Lenoir Cafe SKGH Umm Al Quawin QIC Qre', key: '1',email: '128', address1:'Lenoir Cafe Skgh UQ',shoper1:'Zakir',email1:'',date1:'2021-04-04 13:10',submit1:'2021-04-11 18:10',delay1:'4 6:45',address2:'',address22:'2021-04-13 23:59',  blank:'',score1:'0.00%', ver:<BorderOutlined />,cm1:'N(16/16)',age:<FileSearchOutlined />,box1:'LCC',expo1:'N',hold1:'N',s1:'Validation in Progress',d1:'More 10177'},
		{ key: '2', username: 'Lenoir Cafe SKSKH Rash Al Quwain QTR ', age: 20 , key: '1', email: '129',address1:'Lenoir Cafe SKSKH  RsK',shoper1:'Zahir', email1:'', date1:'2021-04-04 13:10',submit1:'2021-05-12 18:10',delay1:'7 9:45',address2:'',address22:'2021-09-13 13:59',  blank:'',score1:'0.80%', ver:<BorderOutlined />,cm1:'N(16/16)',age:<FileSearchOutlined />,box1:'LCC',expo1:'N',hold1:'N',s1:'Validation in Progress',d1:'More 10166',age: <SearchOutlined /> },
		{ key: '3', username: 'Madhu', age: 30 , key: '1', username: 'Hotel Dubai indigo Downtown', age: 20 , key: '1', email: '129',address1:'Hotel Dubai indigo Downtown',shoper1:'Mohmmed', email1:'',         date1:'2021-04-04 13:10',submit1:'2021-05-12 18:10',delay1:'7 9:45',address2:'',address22:'2021-09-13 13:59',  blank:'',score1:'0.80%', ver:<BorderOutlined />,cm1:'N(16/16)',age:<FileSearchOutlined />,box1:'LCC',expo1:'N',hold1:'N',s1:'Validation in Progress',d1:'More 10166',age: <SearchOutlined /> },
		
	];

     

    


	
	
	// Sample Columns data
	const columns = [
		{
			title: 'SURVEY',
			dataIndex: 'username',
			key: 'username',
		},
		{
			title: 'VIEW',
			dataIndex: 'age',
			key: 'age',
		},





        { 
            key: "email", 
            title: "LOCATION", 
            dataIndex: "email", 
            }, 
            { 
            key: "address1", 
            title: " LOCATION ADDRESS", 
            dataIndex: "address1", 
            }, 
            { 
            key: "shoper1", 
            title: "SHOPPER", 
            dataIndex: "shoper1", 
            }, 
            

            { 
                key: "email1", 
                title: "START DATE", 
                dataIndex: "email1", 
                }, 
                { 
                key: "date1", 
                title: "SURVEY DATE", 
                dataIndex: "date1", 
                }, 
                { 
                key: "submit1", 
                title: "SUBMIT DATE", 
                dataIndex: "submit1", 
                }, 
                { 
                key: "delay1", 
                title: "SUBMIT DELAY", 
                dataIndex: "delay1", 
                }, 

                { 
                    key: "address2", 
                    title: "DUE DATE", 
                    dataIndex: "address2", 
                    }, 
                    { 
                    key: "address22", 
                    title: "END DATE", 
                    dataIndex: "address22", 
                    }, 
                    { 
                    key: "blank", 
                    title: "ATT CNT", 
                    dataIndex: "blank", 
                    }, 
                    { 
                    key: "score1", 
                    title: "SCORE", 
                    dataIndex: "score1", 
                    },

                    { 
                        key: "ver", 
                        title: "SCORE VERIFIED", 
                        dataIndex: "ver", 

        
                    
                        },
                    
                        
                        { 
                            key: "cm1", 
                            title: "COMMENTS VERIFIED", 
                            dataIndex: "cm1", 
                            }, 



                            { 
                                key: "box1", 
                                title: "MAIL BOX", 
                                dataIndex: "box1", 
                                }, 
                                { 
                                    key: "expo1", 
                                    title: "OK FOR EXPORT", 
                                    dataIndex: "expo1", 
                                    }, 
                                    { 
                                        key: "hold1", 
                                        title: "HOLD EXPORT", 
                                        dataIndex: "hold1", 
                                        }, 

                                        { 
                                            key: "s1", 
                                            title: "SURVEY STATUS", 
                                            dataIndex: "s1", 
                                            }, 

                                            { 
                                                key: "d1", 
                                                title: "SURVEY DETAILS", 
                                                dataIndex: "d1", 
                                                }, 
	];
    
    const style = {
        'textAlign': 'center',
        'color': 'green'
    }

    return (
		<div style={style}>
			<Table dataSource={dataSource} columns={columns} />
		</div>
    )
}





	// return (
	// 	<div style={style}>
			
	// 		<Table dataSource={dataSource} columns={columns} />
           
	// 	</div>
	// );
    



