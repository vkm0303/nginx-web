import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ProForm,
  ProFormDatePicker,
  ProFormText,
} from '@ant-design/pro-components';
import { message } from 'antd';
import moment from 'moment';
import { useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';

export default () => {
  const formRef = useRef<ProFormInstance>();

  const onFill = () => {
    formRef?.current?.setFieldsValue({
      name: '张三',
      company: '蚂蚁金服',
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
  return (
    <PageContainer
      className={styles.pageContainer}
      content={
        <ProForm
          formRef={formRef}
          submitter={{ render: (props, dom) => dom[1] }}
          onFinish={async (values) => {
            console.log(values);
            message.success('提交成功');
            return true;
          }}
        >
          <ProFormText
            width="lg"
            name="path"
            label="nginx配置文件路径"
            required={true}
            placeholder="请输入配置文件路径"
          />

          <ProFormText
            width="md"
            name="company"
            label="我方公司名称"
            placeholder="请输入名称"
          />
          <ProFormDatePicker name="date" initialValue={moment('2021-08-09')} />
        </ProForm>
      }
    ></PageContainer>
  );
};
