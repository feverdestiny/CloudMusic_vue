<template>
    <div class="m-toplist">
        <div class="list-left">
            <div class="le-main">
                <h2>
                    云音乐特色榜
                </h2>
                <ul class="f-cb">
                    <li>
                        <div class="item f-cb">
                            <div class="left">
                                <a class="avatar">
                                    <img src="http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40" />
                                    <span class="msk"></span>
                                </a>
                            </div>
                            <div class="name">
                                <a class="nam1">云音乐飙升榜</a>
                            </div>
                            <div class="ntime">每天更新</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="list-right">
            2
        </div>

    </div>
</template>


<style lang="scss">
$wrapBg: url("../../../../assets/images/wrap3.png")repeat-y center 0;
$coverBg: url("../../../../assets/images/coverall.png")no-repeat;
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
  }
}
</style>
