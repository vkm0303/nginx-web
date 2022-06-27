import { Redirect } from 'umi';

export default (props: any) => {
  const isLogin = localStorage.getItem('role') !== null;
  if (isLogin) {
    return props.children;
  }
  return <Redirect to="/login" />;
};
