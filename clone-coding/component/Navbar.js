import React, { useState } from 'react';
import Styles from '../styles/Home.module.css';
function Navbar() {
  const [isSearch, setIsSearch] = useState(false);

  const search = () => {
    if (!isSearch) {
      setIsSearch(true);
    }
  };
  return (
    <div class={Styles.background}>
      <div className={Styles.border}>
        <h1 className={Styles.h1logo}>
          <a href='/' title='스타벅스 코리아' className={Styles.logo}>
            스타벅스코리아
          </a>
        </h1>
        <nav className={Styles.nav1}>
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
        {/* <div style={{'borderRadius'}} */}
        <p className='search'>
          <a className={Styles.nav1pa} onClick={() => search()}>
            <img
              className={Styles.nav1img}
              alt='통합검색'
              src='https://image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png'
            ></img>
          </a>
          <input
            className='search_input'
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
      <style jsx>{`
        .search {
          height: 34px;
          width: ${isSearch ? '130px;' : '32px;'}
          right: 54px;
          top: 9px;
          position: absolute;
          display: flex;
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin: 0;
          padding: 0;
          cursor: pointer;
        }
        .search_input {
          background: none;
          display: ${isSearch ? 'block;' : 'none;'}
          border: none;
          color: #777;
          font-size: 12px;
          height: 22px;
          left: 0;
          padding: 0 10px;
          margin: 0;
          position: absolute;
          top: 5px;
          width: 123px;
        }
      `}</style>
    </div>
  );
}

export default Navbar;
