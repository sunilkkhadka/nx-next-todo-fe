import { Layout } from 'antd';

const { Footer } = Layout;

type FooterNavProps = React.HTMLAttributes<HTMLDivElement>;

const FooterNav = ({
  collapsed,
  ...others
}: FooterNavProps & { collapsed: boolean }) => {
  return (
    <Footer
      {...others}
      style={{
        textAlign: 'center',
        marginLeft: collapsed ? 0 : '200px',
        background: 'none'
      }}
    >
      @footer
    </Footer>
  );
};

export default FooterNav;
