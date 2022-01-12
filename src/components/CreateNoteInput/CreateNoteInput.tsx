import { FC, MouseEventHandler } from 'react';
import styles from './CreateNoteInput.module.css';

const CreateNoteInput: FC<{
  onClick?: MouseEventHandler<HTMLButtonElement>;
}> = ({ onClick }) => {
  return (
    <button
      className={styles['create-note-input']}
      onClick={onClick}
      placeholder="Create note"
    >
      Create note
    </button>
  );
};

export default CreateNoteInput;
