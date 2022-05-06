//http://a.itying.com/api/productlist
import axios from "axios";
export const getDataList = params =>{
    return axios.get('http://a.itying.com/api/productlist',{params:params})
}
export const getDataListDetails = params =>{
    return axios.get('http://a.itying.com/api/productcontent',{params:params})
}
