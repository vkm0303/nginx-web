import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Col, Row, Descriptions, Switch } from 'antd';
import { RedoOutlined } from '@ant-design/icons';

import LineChart from '@/components/LineChart';
import Dot from '@/components/dot';
import styles from './index.less';

export default () => {
  return (
    <PageContainer ghost>
      <Card title="Nginx">
        <Descriptions column={2}>
          <Descriptions.Item label="状态" span={1}>
            <Dot />
          </Descriptions.Item>
          <Descriptions.Item className={styles['button-warp']}>
            <Switch
              checkedChildren="开启"
              unCheckedChildren="关闭"
              defaultChecked
            />
            <Button icon={<RedoOutlined />} type="link"></Button>
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Card title="服务器状态" style={{ marginTop: 15 }}>
        <Row>
          <LineChart id="cpu" width="50%" title="CPU" />
          <LineChart id="memory" width="50%" title="内存" />
        </Row>
      </Card>
    </PageContainer>
  );
};
