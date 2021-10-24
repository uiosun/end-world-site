import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    about: {
      title: 'About',
      content: '我们是一个松散的开发小团队，偶尔赚点广告费补贴家用哈哈，欢迎来玩我们的游戏。',
    },
    building: {
      build: '开垦',
      publishJob: '招聘',
      payIsInt: '薪资范围是大于 0 的整数',
      publishJobTip: '请输入您为每个工时支付的薪资（税前）',
      endJob: '终止招聘',
      endJobTip: '再次确认：您真的要终止招聘吗？',
      buildTip: '注意：400 体力/工时',
      progressNone: '未垦荒',
      progressDone: '垦荒完毕',
      progress: '垦荒进度 {number}%',
      energyShow: '体力：-{energy}/h',
      productShow: '收益：{name} {number}/h',
      count: '{count} 座',
    },
    buildingName: {

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
    default: {
      en: 'English',
      cns: 'Chinese (Simple)',
      number: '个数',
      year: '年',
      day: '天',
      hour: '小时',
      minute: '分钟',
      date: '{year}年{month}月{day}日 {time}',
      submit: '提交',
      detail: '详细信息',
      discard: '丢弃',
      sure: '确定',
      know: '明白',
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
    error: {
      adventure201: '怪物还在盯着我，这已经够麻烦了',
      adventure403: '重伤的你觉得还是稳重点为好',
      attack400: '怪物已经离开了',
      boss403: '请至少保证自己能支付24个工时的薪资',
      boss412: '该工场主无力支付薪资',
      building201: '该建筑已完工，如需新建，请前往建筑界面破土动工',
      building301: '本城已经没空地了',
      building404: '这种建筑已被移出游戏',
      building403: '建筑不存在或未完工',
      building409: '建筑当前的状态，不适合进行这类工作',
      building412: '该建筑正在开垦中，先建设完再说吧',
      building413: '无法规划更多蓝图，您已经有多座建筑正在开垦中',
      build500: '开垦异常，请稍后重试',
      city404: '城市不存在',
      consume403: '数量不足',
      consume404: '该物无法使用',
      consume500: '异常，请稍后重试',
      die400: '角色已死亡，是否重生（重生将恢复所有数值，丧失一切物资、建筑、经验，保有人际关系、级别）',
      equip402: '装备数量不足',
      equip403: '已有其他装备，请先卸掉',
      equip404: '装备已无法使用',
      equip500: '装备异常，请稍后重试',
      goods404: '这种商品已被移出游戏',
      job403: '招聘简章已失效',
      lecture500: '演讲失败，请稍后重试',
      land424: '需要升级',
      monster404: '这个怪物已被移出游戏',
      profit403: '雇员税后薪资不能为 0',
      runAway201: '好了兄弟，我们已经甩掉那个烦人的家伙了',
      square201: '请勿重复发表意见',
      square404: '该演讲不存在',
      square412: '体力不足以支持你完成这次演讲',
      square500: '表达感受失败，请稍后重试',
      sign201: '今日您已签到',
      sign500: '签到异常，请稍后重试',
      user404: '您尚未创建角色，请选择“新角色”',
      user403: '名称最长不应超过 11 个字符 (5个汉字)',
      user422: '角色已死亡，是否选择新生',
      user500: '新建角色失败，请稍后重试',
      userServer500: '用户服务器无法连接，请稍后再试',
      work201: '有工作进行中，现在无法安排新工作',
      work412: '体力不足',
      refreshWork500: '工作无法结算，这是一种非临时故障，请反馈',
    },
    goods: {
      useLimit: '数量范围为 1~{number}',
      consume: '使用',
      consumeTip: '消耗物品使其生效，请问这次要用多少：',
      effectTitle: '本物品的功效为：',
      effectHpP: '恢复生命 {number} 点<br/>',
      effectHungryP: '恢复饥饿 {number} 点<br/>',
      effectEnergyP: '恢复体力 {number} 点<br/>',
      effectHappyP: '恢复快乐 {number} 点<br/>',
      effectMoney: '出售以获取 {number} 枚铜币<br/>',
      effectGold: '出售以获取 {number} 枚金币<br/>',
      effectDef: '提升 {number} 点护甲<br/>',
      effectAttI: '提升 {number} 点最小伤害<br/>',
      effectAttA: '提升 {number} 点最大伤害<br/>',
    },
    goodsName: {
      DIY: '某物',
      copperCoin: '铜币',
      goldCoin: '金币',
      berry: '浆果',
      animalMeat: '兽肉',
      animalTeeth: '兽牙',
      animalSkin: '兽皮',
      woodDagger: '木剑',
      woodShield: '木盾',
      log: '原木',
      leaves: '树叶',
    },
    policy: {
      privacyTitle: 'Privacy Policy',
      privacyContent: '　　感谢您成为“自由小岛”开发组的用户，本站及相关所有游戏，在隐私方面遵守以下规定：\n　　1.不收集除了“邮箱、IP 及硬件特征码”以外，您的任何信息，且您的邮箱在您手动点击“接收最新资讯等邮件”提示之前，仅用于找回密码等基础服务。\n　　2.您的密码将以特定单向加密算法进行存储，我们无法查看您的密码。但并不排除被骇客以拖库、彩虹表等方式进行破解，请您务必注意密码的唯一性。\n　　3.关于您在游戏内产生的一切数据，我们将遵循基本职业道德，在非“必要情况”下，不会对您的一切数据进行查看、下载、分发等动作。“必要情况”包含且不限于：优化游戏性能、解决Bug、过于恶劣的命名等。\n　　4.游戏运行过程中可能会申请应用权限，请您知悉，我们不会默认开启您设备的权限。对这类行为，若游戏内未明确申明，则均属于第三方SDK申请的权限，基于技术原因，我们无法为第三方SDK承诺明确的隐私政策，但可为您提供软体携带的第三方SDK清单，并为您查阅第三方隐私政策提供支持服务。\n　　5.您的帐号完全归属您本人所有，我们仅提供存储服务，您可以在自由的要求包括但不限于“注销账号”、“举报恶意用户”、“更改密码”、“更改昵称”等基础服务，备注，部分服务出于客观原因，使用后具备冷却期。\n　　6.若您是未成年人，请您和您的监护人仔细阅读本隐私政策，并在征得您的监护人授权同意的前提下使用我们的服务或向我们提供个人信息。\n　　7.本游戏内不含任何充值服务，但出于开发组成员的生计考虑，提供播放激励广告等间接盈利手段。\n　　8.本条为针对1的补充：IP 及硬件特征用于特定游戏、业务的反作弊行为，我们不会对该类数据挪作他用。\n　　9.本条为针对4的补充：如您在首次授权开启权限后希望关闭权限，可在设备的设置功能中选择关闭权限，从而拒绝游戏收集相应的个人信息。',
    },
    time: {
      cockcrow: '清晨', // 5~7
      forenoon: '上午', // 7~12
      noon: '中午', // 12~13
      afternoon: '下午', // 13~17
      nightfall: '黄昏', // 17~19
      night: '夜晚', // 19~5
    },
    user: {
      title: 'User',
      newActor: 'New actor',
      name: 'Nickname',
      level: '{level}级',
      email: 'Email',
      password: 'Password',
      password_new: 'New Password',
      password_confirmation: 'Password(confirm)',
      login: 'Login',
      logout: 'Logout',
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
      money: '铜币 x {number}',
      gold: '金币 x {number}',
      sign: '签到',
      signTip: '奖励 {number} 枚铜币',
      weight: '负重 {weight} 克',
      weightKilo: '负重 {weight} 公斤',
    },
    jobName: [
      '垦荒者',
      '采果人',
      '伐木工',
      '不可能的工作',
    ],
    work: {
      hourIsInt: '工作时间范围是 1~16 个小时的整数',
      needWork: '快去找份工作吧！',
      onlyMe: '我发布的',
      start: '应 聘',
      end: '终止工作',
      nowWork: '{money}铜币/小时，剩余{min}分钟',
      zeroJob: '本地暂无工作岗位',
      amountShow: '需聘用：{number}',
      profitShow: '收益：{number}铜币/h',
      energyShow: '体力：-{energy}/h',
      workTip: '这份工作时薪（每小时薪水）为{profit}，每小时需要体力{energy}，您打算工作多久？',
    },
  },
  cns: {
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
      logout: '注销',
      register: '注册',
      forget_password: '忘记密码',
      reset_password_done: '密码已重置，现将为您返回登录界面',
      newActor: '新角色',
      level: '{level}级',
      gotoRegister: '去注册',
      gotoLogin: '去登录',
      code: '激活码',
      hp: '健康',
      hp_max: '健康极限',
      energy: '体力',
      energy_max: '体力极限',
      hungry: '饥饿',
      hungry_max: '饥饿极限',
      happy: '快乐',
      happy_max: '快乐极限',
      money: '铜币 x {number}',
      gold: '金币 x {number}',
      sign: '签到',
      signTip: '奖励 {number} 枚铜币',
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
