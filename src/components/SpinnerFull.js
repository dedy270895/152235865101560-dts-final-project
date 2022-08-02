import Spinner from 'react-bootstrap/Spinner';

function SpinnerFull() {
  return (
    <Spinner animation="border" role="status" className="d-flex justify-content-center spinnerfull">
      <span className="visually-show">Loading...</span>
    </Spinner>
  );
}

export default SpinnerFull;