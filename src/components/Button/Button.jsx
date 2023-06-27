import clsx from 'clsx';
import css from './Button.module.css';
export const Button = ({
  selected = false,
  type = 'button',
  children,
  allBtn,
  activeBtn,
  completedBtn,
  ...otherProps
}) => {
  return (
    <button
      className={clsx({
        [css.isSelected]: selected,
        [css.AllBtn]: allBtn,
        [css.ActiveBtn]: activeBtn,
        [css.CompletedBtn]: completedBtn,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
