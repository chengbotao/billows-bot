/*
 * @Author: Chengbotao
 * @Date: 2022-06-29 17:20:56
 */

import { AxiosInstance, AxiosRequestConfig } from 'axios';

interface JDRequestConfig {
  [key: string]: AxiosRequestConfig;
}

const totalQuery: JDRequestConfig = {
  TotalSteel: {
    // 总钢镚查询
    method: 'get',
    url: 'https://coin.jd.com/m/gb/getBaseInfo.html',
  },
  TotalCash: {
    // 总红包查询
    method: 'post',
    url: 'https://api.m.jd.com/client.action?functionId=myhongbao_balance',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: 'body=%7B%22fp%22%3A%22-1%22%2C%22appToken%22%3A%22apphongbao_token%22%2C%22childActivityUrl%22%3A%22-1%22%2C%22country%22%3A%22cn%22%2C%22openId%22%3A%22-1%22%2C%22childActivityId%22%3A%22-1%22%2C%22applicantErp%22%3A%22-1%22%2C%22platformId%22%3A%22appHongBao%22%2C%22isRvc%22%3A%22-1%22%2C%22orgType%22%3A%222%22%2C%22activityType%22%3A%221%22%2C%22shshshfpb%22%3A%22-1%22%2C%22platformToken%22%3A%22apphongbao_token%22%2C%22organization%22%3A%22JD%22%2C%22pageClickKey%22%3A%22-1%22%2C%22platform%22%3A%221%22%2C%22eid%22%3A%22-1%22%2C%22appId%22%3A%22appHongBao%22%2C%22childActiveName%22%3A%22-1%22%2C%22shshshfp%22%3A%22-1%22%2C%22jda%22%3A%22-1%22%2C%22extend%22%3A%22-1%22%2C%22shshshfpa%22%3A%22-1%22%2C%22activityArea%22%3A%22-1%22%2C%22childActivityTime%22%3A%22-1%22%7D&client=apple&clientVersion=8.5.0&d_brand=apple&networklibtype=JDNetworkBaseAF&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&sign=fdc04c3ab0ee9148f947d24fb087b55d&st=1581245397648&sv=120',
  },
  TotalBean: {
    // 总京豆查询
    method: 'get',
    url: 'https://me-api.jd.com/user_new/info/GetJDUserInfoUnion',
  },
  TotalSubsidy: {
    // 总金贴查询
    method: 'get',
    url: 'https://ms.jr.jd.com/gw/generic/uc/h5/m/mySubsidyBalance',
    headers: {
      Referer: 'https://active.jd.com/forever/cashback/index?channellv=wojingqb',
    },
  },
  TotalMoney: {
    // 总现金查询
    method: 'get',
    url: 'https://api.m.jd.com/client.action?functionId=cash_exchangePage&body=%7B%7D&build=167398&client=apple&clientVersion=9.1.9&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&sign=762a8e894dea8cbfd91cce4dd5714bc5&st=1602179446935&sv=102',
  },
};

export async function totalSteel($http: AxiosInstance) {
  const res = await $http(totalQuery.TotalSteel);
  const { data } = res;
  return `账户钢镚: ${data.gbBalance}`;
}
export async function totalCash($http: AxiosInstance) {
  const res = await $http(totalQuery.TotalCash);
  const { data } = res;
  return `账户红包: ${data.totalBalance}`;
}
export async function totalBean($http: AxiosInstance) {
  const res = await $http(totalQuery.TotalBean);
  const { data } = res;
  return `账户京豆: ${data.data.assetInfo.beanNum}`;
}
export async function totalSubsidy($http: AxiosInstance) {
  const res = await $http(totalQuery.TotalSubsidy);
  const { data } = res;
  return `账户金贴: ${data.resultData.data.balance}`;
}
export async function totalMoney($http: AxiosInstance) {
  const res = await $http(totalQuery.TotalMoney);
  const { data } = res;
  return `账户现金: ${data.data.result.totalMoney}`;
}
