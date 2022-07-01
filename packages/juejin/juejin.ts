/*
 * @Author: Chengbotao
 * @Date: 2022-06-30 11:49:46
 */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface JJRequestConfig {
  [key: string]: AxiosRequestConfig;
}

// eslint-disable-next-line no-unused-vars
enum ERRNO {
  // eslint-disable-next-line no-unused-vars
  success = 0,
  // eslint-disable-next-line no-unused-vars
  checkedIn = 15001,
}

const $http = axios.create({
  baseURL: 'https://api.juejin.cn',
  headers: {
    Cookie:
      'MONITOR_WEB_ID=9dc7e356-bd0d-4c30-8140-60097d90b892; _ga=GA1.2.1430655783.1651763029; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227094268153849611784%2522%252C%2522user_unique_id%2522%253A%25227094268153849611784%2522%252C%2522timestamp%2522%253A1651763029236%257D; _gid=GA1.2.920835409.1656379825; _tea_utm_cache_2608={%22utm_source%22:%22gold_browser_extension%22%2C%22utm_medium%22:%22search%22}; passport_csrf_token=4358d23d83b6fbb849161d8c48dac7c9; passport_csrf_token_default=4358d23d83b6fbb849161d8c48dac7c9; _tea_utm_cache_2018=undefined; n_mh=71ZVHvMpJR068y0cE-uWzeHwXwGnKOgsi_4VqBrqV40; passport_auth_status=e8d5b80bc09785197d4399c724d3fa8c%2C36a5d24139d520cd6697b5d9f8827d77; passport_auth_status_ss=e8d5b80bc09785197d4399c724d3fa8c%2C36a5d24139d520cd6697b5d9f8827d77; sid_guard=08b32659cf23ca8646d453aa006b0a58%7C1656568983%7C31536000%7CFri%2C+30-Jun-2023+06%3A03%3A03+GMT; uid_tt=50ebe371adaef294ef44c5ef6ac92615; uid_tt_ss=50ebe371adaef294ef44c5ef6ac92615; sid_tt=08b32659cf23ca8646d453aa006b0a58; sessionid=08b32659cf23ca8646d453aa006b0a58; sessionid_ss=08b32659cf23ca8646d453aa006b0a58; sid_ucp_v1=1.0.0-KDFkZGM4MDE4OTA2ZjVkMjFhOTI0ZGZhYmM2YTFjOWRlOTlhNzFmNGIKFwiN54D7poyhBBCX-fSVBhiwFDgCQPEHGgJsZiIgMDhiMzI2NTljZjIzY2E4NjQ2ZDQ1M2FhMDA2YjBhNTg; ssid_ucp_v1=1.0.0-KDFkZGM4MDE4OTA2ZjVkMjFhOTI0ZGZhYmM2YTFjOWRlOTlhNzFmNGIKFwiN54D7poyhBBCX-fSVBhiwFDgCQPEHGgJsZiIgMDhiMzI2NTljZjIzY2E4NjQ2ZDQ1M2FhMDA2YjBhNTg',
  },
});
const Juejin: JJRequestConfig = {
  counts: {
    method: 'get',
    url: 'growth_api/v1/get_counts',
  },
  curPoint: {
    method: 'get',
    url: 'growth_api/v1/get_cur_point',
  },
  todayStatus: {
    method: 'get',
    url: 'growth_api/v1/get_today_status',
  },
  checkIn: {
    method: 'post',
    url: 'growth_api/v1/check_in',
  },
  lottery: {
    method: 'get',
    url: 'growth_api/v1/lottery_config/get',
  },
  drawLottery: {
    method: 'post',
    url: 'growth_api/v1/lottery/draw',
  },
  myLucky: {
    method: 'post',
    url: 'growth_api/v1/lottery_lucky/my_lucky',
  },
  lotteryHistory: {
    method: 'post',
    url: 'growth_api/v1/lottery_history/global_big',
    data: {
      page_no: 1,
      page_size: 5,
    },
  },
  dipLucky: {
    method: 'post',
    url: 'growth_api/v1/lottery_lucky/dip_lucky',
    data: {
      lottery_history_id: '111',
    },
  },
};

async function queryMyLucky($http: AxiosInstance) {
  // 查询幸运值
  const res = await $http(Juejin.myLucky);
  const { data } = res;
  if (data.err_no === ERRNO.success) {
    return `幸运值: ${data.data.total_value}`;
  }
  return `查询幸运值失败`;
}

async function queryCounts($http: AxiosInstance) {
  // 查询签到天数
  const res = await $http(Juejin.counts);
  const { data } = res;
  if (data.err_no === ERRNO.success) {
    return `连续签到 ${data.data.cont_count} 天; 总签到 ${data.data.sum_count} 天`;
  }
  return `查询签到天数失败`;
}

async function queryCurPoint($http: AxiosInstance) {
  // 查询总矿石
  const res = await $http(Juejin.curPoint);
  const { data } = res;
  if (data.err_no === ERRNO.success) {
    return `总矿石: ${data.data} 矿石`;
  }
  return `查询总矿石失败`;
}

async function queryTodayStatus($http: AxiosInstance) {
  // 查询今天的签到状态
  const res = await $http(Juejin.todayStatus);
  const { data } = res;
  if (data.err_no === ERRNO.success) {
    return data.data;
  }
  return `查询今天的签到状态失败`;
}

async function queryLottery($http: AxiosInstance) {
  // 查询抽奖次数
  const res = await $http(Juejin.lottery);
  const { data } = res;
  if (data.err_no === ERRNO.success) {
    return {
      freeCount: data.data.free_count,
      pointCost: data.data.point_cost,
    };
  }
  return `查询抽奖次数失败`;
}

async function queryLotteryHistory($http: AxiosInstance) {
  // 查询五位幸运用户
  const res = await $http(Juejin.lotteryHistory);
  const { data } = res;
  if (data.err_no === ERRNO.success) {
    return data.data.lotteries;
  }
  return `查询幸运用户失败`;
}

async function checkIn($http: AxiosInstance) {
  // 签到
  const res = await $http(Juejin.checkIn);
  const { data } = res;
  if (data.err_no === ERRNO.success) {
    return `签到成功: ${data.data.incr_point} 矿石`;
  }
  if (data.err_no === ERRNO.checkedIn) {
    return `今日已完成签到，请勿重复签到`;
  }
  return `签到失败`;
}

async function drawLottery($http: AxiosInstance) {
  // 抽奖
  const res = await $http(Juejin.drawLottery);
  const { data } = res;
  if (data.err_no === ERRNO.success) {
    return `抽奖成功`;
  }
  return `抽奖失败`;
}

async function dipLucky($http: AxiosInstance, lotteryHistoryId: string) {
  // 沾沾喜气
  const res = await $http(
    Object.assign(Juejin.dipLucky, {
      lottery_history_id: lotteryHistoryId,
    })
  );
  const { data } = res;
  if (data.err_no === ERRNO.success) {
    if (data.data.has_dip) {
      return `今日已经沾过喜气`;
    }
    return `沾沾喜气: ${data.data.dip_value} 幸运值`;
  }
  return `沾一沾失败`;
}

async function signIn($http: AxiosInstance) {
  const todayStatus = await queryTodayStatus($http);
  if (typeof todayStatus !== 'string' && !todayStatus) {
    // 未签到
    return await checkIn($http);
  }
  return `今日已完成签到`;
}

async function beHappy($http: AxiosInstance) {
  const lotteries = await queryLotteryHistory($http);
  if (typeof lotteries !== 'string') {
    return await dipLucky($http, lotteries[0].lottery_history_id);
  }
  return `沾一沾失败`;
}

async function freeDrawLottery($http: AxiosInstance) {
  const lottery = await queryLottery($http);
  if (typeof lottery !== 'string') {
    if (lottery.freeCount !== 0) {
      return await drawLottery($http);
    }
    return `今天已免费抽奖过`;
  }
  return `免费抽奖失败`;
}

export async function jueJin() {
  const res = await Promise.all([
    signIn($http),
    beHappy($http),
    freeDrawLottery($http),
    queryMyLucky($http),
    queryCounts($http),
    queryCurPoint($http),
  ]);
  console.log(res);
}
