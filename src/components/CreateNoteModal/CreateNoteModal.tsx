import { FC, MouseEventHandler, useEffect, useRef } from 'react';
import Modal from '../Modal/Modal';
import styles from './CreateNoteModal.module.css';
import Button from '../Button/Button';
import Wrapper from '../Wrapper/Wrapper';

const CreateNoteModal: FC<{
  onCancel?: MouseEventHandler<HTMLButtonElement>;
  onCreate?: MouseEventHandler<HTMLButtonElement>;
}> = ({ onCancel, onCreate }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Modal>
      <div className={styles['create-note-modal']}>
        <Wrapper>
          <div className={styles['create-note-modal__content']}>
            <div className={styles['create-note-modal__inputs']}>
              <input
                className={styles['create-note-modal__title']}
                type="text"
                placeholder="Title"
                ref={inputRef}
              />
              <textarea
                className={styles['create-note-modal__note']}
                placeholder="Note"
              />
            </div>
            <div className={styles['create-note-modal__buttons']}>
              <Button onClick={onCreate}>Create</Button>
              <Button onClick={onCancel}>Cancel</Button>
            </div>
          </div>
        </Wrapper>
      </div>
    </Modal>
  );
};

export default CreateNoteModal;
