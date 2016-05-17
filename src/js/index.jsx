/**
 * Created by a1 on 2016/5/5.
 */


// 在这里引用less会打包、编译合并到dist/css中
import React from 'react';
import ReactDOM from 'react-dom';
import SelectComponent from './components/select/js/SelectComponent';
import TableComponent from './components/table/js/TableComponent';


const selectData = [
    {"id":"jack", "name":"杰克1"},
    {"id":"lucy", "name":"露西2"},
    {"id":"tom" , "name":"汤姆3"}
];

const tableColumns = [{
        title: '姓名',
        dataIndex: 'name',
        render: text => <a href="#">{text}</a>
    }, {
        title: '年龄',
        dataIndex: 'age'
    }, {
        title: '住址',
        dataIndex: 'address'
}];
const tableData = [{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
    }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园2号'
    }, {
        key: '3',
        name: '李大嘴',
        age: 32,
        address: '西湖区湖底公园3号'
}];


function selected(v){
    console.info(v);
    tableColumns[0].title = "aaa";
}


ReactDOM.render(
    <div>
        <SelectComponent data={selectData} selected={selected} />
        <TableComponent tableColumns={tableColumns} tableData={tableData} />
    </div>
    , document.body);



