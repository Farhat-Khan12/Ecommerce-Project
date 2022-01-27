import React from 'react';
import {Alert} from 'react-bootstrap';
export default function AlertMessage() {
  return (
    <>
    <div>
    <Alert bsStyle="primary">
      <h6><i class="fas fa-exclamation-triangle"></i> We have send an email to you with activation code and reset password instructions.</h6>
    </Alert>
    </div>
    </>
  );
}

