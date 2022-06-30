import { PageContainer } from '@ant-design/pro-layout';
import { ProCard } from '@ant-design/pro-components';
import {
  Button,
  Card,
  Col,
  Divider,
  Descriptions,
  Row,
  Switch,
  Space,
  Statistic,
} from 'antd';
import { RedoOutlined } from '@ant-design/icons';

import LineChart from '@/components/LineChart';
import Dot from '@/components/dot';
import styles from './index.less';

export default () => {
  return (
    <PageContainer ghost>
      <ProCard
        headerBordered
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
      >
        <Row className={styles['statistic-warp']}>
          <Statistic
            className={styles['statistic']}
            title="Requests"
            value={112893}
          />
          <Statistic
            className={styles['statistic']}
            title="Active"
            value={112893}
          />
          <Statistic
            className={styles['statistic']}
            title="Accepts"
            value={112893}
          />
          <Statistic
            className={styles['statistic']}
            title="Handled"
            value={112893}
          />
        </Row>
      </ProCard>

      <ProCard
        title="服务器状态"
        bordered
        headerBordered
        gutter={16}
        style={{ marginTop: 15 }}
      >
        <ProCard title="CPU" type="inner" bordered>
          <LineChart id="cpu" />
        </ProCard>
        <ProCard title="内存" type="inner" bordered>
          <LineChart id="memory" />
        </ProCard>
        <ProCard title="网络" type="inner" bordered>
          <LineChart id="network" />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};
