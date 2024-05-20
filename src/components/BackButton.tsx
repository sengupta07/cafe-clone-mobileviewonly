import { useNavigate } from "react-router-dom";
import backbutton from "/back-button.svg";


function BackButton(props : {heading:string, img:string}) {
    const navigate = useNavigate();
    return (

        <div className="mx-3 pt-3 flex flex-row justify-between items-center">
            <button className="" onClick={() => navigate(-1)}>
                <img src={backbutton} />
            </button>
            <h5 className="text-white">{props.heading}</h5>
            <img className="invert" src={props.img}/>
        </div>

    );
}

export default BackButton;