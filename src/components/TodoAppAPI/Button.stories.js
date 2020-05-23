import React from 'react';
import { actions } from '@storybook/addon-actions';

import {FilterButton,ClearCompletedButton} from './footer.js';

export default {
    title:'All/Buttons',
    component:FilterButton
};

export const FilterButtonDefaultView = () => <FilterButton buttonText={'filter '} onChangeSelectedFilter={actions({onClick:'clicked'})}/>;

export const clearCompletedButtonDefaultView = () => <ClearCompletedButton  buttonText={'clear completed'} onChangeSelectedFilter={actions({onClick:'clicked'})}/>