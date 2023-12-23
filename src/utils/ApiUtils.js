import axiosInstance from "../config/axios/AxiosConfig";

export class APiUtils{


    static async getAllTrains(){
       const trainDetails = await axiosInstance.get("/getAllTrains");
       console.log(trainDetails);
       return trainDetails.data;
    }

    static async deleteTrain(train){
        const result = await axiosInstance.delete("/deleteTrain/"+train.trainRouteId);

        return result.data;
    }

    static async addOrUpdate(train){
        const result = await axiosInstance.post('/addTrain', train)

        return result.data;
    }
}