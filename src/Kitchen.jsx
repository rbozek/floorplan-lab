import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return ( 
    <div className="kitchen">

      <div id="kitchen-appliances">
        <Oven/>
        <Sink/>
      </div>

      <div id="kitchen-title">
      Kitchen
      </div>
    </div>

  );
}
 
export default Kitchen;