import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Spinner() {
  return <Loader type="TailSpin" color="#00BFFF" height={60} width={60} />;
}
