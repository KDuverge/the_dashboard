import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ProjectActions from '../../../redux/Project/actions';

const Tag = ({ id, tag, removeTag }) => {
  return (
    <div>
      <span className='tag' data-id={id}>
        {tag}
        <span className='tag-close' onClick={() => removeTag(tag)}>
          &times;
        </span>
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeTag: bindActionCreators(ProjectActions.removeTag, dispatch),
});

export default connect(null, mapDispatchToProps)(Tag);
