/**
 * Created by a1 on 2016/5/5.
 */


// 在这里引用less会打包、编译合并到dist/css中
import style from './components/comment/css/comment.less';
import style2 from './components/hello/css/hello.css';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBoxComponent from './components/comment/js/CommentBoxComponent';
import HelloComponent from './components/hello/js/HelloComponent';

var commentData = [
    {author: "张三1", time: "20150721", text: "张三说好"},
    {author: "李四1", time: "20150721", text: "李四说好"}
];

ReactDOM.render(
<CommentBoxComponent commentItems={commentData} />,
    document.body
);
//
//ReactDOM.render(
//    <HelloComponent />,
//    document.body
//);




