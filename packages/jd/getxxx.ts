/*
 * @Author: Chengbotao
 * @Date: 2022-06-29 20:51:44
 */
import { AxiosInstance, AxiosRequestConfig } from 'axios';
interface JDRequestConfig {
  [key: string]: AxiosRequestConfig;
}
const benefits: JDRequestConfig = {
  bean: {
    method: 'post',
    url: 'https://api.m.jd.com/client.action',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: 'functionId=signBeanIndex&appid=ld',
  },
  subsidy: {
    method: 'get',
    url: 'https://ms.jr.jd.com/gw/generic/uc/h5/m/signIn7',
    headers: {
      Referer: 'https://active.jd.com/forever/cashback/index',
    },
  },
  supermarket: {
    method: 'get',
    url: 'https://api.m.jd.com/api?appid=jdsupermarket&functionId=smtg_sign&clientVersion=8.0.0&client=m&body=%7B%7D',
    headers: {
      Origin: `https://jdsupermarket.jd.com`,
    },
  },
  cashRedPackets: {
    // 当前 API 不存在
    method: 'post',
    url: 'https://api.m.jd.com/client.action?functionId=ccSignInNew',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: 'body=%7B%22pageClickKey%22%3A%22CouponCenter%22%2C%22eid%22%3A%22O5X6JYMZTXIEX4VBCBWEM5PTIZV6HXH7M3AI75EABM5GBZYVQKRGQJ5A2PPO5PSELSRMI72SYF4KTCB4NIU6AZQ3O6C3J7ZVEP3RVDFEBKVN2RER2GTQ%22%2C%22shshshfpb%22%3A%22v1%5C%2FzMYRjEWKgYe%2BUiNwEvaVlrHBQGVwqLx4CsS9PH1s0s0Vs9AWk%2B7vr9KSHh3BQd5NTukznDTZnd75xHzonHnw%3D%3D%22%2C%22childActivityUrl%22%3A%22openapp.jdmobile%253a%252f%252fvirtual%253fparams%253d%257b%255c%2522category%255c%2522%253a%255c%2522jump%255c%2522%252c%255c%2522des%255c%2522%253a%255c%2522couponCenter%255c%2522%257d%22%2C%22monitorSource%22%3A%22cc_sign_ios_index_config%22%7D&client=apple&clientVersion=8.5.0&d_brand=apple&d_model=iPhone8%2C2&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&scope=11&screen=1242%2A2208&sign=1cce8f76d53fc6093b45a466e93044da&st=1581084035269&sv=102',
  },
  cash: {
    method: 'get',
    url: 'https://api.m.jd.com/client.action?functionId=cash_sign&body=%7B%22remind%22%3A0%2C%22inviteCode%22%3A%22%22%2C%22type%22%3A0%2C%22breakReward%22%3A0%7D&client=apple&clientVersion=9.0.8&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&sign=7e2f8bcec13978a691567257af4fdce9&st=1596954745073&sv=111',
  },
  querySpike: {
    // 任务不在可访问范围内
    method: 'post',
    url: 'https://api.m.jd.com/client.action',
    headers: {
      Origin: 'https://h5.m.jd.com',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: 'functionId=homePageV2&appid=SecKill2020',
  },
  spike: {
    // 任务不在可访问范围内
    method: 'post',
    url: 'https://api.m.jd.com/client.action',
    headers: {
      Origin: 'https://h5.m.jd.com',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
  shake: {
    method: 'get',
    url: 'https://api.m.jd.com/client.action?appid=vip_h5&functionId=vvipclub_shaking',
  },
  sale: {
    // 当前 API 不存在
    method: 'post',
    url: 'https://api.m.jd.com/client.action?functionId=partitionJdSgin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: 'body=%7B%22version%22%3A%22v2%22%7D&client=apple&clientVersion=9.0.8&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&sign=6768e2cf625427615dd89649dd367d41&st=1597248593305&sv=121',
  },
  turn: {
    // 参数错误
    method: 'post',
    url: `https://api.m.jd.com/client.action?functionId=babelGetLottery`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: 'body=%7B%22enAwardK%22%3A%2295d235f2a09578c6613a1a029b26d12d%22%2C%22riskParam%22%3A%7B%7D%7D&client=wh5',
  },
  doll: {
    method: 'post',
    url: 'https://nu.jr.jd.com/gw/generic/jrm/h5/m/process',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
};

export function getBean($http: AxiosInstance) {
  return $http(benefits.bean).then((res) => {
    const { data } = res;
    // console.log('获取京豆-getBean:', data);
    if (data.code === 3) {
      return `京东商城-京豆Cookie失效`;
    }
    if (data.data.status === '1') {
      return `京东商城-京豆签到成功,明细: ${data.data.dailyAward.dailyAward.beanCount} 京豆 🐶`;
    }
    return `京东商城-京豆已签到`;
  });
}

export function getSubsidy($http: AxiosInstance) {
  return $http(benefits.subsidy).then((res) => {
    const { data } = res;
    console.log('获取金贴-getSubsidy', data);
    if (data.resultCode === 0) {
      return `京东商城-金贴签到成功, 明细: ${data.resultData.data.thisAmountStr} 金贴 💰`;
    }
    return `京东商城-金贴已签到`;
  });
}
export function getSupermarket($http: AxiosInstance) {
  return $http(benefits.supermarket).then((res) => {
    const { data } = res;
    // console.log('获取超市-getSupermarket', data);
    if (data.data?.success) {
      return `京东商城-超市签到成功, 明细: ${data.data.result.jdBeanCount} 京豆 🐶`;
    }
    return `京东商城-超市已签到`;
  });
}
export function getCashRedPackets($http: AxiosInstance) {
  return $http(benefits.cashRedPackets).then((res) => {
    const { data } = res;
    // console.log('获取现金红包-getCashRedPackets', data);
    if (data.code === '0') {
      return `京东现金-红包签到成功, 明细: ${data.result.signResult.signData.amount} 红包 🧧`;
    }
    return `京东现金-红包已签到`;
  });
}
export function getCash($http: AxiosInstance) {
  return $http(benefits.cash).then((res) => {
    const { data } = res;
    // console.log('获取现金-getCash', data);
    if (data.data.success) {
      return `京东商城-现金签到成功, 明细: ${data.data.result.signCash} 现金 💰`;
    }
    return `京东商城-现金已签到`;
  });
}
export function getSpike($http: AxiosInstance) {
  return $http(benefits.querySpike)
    .then((res) => {
      const { data } = res;
      //   console.log('查询秒杀红包活动-getSpike', data);
      if (data.code === 203 || data.code === 3 || data.code === 101) {
        return `京东秒杀-红包查询失败, 原因: Cookie失效‼️`;
      }
      if (data.result && data.result.projectId && data.result.taskId) {
        return {
          projectId: data.result.projectId,
          taskId: data.result.taskId,
        };
      }
    })
    .then((res) => {
      if (typeof res === 'object') {
        $http(
          Object.assign(benefits.spike, {
            data: `functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22${res.projectId}%22%2C%22encryptAssignmentId%22%3A%22${res.taskId}%22%2C%22completionFlag%22%3Atrue%7D&client=wh5&appid=SecKill2020`,
          })
        ).then((res) => {
          const { data } = res;
          //   console.log('获取秒杀红包-getSpike', data);
          if (data.code === 0) {
            return `京东秒杀-红包签到成功, 明细: ${data.data.discount} 红包 🧧`;
          }
          return `京东秒杀-红包已签到`;
        });
      }
      return res;
    });
}

export function getShake($http: AxiosInstance) {
  return $http(benefits.shake).then((res) => {
    const { data } = res;
    // console.log('摇一摇-getShake', data);
    if (data.success) {
      return `京东商城-摇一摇签到成功, 明细: ${data.data.prizeBean.count} 京豆 🐶`;
    }
    return `京东商城-摇一摇已签到`;
  });
}
export function getSale($http: AxiosInstance) {
  return $http(benefits.sale).then((res) => {
    const { data } = res;
    // console.log('获取闪购-getSale', data);
    if (data.result?.code === 0) {
      return `京东商城-闪购签到成功, 明细: ${data.result.jdBeanNum} 京豆 🐶`;
    }
    return `京东商城-闪购已签到`;
  });
}
export function getTurn($http: AxiosInstance) {
  return $http(benefits.turn).then((res) => {
    const { data } = res;
    // console.log('获取闪购-getSale', data);
    if (data.code === 0) {
      return `京东商城-转盘签到成功, 明细: ${data.prizeName} 京豆 🐶`;
    }
    return `京东商城-转盘已签到`;
  });
}

export function getDoll($http: AxiosInstance) {
  // eslint-disable-next-line prefer-const
  let code = '1DF13833F7';
  //   const code = 'F68B2C3E71';
  return $http(
    Object.assign(benefits.doll, {
      data: `reqData=${encodeURIComponent(
        `{"actCode":"${code}","type":${`3`}${
          code === 'F68B2C3E71'
            ? `,"frontParam":{"belong":"${`jingdou`}"}`
            : code === `1DF13833F7`
            ? `,"frontParam":{"channel":"JR","belong":4}`
            : ``
        }}`
      )}`,
    })
  ).then((res) => {
    const { data } = res;
    console.log('双签-getDoll', data);
    if (data.code === 0) {
      return `京东商城-转盘签到成功, 明细: ${data.prizeName} 京豆 🐶`;
    }
    return `双签-已签到`;
  });
}
