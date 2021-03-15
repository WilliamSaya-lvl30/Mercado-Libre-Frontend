import React from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { errorAtom } from '../../../recoil/index';
import { Result, Button } from 'antd';


export default () => {
    const history = useHistory();
    const [error,setError] = useRecoilState(errorAtom);

  return (
    <Result
    status="error"
    title="Error"
    subTitle={error}
    extra={<Button 
            className="botonauth"
            type='primary'
            onClick={()=>history.push("/")}
            >Back</Button>}
  />
  );
};
