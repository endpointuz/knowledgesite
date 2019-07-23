import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import posed, { PoseGroup } from 'react-pose';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MaskedInput from 'react-text-mask';

import { last } from 'lodash';

import * as actions from '../../actions';

import Button from './Button';

const TextMaskCustom = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['+', 9, 9, 8, ' ', '(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
      placeholderChar={'\u2000'}
    />
  );
};

const ModalContainer = posed.div({
  enter: {
    top: '10%',
    x: '-50%',
    opacity: 1,
    delay: 300,
  },
  exit: {
    top: '100%',
    x: '-50%',
    opacity: 0,
    transition: { duration: 150 },
  },
});

const Shade = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
});

const useStyles = makeStyles(theme => ({
  formControl: {
    marginBottom: 10,
    minWidth: '100%',
    boxSizing: 'border-box',
  },
  formControlRow: {
    marginBottom: 10,
    minWidth: '45%',
    boxSizing: 'border-box',
  },
  inputs: {
    marginBottom: 10,
    minWidth: '47%',
  },
  textarea: {
    minWidth: '100%',
  },
}));

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: 'green',
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));


const mapStateToProps = state => ({
  requestCallData: state.requestCallData,
  courses: state.coursesData.results,
  snackbarVisible: state.snackbarVisible,
});

const actionCreators = {
  requestCall: actions.requestCall,
  getCourses: actions.getCourses,
  openSnackbar: actions.openSnackbar,
  closeSnackbar: actions.closeSnackbar,
};

const Modal = ({
  visible = false,
  buttonText = 'Modal',
  buttonType = 'primary',
  requestCall,
  courses,
  requestCallData,
  location,
  openSnackbar,
}) => {
  const [isVisible, toggleVisible] = useState(visible);
  const [formValues, setFormValues] = React.useState({
    course: {
      value: '',
      error: false,
    },
    name: {
      value: '',
      error: false,
    },
    phone: {
      value: '',
      error: false,
    },
    comment: {
      value: '',
      error: false,
    },
  });

  const classes = useStyles();

  useEffect(() => {
    if (isVisible) {
      document.querySelector('body')
        .classList
        .add('noScroll');
    } else {
      document.querySelector('body')
        .classList
        .remove('noScroll');
    }
  });

  useEffect(() => {
    const { pathname } = location;
    const currentSlug = last(pathname.split('/').filter(el => el));
    const [currentCourse] = courses.filter(course => course.slug === currentSlug);
    if (currentCourse) {
      setFormValues({
        ...formValues,
        course: {
          value: currentCourse.id,
          error: false,
        },
      });
    }
  }, [courses]);

  const closeModal = (e) => {
    e.preventDefault();
    toggleVisible(false);
  };

  const formRef = React.createRef();

  const handleChange = name => (e) => {
    setFormValues({
      ...formValues,
      [name]: {
        error: false,
        value: e.target.value,
      },
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (formValues.course.value === '') {
      return setFormValues({
        ...formValues,
        course: {
          ...formValues.course,
          error: true,
        },
      });
    }

    if (formValues.name.value === '') {
      return setFormValues({
        ...formValues,
        name: {
          ...formValues.name,
          error: true,
        },
      });
    }
    if (formValues.phone.value === '') {
      return setFormValues({
        ...formValues,
        phone: {
          ...formValues.phone,
          error: true,
        },
      });
    }
    await requestCall(formValues);
    toggleVisible(false);
    openSnackbar();
  };

  return (
    <div>
      <PoseGroup flipMove={false}>
        { isVisible
          ? [
              <Shade key="shade" className="ep-modal" />,
              <ModalContainer key="modal" className="ep-modal-container" id="fixed">
                <div className="ep-modal-header">
                  <p className="ep-modal-close">
                    <a href="" onClick={closeModal}><FontAwesomeIcon icon="times"/></a>
                  </p>
                  <h2 className="ep-modal-title">Запись на курсы</h2>
                  <p className="ep-modal-subtitle">Оставь заявку и наш менеджер расскажет тебе всё про
                    обучение</p>
                </div>
                <div className="ep-modal-body">
                  <form ref={formRef} onSubmit={submitForm}>
                    <FormControl className={classes.formControl} error={formValues.course.error}>
                      <InputLabel htmlFor="select-course">Выберите курс*</InputLabel>
                      <Select
                        value={formValues.course.value}
                        onChange={handleChange('course')}
                        inputProps={{
                          name: 'course',
                          id: 'select-course',
                        }}
                      >
                        {courses.map(course => (
                          <MenuItem value={course.id} key={course.id}>«{course.name}»</MenuItem>
                        ))}
                      </Select>
                      {formValues.course.error ? <FormHelperText>Выберите курс!</FormHelperText> : null}
                    </FormControl>
                    <div className="ep-form-group">
                      <FormControl className={classes.formControlRow}>
                        <TextField
                          id="username"
                          label="Имя"
                          className={classes.inputs}
                          error={formValues.name.error}
                          value={formValues.name.value}
                          onChange={handleChange('name')}
                          margin="normal"
                        />
                        {formValues.name.error ? <FormHelperText error={formValues.name.error}>Введите имя!</FormHelperText> : null}
                      </FormControl>
                      <FormControl className={classes.formControlRow}>
                        <TextField
                          id="phone"
                          label="Номер телефона*"
                          className={classes.inputs}
                          error={formValues.phone.error}
                          value={formValues.phone.value}
                          onChange={handleChange('phone')}
                          margin="normal"
                          InputProps={{
                            inputComponent: TextMaskCustom,
                          }}
                        />
                        {formValues.phone.error ? <FormHelperText error={formValues.phone.error}>Введите номер телефона!</FormHelperText> : null}
                      </FormControl>
                    </div>
                    <div className="ep-form-group">
                      <TextField
                        id="comment"
                        label="Комментарий"
                        multiline
                        rowsMax="4"
                        className={classes.textarea}
                        value={formValues.comment.value}
                        onChange={handleChange('comment')}
                        margin="normal"
                      />
                    </div>
                    <div className="ep-form-group" style={{ marginTop: 30 }}>
                      <Button type="primary-inverse" htmlType="submit" fullSize={true} disabled={requestCallData.state === 'request'}>
                        {
                          requestCallData.state === 'request'
                            ? <FontAwesomeIcon icon="spinner"/>
                            : 'Оставить заявку'
                        }
                      </Button>
                    </div>
                  </form>
                </div>
              </ModalContainer>,
          ]
          : null
        }
      </PoseGroup>
      <Button type={buttonType} onClick={() => toggleVisible(!isVisible)}>{buttonText}</Button>
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(withRouter(Modal));
