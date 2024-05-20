import CookedItems from "./CookedItems";
import PackagedItems from "./PackagedItems";
import { useState } from 'react';
function SearchAndList() {
    const [currentView, setCurrentView] = useState('cooked');
    return (
        <div className="bg-gray-600 p-6 rounded-t-3xl">
            <input className="py-3 px-4 w-full rounded-3xl bg-gray-500 placeholder-white" type="text" placeholder="Search.."></input>
            <div className="grid grid-cols-2">
                <button className={`${currentView == 'cooked' ? 'before:bg-red-500 before:w-full before:h-[2px]' : ''}p-3 relative text-white items-center transition-all duration-300 before:absolute before:right-0 before:bottom-0 before:h-[2px] before:w-0 before:transition-all before:duration-500 before:bg-red-500 before:hover:w-full`}
                onClick={() => setCurrentView('cooked')}>Cooked</button>
                <button className={`${currentView == 'packaged' ? 'before:bg-red-500 before:w-full before:h-[2px]' : ''} p-3 relative items-center text-white before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:transition-all before:duration-500 before:bg-red-500 before:hover:w-full `}
                onClick={() => setCurrentView('packaged')}>Packaged</button>
            </div>
            {currentView == 'cooked' ? <CookedItems/> : <PackagedItems/>}
        </div>
    );
}

export default SearchAndList;