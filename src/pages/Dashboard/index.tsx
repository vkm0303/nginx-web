import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';

export default () => (
  <PageContainer ghost>
    <Card title="Nginx状态"></Card>

    <Card title="服务器状态"></Card>
  </PageContainer>
);
