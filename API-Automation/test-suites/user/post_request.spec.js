import axiosInstance from "../../support/axiosConfig.js";
import { createUserPath, newUserData } from '../../data/commonData.js';

describe('POST API requests', () =>{
    
    it('ID_3_2 Create new user', async ()=> {
        axiosInstance.post(createUserPath.path,newUserData)
        .then(response=>{
            console.log(response.data)
            expect(response.data.code).toBe(200);
            expect(response.data.id).toBe(newUserData.id);
        })
    });
        
});
