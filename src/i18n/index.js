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
      productUse: '生产所需原料：',
      buildTip: '每个工时，都需要体力 x {number}',
      progressNone: '未垦荒',
      progressDone: '垦荒完毕',
      progress: '垦荒进度 {number}%',
      energyShow: '体力：-{energy}/h',
      productShow: '收益：{number}{name}/h',
      count: '{count} 座',
      need: '{goods} x {number}',
      detail: '　　本建筑占地 {land} 单位。<br/>　　能提供 {employee} 个工作岗位。<br/>　　每工时理论产出 {number1} 个 {product1}，根据实际情况有所差异。',
    },
    buildingName: {
    },
    config: {
      clear: '清理缓存',
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
      time: '{hour}:{minute}',
      submit: '提交',
      detail: '详细信息',
      discard: '丢弃',
      sure: '确定',
      know: '明白',
      close: '关闭',
      cancel: '取消',
      next: '下一条',
      last: '上一条',
      overdue: '已过期',
      quickClick: '请不要点的太快哟',
      goto_sign: '[Goto Sign]',
      limit_length: '{attribute}长度为 {min}-{max} 个字符',
      need_confirmed: '{attribute}与再次确认的输入值不一致',
      input: {
        required: 'This field is required',
        need_email: '请输入一个有效的电子邮箱',
      },
    },
    error: {
      adventure201: '怪物还在盯着我，这已经够麻烦了。',
      adventure403: '我都已经重伤了，还要继续招惹其他怪物吗？回去是不是该看看心理医生……',
      attack400: '怪物已经悄然溜走。',
      boss403: '请至少保证自己能支付24个工时的薪资',
      boss412: '该工场主无力支付薪资',
      boss413: '该工场主仓库里没有原料',
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
      local401: '你恍惚了太久，不知不觉，已经走回城中。',
      local404: '需要升级',
      local412: '体力不足',
      monster404: '这个怪物已被移出游戏',
      order403: '税后价格需大于 0',
      order404: '本单已售罄',
      order412: '货物数量不足',
      order423: '其他人正在交割该订单，请重试',
      order424: '现金不足',
      orderSet500: '出售失败，请重试',
      orderBuy500: '购买失败，请重试',
      orderStop500: '终止出售失败，请重试',
      profit403: '雇员税后薪资不能为 0',
      runaway201: '好了兄弟，我们已经甩掉那个烦人的家伙了。',
      square201: '请勿重复发表意见',
      square404: '该演讲不存在',
      square412: '体力不足以支持你完成这次演讲',
      square500: '表达感受失败，请稍后重试',
      sign201: '今日您已签到',
      sign500: '签到异常，请稍后重试',
      user404: '您尚未创建角色，请选择“新角色”',
      user403: '名称最长不应超过 11 个字符 (5个汉字)',
      user422: '角色已死亡，请新建角色',
      user423: '无法刷新用户信息，请重试',
      user500: '新建角色失败，请稍后重试',
      userServer500: '用户服务器无法连接，请稍后再试',
      work201: '有工作进行中，现在无法安排新工作',
      work412: '体力不足',
      weight413: '背包装不下这么沉的东西',
      work500: '工作进行失败，请重试',
      refreshWork500: '工作无法结算，这是一种非临时故障，请反馈',
    },
    goods: {
      useLimit: '数量范围为 1~{number}',
      consume: '使用',
      consumeTip: '消耗/装备物品使其生效，请问这次要用多少：',
      effectTitle: '本物品的功效为：',
      effectNull: '暂时无用。',
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
      wheat: '小麦',
      straw: '秸秆',
      wheatMeal: '小麦粗粉',
      chowMein: '炒面',
      berryBall: '浆果丸子',
      meatball: '肉丸子',
      berryMeatball: '浆果肉丸',
      charcoal: '木炭',
    },
    outskirts: {
      adventure: '探索',
      backHome: '返 回 城 区',
      danger0: '极其安全',
      danger1: '较为安全',
      danger2: '需要谨慎',
      danger3: '有些危险',
      danger4: '相当危险',
      danger5: '极其危险',
      danger6: '深入险境',
      danger7: '九死一生',
      danger8: '无人知晓',
      fight: '进攻',
      journeyStart0: '今日风和日丽，你来到了【{name}】。',
      journeyContinue0: '你告别【{lastName}】，来到了【{name}】，希望在这里了解到一些新鲜玩意。',
      journeyContinue1: '天空有些阴沉，你踱步着，慢慢地从【{lastName}】走到了【{name}】。',
      journeyContinue2: '起风了，一些冒险者不禁加快了脚步，你离开【{lastName}】，来到了【{name}】。',
      adventureEmpty: '你漫无目的的游荡着，这里似乎很安全。',
      adventure0: '远远地，你看到了一个怪物，像是<strong style="color: #d10000">{monster}</strong>。',
      adventure1: '一个<strong style="color: #d10000">{monster}</strong>突然从路旁冒出，准备战斗！',
      injuries: '{monster}给了你一下，造成 <strong style="color: #d10000">{injury}</strong> 点伤害，你眼前一黑，昏倒在地。',
      winGot: '你干脆的反手一击，造成 <strong style="color: #d10000">{attack}</strong> 点伤害，{monster}化为点点星芒，消散在原处，只留下一些掉落物。',
      winEmpty: '你干脆的反手一击，造成 <strong style="color: #d10000">{attack}</strong> 点伤害，{monster}化为点点星芒，消散在原处，可惜没什么收获。',
      attack: '你趁其不备，给{monster}造成 <strong style="color: #d10000">{attack}</strong> 点伤害。',
      runaway0: '你趁其不备，从<strong style="color: #d10000">{monster}</strong>身后缓步溜走了，愚蠢的{monster}还在摇头晃脑。',
      runaway1: '随着你不断的挑衅，<strong style="color: #d10000">{monster}</strong>怒吼一声，冲你狂奔而来，却被轻松闪开，你借机溜走。',
      defence: '{monster}怒吼一声，撞击你的身体，造成 <strong style="color: #d10000">{injury}</strong> 点伤害。',
      homeTarget: '回城方向',
      knapsack: '背包',
      map: '地图',
      runaway: '逃跑',
      goto: '前往',
      canGoto: '通往{name}',
    },
    market: {
      price: '售价(个)',
      sell: '出售',
      buy: '购入',
      remove: '撤单',
      sellTip: '请问每个的售价是：',
      buyTip: '咱们这次买几个？',
      buySubmit: '下单',
      sellButton: '我 要 出 售',
      historyButton: '交 易 记 录',
      priceUnit: '价格：{price} 铜币/份',
      orderTitle: '{name} ({number} 份)',
      priceLimit: '价格最低为 2',
      buyCountLimit: '买入数量范围为 1~{number}',
      buyMoneyLimit: '我们的钱好像不是太够，估计最多买 {number} 个',
      setDone: '挂单完成',
      overdueTime: '{day}日{hour}:{minute} 过期',
    },
    mapName: {
      cityGate: '城门',
      outskirtSpinney: '西郊密林',
      outskirtMoor: '北郊旷野',
      cabinInWoods: '林中小屋',
      corpseStore: '藏尸处',
      blackPond: '黑池塘',
      disuseFishery: '废弃渔场',
      lonelyTown: '孤独镇',
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
      levelNumber: '{level}级',
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
      exp: '经验',
      exp_max: '升级所需经验',
      level: '级别',
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
      '农夫(小麦)',
      '磨坊工(小麦)',
      '厨师(浆果丸子)',
    ],
    work: {
      hourIsInt: '工作时间范围是 1~16 个小时的整数',
      needWork: '快去找份工作吧！',
      onlyMe: '我发布的',
      start: '应 聘',
      end: '终止工作',
      selfPublish: '我发布',
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
