import React from "react";
import '../assets/style/home/homecss.css'
import {getDataList} from "../api/api";
import {Link} from "react-router-dom";
import axios from "axios";
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            list:[],
            domain:'http://a.itying.com/'
        }
    }

    componentDidMount() {

        getDataList().then(res=>{
            console.log(res)
            this.setState({
                list:res.data.result
            })
        })
    }

    render() {
        return (
            <div className='home'>
                <div className='list'>
                    {
                        this.state.list.map((value,key)=>{
                            return(
                                <div className='item' key={key}>
                                    <p className='item_cate'>{value.title}</p>
                                    <ul className='item_list'>
                                        {
                                            value.list.map((v,k)=>{
                                                return(
                                                    <li key={k}>
                                                        <Link to={`/details/${v._id}`}>
                                                            <div className='inner'>
                                                                <img src={`http://a.itying.com/${v.img_url}`}/>
                                                                <p className="title">{v.title}</p>
                                                                <p className="price">{v.price}</p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
export default Home
