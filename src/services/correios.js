import axios from 'axios'
//Get adress from correios api
export default function getCorreiosApi(cep) {
    return new Promise((resolve, reject) => {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        axios.get(url).then(response => {
            resolve(response.data);
        }).catch(error => {
            reject(error);
        });
    });
}