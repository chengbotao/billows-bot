/*
 * @Author: Chengbotao
 * @Date: 2022-06-06 16:17:56
 */

import axios from 'axios';
import { totalBean, totalMoney } from './query';
import { getBean, getSubsidy, getSupermarket, getCash, getShake } from './getxxx';

const $http = axios.create({
  headers: {
    'User-Agent': 'JD4iPhone/167169 (iPhone; iOS 13.4.1; Scale/3.00)',
    Cookie:
      '__jdv=122270672|cn.bing.com|-|referral|-; __jdu=715775265; areaId=1; ipLoc-djd=1-2802-0-0; shshshfpa=6086528b-6e79-ae9a-f698-b680a9e5fa57-1656490269; shshshfpb=kun5SO9LpGCXqkInDthhbAg; __jdc=76161171; PCSYCityID=CN_110000_110100_0; wxa_level=1; cid=9; retina=1; jxsid=16564922566191518785; appCode=ms0ca95114; webp=1; mba_muid=715775265; visitkey=70142688522489; autoOpenApp_downCloseDate_jd_homePage=1656492257388_1; PPRD_P=UUID.715775265; __jda=76161171.715775265.1656490239.1656490239.1656492261.2; jxsid_s_u=https%3A//home.m.jd.com/myJd/home.action; sc_width=390; _gia_s_local_fingerprint=2e90958a5eb1eaecdf9225ea01d16aba; fingerprint=2e90958a5eb1eaecdf9225ea01d16aba; equipmentId=XHVMSVIERRM6XTRQXPDPZMAOYHP7E2BRAKXCNSXMNLX4KZHNXCPKT2QAGY3YAWGULTMPHURS65W6SF5HQWRDG2IEZM; deviceVersion=604.1; deviceOS=ios; deviceOSVersion=13.2.3; deviceName=Safari; _gia_s_e_joint={"eid":"XHVMSVIERRM6XTRQXPDPZMAOYHP7E2BRAKXCNSXMNLX4KZHNXCPKT2QAGY3YAWGULTMPHURS65W6SF5HQWRDG2IEZM","ma":"","im":"","os":"Mac OS X (iPhone)","ip":"114.254.0.229","ia":"","uu":"","at":"6"}; jcap_dvzw_fp=qXfZonwTEiyMxRibkW3BCDkxSlr1yrh3ThgiFv3H1QJslcql-5lzTLJoGMbhTQw5cqPG9A==; 3AB9D23F7A4B3C9B=XHVMSVIERRM6XTRQXPDPZMAOYHP7E2BRAKXCNSXMNLX4KZHNXCPKT2QAGY3YAWGULTMPHURS65W6SF5HQWRDG2IEZM; whwswswws=; TrackerID=pWAnFtXD5znhBdDC5ZMHCnEAqWF4LTgpx2XGywE37GDIl0Df8bDeLxx6ZpJUOP_uL-tAjXqrWGw7OuPWnremUqvs2d0pe0S7vlrUTxqQzpFtBk_1uKhnaBecFDZhFhWbWgPj70N0EM3ZnUcg79n1OQ; pt_key=AAJivBIFADA7Fn7sWJvKphStURMs6Gu9V05Za66XsXpSDsdb5QhrSDMY8XMTaaLh49wJBFJM9UE; pt_pin=jd_55027115c4c1f; pt_token=eeby7tmi; pwdt_id=jd_55027115c4c1f; sfstoken=tk01mb4021c6fa8sMXgzaVE4d0xx47DrnV/KVEv7qhSk+NB0txrXwYSy3WJ8B6l4IorJVggiHTakT+Tsuhsb+5zpU3u4; wqmnx1=MDEyNjM5M3AuL2U4NWkoQ2VfYUFpMSxjaTMxZjEuM3NuMlFEKkg%3D; __jdb=76161171.23.715775265|2.1656492261; mba_sid=16564922567206357307322992973.8; __wga=1656492550004.1656492261072.1656492261072.1656492261072.2.1; jxsid_s_t=1656492550063; shshshfp=616408b0c3b8d53b4408517d94b45589; shshshsID=c598c6c8bd153cd839872e375f72d6b0_11_1656492550249',
  },
});

// 查询总数
async function queryTotal() {
  try {
    const res = await Promise.all([totalBean($http), totalMoney($http)]);
    return res;
  } catch (err) {
    console.log(err);
  }
}

async function getBenefits() {
  try {
    const res = await Promise.all([
      getBean($http),
      getSubsidy($http),
      getSupermarket($http),
      getCash($http),
      getShake($http),
    ]);
    return res;
  } catch (err) {
    console.log(err);
  }
}

export async function jingDong() {
  const res = await Promise.all([getBenefits(), queryTotal()]);
  console.log(res.flat());
}
