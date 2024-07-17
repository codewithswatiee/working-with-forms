export function useInput(defaultValue, validationFn) {
    const [enteredValue, setEnterredValue] = useState(defaultValue)
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFn(enteredValue)
    function handleInputChange(event) {
        setEnterredValue(event.target.value)
        setDidEdit(false)
    } 
    function handleInputBlur() {
        setDidEdit(true)
    }

      return {
        value: enteredValue,
        handleInputBlur,
        handleInputChange,
        hasError: didEdit && !valueIsValid,
      };
}