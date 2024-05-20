import BackButton from "./BackButton";
import lock from "/lock.svg";
import back from "/back-button.svg";

function Account() {
    return (

        <div className="h-full">
            <BackButton heading="" img="" />
            <div className="mt-6 pb-[100vh] grid grid-cols-1 divide-y divide-slate-400">
                <div className="flex flex-col items-center pb-4">
                    <div className="mb-4 p-8 w-36 h-36 rounded-full flex justify-center border-white border-2 bg-gray-600">
                        <span className="text-white text-7xl items-center">SS</span>
                    </div>
                    <h4 className="text-white">Suman Sengupta</h4>
                    <h6 className="text-white">suman.sengupta</h6>
                </div>
                <div className="flex px-4 pt-8 justify-center items-center">
                    <button className="py-2 px-2 w-full items-center bg-yellow-500 rounded-lg flex flex-row justify-between">
                        <div className="flex flex-row gap-4 items-center">
                            <img className="" src={lock} />
                            <span className="text-black">Change Password</span>
                        </div>
                        <img className="transform -scale-x-100 invert" src={back} />

                    </button>
                </div>
            </div>
        </div>

    );
}

export default Account;