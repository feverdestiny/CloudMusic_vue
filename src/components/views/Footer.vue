<template>
    <div class="m-footer">
        <div class="m-ft">
            <div class="m-wrap f-cb">
                <div class="m-copy">
                    <p>
                        <a>关于网易</a>
                        <span class="line">|</span>
                        <a>客户服务</a>
                        <span class="line">|</span>
                        <a>服务条款</a>
                        <span class="line">|</span>
                        <a>网站导航</a>
                        <span class="line">|</span>
                        <a>意见反馈</a>
                    </p>
                </div>
                <ul class="m-enter">
                    <li>
                        <a class="logo logo-music fitid">独立音乐人</a>
                    </li>
                    <li>
                        <a class="logo logo-topic fitid">音乐专栏</a>
                    </li>
                    <li>
                        <a class="logo logo-midea fitid">自媒体</a>
                    </li>
                    <li>
                        <a class="logo logo-reward fitid">赞赏</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
.m-footer {
  position: relative;
  height: 140px;
  overflow: hidden;
  font-size: 12px;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  .m-ft {
    width: 980px;
    margin: 0 auto;
    .m-wrap {
      .m-copy {
        float: left;
        width: 490px;
        padding-top: 35px;
        line-height: 24px;
        a {
          color: #999;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
        .line {
          margin: 0 8px 0 10px;
          color: #c2c2c2;
        }
      }
      .m-enter {
        width: 330px;
        margin-top: 21px;
        float: right;
        li {
          list-style: none;
          .logo {
            cursor: pointer;
            float: left;
            width: 60px;
            height: 70px;
            margin-left: 30px;
            background: url("../../assets/images/foot_enter.png")no-repeat;
          }
          .logo-music {
            background-position: -60px -80px;
            margin-left: 0;
          }
          .logo-topic {
            background-position: 0 -80px;
            // margin-left: 0;
          }
          .logo-midea {
            background-position: 0 0px;
            // margin-left: 0;
          }
          .logo-reward {
            background-position: -60px 0;
            // margin-left: 0;
          }

          .fitid {
            text-indent: -9999px;
          }
        }
      }
    }
  }
}
</style>
