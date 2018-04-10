<template>
  <div class="m-toplist f-cb">
    <div class="list-left">
      <div class="le-main">
        <h2>
          云音乐特色榜
        </h2>
        <ul class="f-cb">
          <li v-for="(item,index) in featureList" :key="index">
            <div class="item f-cb">
              <div class="left">
                <a class="avatar">
                  <img :src='item.url' />
                  <!-- <span class="msk"></span> -->
                </a>
              </div>
              <div class="name">
                <a class="nam1">{{item.name}}</a>
              </div>
              <div class="ntime">{{item.time}}</div>
            </div>
          </li>
        </ul>
        <h2 style="margin-top:20px;">
          全球媒体榜
        </h2>
        <ul class="f-cb">
          <li v-for="(item,index) in globalList" :key="index">
            <div class="item f-cb">
              <div class="left">
                <a class="avatar">
                  <img :src='item.url' />
                  <!-- <span class="msk"></span> -->
                </a>
              </div>
              <div class="name">
                <a class="nam1">{{item.name}}</a>
              </div>
              <div class="ntime">{{item.time}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="list-right">
      <div class="right-wrap">
        <div class="wrap-info f-cb">
          <div class="cover">
            <img src='http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150' />
            <span class="msk"></span>
          </div>
          <div class="cnt">
            <div class="cntc ">
              <div class="dh f-cb">
                <h2>云音乐飙升榜</h2>
              </div>
              <div class="user f-cb">
                <i class="u-icon"></i>
                <span class="sep">最近更新：04月04日</span>
                <span class="ss">（每天更新）</span>
              </div>
              <div class="btn f-cb">
                <div class="btn1 btn1-1 btn1-applay">
                  <i>
                    <em class="ply"></em>
                    播放
                  </i>
                </div>
                <div class="btni btni-add"></div>
                <div class="btni btni-fav">
                  <i>
                    (832749)
                  </i>
                </div>
                <div class="btni btni-share">
                  <i>(445454)</i>
                </div>
                <div class="btni btni-dl">
                  <i>下载</i>
                </div>
                <div class="btni btni-cmmt">
                  <i>1045454</i>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="wrap2">
        <div class="title f-cb">
          <h3>
            歌曲列表
          </h3>
          <span class="sub">100首歌</span>
          <span class="more">
            播放：
            <strong>9999999</strong>
            次
          </span>
        </div>
        <div class="table">
          <table class="m-table">
            <thead>
              <tr>
                <th class="first"></th>
                <th>
                  <div class="wp">标题</div>
                </th>
                <th class="w2">
                  <div class="wp">时长</div>
                </th>
                <th class="w3">
                  <div class="wp">歌手</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="event">
                <td>
                  <div class="hd">
                    <span class="num">1</span>
                    <div class="rk">
                      <span class="u-icon u-icon-10"></span>
                    </div>
                  </div>
                </td>
                <td class="rank">
                  <div class="f-cb">
                    <div class="info">
                      <span>
                        <img class="rpic" src='http://p1.music.126.net/3QWpzsAFYtOE2US7IEEhjA==/109951163228311627.jpg?param=50y50&quality=100' />
                      </span>
                      <span class="ply"></span>
                      <div class="name">
                        <span class="text">Made In China (pecial Edition)</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td style="color:#666">
                  <!-- <span> 02:51</span> -->
                  <div >
                    <a class="u-icon u-icon-10"></a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { feature, global } from "./list.js";
export default {
  data() {
    return {
      featureList: feature,
      globalList: global
    };
  }
};
</script>



<style lang="scss">
$wrapBg: url("../../../../assets/images/wrap3.png")repeat-y center 0;
$coverBg: url("../../../../assets/images/coverall.png")no-repeat;
$iconBg: url("../../../../assets/images/icon.png")no-repeat;
$tbnBg: url("../../../../assets/images/button2.png")no-repeat 0 9999px;
$tableBg: url("../../../../assets/images/table.png")no-repeat 0 9999px;

.m-toplist {
  font-size: 12px;
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  background: $wrapBg;
  .u-icon-10 {
    display: block;
    float: none;
    margin: 0 auto;
    padding-left: 0;
    width: 16px;
    height: 17px;
    background-position: -67px -283px;
  }
  .u-icon {
    float: left;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    margin: 9px 0 0 3px;
    width: 13px;
    height: 13px;
    background: $iconBg;
    background-position: -18px -682px;
  }
  .list-left {
    float: left;
    width: 240px;
    .le-main {
      margin-top: 40px;
      h2 {
        padding: 0 10px 12px 15px;
        font-size: 14px;
        color: #000;
      }
      ul {
        cursor: pointer;
        vertical-align: middle;
        li {
          list-style: none;
          position: relative;
          zoom: 1;
          height: 42px;
          padding: 10px 0 10px 20px;
          .item {
            padding-left: 50px;
            .left {
              display: inline;
              float: left;
              margin-left: -50px;
              overflow: hidden;
              width: 40px;
              .avatar {
                display: block;
                position: relative;
                width: 40px;
                height: 40px;
                img {
                  width: 40px;
                  height: 40px;
                }
                .msk {
                  position: absolute;
                  top: 0;
                  left: 0;
                  display: block;
                  width: 100%;
                  height: 100%;
                  background: $coverBg;
                  background-position: -310px -330px;
                }
              }
            }
            .name {
              width: 150px;
              overflow: hidden;
              margin-top: 2px;
              margin-bottom: 8px;
              a {
                white-space: nowrap;
              }
              .name1 {
                color: #000;
              }
            }
            .ntime {
              color: #999;
            }
          }
        }
      }
    }
  }
  .list-right {
    height: 100%;
    float: right;
    width: 740px;
    padding-bottom: 50px;
    .right-wrap {
      padding: 40px;
      .wrap-info {
        .cover {
          float: left;
          position: relative;
          display: inline;
          margin: 0 -220px 0 0;
          padding: 3px;
          border: 1px solid #ccc;
          width: 150px;
          height: 150px;
          img {
            width: 150px;
            height: 150px;
          }
          .msk {
            position: absolute;
            width: 150px;
            height: 150px;
            background: $coverBg;
            background-position: -230px -380px;
            top: 3px;
            left: 3px;
          }
        }
        .cnt {
          float: right;
          width: 100%;
          .cntc {
            margin-left: 187px;
            .dh {
              margin: 16px 0 4px;
              position: relative;
              line-height: 24px;
              h2 {
                line-height: 24px;
                font-size: 20px;
                font-weight: normal;
                font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
              }
            }
            .user {
              margin: 0 0 20px;
              line-height: 35px;
              i {
                font-style: normal;
                text-align: left;
                font-size: inherit;
              }

              .sep {
                margin-left: 5px;
                color: #666;
              }
              .ss {
                color: #999;
              }
            }
            .btn {
              margin-bottom: 25px;
              margin-right: -10px;
              .btn1 {
                display: inline-block;
                height: 31px;
                line-height: 31px;
                overflow: hidden;
                vertical-align: top;
                text-align: center;
                cursor: pointer;
                padding: 0 5px 0 0;
                white-space: nowrap;
                background: $tbnBg;
              }
              .btn1-1 {
                color: #fff;
                background: $tbnBg;
                background-position: right -428px;
                color: #fff;
                &:hover {
                  color: #fff;
                  background-position: right -510px;
                  i {
                    color: #fff;
                    background: $tbnBg;
                    background-position: 0 -469px;
                  }
                }
                i {
                  display: inline-block;
                  height: 31px;
                  line-height: 31px;
                  overflow: hidden;
                  vertical-align: top;
                  text-align: center;
                  cursor: pointer;
                  color: #fff;
                  background: $tbnBg;
                  background-position: 0 -387px;
                }
              }
              .btn1-applay {
                float: left;
                &:hover {
                  .ply {
                    background-position: -28px -1622px;
                  }
                }
                i {
                  padding: 0 7px 0 8px;
                  font-style: normal;
                  text-align: left;
                  font-size: inherit;
                }
                .ply {
                  float: left;
                  width: 20px;
                  height: 18px;
                  margin: 6px 2px 2px 0;
                  background: $tbnBg;
                  background-position: 0 -1622px;
                  overflow: hidden;
                }
                em {
                  font-style: normal;
                  text-align: left;
                  font-size: inherit;
                }
              }
            }
            .btni {
              margin-right: 6px;
              font-family: simsun, \5b8b\4f53;
              padding: 0 5px 0 0;
              white-space: nowrap;
              float: left;
              height: 31px;
              line-height: 30px;
              min-width: 23px;
              background: $tbnBg;
              cursor: pointer;
              i {
                float: left;
                height: 31px;
                line-height: 30px;
                min-width: 23px;
                cursor: pointer;
              }
            }
            .btni-add {
              margin-right: 5px;
              width: 31px;
              margin-left: -3px;
              padding-right: 0;
              background-position: 0 -1588px;
              &:hover {
                background-position: -40px -1588px;
              }
            }
            .btni-fav {
              background: $tbnBg;
              background-position: right -1020px;
              &:hover {
                background: $tbnBg;
                background-position: right -1106px;
                i {
                  background-position: 0 -1063px;
                }
              }
              i {
                background: $tbnBg;
                background-position: 0 -977px;
                padding-right: 2px;
                padding-left: 28px;
              }
            }
            .btni-share {
              background: $tbnBg;
              background-position: right -1020px;
              &:hover {
                background: $tbnBg;
                background-position: right -1106px;
                i {
                  background: $tbnBg;
                  background-position: 0 -1268px;
                }
              }
              i {
                background: $tbnBg;
                background-position: 0 -1225px;
                padding-right: 2px;
                padding-left: 28px;
              }
            }
            .btni-dl {
              background: $tbnBg;
              background-position: right -1020px;
              &:hover {
                background: $tbnBg;
                background-position: right -1106px;
                i {
                  background: $tbnBg;

                  background-position: 0 -2805px;
                }
              }
              i {
                padding-right: 2px;
                padding-left: 28px;
                background: $tbnBg;

                background-position: 0 -2761px;
              }
            }
            .btni-cmmt {
              background: $tbnBg;

              background-position: right -1020px;
              &:hover {
                background: $tbnBg;

                background-position: right -1106px;
                i {
                  background-position: 0 -1508px;
                }
              }
              i {
                background: $tbnBg;
                padding-right: 2px;
                padding-left: 28px;
                background-position: 0 -1465px;
              }
            }
          }
        }
      }
    }
    .wrap2 {
      padding: 0 30px 40px 40px;
      .title {
        border-bottom: 2px solid #c20c0c;
        height: 33px;
        h3 {
          font-size: 20px;
          line-height: 28px;
          float: left;
          font-weight: normal;
          font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
        }
        .sub {
          margin: 9px 0 0 20px;
          color: #666;
          float: left;
        }
        .more {
          margin-top: 5px;
          float: right;
          color: #666;
          strong {
            color: #c20c0c;
          }
        }
      }
      .table {
        .m-table {
          width: 100%;
          border: 1px solid #d9d9d9;
          border-collapse: collapse;
          border-spacing: 0;
          table-layout: fixed;
          th {
            height: 38px;
            background-color: #f7f7f7;
            vertical-align: top;
            text-align: left;
            font-weight: normal;
            color: #666;
            background: $tableBg;
            background-position: 0 0;
            background-repeat: repeat-x;
            .wp {
              height: 18px;
              line-height: 18px;
              padding: 8px 10px;
              background: $tableBg;

              background-position: 0 -56px;
            }
          }
          .first {
            width: 77px;
          }
          .w2 {
            width: 91px;
          }
          .w3 {
            width: 14%;
          }

          .info {
            float: left;
            width: 100%;
          }
          .rpic {
            float: left;
            width: 50px;
            height: 50px;
            margin-right: 14px;
          }
          .ply {
            margin-right: 8px;
            margin-top: 17px;
            float: left;
            width: 17px;
            height: 17px;
            cursor: pointer;
            background: $tableBg;

            background-position: 0 -103px;
          }
          .name {
            margin-top: 16px;
            height: 18px;
            margin-right: 20px;
            .text {
              position: relative;
              display: inline-block;
              padding-right: 25px;
              margin-right: -25px;
              max-width: 99%;
              height: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              &:hover {
                cursor: pointer;
                text-decoration: underline;
              }
            }
          }
        }
        tbody {
          .event {
            background-color: #f7f7f7;
          }
          td {
            margin: 0;
            padding: 6px 10px;
            line-height: 18px;
            text-align: left;
            .hd {
              height: 18px;
              .num {
                float: left;
                width: 25px;
                margin-left: 0;
                text-align: center;
                color: #999;
              }
              .rk {
                float: right;
                width: 32px;
                margin-right: -5px;
                text-align: center;
                .u-icon {
                  float: left;
                  display: inline-block;
                  overflow: hidden;
                  vertical-align: middle;
                  margin: 9px 0 0 3px;
                  width: 13px;
                  height: 13px;
                  background: $iconBg;
                  background-position: -18px -682px;
                }
                .u-icon-10 {
                  display: block;
                  float: none;
                  margin: 0 auto;
                  padding-left: 0;
                  width: 16px;
                  height: 17px;
                  background-position: -67px -283px;
                }
              }
            }
          }
          .rank {
            padding-top: 10px;
            padding-bottom: 10px;
          }
        }
      }
    }
  }
}
.u-icon {
  float: left;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  margin: 9px 0 0 3px;
  width: 13px;
  height: 13px;
  background: $iconBg;
  background-position: -18px -682px;
}

em,
i {
  font-style: normal;
  text-align: left;
  font-size: inherit;
}
</style>
