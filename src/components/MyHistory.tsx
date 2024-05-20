import BackButton from "./BackButton";
import Header from "./Header";
import Order from "./Order";
import filter from "/filter.svg";

const orders = [
    { date: "20 May, 2024", item: "Aam Doi", quantity: "1 x 15.0", total: "15.0", status: "Fulfilled" },
    { date: "20 May, 2024", item: "Aam Doi", quantity: "1 x 15.0", total: "15.0", status: "Fulfilled" },
    { date: "20 May, 2024", item: "Aam Doi", quantity: "1 x 15.0", total: "15.0", status: "Fulfilled" },
    { date: "20 May, 2024", item: "Aam Doi", quantity: "1 x 15.0", total: "15.0", status: "Fulfilled" },
    { date: "20 May, 2024", item: "Aam Doi", quantity: "1 x 15.0", total: "15.0", status: "Fulfilled" },
    { date: "20 May, 2024", item: "Aam Doi", quantity: "1 x 15.0", total: "15.0", status: "Fulfilled" },
    { date: "20 May, 2024", item: "Aam Doi", quantity: "1 x 15.0", total: "15.0", status: "Fulfilled" },
    { date: "20 May, 2024", item: "Aam Doi", quantity: "1 x 15.0", total: "15.0", status: "Fulfilled" },
    { date: "20 May, 2024", item: "Aam Doi", quantity: "1 x 15.0", total: "15.0", status: "Fulfilled" }

]

function MyHistory() {
    return (
        <div className=" ">
            <BackButton heading="1 May, 2024 to 20 May, 2024" img={filter} />
            <Header top='My History' bottom='Here is your hunger filling history!' img='' background='' />
            <div className="mx-4 mt-8">
                {orders.map(order =>
                    <Order className="mt-3" date={order.date} item={order.item} quantity={order.quantity} total={order.total} status={order.status} />
                )}
            </div>
        </div>
    );
}

export default MyHistory;