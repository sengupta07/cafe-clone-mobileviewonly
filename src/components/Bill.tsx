import BackButton from "./BackButton";
import Header from "./Header";

function Bill() {
    return (
        <div>
            <BackButton heading="" img="" />
            <Header top="Check Bill" bottom="Here check your bill" img="" background="" />
            <div className="bg-white p-6 rounded-t-3xl mt-4">
                <h6>
                    Choose how you want to view your bill
                </h6>
                
            </div>
        </div>

    );
}

export default Bill;