import food from "/pngwing.com.png";
import user from "/user.png";
import clock from "/history-clock-button.png";
import card from "/credit.png";
import cart from "/cart (2).png";
import { useNavigate } from "react-router-dom";

function Homepage() {
    const List = [{ id: 1, name: "Order Food", img: clock, order: "flex-row", color: "bg-yellow-500", insideImg: food, path: "/order-food", other: "/my-history" },
    { id: 2, name: "My Bills", img: user, order: "flex-row-reverse", color: "bg-red-500", insideImg: card, path: "/bill", other: "/my-account" },
    ]
    const navigate = useNavigate();

    return (
        <div className="mx-6 py-6 grid grid-cols-1">
            {List.map(product =>
                <div className={`flex ${product.order} justify-between gap-3 py-2`}>
                    <button onClick={() => navigate(product.path)} className={`w-[80%] h-16 rounded-2xl ${product.color}`}>
                        <div className="flex justify-center gap-3 flex-row items-center">
                            <img src={product.insideImg} className="w-8 h-auto" />
                            <h5 className="items-center font-semibold" key={product.id}>{product.name}</h5>
                        </div>
                    </button>
                    <button onClick = {() => navigate(product.other)} className="px-4 rounded-2xl bg-white">
                        <img src={product.img} className="w-8" />
                    </button>
                </div>
            )}
            <div className="py-2">
                <button className={`w-full h-16 rounded-2xl bg-green-400 flex justify-center gap-3 flex-row items-center`}>
                    <img src={cart} className="w-8 h-auto" />
                    <h5 className="font-semibold">My Cart</h5>
                </button>
            </div>
        </div>
    )
}
export default Homepage;