import UserContext from '../../../hooksApp/hooksApp/src/components/useContext/context/UserContext';
import { useContext } from 'react';

const useProvider = () => {

    const prueba= useContext(UserContext);

  return (
   <h1>{prueba}</h1>
  )
}

export default useProvider;