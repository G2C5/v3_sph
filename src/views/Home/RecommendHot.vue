<template>
  <!--今日推荐-->
  <div class="today-recommend">
    <div class="py-container">
      <ul class="recommend">
        <li class="clock">
          <div class="time">
            <img src="./images/clock.png" />
            <h3>今日推荐</h3>
          </div>
        </li>
        <li class="banner">
          <img src="./images/today01.png" />
        </li>
        <li class="banner">
          <img src="./images/today02.png" />
        </li>
        <li class="banner">
          <img src="./images/today03.png" />
        </li>
        <li class="banner">
          <img src="./images/today04.png" />
        </li>
      </ul>
    </div>
  </div>
  <!-- 商品排行 -->
  <div class="rank">
    <div class="tab">
      <div class="tab-tit clearfix">
        <a href="javascript:;" class="on">
          <p class="img">
            <i></i>
          </p>
          <p class="text">热卖排行</p>
        </a>
        <a href="javascript:;">
          <p class="img">
            <i></i>
          </p>
          <p class="text">特价排行</p>
        </a>
        <a href="javascript:;">
          <p class="img">
            <i></i>
          </p>
          <p class="text">新品排行</p>
        </a>
      </div>
    </div>
    <div class="content">
      <ul>
        <li>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/1.jpg" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#"
                  >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机</a
                >
              </div>
              <p class="info-price">定金：¥100.00</p>
            </div>
          </div>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/1.jpg" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#"
                  >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机</a
                >
              </div>
              <p class="info-price">定金：¥100.00</p>
            </div>
          </div>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/1.jpg" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#"
                  >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机</a
                >
              </div>
              <p class="info-price">定金：¥100.00</p>
            </div>
          </div>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/1.jpg" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#"
                  >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机</a
                >
              </div>
              <p class="info-price">定金：¥100.00</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- 猜你喜欢 -->
  <div class="like">
    <div class="py-container">
      <div class="title">
        <h3 class="fl">猜你喜欢</h3>
        <a href="javascript:;" class="fr tip changeBnt">换一换</a>
      </div>
      <div class="bd">
        <ul class="favourate">
          <li>
            <img src="./images/like_02.png" alt="" />
            <div class="like-text">
              <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
              <h3>¥116.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/like_03.png" alt="" />
            <div class="like-text">
              <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
              <h3>¥116.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/like_01.png" alt="" />
            <div class="like-text">
              <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
              <h3>¥116.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/like_02.png" alt="" />
            <div class="like-text">
              <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
              <h3>¥116.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/like_03.png" alt="" />
            <div class="like-text">
              <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
              <h3>¥116.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/like_01.png" alt="" />
            <div class="like-text">
              <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
              <h3>¥116.00</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scrop lang="less">
.today-recommend {
  .py-container {
    width: 1200px;
    margin: 0 auto;

    .recommend {
      height: 165px;
      background-color: #eaeaea;
      margin: 10px 0;
      display: flex;

      .clock {
        width: 16.67%;
        background-color: #5c5251;
        color: #fff;
        font-size: 18px;
        text-align: center;

        .time {
          padding: 30px 0;
        }

        h3 {
          margin: 9px 0;
          font-weight: 700;
          font-size: 18px;
          line-height: 30.06px;
        }
      }

      .banner {
        width: 20.83%;

        img {
          width: 100%;
          height: 100%;
          transition: all 400ms;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
}

.rank {
  width: 1200px;
  margin: 0 auto;

  .tab {
    margin: 0 auto;
    overflow: hidden;
    width: 312px;

    .tab-tit {
      text-align: center;

      a {
        display: block;
        padding: 0 18px;
        float: left;
        text-decoration: none;
        font-size: 16px;
        color: #999;

        p {
          margin: 5px 0;
        }

        .img {
          i {
            width: 35px;
            height: 35px;
            display: block;
            background: url(./images/bg0.png);
            margin-left: 10px;
          }
        }

        .text {
          line-height: 28px;
        }
      }

      .on {
        color: #e60012;

        .img {
          i {
            background-position: -35px 0;
          }
        }
      }
    }
  }

  .content {
    overflow: hidden;
    padding: 10px;

    ul {
      li {
        overflow: hidden;
        list-style: none;
        line-height: 18px;

        .img-item {
          border: 1px solid #e1251b;
          width: 269px;
          float: left;
          overflow: hidden;
          margin: 0 12px 10px;
          background: #fff;

          .tab-pic {
            width: 230px;
            height: 210px;
            overflow: hidden;
            text-align: center;
            margin: 5px auto 18px;

            a {
              img {
                width: 200px;
                height: 200px;
              }
            }
          }

          .tab-info {
            background: #fafafa;

            .info-title {
              height: 50px;
              line-height: 28px;
              overflow: hidden;
              margin: 0 auto;
              padding-left: 10px;

              a {
                color: #333;
                text-decoration: none;
              }
            }

            .info-price {
              font-size: 20px;
              color: #e1251b;
              height: 35px;
              padding-left: 10px;
              display: block;
              line-height: 24px;
              margin: 10px auto 0;
            }
          }
        }
      }
    }
  }
}

.like {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      overflow: hidden;

      .fl {
        float: left;
        font-size: 20px;
        line-height: 30px;
      }

      .fr {
        float: right;
        background-image: url(./images/icons.png);
        width: 66px;
        height: 25px;
        background-position: 182px -104px;
        line-height: 30px;
        font-size: 12px;
        font-weight: 400;
        color: #666;
        text-decoration: none;
      }
    }

    .bd {
      .favourate {
        border: 1px solid #e4e4e4;
        overflow: hidden;
        padding: 0 10px;
        box-sizing: border-box;
        display: flex;

        li {
          height: 250px;
          margin: 0 -1px;
          overflow: hidden;
          background: #fff;
          position: relative;
          width: 16.667%;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;

          img {
            width: 142px;
            height: 142px;
            transition: all 400ms;

            &:hover {
              opacity: 0.8;
              transform: scale(1.1);
            }
          }

          .like-text {
            padding: 0;
            width: 142px;
            border-right: 1px solid #e4e4e4;

            p {
              margin: 5px 0;
            }

            h3 {
              color: #df3033;
              font-size: 20px;
              line-height: 30px;
              margin: 9px 0;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>