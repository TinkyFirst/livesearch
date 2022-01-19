import React, {useState} from 'react'

const SearchPanel = () => {

    const [value, setValue] = useState('')

    const changeInput = (e) => {
    setValue(e.target.value)
    }

    return(
        <div>
            <input type="text" onchange={changeInput} value={value}/>
        </div>
    )
}

export default SearchPanel
