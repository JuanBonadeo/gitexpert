import { useState } from "react"


export const AddCategory = ({onAddCategory}) => {

  const [inputValue, setinputValue] = useState('')

  const onInputChange = ({ target }) => {
    setinputValue(target.value)
  }
  const onSumbit = (event) => {
    event.preventDefault()
    if(inputValue.trim().length <=1) return;
    
    setinputValue('');
    onAddCategory(inputValue.trim())
  }
  
  return (
    <>
      <form onSubmit={ onSumbit}>
        <input
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  )
}
