import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ProForm,
  ProFormDatePicker,
  ProFormText,
} from '@ant-design/pro-components';
import { Card, message } from 'antd';
import moment from 'moment';
import { useEffect, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';

export default () => {
  const formRef = useRef<ProFormInstance>();

  const onFill = () => {
    formRef?.current?.setFieldsValue({
      path: '/etc/nginx/conf/nginx.conf',
    });
  };

  const getCompanyName = () => {
    message.info(`公司名称为 "${formRef?.current?.getFieldValue('company')}"`);
  };

  const getFormatValues = () => {
    console.log(
      '格式化后的所有数据：',
      formRef.current?.getFieldsFormatValue?.(),
    );
  };

  const validateAndGetFormatValue = () => {
    formRef.current?.validateFieldsReturnFormatValue?.().then((values) => {
      console.log('校验表单并返回格式化后的所有数据：', values);
    });
  };

  useEffect(() => onFill(), []);

  return (
    <PageContainer ghost>
      <Card>
        <ProForm
          formRef={formRef}
          grid={true}
          rowProps={{
            gutter: [16, 0],
          }}
          submitter={{
            searchConfig: { submitText: '保存' },
            render: (props, dom) => dom[1],
          }}
          onFinish={async (values) => {
            console.log(values);
            message.success('提交成功');
            return true;
          }}
        >
          <ProFormText
            colProps={{ span: 10 }}
            name="path"
            label="nginx配置文件路径"
            placeholder="请输入配置文件路径"
            required={true}
          />
          <ProFormDatePicker
            name="date"
            label="日期"
            colProps={{ span: 4, offset: 1 }}
            initialValue={moment('2021-08-09')}
          />
        </ProForm>
      </Card>
    </PageContainer>
  );
};
