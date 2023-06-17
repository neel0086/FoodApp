import axios from 'axios'
const url = "http://localhost:8080/api/v1"

class FoodService{
    addUser = async (user)=>{
        try{
            return await axios.post(`${url}/auth/add_user`,user)
        }
        catch(error){
            console.log("Error while calling addItems API",error);
        }
    }
    checkUser = async (user)=>{
        try{
            return await axios.post(`${url}/auth/login`,user)
        }
        catch(error){
            console.log("Error while calling addItems API",error);
        }
    }
    getAllItems = async()=>{
        try {
            return await axios.get(`${url}/items` );
        } catch (error) {
            console.log('Error while calling getItems API ', error);
        }
    }
    addItems = async (item,id)=>{
        try{
            return await axios.post(`${url}/items/${id}`,item)
        }
        catch(error){
            console.log("Error while calling addItems API",error);
        }
    }
    addCompany = async (cmpny)=>{
        try{
            return await axios.post(`${url}/company`,cmpny)
        }
        catch(error){
            console.log("Error while calling addCompany API",error);
        }
    }
    getAllCompany = async ()=>{
        try{
            return (await axios.get(`${url}/company`)).data
        }
        catch(error){
            console.log("Error while calling getAllCompany API",error);
        }
    }
    getAllVerifiedCompany = async ()=>{
        try{
            return (await axios.get(`${url}/company_verified`)).data
        }
        catch(error){
            console.log("Error while calling getAllCompany API",error);
        }
    }
    addVerifiedCompany = async (cmpny)=>{
        try{
            return await axios.post(`${url}/company_verified`,cmpny)
        }
        catch(error){
            console.log("Error while calling addCompany API",error);
        }
    }
    getAllAdminStats = async (date)=>{
        try{
            return (await axios.post(`${url}/get_all_admin_stats`,{"date":date})).data
        }
        catch(error){
            console.log("Error while calling getAllAdminStats API",error);
        }
    }
}
export default new FoodService()
