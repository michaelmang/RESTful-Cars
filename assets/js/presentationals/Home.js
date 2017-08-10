import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import {Motion, spring} from 'react-motion';
import Transition from 'react-motion-ui-pack'

//Container component
class Home extends React.Component {
  render() {
    return (
      <header className={css(styles.hero)}>
      <Transition
        component={false}
        enter={{
          opacity: 1,
          scale: 1
        }}
        leave={{
          opacity: 0,
          scale: 0
        }}
      >
        <h1
          className={css(styles.title)}
        >
        Find a <span style={{ color: "#4D43E7" }}>ride</span>.
        </h1>
      </Transition>

        <div className={css(styles.buttonsRow)}>
          <Transition
            component={false}
            enter={{
              translateX: 0,
              opacity: 1
            }}
            leave={{
              opacity: 0,
              scale: 0,
              translateX: 150,
            }}
          >
            <Link to="cars" className={css(styles.link)}>
              <div className={css(styles.button)}>View all rides</div>
            </Link>
          </Transition>
        </div>
      </header>
    )
  }
}

const styles = StyleSheet.create({
    hero: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        background: `
          linear-gradient(
            45deg,
            rgba(156, 230, 225, 1),
            rgba(125, 163, 229, 0.95),
            rgba(77, 67, 231, 1)
          ), url('http://bit.ly/2vIQBog')
          no-repeat center center
        `,
        backgroundSize: "cover"
    },
    title: {
      color: "#F9FAFB",
      fontFamily: 'Lato',
      fontSize: "100px",
      textAlign: "center",
      fontWeight: "700",
    },
    buttonsRow: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center"
    },
    button: {
      cursor: "pointer",
      background: "#FFFFFF",
      padding: "15px 40px",
      color: "#4D43E7",
      marginTop: "20px",
      fontFamily: 'Open Sans',
      fontSize: "18px",
      borderRadius: "0px",
      textDecoration: "none",
      ':hover': {
        background: "#4D43E7",
        color: "#FFFFFF"
      }
    },
    link: {
      textDecoration: "none"
    }
});

export default Home
