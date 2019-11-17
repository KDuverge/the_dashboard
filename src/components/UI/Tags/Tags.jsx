import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ProjectActions from '../../../redux/Project/actions';

import Tag from './Tag';

import './Tags.css';

const Tags = props => {
  const [activeModal, setActiveModal] = useState(false);
  const [newTag, setNewTag] = useState('');
  let { tags, updateTag } = props;

  return (
    <div className={`tags-container ${activeModal ? 'active' : ''}`}>
      <div
        onClick={() => setActiveModal(!activeModal)}
        className='tags-toggle-btn'
      >
        <i
          className={`fas fa-angle-double-left ${activeModal ? 'rotate' : ''}`}
        />
      </div>
      <div className='tags-form-container'>
        <div className='tags'>
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag} id={index} />
          ))}
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            updateTag(newTag, tags);
            setNewTag('');
          }}
          className='tags-form'
        >
          <input
            type='text'
            name='tags_input'
            className='tags-text-input'
            placeholder='Enter tags...'
            onChange={({ target }) => setNewTag(target.value)}
            value={newTag}
          />
          <input type='submit' className='tags-text-btn' hidden />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  tags: state.project.tags,
});

const mapDispatchToProps = dispatch => ({
  updateTag: bindActionCreators(ProjectActions.updateTag, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tags);
