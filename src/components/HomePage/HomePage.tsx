import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux';
import { initial } from '../../redux/InitialRedux/InitialActions';
import { StyledHomePage } from './StyledHomePage';

const HomePage = () => {
  const { login, password } = useSelector((state: RootState) => state.initialReducer);
  const [isValid, setIsValid] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (login.match('developer21') && password.match('123456')) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [login, password]);

  const onSetLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(initial.setLogin(value));
  };

  const onSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(initial.setPassword(value));
  };

  return (
    <StyledHomePage>
      <form className="form">
        <input type="text" className="input" value={login} onChange={onSetLogin} />
        <input type="password" className="input" value={password} onChange={onSetPassword} />
        <Link to="/profile">
          <button disabled={isValid}>Submit</button>
        </Link>
      </form>
    </StyledHomePage>
  );
};

export default HomePage;
