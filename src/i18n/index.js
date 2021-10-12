import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    time: {
      nightfall: '黄昏',
    },
    default: {
      en: 'English',
      cns: 'Chinese (Simple)',
      date: '{year}年{month}月{day}日 {time}',
      submit: '提交',
      sure: '明白',
      cancel: '取消',
      next: '下一条',
      last: '上一条',
      goto_sign: '[Goto Sign]',
      limit_length: '{attribute}长度为 {min}-{max} 个字符',
      need_confirmed: '{attribute}与再次确认的输入值不一致',
      input: {
        required: 'This field is required',
        need_email: '请输入一个有效的电子邮箱',
      },
    },
    user: {
      title: 'User',
      name: 'Nickname',
      level: '{level}级',
      email: 'Email',
      password: 'Password',
      password_new: 'New Password',
      password_confirmation: 'Password(confirm)',
      login: 'Login',
      gotoRegister: 'Goto Register',
      register: 'Register',
      gotoLogin: 'Goto Login',
      forget_password: 'Forget Password',
      code: 'Activate Code',
      hp: '健康',
      hp_max: '健康极限',
      energy: '体力',
      energy_max: '体力极限',
      hungry: '饥饿',
      hungry_max: '饥饿极限',
      happy: '快乐',
      happy_max: '快乐极限',
      sign: '签到',
    },
    city: {
      square: '广 场',
      market: '市 集',
      store: '仓 库',
      work: '工 作',
      building: '不 动 产',
      outskirts: '郊 外',
      squareTalk: '请输入您的演讲内容',
      talk: '我 要 演 讲',
    },
    error: {
      building412: '该建筑正在开垦中，每种建筑只支持同时开垦一座',
      building201: '该建筑已完工，如需新建，请前往建筑界面破土动工',
      building404: '这种建筑已被移出游戏',
      building403: '建筑不存在或未完工',
      building409: '建筑当前的状态，已不适合进行这类工作',
      build500: '开垦异常，请稍后重试',
      die400: '角色已死亡，是否重生（重生将恢复所有数值，丧失一切物资、建筑、经验，保有人际关系、级别）',
      goods404: '这种商品已被移出游戏',
      lecture500: '演讲失败，请稍后重试',
      land424: '需要升级',
      monster404: '这个怪物已被移出游戏',
      square201: '请勿重复发表意见',
      square404: '该演讲不存在',
      square412: '体力不足以支持你完成这次演讲',
      square500: '表达感受失败，请稍后重试',
      work201: '有工作进行中，现在无法安排新工作',
      work412: '体力不足以支持你完成这么久的工作',
    },
    about: {
      title: 'About',
      content: '我们是一个松散的开发小团队，偶尔赚点广告费补贴家用哈哈，欢迎来玩我们的游戏。',
    },
    policy: {
      privacyTitle: 'Privacy Policy',
      privacyContent: '　　感谢您成为“自由小岛”开发组的用户，本站及相关所有游戏，在隐私方面遵守以下规定：\n　　1.不收集除了“邮箱、IP 及硬件特征码”以外，您的任何信息，且您的邮箱在您手动点击“接收最新资讯等邮件”提示之前，仅用于找回密码等基础服务。\n　　2.您的密码将以特定单向加密算法进行存储，我们无法查看您的密码。但并不排除被骇客以拖库、彩虹表等方式进行破解，请您务必注意密码的唯一性。\n　　3.关于您在游戏内产生的一切数据，我们将遵循基本职业道德，在非“必要情况”下，不会对您的一切数据进行查看、下载、分发等动作。“必要情况”包含且不限于：优化游戏性能、解决Bug、过于恶劣的命名等。\n　　4.游戏运行过程中可能会申请应用权限，请您知悉，我们不会默认开启您设备的权限。对这类行为，若游戏内未明确申明，则均属于第三方SDK申请的权限，基于技术原因，我们无法为第三方SDK承诺明确的隐私政策，但可为您提供软体携带的第三方SDK清单，并为您查阅第三方隐私政策提供支持服务。\n　　5.您的帐号完全归属您本人所有，我们仅提供存储服务，您可以在自由的要求包括但不限于“注销账号”、“举报恶意用户”、“更改密码”、“更改昵称”等基础服务，备注，部分服务出于客观原因，使用后具备冷却期。\n　　6.若您是未成年人，请您和您的监护人仔细阅读本隐私政策，并在征得您的监护人授权同意的前提下使用我们的服务或向我们提供个人信息。\n　　7.本游戏内不含任何充值服务，但出于开发组成员的生计考虑，提供播放激励广告等间接盈利手段。\n　　8.本条为针对1的补充：IP 及硬件特征用于特定游戏、业务的反作弊行为，我们不会对该类数据挪作他用。\n　　9.本条为针对4的补充：如您在首次授权开启权限后希望关闭权限，可在设备的设置功能中选择关闭权限，从而拒绝游戏收集相应的个人信息。',
    },
  },
  cns: {
    blog: {
      title: '博客',
    },
    trans: {
      languageList: [
        '未知',
        '英文',
        '中文',
      ],
      title: '翻译',
      change_project: '切换项目',
      start_trans: '开始翻译',
      start_valid: '开始复核',
      start_manage: '前往管理',
      word_origin: '原文：',
      word_new: '新翻译：',
      word_use: '已采用：',
      file_list: '文件列表：',
      file_new: '我想提交新文件',
      upload_file: '上传语言文件',
      show_lang_list: '展开多语言选项',
      support_language_choice: '选定支持的多语言：',
      upload_file_submit: '上传',
      input_alert: '请对照上述原文，在此输入您的翻译',
      fail_scene: '请选择操作',
      all_trans_clear: '哇哦~已经没有待处理词条了',
      tag: '备注',
      new_file_alert: '您正在提交新文件',
      new_file_by_: '您正在提交新文件',
      new_file_by_tag: '请输入备注（如果您并不想提交新文件，“取消按钮”可以终止上传）',
      new_file_by_language: '请选择语言',
      new_file_by_language_again: '继续选择',
      new_file_by_language_succeed: '选择完毕',
      need_amend_submit: '需 修 改',
    },
    about: {
      title: '关于',
      content: '我们是一个松散的开发小团队，偶尔赚点广告费补贴家用哈哈，欢迎来玩我们的游戏。',
    },
    policy: {
      privacyTitle: '隐私政策',
      privacyContent: '　　感谢您成为“自由小岛”开发组的用户，本站及相关所有游戏，在隐私方面遵守以下规定：\n　　1.不收集除了“邮箱、IP 及硬件特征码”以外，您的任何信息，且您的邮箱在您手动点击“接收最新资讯等邮件”提示之前，仅用于找回密码等基础服务。\n　　2.您的密码将以特定单向加密算法进行存储，我们无法查看您的密码。但并不排除被骇客以拖库、彩虹表等方式进行破解，请您务必注意密码的唯一性。\n　　3.关于您在游戏内产生的一切数据，我们将遵循基本职业道德，在非“必要情况”下，不会对您的一切数据进行查看、下载、分发等动作。“必要情况”包含且不限于：优化游戏性能、解决Bug、过于恶劣的命名等。\n　　4.游戏运行过程中可能会申请应用权限，请您知悉，我们不会默认开启您设备的权限。对这类行为，若游戏内未明确申明，则均属于第三方SDK申请的权限，基于技术原因，我们无法为第三方SDK承诺明确的隐私政策，但可为您提供软体携带的第三方SDK清单，并为您查阅第三方隐私政策提供支持服务。\n　　5.您的帐号完全归属您本人所有，我们仅提供存储服务，您可以在自由的要求包括但不限于“注销账号”、“举报恶意用户”、“更改密码”、“更改昵称”等基础服务，备注，部分服务出于客观原因，使用后具备冷却期。\n　　6.若您是未成年人，请您和您的监护人仔细阅读本隐私政策，并在征得您的监护人授权同意的前提下使用我们的服务或向我们提供个人信息。\n　　7.本游戏内不含任何充值服务，但出于开发组成员的生计考虑，提供播放激励广告等间接盈利手段。\n　　8.本条为针对1的补充：IP 及硬件特征用于特定游戏、业务的反作弊行为，我们不会对该类数据挪作他用。\n　　9.本条为针对4的补充：如您在首次授权开启权限后希望关闭权限，可在设备的设置功能中选择关闭权限，从而拒绝游戏收集相应的个人信息。',
    },
    user: {
      title: '用户',
      name: '昵称',
      email: '邮箱',
      password: '密码',
      password_confirmation: '密码(再次确认)',
      password_new: '新密码',
      login: '登录',
      register: '注册',
      forget_password: '忘记密码',
      reset_password_done: '密码已重置，现将为您返回登录界面',
    },
    default: {
      en: '英文',
      cns: '中文(简体)',
      token_failed: '登录已失效',
      token_failed_to_sign: '登录已失效，现将为您返回登录界面',
      next: '下一条',
      last: '上一条',
      limit_length: '{attribute}长度为 {min}-{max} 个字符',
      need_confirmed: '{attribute}与再次确认的输入值不一致',
      need_email: '{attribute}必须是电子邮箱格式',
      submit: '提 交',
      ops: '糟糕',
      succeed: '成功',
      pass_submit: '通 过',
      reject_submit: '驳 回',
      goto_sign: '『点我登录』',
      code: '验证码',
      input: {
        default: 'This field is required',
      },
    },
  },
};

const local = localStorage.getItem('local') ?? 'en';

export default createI18n({
  locale: local,
  fallbackLocale: 'en',
  messages,
});
