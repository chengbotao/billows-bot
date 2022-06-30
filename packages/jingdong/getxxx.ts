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
  cash: {
    method: 'get',
    url: 'https://api.m.jd.com/client.action?functionId=cash_sign&body=%7B%22remind%22%3A0%2C%22inviteCode%22%3A%22%22%2C%22type%22%3A0%2C%22breakReward%22%3A0%7D&client=apple&clientVersion=9.0.8&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&sign=7e2f8bcec13978a691567257af4fdce9&st=1596954745073&sv=111',
  },
  shake: {
    method: 'get',
    url: 'https://api.m.jd.com/client.action?appid=vip_h5&functionId=vvipclub_shaking',
  },
};

export async function getBean($http: AxiosInstance): Promise<string> {
  const res = await $http(benefits.bean);
  const { data } = res;
  // console.log('获取京豆-getBean:', data);
  if (data.code === 3) {
    return `京东商城-京豆Cookie失效`;
  }
  if (data.data.status === '1') {
    return `京东商城-京豆签到成功,明细: ${data.data.dailyAward.dailyAward.beanCount} 京豆 🐶`;
  }
  return `京东商城-京豆已签到`;
}

export async function getSubsidy($http: AxiosInstance) {
  const res = await $http(benefits.subsidy);
  const { data } = res;
  // console.log('获取金贴-getSubsidy', data);
  if (data.resultCode === 0 && data.resultData.data.thisAmountStr) {
    return `京东商城-金贴签到成功, 明细: ${data.resultData.data.thisAmountStr} 金贴 💰`;
  }
  return `京东商城-金贴已签到`;
}
export async function getSupermarket($http: AxiosInstance) {
  const res = await $http(benefits.supermarket);
  const { data } = res;
  // console.log('获取超市-getSupermarket', data);
  if (data.data?.success) {
    return `京东商城-超市签到成功, 明细: ${data.data.result.jdBeanCount} 京豆 🐶`;
  }
  return `京东商城-超市已签到`;
}

export async function getCash($http: AxiosInstance) {
  const res = await $http(benefits.cash);
  const { data } = res;
  // console.log('获取现金-getCash', data);
  if (data.data?.success) {
    return `京东商城-现金签到成功, 明细: ${data.data.result.signCash} 现金 💰`;
  }
  return `京东商城-现金已签到`;
}

export async function getShake($http: AxiosInstance) {
  const res = await $http(benefits.shake);
  const { data } = res;
  // console.log('摇一摇-getShake', data);
  if (data.success) {
    return `京东商城-摇一摇签到成功, 明细: ${data.data.prizeBean.count} 京豆 🐶`;
  }
  return `京东商城-摇一摇已签到`;
}
