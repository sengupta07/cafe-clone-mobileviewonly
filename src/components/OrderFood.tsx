import Header from "./Header";
import SearchAndList from "./SearchAndList";
import BackButton from './BackButton';

function OrderFood() {
    return (
        <div>
            <BackButton heading="" img="" />
            <Header top='Hungry!' bottom='what you want to eat?' img='' background='' />
            <SearchAndList />
        </div>
    );
}

export default OrderFood;