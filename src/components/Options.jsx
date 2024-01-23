import Button from '@mui/material/Button';
import css from '../components/Options.module.css';

export const Options = ({ onUpdate, onUpdateBad, onUpdateNeutral, onReset, hasFeedback }) => {
  return (
    <div className={css.box}>
      <Button onClick={onUpdate}>Good</Button>
      <Button onClick={onUpdateBad}>Bad </Button>
      <Button onClick={onUpdateNeutral}>Neutral </Button>
      {hasFeedback && <Button onClick={onReset}>Reset</Button>}
    </div>
  );
};
