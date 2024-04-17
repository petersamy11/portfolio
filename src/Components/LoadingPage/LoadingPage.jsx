import React from "react";
import PropagateLoader from 'react-spinners/PropagateLoader'

export default function LoadingPage({loading}) {

  return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
    <PropagateLoader color={'#ecb365'} loading={loading} size={30} speedMultiplier={0.5} />
      </div>
  );
}
