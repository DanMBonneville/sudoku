import _ from 'lodash';
import {
  getStartingSudokuValues,
  fillMissingValuesInGrid,
  solveBoard,
} from '../support/e2eUtils/utils';

describe('Solve The Sudoku Boards', () => {
  const defaultStabilityOptions = { pollInterval: 1000, timeout: 10000 };
  let sudokuBoard: any;
  let startingCompletedIndices: any;

  describe('Solve Sudoku Board - Easy', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('#gameBoard').waitForStableDOM(defaultStabilityOptions);
      getStartingSudokuValues().then((startingSudokuValues) => {
        startingCompletedIndices =
          startingSudokuValues.startingCompletedIndices;
        sudokuBoard = startingSudokuValues.startingBoard;
        solveBoard(sudokuBoard);
      });
    });

    it('Solves the puzzle on easy difficulty', () => {
      fillMissingValuesInGrid(sudokuBoard, startingCompletedIndices);
      cy.findByText('You').should('be.visible');
      cy.findByText('solved').should('be.visible');
      cy.findByText('it!').should('be.visible');
    });
  });

  describe('Solve Sudoku Board - Medium', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.findByTestId('difficulty-select')
        .waitForStableDOM(defaultStabilityOptions)
        .select('Medium');
      cy.get('#gameBoard').waitForStableDOM(defaultStabilityOptions);
      getStartingSudokuValues().then((startingSudokuValues) => {
        startingCompletedIndices =
          startingSudokuValues.startingCompletedIndices;
        sudokuBoard = startingSudokuValues.startingBoard;
        solveBoard(sudokuBoard);
      });
    });

    it('Solves the puzzle on medium difficulty', () => {
      fillMissingValuesInGrid(sudokuBoard, startingCompletedIndices);
      cy.findByText('You').should('be.visible');
      cy.findByText('solved').should('be.visible');
      cy.findByText('it!').should('be.visible');
    });
  });

  describe('Solve Sudoku Board - Hard', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.findByTestId('difficulty-select')
        .waitForStableDOM(defaultStabilityOptions)
        .select('Hard');
      cy.get('#gameBoard').waitForStableDOM(defaultStabilityOptions);
      getStartingSudokuValues().then((startingSudokuValues) => {
        startingCompletedIndices =
          startingSudokuValues.startingCompletedIndices;
        sudokuBoard = startingSudokuValues.startingBoard;
        solveBoard(sudokuBoard);
      });
    });

    it('Solves the puzzle on hard', () => {
      fillMissingValuesInGrid(sudokuBoard, startingCompletedIndices);
      cy.findByText('You').should('be.visible');
      cy.findByText('solved').should('be.visible');
      cy.findByText('it!').should('be.visible');
    });
  });
});
