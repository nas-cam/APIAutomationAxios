import axiosInstance from '../../support/axiosConfig.js';


describe('GET API ', ()=> {
    
    it('get user by username', async() =>{
        const response = await axiosInstance.get("user/Username2")
        .then(response => {
            console.log(response.data);
           expect(response.data.id).toBe(2);
          })
          .catch(error => {
            console.error(error);
          });
       
    });


        
});