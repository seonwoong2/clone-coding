import React, { useState } from 'react';
import Styles from '../styles/Nav.module.css';
function Navbar() {
  const [isSearch, setIsSearch] = useState(false);

  const search = () => {
    if (!isSearch) {
      setIsSearch(true);
    }
  };
  return (
    <div className={Styles.background}>
      <div className={Styles.border}>
        <h1 className={Styles.h1logo}>
          <a href='/' title='스타벅스 코리아' className={Styles.logo}>
            스타벅스코리아
          </a>
        </h1>
        <nav
          className={Styles.nav1}
          style={{ right: isSearch ? '232px' : '93px' }}
        >
          {/* 232 */}
          <ul className={Styles.nav1ul}>
            <li className={Styles.nav1li01}>
              <a className={Styles.nav1a}>Sign In</a>
            </li>
            <li className={Styles.nav1li02}>
              <a className={Styles.nav1a}>My Starbucks</a>
            </li>
            <li className={Styles.nav1li03}>
              <a className={Styles.nav1a}>Customer Service & Ideas</a>
            </li>
            <li className={Styles.nav1li04}>
              <a className={Styles.nav1a}>Find a Store</a>
            </li>
          </ul>
        </nav>
        <p
          className={Styles.nav1p}
          style={{ width: isSearch ? '180px' : '32px' }}
        >
          <a className={Styles.nav1pa} onClick={() => search()}>
            <img
              className={Styles.nav1img}
              alt='통합검색'
              src='https://image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png'
            ></img>
          </a>
          <input
            className={Styles.nav1input}
            style={{ display: isSearch ? 'block' : 'none' }}
            placeholder='통합검색'
            type='text'
          ></input>
        </p>
      </div>
      <nav className={Styles.nav2}>
        <div className={Styles.nav2div}>
          <ul className={Styles.nav2ul}>
            <li className={Styles.nav2li01}>
              <h2 className={Styles.nav2h2}>
                <a className={Styles.nav2a}>COFFEE</a>
              </h2>
            </li>
            <li className={Styles.nav2li02}>
              <h2 className={Styles.nav2h2}>
                <a className={Styles.nav2a}>MENU</a>
              </h2>
            </li>
            <li className={Styles.nav2li03}>
              <h2 className={Styles.nav2h2}>
                <a className={Styles.nav2a}>STORE</a>
              </h2>
            </li>
            <li className={Styles.nav2li04}>
              <h2 className={Styles.nav2h2}>
                <a className={Styles.nav2a}>RESPONSIBILITY</a>
              </h2>
            </li>
            <li className={Styles.nav2li05}>
              <h2 className={Styles.nav2h2}>
                <a className={Styles.nav2a}>STARBUCKS REWARDS</a>
              </h2>
            </li>
            <li className={Styles.nav2li06}>
              <h2 className={Styles.nav2h2}>
                <a className={Styles.nav2a}>WHAT'S NEW</a>
              </h2>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
