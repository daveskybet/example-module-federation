import { Link } from "react-router";

const Layout = ({children}) => {
  return (
    <>
      <nav style={styles.container}>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <Link to="/" style={styles.link}>Home</Link>
          </li>
          <li style={styles.li}>
            <Link to="/services" style={styles.link}>Services</Link>
          </li>
          <li style={styles.li}>
            <Link to="/account" style={styles.link}>Account</Link>
          </li>
        </ul>
      </nav>

     {children}
    </>
  )
};

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#EADDFF',
    color: '#4F378B',
    padding: 16,
  },
  ul: {
    listStyleType: 'none',
  },
  li: {
    display: 'inline-block',
    paddingRight: 16,
  },
  link: {
    textDecoration: 'none',
  },
};

export default Layout;