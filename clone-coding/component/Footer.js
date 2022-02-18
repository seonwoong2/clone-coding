import React from 'react';
import Styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <div className={Styles.container}>
      <div className={Styles.menu_Box}>
        <div className={Styles.menus}>
          {/* <ul>모바일용</ul> */}
          <ul className={Styles.menus_ul}>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a01}>COMPANY</a>
            </li>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a02}>한눈에 보기</a>
            </li>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a02}>스타벅스 사명</a>
            </li>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a02}>스타벅스 소개</a>
            </li>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a02}>국내 뉴스룸</a>
            </li>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a02}>세계의 스타벅스</a>
            </li>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a02}>글로벌 뉴스룸</a>
            </li>
          </ul>
          <ul className={Styles.menus_ul}>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a01}>CORPORATE SALES</a>
            </li>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a02}>단체 및 기업 구매 안내</a>
            </li>
          </ul>
          <ul className={Styles.menus_ul}>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a01}>PARTNERSHIP</a>
            </li>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a02}>신규 입점 제의</a>
            </li>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a02}>협력 고객사 등록신청</a>
            </li>
          </ul>
          <ul className={Styles.menus_ul}>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a01}>ONLINE COMMNUNITY</a>
            </li>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a02}>페이스북</a>
            </li>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a02}>트위터</a>
            </li>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a02}>유튜브</a>
            </li>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a02}>인스타그램</a>
            </li>
          </ul>
          <ul className={Styles.menus_ul}>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a01}>RECRUIT</a>
            </li>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a02}>채용 소개</a>
            </li>
            <li className={Styles.menu_li}>
              <a className={Styles.menus_ul_a02}>채용 지원하기</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={Styles.awards_Box}>
        <div className={Styles.awards_Box_inner01}>
          <ul className={Styles.awards_Box_ul}>
            <li className={Styles.awards_Box_li}>
              <a>
                <img
                  className={Styles.awards_Box_img}
                  src='https://image.istarbucks.co.kr/common/img/footer/footer_award23.jpg'
                ></img>
              </a>
            </li>
            <li className={Styles.awards_Box_li}>
              <a>
                <img
                  className={Styles.awards_Box_img}
                  src='https://image.istarbucks.co.kr/common/img/footer/footer_award24.jpg'
                ></img>
              </a>
            </li>
            <li className={Styles.awards_Box_li}>
              <a>
                <img
                  className={Styles.awards_Box_img}
                  src='https://image.istarbucks.co.kr/common/img/footer/footer_award25.jpg'
                ></img>
              </a>
            </li>
            <li className={Styles.awards_Box_li}>
              <a>
                <img
                  className={Styles.awards_Box_img}
                  src='https://image.istarbucks.co.kr/common/img/footer/footer_award26.jpg'
                ></img>
              </a>
            </li>
            <li className={Styles.awards_Box_li}>
              <a>
                <img
                  className={Styles.awards_Box_img}
                  src='https://image.istarbucks.co.kr/common/img/footer/footer_award27.jpg'
                ></img>
              </a>
            </li>
            <li className={Styles.awards_Box_li}>
              <a>
                <img
                  className={Styles.awards_Box_img}
                  src='https://image.istarbucks.co.kr/common/img/footer/footer_award28.jpg'
                ></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
