import React, { Component, PropTypes } from 'react';

import LPage from 'components/LPage';
import LOperatorPanel from 'components/LOperatorPanel';
import LBlockAddModal from 'components/LBlockAddModal';

const LApplication = () => (
  <div className="LApplication">
    <div className="LApplication-operator">
      <LOperatorPanel />
    </div>
    <div className="LApplication-content">
      <LPage />
    </div>
    <LBlockAddModal />
  </div>
);

export default LApplication;