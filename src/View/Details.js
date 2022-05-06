import React,{useState, useEffect}from "react";
import {useParams, Link } from "react-router-dom";
import {getDataListDetails} from "../api/api";

function Details(){
    //useParams:是路由的参数，useParams可以拿到路由里面的几乎所有参数
    //所以用这个来拿到传过来的ID
    const {id} = useParams();
    //useState:相当于类组件里面的this.state={}，只不过在函数组件中写法为：
    //以下方法，而且是成对出现的，第一个值为变量名，第二个值为修改变量的名字，需要修改时候要用到第二个名字，使用的
    //时候需要用到第一个变量名，固定写法，没办法
    let [datalist, setDatalist] = useState([])
    //userEffect:更新后和挂载后融合的钩子函数
    //如果后面加一个空数组则变成：挂载后
    //如果数组里面有对象，则意思为对象改变时运行这个程序
    useEffect(()=>{
        getData();
    },[])
    function getData(){
        getDataListDetails({id:id}).then(res=>{
            setDatalist(res.data.result[0])
        })
    }
    return(
        <div>
            <Link to='/'>返回</Link>
            <div className='p_content'>
                <div className='p_info'>
                    <img src={`http://a.itying.com/${datalist.img_url}`} />
                    <h2>{datalist.title}</h2>
                    <p className="price">{datalist.price}</p>
                </div>
                <div className="p_detail">
                    <h3>商品详情</h3>
                    <div className="p_content" dangerouslySetInnerHTML={{__html:datalist.content}}></div>
                </div>
            </div>
        </div>
    )
}
export default Details


//下面是类组件写法
// import React from "react";
// import '../assets/style/home/homecss.css'
// import {Link, useParams} from "react-router-dom";
// import axios from "axios";
// class Details extends React.Component{
//     constructor() {
//         super();
//         this.state={
//             list:[],
//             domain:'http://a.itying.com/'
//         }
//     }
//
//     componentWillMount() {
//         // let {id} = useParams();
//         // let id = this.props.match.params.id;
//         this.requestData();
//     }
//     requestData=()=>{
//         let api = this.state.domain+'api/productcontent?id=5ac1a22011f48140d0002955'
//         axios.get(api).then(res=>{
//             this.setState({
//                 list:res.data.result[0]
//
//             })
//         })
//     }
//
//     render() {
//         return (
//             <div className='pcontent'>
//                 <div className="back">
//                     <Link to='/'>返回</Link>
//                 </div>
//
//                 <div className="p_content">
//                     <div className="p_info">
//                         <img src={`${this.state.domain}${this.state.list.img_url}`} />
//                         <h2>{this.state.list.title}</h2>
//                         <p className="price">{this.state.list.price}</p>
//                     </div>
//                     <div className="p_detial">
//                         <h3>
//                             商品详情
//                         </h3>
//                         <div className="p_content" dangerouslySetInnerHTML={{__html:this.state.list.content}}>
//                             {/* 解析html代码 */}
//                         </div>
//                     </div>
//                 </div>
//
//
//                 <footer className="pfooter">
//
//                     <div className="cart">
//                         <strong>数量:</strong>
//                         <div className="cart_num">
//                             <div className="input_left">-</div>
//                             <div className="input_center">
//                                 <input type="text"  readOnly="readonly" value="1" name="num" id="num" />
//                             </div>
//                             <div className="input_right">+</div>
//                         </div>
//
//                     </div>
//
//                     <button className="addcart">加入购物车</button>
//                 </footer>
//
//             </div>
//         );
//     }
// }
// export default Details
//上面是类组件写法

