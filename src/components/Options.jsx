import Button from '@mui/material/Button';
import css from '../components/Options.module.css';

export const Options = ({ onUpdate, onUpdateBad, onUpdateNeutral, hasFeedback, onReset }) => {
  return (
    <div className={css.box}>
      <Button className={css.item} onClick={onUpdate}>
        Good
      </Button>
      <Button className={css.item} onClick={onUpdateBad}>
        Bad{' '}
      </Button>
      <Button className={css.item} onClick={onUpdateNeutral}>
        Neutral{' '}
      </Button>
      {hasFeedback && <Button onClick={onReset}>Reset</Button>}
    </div>
  );
};
