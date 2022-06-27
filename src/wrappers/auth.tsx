import { Redirect } from 'umi';

export default (props: any) => {
  const isLogin = localStorage.getItem('role') !== null;
  if (isLogin) {
    return <div>{props.children}</div>;
  }
  return <Redirect to="/login" />;
};
