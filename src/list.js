import useForm from "./useForm";
import validate from './validateInfo';



function List() {

    
    const { values, errors } = useForm(
        
        validate
      );
    return ( 
        <div className="lister">

                <p>I am the lister</p>
                <p>{values.email}</p>
        </div>
     );
}

export default List ;