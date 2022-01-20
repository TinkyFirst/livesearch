import React, {useState} from 'react'

const SearchPanel = ({handleInputChange}) => {

    const [value, setValue] = useState('')

    const changeInput = (e) => {
        setValue(e.target.value)

        handleInputChange(e.target.value)
    }
    return(
        <div>
            <input type="text"  onChange={changeInput} value={value}/>

        </div>
    )
}

export default SearchPanel
