const items = [
    { name: "Boiled Egg", price: "Rs 10" },
    { name: "Cafe Chocolate", price: "Rs 10" },
    { name: "Cafe Frappe", price: "Rs 10" },
    { name: "Cheese Macroni Pasta", price: "Rs 10" },
    { name: "Chicken Cheese Sandwich", price: "Rs 10" },
    { name: "Chicken Sandwich", price: "Rs 10" },
    { name: "Chicken Sausage", price: "Rs 10" },
    { name: "Double Omlette", price: "Rs 10" },
    { name: "Boiled Egg", price: "Rs 10" },
    { name: "Boiled Egg", price: "Rs 10" },
    { name: "Boiled Egg", price: "Rs 10" },
    { name: "Boiled Egg", price: "Rs 10" },
    { name: "Boiled Egg", price: "Rs 10" }
]


function CookedItems() {
    return (
        <div>
            {items.map((item, index) =>
                <div key={index} className="mt-3 p-3 bg-white rounded-3xl flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-lg">{item.name}</span>
                        <span className="text-sm">{item.price}</span>
                    </div>
                    <div className="items-center">
                        <input id="red-radio" type="radio" value="" name="colored-radio" className="w-7 h-7 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-red-500 focus:ring-2 dark:bg-red-500 dark:border-red-500" />
                        <label htmlFor="red-radio" className="items-center text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CookedItems;