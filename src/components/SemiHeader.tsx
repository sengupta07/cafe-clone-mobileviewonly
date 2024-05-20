import clock from "/history-clock-button.png";
import { useNavigate } from "react-router-dom";

function SemiHeader() {

    const navigate = useNavigate();

    return (
        <div className="mx-4 pt-4 flex flex-row justify-between items-center">
            <div>
                <h5 className="text-white font-bold ">Not Hungry?</h5>
            </div>
            <button onClick={() => navigate("/my-history")} className="flex flex-row gap-2">
                <img className=" w-[20px] invert" src={clock}/>
                <h6 className="text-white">View History</h6>
            </button>
        </div>
    )
}

export default SemiHeader;