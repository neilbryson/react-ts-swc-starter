import { createAction } from '@reduxjs/toolkit';

import { LocalActions } from './types';

export const increment = createAction(LocalActions.INCREMENT);
