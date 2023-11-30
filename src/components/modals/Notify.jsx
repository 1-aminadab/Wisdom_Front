import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { notifyState } from '../../feature/cardSlice';

const SneakPeekCard = ({state}) => {
  const { notify} = useSelector((store)=> store.card)
  const dispatch = useDispatch()
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    textAlign: 'center',
    maxWidth: '300px',
    margin: 'auto',
    backgroundColor:"white",
    borderRadius:'5px',
    display:`${state ?"block":"none"}`
  };

  const headerStyle = {
    color: '#333',
    fontSize: '20px',
  };

  const subheaderStyle = {
    color: '#666',
    fontSize: '16px',
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={cardStyle}>
      <h2 style={headerStyle}>It's a sneak peek!</h2>
      <p style={subheaderStyle}>Stay tuned for the full experience coming soon.</p>
      <button onClick={()=> dispatch(notifyState(false))} style={buttonStyle}>OKAY</button>
    </div>
  );
};

export default SneakPeekCard;
