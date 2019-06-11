import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import posed, { PoseGroup } from 'react-pose';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Button from './Button';

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
  inputs: {
    marginBottom: 10,
    minWidth: '47%',
  },
  textarea: {
    minWidth: '100%',
  },
}));

const Modal = ({
  visible = false,
  buttonText = 'Modal',
  buttonType = 'primary',
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

  const closeModal = (e) => {
    e.preventDefault();
    toggleVisible(false);
  };

  const formRef = React.createRef();

  const handleChange = name => (e) => {
    setFormValues({
      ...formValues,
      [name]: {
        ...formValues[name],
        value: e.target.value,
      },
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formValues);
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
                        <InputLabel htmlFor="select-course">Выберите курс</InputLabel>
                        <Select
                          value={formValues.course.value}
                          onChange={handleChange('course')}
                          inputProps={{
                            name: 'course',
                            id: 'select-course',
                          }}
                        >
                          <MenuItem value="html-begginer">«Введение в верстку»</MenuItem>
                          <MenuItem value="html-pro">«Продвинутая верстка»</MenuItem>
                          <MenuItem value="js-begginer">«Введение в программирование»</MenuItem>
                          <MenuItem value="js-pro">«Продвинутое программирование»</MenuItem>
                          <MenuItem value="react">«React»</MenuItem>
                        </Select>
                        {formValues.course.error ? <FormHelperText>Выберите курс!</FormHelperText> : null}
                      </FormControl>
                      <div className="ep-form-group">
                        <TextField
                          id="username"
                          label="Имя"
                          className={classes.inputs}
                          value={formValues.name.value}
                          onChange={handleChange('name')}
                          margin="normal"
                        />
                        <TextField
                          id="phone"
                          label="Номер телефона"
                          className={classes.inputs}
                          value={formValues.phone.value}
                          onChange={handleChange('phone')}
                          margin="normal"
                        />
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
                        <Button type="primary-inverse" htmlType="submit" fullSize={true}>Оставить заявку</Button>
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

export default Modal;
