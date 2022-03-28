import { SUBMIT_USER_FORM1 } from "./UserForm1Types.js"

import React from 'react';

export const submitUserForm1 = (userForm1Data) => {
  return {
        type: SUBMIT_USER_FORM1,
        payload: userForm1Data
  };
};
