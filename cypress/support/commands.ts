/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';
import { registerCommand } from 'cypress-wait-for-stable-dom';
registerCommand();
