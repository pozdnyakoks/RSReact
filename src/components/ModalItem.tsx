import Close from './../assets/close.svg';

export default function ModalItem() {
  return (
    <div className="modal">
      <div className="modal-item">
        <img className="close-img" src={Close} alt="close" />
      </div>
    </div>
  );
}
