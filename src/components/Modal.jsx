import React from 'react'
import ReactModal from 'react-modal'
import './modal.scss'

ReactModal.setAppElement('#root')

const Modal = (props) => (
    <ReactModal
        className="modal"
        overlayClassName="modal-overlay"
        closeTimeoutMS={300}
        {...props}
    >
        <h3>Test modal</h3>
        <button onClick={props.onClose}>close</button>
        <p>lorem testum</p>
        <p>lorem testum</p>
        <p>lorem testum</p>
        <p>lorem testum</p>
        <p>lorem testum</p>
        <p>lorem testum</p>
        <p>lorem testum</p>
        <p>lorem testum</p>
        <p>lorem testum</p>
        <p>lorem testum</p>
        <p>lorem testum</p>
        <p>lorem testum</p>
        <p>lorem testum</p>
        <p>lorem testum</p>
        <p>lorem testum</p>
        <p>lorem testum</p>
        <p>lorem testum</p>
        <p>lorem testum</p>
        <p>lorem testum</p>
        <p>lorem testum</p>
        <p>lorem testum</p>
    </ReactModal>
)

export default Modal