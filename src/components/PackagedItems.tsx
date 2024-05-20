const items = [
    { name: "Britania Nutri Choice Digestive", price: "Rs 10" }, 
    { name: "Britannia Bourbon", price: "Rs 10" }, 
    { name: "Britannia Good Day Butter", price: "Rs 10" }, 
    { name: "Britannia Good Day chocochip", price: "Rs 10" }, 
    { name: "Britannia Treat Jim Jam", price: "Rs 10" }, 
    { name: "Chicken Sandwich", price: "Rs 10" }, 
    { name: "Chicken Sausage", price: "Rs 10" }, 
    { name: "Double Omlette", price: "Rs 10" }, 
    { name: "Boiled Egg", price: "Rs 10" }, 
    { name: "Boiled Egg", price: "Rs 10" }, 
    { name: "Boiled Egg", price: "Rs 10" }, 
    { name: "Boiled Egg", price: "Rs 10" }, 
    { name: "Boiled Egg", price: "Rs 10" }]
    
function PackagedItems() {
    return(
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

export default PackagedItems;