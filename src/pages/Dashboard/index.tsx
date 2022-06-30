import { PageContainer } from '@ant-design/pro-layout';
import { ProCard } from '@ant-design/pro-components';
import { Button, Card, Col, Row, Descriptions, Switch, Space } from 'antd';
import { RedoOutlined } from '@ant-design/icons';

import LineChart from '@/components/LineChart';
import Dot from '@/components/dot';
import styles from './index.less';

export default () => {
  return (
    <PageContainer ghost>
      <ProCard
        title={
          <Space>
            Nginx
            <Dot />
          </Space>
        }
        extra={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Space>
              <Switch
                checkedChildren="开启"
                unCheckedChildren="关闭"
                defaultChecked
              />
              <Button icon={<RedoOutlined />} type="link"></Button>
            </Space>
          </div>
        }
      ></ProCard>

      <ProCard title="服务器状态" split="vertical">
        <ProCard colSpan="50%">
          <LineChart id="cpu" title="CPU" />
          <LineChart id="memory" title="内存" />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};
