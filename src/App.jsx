import React, {useState} from 'react'
import SearchPanel from "./components/SearchPanel/SearchPanel";

const App = () => {
    const [items, setItems] = useState ( [
        {id:0, label: '♂Dungeon♂Master♂ '},
        {id:1, label: '. Fisting is 300 bucks'},
        {id:2, label: 'FUCK YOU'},
        {id:3, label: 'Im not gay, but 300 bucks its 300 bucks'},
    ])

    const [search, setSearch] = useState('')

    const handleInputChange = (searchValue) => setSearch(searchValue)

    const searchItem = (item, search) => {
    if (search.length === 0) {
        return items
    }

    return items.filter(item => {
        return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1
    })
    }

    const visibleItems = searchItem(items, search).map(item => {
        return (
            <li>
                {item.label}
            </li>
        )
    })

const downloadFile = 0
    return(

        <div>

            <SearchPanel handleInputChange={handleInputChange}/>
            <div>
                <ul>
                    {visibleItems}
                </ul>
                <div>
                    <input type="file"/>
                    <button>Sumbit</button>
                </div>

            </div>

        </div>

    )

}
export default App
