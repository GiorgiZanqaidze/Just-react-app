import ListItem from "./Components/ListItem";
import {useSelector, useDispatch} from "react-redux";
import {ListItemsActions} from "./store/list-items";
import ItemsInput from "./Components/ItemsInput";
function App() {
    const dispatch = useDispatch()
    const listItems = useSelector((state) => state.listItems.value)
    const addItem = () => {
        dispatch(ListItemsActions.addItem('gio'))
    }
  return (
    <div>
        <div>
            <ItemsInput />
        </div>
        {/*<ul>*/}
        {/*    {listItems.map((item, index) => {*/}
        {/*        return <ListItem key={index} content={item} id={index}/>*/}
        {/*    })}*/}
        {/*</ul>*/}

    </div>
  );
}

export default App;
