import axios from "axios";
import { BASE_URL } from "../base";

const SEARCH_MAIL="";
const DELETE_STUDENT=`${BASE_URL}/deletestudent`
const searchParticipator=()=>{
    return  axios.post('url',{
        params:{
            
        }
    })
}
const deletestudent=(mailId)=>{
    return axios.delete(DELETE_STUDENT,{params:{
        emailId:mailId
    }})
}

export {
    deletestudent
}