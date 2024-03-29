import { useState } from "react"

export const useTeamDataProps = () => {
    const [teamName, setTeamName] = useState('');
    const [basketCount, setBasketCount] = useState(0);
  
    const handleAdd = () => {
      setBasketCount(prevCount => prevCount + 1);
    };
  
    const handleSubtract = () => {
      if (basketCount > 0) {
        setBasketCount(prevCount => prevCount - 1);
      }
    };
  
    const handleChange = event => {
      setTeamName(event.target.value);
    };

    return {
        handleChange,
        handleAdd,
        handleSubtract,
        teamName,
        basketCount
    }
}