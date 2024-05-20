function Order(props: { className?: string, date?:string, item?:string, quantity?:string, total?:string, status?:string }) {
    return (
        <div className={`${props.className} bg-white rounded-xl`}>
            <div className="grid grid-cols-1 divide-y divide-slate-200">
                <div className="px-3 py-2 flex flex-row justify-between">
                    <h6 className="font-bold">Your Order</h6>
                    <h6>{props.date}</h6>
                </div>
                <div className="px-3 py-2 flex flex-row justify-between">
                    <h6>{props.item}</h6>
                    <h6>{props.quantity}</h6>
                </div>
                <div className="px-3 py-2 flex flex-row justify-between">
                    <h6 className="font-bold">Total</h6>
                    <h6 className="font-bold">{props.total}</h6>
                </div>
            </div>
            <div className="bg-gray-800 px-3 py-2 flex flex-row justify-between items-center rounded-b-xl">
                <h6 className="text-[#3C91E6]">{props.status}</h6>
                <button className="py-2 px-6 bg-red-500 text-white rounded-lg">Cancel</button>
            </div>
        </div>
    );
}

export default Order;