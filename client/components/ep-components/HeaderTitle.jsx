import React from 'react';

class HeaderTitle extends React.Component {
  render() {
    const {
      children,
      className = '',
      center,
      level = 1,
      titleType = 'h1',
      style,
    } = this.props;
    const CustomTag = titleType;
    return (
      <CustomTag
        className={`etitle etitle-${level} ${className} ${center && 'text-center'}`}
        style={style || null}
      >
        {children}
      </CustomTag>
    );
  }
}

export default HeaderTitle;
