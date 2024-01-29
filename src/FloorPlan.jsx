import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bedroom from './Bedroom'
import Bath from './Bath'


const FloorPlan = (props) => {
  return ( 
    <div className='floorplan'>
      <Bedroom bedNum={'1'} />
      <Kitchen />
      <Bath name={'Full'}/>
      <Bedroom bedNum={'2'} />
      <LivingRoom />
      <Bath name={'Half'}/>
      <Bedroom bedNum={'3'} />
    </div>
  );
}

export default FloorPlan;