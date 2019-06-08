import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { connect } from 'react-redux'
import Modal from '../components/Modal'

function App({ modals, openModal, closeModal }) {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo" />
        <p>Edit <code>src / App.js</code> and save to reload. </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Learn React </a>

        <button onClick={openModal}>open modal</button>
      </header>
      <Modal
        isOpen={modals.includes('test-modal')}
        shouldCloseOnOverlayClick
        onRequestClose={closeModal}
        onClose={closeModal}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    modals: state.modals
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openModal: () => dispatch({ type: 'open', payload: 'test-modal' }),
    closeModal: () => dispatch({ type: 'close', payload: 'test-modal' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);