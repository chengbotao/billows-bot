/*
 * @Author: Chengbotao
 * @Date: 2022-06-07 17:45:04
 */

import { jingDong } from './jingdong/jingdong';
import { jueJin } from './juejin/juejin';
import { runSeaSold } from './juejin/seagold';

// 京东签到查询
jingDong();

// 掘金签到查询
jueJin();

// 掘金海底挖矿
runSeaSold(
  'MONITOR_WEB_ID=9dc7e356-bd0d-4c30-8140-60097d90b892; _ga=GA1.2.1430655783.1651763029; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227094268153849611784%2522%252C%2522user_unique_id%2522%253A%25227094268153849611784%2522%252C%2522timestamp%2522%253A1651763029236%257D; _gid=GA1.2.920835409.1656379825; _tea_utm_cache_2608={%22utm_source%22:%22gold_browser_extension%22%2C%22utm_medium%22:%22search%22}; passport_csrf_token=4358d23d83b6fbb849161d8c48dac7c9; passport_csrf_token_default=4358d23d83b6fbb849161d8c48dac7c9; _tea_utm_cache_2018=undefined; n_mh=71ZVHvMpJR068y0cE-uWzeHwXwGnKOgsi_4VqBrqV40; passport_auth_status=e8d5b80bc09785197d4399c724d3fa8c%2C36a5d24139d520cd6697b5d9f8827d77; passport_auth_status_ss=e8d5b80bc09785197d4399c724d3fa8c%2C36a5d24139d520cd6697b5d9f8827d77; sid_guard=08b32659cf23ca8646d453aa006b0a58%7C1656568983%7C31536000%7CFri%2C+30-Jun-2023+06%3A03%3A03+GMT; uid_tt=50ebe371adaef294ef44c5ef6ac92615; uid_tt_ss=50ebe371adaef294ef44c5ef6ac92615; sid_tt=08b32659cf23ca8646d453aa006b0a58; sessionid=08b32659cf23ca8646d453aa006b0a58; sessionid_ss=08b32659cf23ca8646d453aa006b0a58; sid_ucp_v1=1.0.0-KDFkZGM4MDE4OTA2ZjVkMjFhOTI0ZGZhYmM2YTFjOWRlOTlhNzFmNGIKFwiN54D7poyhBBCX-fSVBhiwFDgCQPEHGgJsZiIgMDhiMzI2NTljZjIzY2E4NjQ2ZDQ1M2FhMDA2YjBhNTg; ssid_ucp_v1=1.0.0-KDFkZGM4MDE4OTA2ZjVkMjFhOTI0ZGZhYmM2YTFjOWRlOTlhNzFmNGIKFwiN54D7poyhBBCX-fSVBhiwFDgCQPEHGgJsZiIgMDhiMzI2NTljZjIzY2E4NjQ2ZDQ1M2FhMDA2YjBhNTg'
);
