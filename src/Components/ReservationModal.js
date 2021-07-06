import { Fragment } from 'react';
import classes from './ReservationModal.module.css';
import ReactDOM from 'react-dom';
import ModalForm from './ModalForm';



const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};

const ModalOverlay = props => {

  return (
    
    <div className={classes.modal}>
      
        <ModalForm />
    
    </div>
    
  )
};

const portalElement = document.getElementById('overlays');

const ReservationModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay></ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default ReservationModal;