import axios from "axios";

export class PokeApiAdapter{

    private readonly axios = axios

    //peticion get
    async get(url: string){
        const { data } = await this.axios.get(url);
        return data
    }

    async post( url:string, data:any){
        
    }
    async patch( url:string, data:any){

    }
    async delete( url:string){

    }

}

