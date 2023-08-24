import ListItem from "./Components/ListItem";
function App() {

    let items = ['item1', 'item-2']


  return (
    <div>
        {items.map((item, index) => {
            return <ListItem content={item}/>
        })}
    </div>
  );
}

export default App;
