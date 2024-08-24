import { Spin, theme } from 'antd';
import styles from './loader.module.css';

export const Loader = () => {
  const {
    token: { borderRadius }
  } = theme.useToken();

  return (
    <div className={styles['loader-container']} style={{ borderRadius }}>
      <Spin tip="Loading">
        <div className={styles['content']} />
      </Spin>
    </div>
  );
};
