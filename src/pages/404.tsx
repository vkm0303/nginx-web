import { Result, Button } from 'antd';
import { history } from 'umi';

export default (props: any) => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="页面走丢了"
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          返回首页
        </Button>
      }
    />
  );
};
