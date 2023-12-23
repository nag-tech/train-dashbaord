import { Button } from "bootstrap";
import TextField from "../components/TextField";
import styles from './Styles.module.css'
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { APiUtils } from "../utils/ApiUtils";

export default function AddOrEditTrain(){


    const params = useParams();

    const navigate = useNavigate();
    const id = params.id;
    console.log(id);
    const [trainData, setTrainData] = useState({});
    const trainDetails = useSelector(store=> store.TrainDetailsSlice.trainDetails);
    function getTrainDateOnEdit(){
        const train = trainDetails.filter(trainDetail=> {
            console.log(trainDetail)
            return trainDetail.trainRouteId == id}).at(0);
            if(train){
                setTrainData(train);
            }
            
    console.log(train);
    }

    useEffect(()=>{
        getTrainDateOnEdit();
    },[])

    
    function onChnage(e){
        setTrainData(prev=>{
            return {
                ...prev,
               [e.target.name]: e.target.value
            }
        })
        console.log(trainData)
    }

    function addOrUpdate(){
        APiUtils.addOrUpdate(trainData).then(res=>navigate('/dashboard'));
    }
    



        return <div className="d-flex flex-column p-3 " style={{gap: "10px"}}> 
        <TextField name="trainNum"  className={styles.textField} placeholder={"train num"} value={trainData.trainNum} onChange={onChnage}/>
        <TextField name="trainName" className={styles.textField}  placeholder={"train name"} value={trainData.trainName} onChange={onChnage}/>
        <TextField name="arrivesAt" type={'datetime-local'} className={styles.textField}  placeholder={"train arives at"} value={trainData.arrivesAt} onChange={onChnage}/>
        <TextField name="departsAt" type={'datetime-local'} className={styles.textField}  placeholder={"train depatrts at"} value={trainData.departsAt} onChange={onChnage}/>
        <TextField name="platform" className={styles.textField}  placeholder={"train plat form"} value={trainData.platform} onChange={onChnage}/>
        <button onClick={()=>{addOrUpdate()}}> Add/Update</button>

    </div>; 
}