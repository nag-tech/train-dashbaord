import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { APiUtils } from "../utils/ApiUtils";
import Table from 'react-bootstrap/Table';
import { setTrainDetailsAction } from "../config/redux/slices/TrainDetails";
import { PenFill, Trash } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";

export default function DashBoard(){

    const trainDetails = useSelector(store=> store.TrainDetailsSlice.trainDetails);
    const userType = useSelector(store=> store.AuthSlice.loggedInUser.userType);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    console.log(userType);

    function getTrainDetails(){
        APiUtils.getAllTrains().then(res=> {
            dispatch(setTrainDetailsAction(res))
        }).catch(eer=> alert("error while fetcing data"))
    }

    function deleteTrain(train){
        APiUtils.deleteTrain(train).then(res=> {console.log(res); getTrainDetails();}).catch(err=> alert("eeror deleting the train"));
    }
    useEffect(()=>{
        getTrainDetails();
    },[])

    const trainDetailsRows = trainDetails.map(train=> {
        console.log(train);
        return (<tr key={train.trainRouteId}>
            <td>{train.trainRouteId}</td>
            <td>{train.trainNum}</td>
            <td>{train.trainName}</td>
            <td>{train.arrivesAt}</td>
            <td>{train.departsAt}</td>
            <td>{train.platform}</td>
            {userType == "Admin" ? <th><PenFill onClick={()=>{navigate("/edit/"+train.trainRouteId)}}/> <Trash onClick={()=> {alert("delete cliked"); deleteTrain(train)}}/></th> : null}
          </tr>)
    })
    

    return ( <div>
        <div>
            <h1> Console</h1>
            
            {userType == "Admin" ? <Link to={"/add"}>Add Train</Link> : null}
        </div>
       { trainDetails.length > 0 ? <Table striped bordered hover>
        <thead>
          <tr>
            <th>trainRouteId</th>
            <th>train Num</th>
            <th>train Name</th>
            <th>arrivesAt</th>
            <th>departsAt</th>
            <th>platform Num</th>
            {userType == "Admin" ? <th>Actions</th> : null}
          </tr>
        </thead>
        <tbody>
         {trainDetailsRows}
        </tbody>
      </Table> : null}
      </div>);
}