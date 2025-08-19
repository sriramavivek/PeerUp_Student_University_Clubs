import axios from "axios";

export function getuniversity(uniid:string){
    const data = JSON.stringify({
        "university_code": uniid
    });

    const config = {
        method: 'post',
        url: 'http://127.0.0.1:3000/data/getuni/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    }

    axios.request(config).then((response) => {
        if (response.status === 200) {
            return response.data
        }else{
            return 
        }
    })

}