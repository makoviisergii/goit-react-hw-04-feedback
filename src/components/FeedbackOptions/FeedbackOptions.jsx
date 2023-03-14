import styled from 'styled-components';
import PropTypes from 'prop-types';

export const FeedbackOptions = props => {
  const onHandeleClick = event => {
    props.onLeaveFeedback(event.target.name);
  };

  return (
    <div>
      <Button type="button" name="good" onClick={onHandeleClick}>
        Good
      </Button>
      <Button type="button" name="neutral" onClick={onHandeleClick}>
        Neutral
      </Button>
      <Button type="button" name="bad" onClick={onHandeleClick}>
        Bad
      </Button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.string.isRequired,
};

const Button = styled.button`
  width: 70px;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px;
  margin-left: 10px;
  box-shadow: 3px 5px 5px -2px rgba(6, 6, 6, 0.316);
  &:hover {
    box-shadow: 3px 5px 5px -2px rgba(94, 84, 182, 0.7);
  }
  &:focus {
    scale: 0.95;
  }
`;
