import Header from './components/Header/Header';
import CreateNoteInput from './components/CreateNoteInput/CreateNoteInput';
import { useState } from 'react';
import CreateNoteModal from './components/CreateNoteModal/CreateNoteModal';
import Wrapper from './components/Wrapper/Wrapper';
import styles from './App.module.css';

const App = () => {
  const [showCreateNoteModal, setShowCreateNoteModal] =
    useState<boolean>(false);

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setShowCreateNoteModal(true);
  }

  function handleCancel() {
    setShowCreateNoteModal(false);
  }

  return (
    <>
      <Header />
      <Wrapper>
        <div className={styles['app__create-note-input-wrapper']}>
          <CreateNoteInput onClick={handleClick} />
        </div>
      </Wrapper>
      {showCreateNoteModal && <CreateNoteModal onCancel={handleCancel} />}
    </>
  );
};

export default App;
