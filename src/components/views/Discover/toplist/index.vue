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
                 <ul class="f-cb" >
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
                  <img src='http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150'/>
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
<div class="btn1">
  <i>
    <em class="ply"></em>
    播放
  </i>
</div>
                    </div>
                  </div>
                </div>
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

.m-toplist {
  font-size: 12px;
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  background: $wrapBg;
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
                float: left;
                color: #fff;
                background: $tbnBg;
                background-position: right -428px;
                text-decoration: none;
                padding: 0 5px 0 0;
                white-space: nowrap;

                i {
                  font-style: normal;
                  text-align: left;
                  padding: 0 7px 0 8px;
                  font-size: inherit;
                  background: $tbnBg;
                  background-position: 0 -387px;
                  pointer-events: none;
                  display: inline-block;
                  height: 31px;
                  line-height: 31px;
                  overflow: hidden;
                  vertical-align: top;
                  text-align: center;
                  cursor: pointer;

                  .ply {
                    font-style: normal;
                    text-align: left;
                    font-size: inherit;
                    float: left;
                    width: 20px;
                    height: 18px;
                    margin: 6px 2px 2px 0;
                    background: $tbnBg;
                    background-position: 0 -1622px;
                    overflow: hidden;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
