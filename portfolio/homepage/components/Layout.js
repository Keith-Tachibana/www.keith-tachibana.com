import Nav from './Nav';
import layoutStyles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Nav />
      <div className={layoutStyles.container}>
        <main classNAme={layoutStyles.main}>
          {children}
        </main>
      </div>
    </React.Fragment>
  );
}

export default Layout;
