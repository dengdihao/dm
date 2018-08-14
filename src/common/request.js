import axios from 'axios'

export default function (url,obj) {
    return new Promise(function (resolve, reject) {
        axios.post(url,obj)
            .then((rel)=>{
                resolve(rel,data)
            },()=>{

            })
    })
}