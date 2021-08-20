<template>
  <div style="margin: 3% 7%">
    <div style="box-shadow: 2px 2px 5px #aafa3f">
      <!--qq号码输入框-->
      <van-field
        v-model ="qqNum"
        type="number"
        center
        clearable
        label-align="right"
        label="QQ账号"
        label-width="60px"
        placeholder="请输入QQ账号"
        @clear="clearInfo">
        <!--确认 按钮-->
        <template #button>
          <div style="box-shadow: 1px 1px 2px #aafa3f">
            <van-button
              size="small"
              color="linear-gradient(to right,#ffd6e7,#ffadd2)"
              @click="btnGet"
            >
              确认
            </van-button>
          </div>
        </template>
      </van-field>

      <div v-if="isShow" style="margin-top: 7%;text-align:center">
        <div v-for="item in list">
          <!--头像图片-->
          <van-image
            width="10rem"
            height="10rem"
            fit="contain"
            :src="item.imgurl"
            style="box-shadow: 2px 2px 5px #c41d7f"
          />
          <!--昵称-->
          <div style="margin-top: 3.8px;font-size: 22px;color: #aafa3f">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      qqNum: '',//qq账号
      list: [],//信息列表
      isShow: true //头像，昵称是否显示
    }
  }, methods: {
    //确认按钮事件
    btnGet() {
      let _this = this
      _this.list = [];
      axios({
        url: "/apis/test.json",
        method: "get",
        params: {
         // "qq": this.qqNum
        }
      }).then(data => {
        if (data.data.code == 1) {
          _this.list.push(data.data)
          _this.isShow = true
          _this.$toast.success("登录成功")
        } else {
          console.log("失败"+data.data.ms);
          _this.$toast.fail(data.data.msg)
        }
      }).catch(err=>{
        console.log("catch失败"+err);
        _this.$toast.fail(err)
      });
    },
    //清除按钮事件
    clearInfo() {
      this.list = [];
      this.isShow = false
    }
  },
  name: "QQLogin"
}
</script>

<style scoped>

</style>
