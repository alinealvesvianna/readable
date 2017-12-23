import axios from 'axios'
import {BASE_URL_ENDPOINT} from '../constants/index'

axios.defaults.baseURL = BASE_URL_ENDPOINT;
axios.defaults.headers.common["Authorization"] = "bananinha";
  

export const getAllPostsApi = () => 
    axios.get("/posts/jsjsj")
    .then(response => {
        console.log(response.data)
        return response.data
    })
    .catch(function (error) {
        if (error.response) {
          checkStatus(error.response.status)
        } else if (error.request) {
            throw Error(`Ops... Erro de requisição ${error.request}`);
        } else {
          throw Error(`Ops... Alguma coisa deu muito errado ${error.message}`);
        }
      });




export const checkStatus = response => {
    if (
      (response >= 400 && response <= 402) ||
      (response >= 405 && response <= 499)
    ) {
      throw Error(`Ops...Teve algum erro na requisição. 
      > Resposta da requisição: ${response}`)
    }
  
    if (response === 403) {
      throw Error(`Ops... A requisição não foi permitida. 
      > Resposta da requisição: ${response}`)
    }
  
    if (response === 404) {
      throw Error(`Ops... Sua conexão com a internet teve algum problema. 
      > Resposta da requisição: ${response}`)
    }
  
    if (response >= 500) {
      throw Error(`Ops... Tivemos algum problema no servidor. Tente novamente mais tarde. 
      > Resposta da requisição: ${response}`)
    }
  }