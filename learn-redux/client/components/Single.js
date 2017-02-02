import React from 'react';

class Single extends React.Component {
  render() {
    return (
      <div className="single-photo">
        I'm the single {this.props.params.postId}
      </div>
    );
  }
}

Single.propTypes = {
  params: React.PropTypes.object
};

export default Single;