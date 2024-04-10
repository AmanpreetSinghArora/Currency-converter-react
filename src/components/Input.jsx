import { useId } from "react";

export default function Input({
  label,
  isReadOnly = false,
  inputVal,
  dropDownOptions = [],
  dropDownVal,
  onChangeInput,
  onChangeCountry

}) {
  let inputId = useId();

  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <input type="number" value={inputVal} placeholder="Enter Amount" id={inputId} name="num" readOnly = {isReadOnly} onChange={(e)=> onChangeInput && onChangeInput(Number(e.target.value))}/>
    
      <select name="currency" value={dropDownVal} onChange={(e)=>{onChangeCountry && onChangeCountry(e.target.value)}}>
        {dropDownOptions.map((country) => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>
    </>
  );
}
