import React from 'react';
import { useSudokuContext } from '../context/SudokuContext';

type DifficultyProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
};

/**
 * React component for the Difficulty Selector.
 */
export const Difficulty = (props: DifficultyProps) => {
  let { difficulty } = useSudokuContext();

  return (
    <div className="status__difficulty">
      <span className="status__difficulty-text">Difficulty:&nbsp;&nbsp;</span>
      <select data-testid="difficulty-select" name="status__difficulty-select" className="status__difficulty-select" defaultValue={difficulty} onChange={props.onChange}>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
  )
}
