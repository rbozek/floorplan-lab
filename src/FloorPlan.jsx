import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bedroom from './Bedroom'
import Bath from './Bath'


const FloorPlan = (props) => {
  return ( 
    <div className='floorplan'>
      <Bedroom bedNum={'1'} />
      <Bedroom bedNum={'2'} />
      <Bedroom bedNum={'3'} />
      <Bath name={'Half'} />
      <Bath name={'Full'} />
      <Kitchen />
      <LivingRoom />
    </div>
);
}
// First round, before styling/positioning:
/*{ <div className='floorplan'>
<Bedroom bedNum={'1'} />
<Kitchen />
<Bath name={'Full'} />
<Bedroom bedNum={'2'} />
<LivingRoom />
<Bath name={'Half'} />
<Bedroom bedNum={'3'} />
</div> }*/

export default FloorPlan