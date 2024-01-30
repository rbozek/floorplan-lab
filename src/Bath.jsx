const Bath = (props) => {
  return (
    <div className="bath" id={`${props.name}-bath`}>
      {props.name} Bath
    </div>
  );
}

export default Bath;