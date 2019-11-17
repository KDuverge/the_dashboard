import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withFormik } from 'formik';

import * as ProjectActions from '../../../redux/Project/actions';
import * as ProjectsActions from '../../../redux/Projects/actions';

import { setFormData } from '../../../services/formService';

import Button from '../Button/Button';

import './Form.css';

const DashboardForm = props => {
  const { type, handleSubmit, handleChange, values } = props;
  const { title, github_link, website_link, image_url, description } = values;

  const isUpdate = type === 'Update';

  const onSubmit = event => {
    event.preventDefault();

    if (!isUpdate) {
      const data = setFormData(event.target, props.project.tags);

      props.createProject(data);
      return;
    }

    handleSubmit();
  };

  return (
    <form
      className='dashboard-form-container'
      encType='multipart/form-data'
      onSubmit={onSubmit}
    >
      <div className='dashboard-form-group one'>
        <input
          type='text'
          name='title'
          placeholder='title'
          value={title}
          onChange={handleChange}
        />
        <div className='file-input-container'>
          <label
            htmlFor='file-input'
            className={`${isUpdate ? 'disabled' : ''}`}
          >
            Browse files
          </label>
          <input
            id='file-input'
            type='file'
            name='image_url'
            accept='image/*'
            onChange={handleChange}
            disabled={isUpdate}
            value={isUpdate ? '' : image_url}
          />
          <span>{image_url}</span>
        </div>
      </div>
      <div className='dashboard-form-group two'>
        <input
          type='text'
          placeholder='github link'
          name='github_link'
          value={github_link}
          onChange={handleChange}
        />
        <input
          type='text'
          name='website_link'
          placeholder='website link'
          onChange={handleChange}
          value={website_link}
        />
      </div>
      <textarea
        rows='10'
        cols='30'
        name='description'
        onChange={handleChange}
        value={description}
      />
      <Button type={type} />
    </form>
  );
};

const FormWrapper = withFormik({
  mapPropsToValues: props => {
    if (props.type === 'Update') return { ...props.project };

    return {
      title: '',
      image_url: '',
      github_link: '',
      website_link: '',
      description: '',
    };
  },

  async handleSubmit(values, formikBag) {
    const { props } = formikBag;
    switch (props.type) {
      case 'Update':
        await props.updateProject(values._id, {
          ...values,
          tags: props.project.tags,
        });
        props.history.push('/projects');
        break;
      default:
        return;
    }
  },
})(DashboardForm);

const mapStateToProps = state => ({
  project: state.project,
});

const mapDispatchToProps = dispatch => ({
  createProject: bindActionCreators(ProjectsActions.createProject, dispatch),
  updateProject: bindActionCreators(ProjectActions.updateProject, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWrapper);
