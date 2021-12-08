import Enhance from "../HOC/Enhance";

const Description = ({heading}) => {
   
    return(
      
      
        <div>
       <h3>{heading}</h3> 
       <div>Lorem ipsum something something something something something something something</div>
         </div>
                
    );
}
export default Enhance(Description);