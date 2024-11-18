// JavaScript用ファイル
new Vue({
    el: '#app',
    
    data: {
      password:'',
      confirmPassword:''
    },
    computed: {
      // 入力されている、且つパスワードが一致しているかを確認する算出プロパティ
      // 入力されているかは、this.･･･ で判定可能
      // 例）一致TRUE（パスワード：aaaa、パスワード確認：aaaa）
      // 例）不一致FALSE（パスワード：aaaa、パスワード確認：aaab）
      passwordMismatch()
      {
        return this.password && this.confirmPassword && this.password !==this.confirmPassword;
      },
      // ボタンをTRUEなら登録を表示orFALSEなら使用不可を表示にする算出プロパティ
      canRegister(){
        return this.password && this.confirmPassword && !this.passwordMismatch;
      }
    }
  });