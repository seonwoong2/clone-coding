import Head from 'next/head';
import Styles from '../styles/Index.module.css';
export default function Home() {
  return (
    <div className={Styles.container1}>
      <Head>
        <title>Starbucks Korea</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <div className={Styles.container2}>
        <div className={Styles.topWrap}>
          <div className={Styles.adBox}>
            <div className={Styles.adBoxdiv}>
              <a
                href='https://www.starbucks.co.kr/plcc/promotionView.do?eventCode=STH02'
                style={{ height: '100%', width: '100%', cursor: 'pointer' }}
              >
                <img
                  style={{ width: '100%' }}
                  src='https://image.istarbucks.co.kr/upload/banner/floatingbnr/ontV0n_20220128130417211.png'
                ></img>
              </a>
            </div>
          </div>
          <div className={Styles.topWrap_img}>
            <div className={Styles.topWrap_img_inner}>
              <div className={Styles.topWrap_slogan01}>
                <img src='https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_main_slogan.png'></img>
              </div>
              <div className={Styles.topWrap_set}>
                <div className={Styles.topWrap_set01}>
                  <img
                    className={Styles.topWrap_set_img}
                    src='https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_latte.png'
                  ></img>
                </div>
                <div className={Styles.topWrap_set02}>
                  <img
                    className={Styles.topWrap_set_img}
                    src='https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_drink_2.png'
                  ></img>
                </div>
                <div className={Styles.topWrap_set03}>
                  <img
                    className={Styles.topWrap_set_img}
                    src='https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_frappuccino_0203.png'
                  ></img>
                </div>
              </div>
              <div className={Styles.btn_slogan}>
                <a
                  className={Styles.btn_slogana}
                  href='/whats_new/campaign_view.do?pro_seq=1945'
                >
                  자세히 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
