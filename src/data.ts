/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ItineraryItem {
  id: string;
  date: string;
  time: string;
  name: string;
  location?: string;
  note?: string;
  googleMapsUrl?: string;
}

export const ITINERARY: ItineraryItem[] = [
  {
    id: 'it-0',
    date: '2026-05-01 (금)',
    time: '06:55',
    name: '주차대행 차량 인도',
    note: '세븐주차대행'
  },
  {
    id: 'it-1',
    date: '2026-05-01 (금)',
    time: '10:20 - 12:55',
    name: '인천공항 출발',
    note: '항공권 확인'
  },
  {
    id: 'it-2',
    date: '2026-05-01 (금)',
    time: '15:05',
    name: '나리타 → 신주쿠 공항 리무진',
    note: '클룩예약'
  },
  {
    id: 'it-3',
    date: '2026-05-01 (금)',
    time: '17:30',
    name: '신주쿠 워싱턴 호텔 체크인',
    note: '아고다 예약'
  },
  {
    id: 'it-4',
    date: '2026-05-01 (금)',
    time: '18:30',
    name: '모모 파라다이스 신주쿠히가시구치점',
    location: '신주쿠',
    note: '구글예약 석식',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mo-Mo-Paradise+Shinjuku+Higashiguchi'
  },
  {
    id: 'it-5',
    date: '2026-05-02 (토)',
    time: '오전',
    name: '웰컴 스이카 구매',
    location: '신주쿠역',
    note: '인당 1,000엔 충전'
  },
  {
    id: 'it-6',
    date: '2026-05-02 (토)',
    time: '10:00 - 11:40',
    name: '하라주쿠 → 시부야 이동',
    note: '거리 구경'
  },
  {
    id: 'it-7',
    date: '2026-05-02 (토)',
    time: '11:40',
    name: '츠키시마 몬쟈 쿠우야 시부야',
    note: '중식',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tsukishima+Monja+Kuuya+Shibuya'
  },
  {
    id: 'it-8',
    date: '2026-05-02 (토)',
    time: '13:00 - 13:45',
    name: '미야시타파크 + THE MATCHA TOKYO',
    location: '시부야'
  },
  {
    id: 'it-9',
    date: '2026-05-02 (토)',
    time: '14:00',
    name: '시부야 스카이',
    note: '클룩예약 입장',
    googleMapsUrl: 'https://maps.app.goo.gl/pQus9LN43j4xrRY97'
  },
  {
    id: 'it-10',
    date: '2026-05-02 (토)',
    time: '오후',
    name: '시부야 몽벨 쇼핑',
    googleMapsUrl: 'https://www.google.com/maps/place/mont-bell+Shibuya'
  },
  {
    id: 'it-11',
    date: '2026-05-02 (토)',
    time: '18:00',
    name: '츠지한 아카사카아크힐즈점',
    note: '카이센동 석식',
    googleMapsUrl: 'https://maps.app.goo.gl/gaKZWBFGXh9865eC8'
  },
  {
    id: 'it-12',
    date: '2026-05-03 (일)',
    time: '06:30 - 08:00',
    name: '후지산 투어 시작',
    note: '클룩예약'
  },
  {
    id: 'it-13',
    date: '2026-05-03 (일)',
    time: '17:30',
    name: '후지산 투어 종료',
    location: '호텔 또는 도쿄역',
    note: '현지 상황에 따라 변동'
  },
  {
    id: 'it-13-1',
    date: '2026-05-03 (일)',
    time: '18:30',
    name: '우나기 욘다이메 키쿠카와',
    note: '석식',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=%E3%81%86%E3%81%AA%E3%81%8E%E5%9B%9B%E4%BB%A3%E7%9B%AE%E8%8F%8A%E5%B7%9D%20%E6%9D%B1%E4%BA%AC%E9%A7%85%E9%BB%92%E5%A1%80%E6%A8%AA%E4%B8%81%E5%BA%97%2C%20%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%E4%B8%B8%E3%81%AE%E5%86%851-9-1%2C%20JR%E6%9D%B1%E6%97%A5%E6%9C%AC%E6%9D%B1%E4%BA%AC%E9%A7%85%20B1F'
  },
  {
    id: 'it-15',
    date: '2026-05-04 (월)',
    time: '오전',
    name: '아침/점심'
  },
  {
    id: 'it-14',
    date: '2026-05-04 (월)',
    time: '11:40 - 14:10',
    name: '신주쿠 → 나리타 공항 이동',
    note: '리무진 버스 (클룩)'
  }
];

export interface TravelSpot {
  id: string;
  name: string;
  type: string;
  description: string;
  googleMapsUrl: string;
  region: '신주쿠' | '시부야' | '도쿄역' | '아카사카';
  category: '식당' | '카페' | '디저트' | '오전 오픈 카페' | '아침거리' | '마트';
  imageUrl?: string;
}

export const DON_QUIJOTE_LOCATIONS = [
  { id: 'sh-dq-1', name: '돈키호테 신주쿠가부키초점', type: '할인잡화점', description: '가부키초 입구에 위치한 대형 돈키호테.', region: '신주쿠', category: '쇼핑', googleMapsUrl: 'https://www.google.com/maps/place/%EB%8F%88%ED%82%A4%ED%98%B8%ED%85%8C+%EC%8B%A0%EC%A3%BC%EC%BF%A0%EA%B0%80%EB%B6%80%ED%82%A4%EC%B4%88%20%EC%A0%90/@35.6937755,139.7017873' },
  { id: 'sh-dq-2', name: '돈키호테 신주쿠 도난구치점', type: '할인잡화점', description: '신주쿠역 동남쪽 출구 인근 돈키호테.', region: '신주쿠', category: '쇼핑', googleMapsUrl: 'https://www.google.com/maps/place/Don+Quijote+Shinjuku+Tonanguchi/@35.6900987,139.7019999' },
  { id: 'sh-dq-3', name: 'Don Quijote (신주쿠)', type: '할인잡화점', description: '신주쿠 동쪽 출구 인근 매장.', region: '신주쿠', category: '쇼핑', googleMapsUrl: 'https://www.google.com/maps/place/Don+Quijote/@35.690115,139.7029753' },
  { id: 'sh-dq-4', name: '메가 돈키호테 시부야 본점', type: '할인잡화점', description: '시부야 최대 규모의 메가 돈키호테.', region: '시부야', category: '쇼핑', googleMapsUrl: 'https://www.google.com/maps/place/MEGA+Don+Quijote+Shibuya+Main+Store/@35.6603873,139.6978172' },
];

export const TRAVEL_SPOTS: TravelSpot[] = [
  // --- 신주쿠 식당 ---
  { id: 'rs-sj-1', name: '모토무라', type: '규카츠', description: '신주쿠 내 지점 다수, 니혼바시 근처 포함. 도쿄 대표 규카츠 맛집.', region: '신주쿠', category: '식당', googleMapsUrl: 'https://www.google.com/search?q=%EB%AA%A8%ED%86%A0%EB%AC%B4%EB%9D%BC+%EB%8F%84%EC%BF%84' },
  { id: 'rs-sj-2', name: '라멘 타츠노야 신주쿠 오타키바시도리점', type: '츠케멘', description: '진한 국물의 츠케멘 전문점.', region: '신주쿠', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EB%9D%BC%EB%A9%98+%ED%83%80%EC%B8%A0%EB%85%B8%EC%95%YA+%EC%8B%A0%EC%A3%BC%EC%BF%A0+%EC%98%A4%ED%83%80%ED%82%A4%EB%B0%94%EC%8B%9C%EB%8F%84%EB%A6%AC%A0%A0/@35.6960593,139.6983577,17z' },
  { id: 'rs-sj-3', name: '오니마루', type: '오니기리', description: '정갈하고 다양한 오니기리 전문점.', region: '신주쿠', category: '식당', googleMapsUrl: 'https://www.google.co.kr/maps/place/Shibuya+Onimaru/@35.6608682,139.6980577' },
  { id: 'rs-sj-4', name: '멘야무사시', type: '츠케멘', description: '두툼한 차슈와 진한 육수의 츠케멘 맛집.', region: '신주쿠', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EB%A9%98%EC%95%YA%EB%AC%B4%EC%82%AC%EC%8B%9C/@35.6955679,139.6986477' },
  { id: 'rs-sj-5', name: '오모데이요코초', type: '야키토리 골목', description: '전통적인 분위기의 야키토리 골목.', region: '신주쿠', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EC%98%A4%EB%AA%A8%EC%9D%B4%EB%8D%B0%EC%9A%94%EC%BD%94%EC%B4%88/@35.6927011,139.6995778' },
  { id: 'rs-sj-6', name: '만다지로', type: '우동', description: '정갈한 면발의 신주쿠 우동 맛집.', region: '신주쿠', category: '식당', googleMapsUrl: 'https://maps.app.goo.gl/c6r9twjDNjJ45YoJ6' },
  { id: 'rs-sj-7', name: '우동 신', type: '우동', description: '긴 웨이팅으로 증명된 신주쿠 최고의 우동 맛집.', region: '신주쿠', category: '식당', googleMapsUrl: 'https://maps.app.goo.gl/PNfkAw2wsHjunBtn6' },
  { id: 'rs-sj-8', name: '오타코 신주쿠점', type: '오뎅바', description: '따끈한 오뎅과 시원한 맥주.', region: '신주쿠', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EC%98%A4%ED%83%80%EC%BD%94+%EC%8B%A0%EC%A3%BC%EC%BF%A0%A0%A0/@35.6928189,139.7028704' },
  { id: 'rs-sj-9', name: '사카에 스시', type: '스시', description: '현지 느낌 물씬 나는 가성비 스시.', region: '신주쿠', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EC%82%AC%EC%B9%B4%EC%97%90+%EC%8A%A4%EC%8B%9C/@35.674751,139.793801' },
  { id: 'rs-sj-10', name: '아후리 라멘 신주쿠점', type: '유자소금라멘', description: '유자향 가득한 상콤깔끔한 라멘.', region: '신주쿠', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EC%95%84%ED%9B%84%EB%A6%AC+%EB%9D%BC%EB%A9%98+%EC%8B%A0%EC%A3%BC%EC%BF%A0%A0' },
  { id: 'rs-sj-11', name: '라멘 호리우치', type: '자루라멘/츠케멘', description: '담백한 육수의 찍어먹는 라멘.', region: '신주쿠', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/Ramen+Horiuchi/@35.6929241,139.6983149' },
  { id: 'rs-sj-12', name: '멘야 카이진', type: '맑은 육수 라멘', description: '생선 육수의 시원하고 맑은 국물.', region: '신주쿠', category: '식당', googleMapsUrl: 'https://www.google.co.kr/maps/place/%EB%A9%98%EC%95%YA+%EC%B9%B4%EC%9D%B4%EC%A7%84+%EC%8B%A0%EC%A3%BC%EC%BF%A0%A0%A0/@35.6897433,139.7021957' },
  { id: 'rs-sj-13', name: '멘야 쇼오 본점', type: '맑은 육수 라멘', description: '깔끔한 맛의 라멘 전문점.', region: '신주쿠', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EB%A9%98%EC%95%YA+%EC%87%BC%EC%98%A4+%EB%B3%B8%EC%A0%90/@35.6965935,139.6966006' },
  { id: 'rs-sj-14', name: '기비츠미', type: '우동', description: '유튜버 추천 탄탄한 면발 우동.', region: '신주쿠', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EA%B8%B4%EB%B9%84%EC%B8%A0%EB%AF%B8/@35.6947958,139.6962919' },
  { id: 'rs-sj-15', name: '키리무기야 진로쿠', type: '냉우동', description: '미쉐린 맛집, 시원한 냉우동 추천.', region: '신주쿠', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%ED%82%A4%EB%A6%AC%EB%AC%B4%EA%B8%B0%EC%95%YA+%EC%A7%84%EB%A1%9C%EC%BF%A0' },
  { id: 'rs-sj-16', name: '네기시 신주쿠 야스쿠니도리점', type: '우설', description: '담백한 우설 구이 정식.', region: '신주쿠', category: '식당', googleMapsUrl: 'https://maps.app.goo.gl/RyDF7JrkSrV1HAW9A' },
  { id: 'rs-sj-17', name: '네기시 신주쿠 엘타워점', type: '우설', description: '가장 깔끔한 매장의 우설 전문점.', region: '신주쿠', category: '식당', googleMapsUrl: 'https://maps.app.goo.gl/Ne4wJ4YtUTAe4fSj9' },
  { id: 'rs-sj-18', name: '네기시 신주쿠 114빌딩점', type: '우설', description: '숙소와 가장 인접한 우설 맛집.', region: '신주쿠', category: '식당', googleMapsUrl: 'https://maps.app.goo.gl/WpKpmwxg78jWDFvA7' },

  // --- 시부야 식당 ---
  { id: 'rs-sb-1', name: '쿠우야 시부야', type: '몬자야끼', description: '시부야 원조 몬자야끼 전문점.', region: '시부야', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EC%B8%A0%ED%82%A4%EC%8B%9C%EB%A7%88+%EB%AA%AC%EC%9E%90+%EC%BF%A0%EC%9A%B0%EC%95%YA+%EC%8B%B0%EB%B6%80%EC%95%BC/@35.6595867,139.7014739' },
  { id: 'rs-sb-2', name: '모헤지 시부야 스크램블 스퀘어점', type: '몬자야끼', description: '전망 좋은 몬자야끼 맛집.', region: '시부야', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EB%AA%A8%ED%97%A4%EC%A7%80+%EC%8B%B0%EB%B6%80%EC%95%BC+%EC%8A%A4%ED%81%AC%EB%9E%A8%EB%B8%94+%EC%8A%A4%ED%80%98%EC%96%B4%EC%A0%90/@35.6583189,139.7022323' },
  { id: 'rs-sb-3', name: '츠키시마몬자 쿠우야 시부야', type: '몬자야끼', description: '시부야 인기 몬자야끼 전문점.', region: '시부야', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EC%B8%A0%ED%82%A4%EC%8B%9C%EB%A7%88+%EB%AA%AC%EC%9E%90+%EC%BF%A0%EC%9A%B0%EC%95%YA+%EC%8B%B0%EB%B6%80%EC%95%BC/@35.6595867,139.7014739' },
  { id: 'rs-sb-4', name: '카멜백 샌드위치 & 에스프레소', type: '타마고산도', description: '시그니처 계란 샌드위치 맛집.', region: '시부야', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EC%B9%B4%EB%A9%9C%EB%B0%B1+%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98+%26+%EC%97%90%EC%8A%A4%ED%94%84%EB%A0%88%EC%86%8C/@35.665578,139.6922285' },
  { id: 'rs-sb-5', name: '츠케멘 야스베에 시부야점', type: '츠케멘', description: '푸짐한 양과 중독성 있는 소스.', region: '시부야', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EC%B8%BC%EC%BC%80%EB%A9%98+%EC%95%YA%EC%8A%AC%EB%B2%A0%EC%97%90+%EC%8B%B0%EB%B6%80%EC%95%BC%20%EC%A0%90' },
  { id: 'rs-sb-6', name: '네기시 시부야 도겐자카점', type: '우설', description: '시부야 번화가 우설 정식.', region: '시부야', category: '식당', googleMapsUrl: 'https://maps.app.goo.gl/VpcTSDCo4wS9rmkw5' },
  { id: 'rs-sb-7', name: '네기시 시부야 고엔도리점', type: '우설', description: '시부야 쇼핑가 인접 우설 전문점.', region: '시부야', category: '식당', googleMapsUrl: 'https://maps.app.goo.gl/EPCSGU47aH7rPiMr9' },
  { id: 'rs-sb-8', name: '모헤지 시부야', type: '몬자야끼', description: '시부야 중심가 몬자야끼 맛집.', region: '시부야', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EB%AA%A8%ED%97%A4%EC%A7%80+%EC%8B%B0%EB%B6%80%EC%95%BC+%EC%8A%A4%ED%81%AC%EB%9E%A8%EB%B8%94+%EC%8A%A4%ED%80%98%EC%96%B4%EC%A0%90/@35.6583189,139.7022323' },

  // --- 도쿄역/긴자 식당 ---
  { id: 'rs-tk-1', name: '네기시 긴자나미키도리점', type: '우설', description: '긴자 지역의 깔끔한 우설 정식.', region: '도쿄역', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EB%84%A4%EA%B8%B0%EC%8B%9C+%EA%B8%B4%EC%9E%90%EB%82%98%EB%AF%B8%ED%82%A4%EB%8F%84%EB%A6%AC%EC%A0%90/@35.6730335,139.7647754' },
  { id: 'rs-tk-2', name: '모헤지 도쿄역점', type: '몬자야끼', description: '도쿄역 인근 몬자야끼 전문점.', region: '도쿄역', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EB%AA%A8%ED%97%A4%EC%A7%80/@35.682437,139.7642658' },
  { id: 'rs-tk-3', name: '우나기 욘다이메 키쿠카와 도쿄역', type: '히츠마부시', description: '90년 역사, 바삭한 장어 요리.', region: '도쿄역', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/Unagi+4th+Yondaime+Kikukawa+Tokyo+Station+Kurobei+Yokocho+Branch/@35.6823369,139.7679984' },
  { id: 'rs-tk-4', name: '도쿄역 라멘 카네다', type: '라멘', description: '도쿄역 내 깔끔한 국물 라멘.', region: '도쿄역', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/Ramen+Kaneda+Tokyostation' },
  { id: 'rs-tk-5', name: '스시노미도리 긴자점', type: '스시', description: '퀄리티 좋은 긴자 인기 스시집.', region: '도쿄역', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EC%8A%A4%EC%8B%9C%EB%85%B8%EB%AF%B8%EB%8F%84%EB%A6%AC+%EA%B8%B4%EC%9E%90%A0' },
  { id: 'rs-tk-6', name: '네무로 하나마루 KITTE 마루노우치점', type: '회전초밥', description: 'KITTE 내 신선한 회전초밥 전문점.', region: '도쿄역', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EB%84%AC%EB%AC%B4%EB%A1%9C+%ED%95%98%EB%82%98%EB%A7%88%EB%A3%A8+%ED%82%B7%ED%85%8C%A0' },
  { id: 'rs-tk-7', name: '나고미 스시', type: '스시', description: '도쿄역 마루노우치 방면 스시 맛집.', region: '도쿄역', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/Tsukiji+Sushiko+Nagomi+Gransta+Marunouchi/@35.6826939,139.7665814' },
  { id: 'rs-tk-8', name: '고다이메 하나야마 우동 긴자점', type: '우동', description: '넓적한 면발이 특징인 인기 우동집.', region: '도쿄역', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EA%B3%A0%EB%8B%A4%EC%9D%B4%EB%A9%94+%ED%95%98%EB%82%98%EC%95%BC%EB%A7%88+%EC%9A%B0%EB%8F%99+%EA%B8%B4%EC%9E%90%EC%20%EC%A0%90' },
  { id: 'rs-tk-9', name: '고다이메 하나야마 우동 니혼바시점', type: '우동', description: '니혼바시 지역의 우동 명가.', region: '도쿄역', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EA%B3%A0%EB%8B%A4%EC%9D%B4%EB%A9%94+%ED%95%98%EB%82%98%EC%95%BC%EB%A7%88+%EC%9A%B0%EB%8F%99+%EB%8B%88%ED%98%BC%EB%B0%94%EC%8B%9C%EC%A0%90/@35.6811441,139.7746528' },
  { id: 'rs-tk-10', name: '긴자 사토 요스케', type: '우동', description: '긴자 세련된 분위기의 우동 맛집.', region: '도쿄역', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EA%B8%B4%EC%9E%90+%EC%82%AC%ED%86%A0%EC%9A%94%EC%8A%A4%EC%BC%80' },

  // --- 아카사카 식당 ---
  { id: 'rs-as-1', name: '츠지한 아카사카아크힐즈점', type: '카이센동', description: '인생 카이센동으로 불리는 맛집.', region: '아카사카', category: '식당', googleMapsUrl: 'https://maps.app.goo.gl/gaKZWBFGXh9865eC8' },
  { id: 'rs-as-2', name: '스노미도리 아카사카점', type: '스시', description: '아카사카 인기 스시 전문점.', region: '아카사카', category: '식당', googleMapsUrl: 'https://www.google.com/maps/place/%EC%8A%A4%EC%8B%9C%EB%85%B8%EB%AF%B8%EB%8F%84%EB%A6%AC+%EC%95%84%EC%B9%B4%EC%82%AC%EC%B9%B4%00' },

  // --- 디저트 ---
  { id: 'ds-sj-1', name: '타카노 후르츠 파ーラー 신주쿠 본점', type: '과일 파르페', description: '과일 파르페 맛집', region: '신주쿠', category: '디저트', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Takano%20Fruit%20Parlor%20Shinjuku' },
  { id: 'ds-sj-2', name: 'HARBS 루미네에스트 신주쿠점', type: '밀크레이프', description: '밀크레이프!!!', region: '신주쿠', category: '디저트', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=HARBS%20Lumine%20Est%20Shinjuku' },
  { id: 'ds-sj-3', name: '오이와케 당고 혼포', type: '당고', description: '300년 전통당고 노포', region: '신주쿠', category: '디저트', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Oiwake%20Dango%20Honpo%20Shinjuku' },
  { id: 'ds-sj-4', name: '사다하루 아오키 파리 이세탄 신주쿠점', type: '프랑스 디저트', description: '말차·유자 등 일본 재료를 프랑스식 디저트로 풀어낸 브랜드(고오급 선물가능)', region: '신주쿠', category: '디저트', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sadaharu%20Aoki%20Paris%20Isetan%20Shinjuku' },
  { id: 'ds-sb-1', name: 'satella', type: '푸딩', description: '치즈케이크 같은 진한 푸딩', region: '시부야', category: '디저트', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=satella%20Shibuya%20Tokyo' },
  { id: 'ds-sb-2', name: 'HARBS 시부야 히카리에 ShinQs점', type: '밀크레이프', description: '밀크레이프!!!', region: '시부야', category: '디저트', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=HARBS%20Shibuya%20Hikarie%20ShinQs' },
  { id: 'ds-tk-1', name: 'DEPOT', type: '푸딩', description: '레트로 푸딩, 나폴리탄+푸딩', region: '도쿄역', category: '디저트', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=DEPOT%20Tokyo%20Station' },
  { id: 'ds-tk-2', name: 'PRESS BUTTER SAND 도쿄역점', type: '버터샌드', description: '선물용 디저트로 한국인에게 매우 유명한 브랜드', region: '도쿄역', category: '디저트', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=PRESS%20BUTTER%20SAND%20Tokyo%20Station' },
  { id: 'ds-tk-3', name: '파티스리 사다하루 아오키 파리 마루노우치점', type: '프랑스 디저트', description: '예쁜 프랑스식 디저트·말차 디저트', region: '도쿄역', category: '디저트', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Patisserie%20Sadaharu%20Aoki%20Paris%20Marunouchi' },
  { id: 'ds-as-1', name: '토시 요로이즈카 도쿄 미드타운점', type: '프랑스 디저트', description: '유명 파티시에의 디저트 전문점 (고오급 디저트)', region: '아카사카', category: '디저트', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Toshi%20Yoroizuka%20Tokyo%20Midtown' },
  { id: 'ds-as-2', name: '파티스리 사다하루 아오키 파리 도쿄 미드타운점', type: '프랑스 디저트', description: '말차 계열 프랑스 디저트', region: '아카사카', category: '디저트', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sadaharu%20Aoki%20Paris%20Tokyo%20Midtown' },
  { id: 'ds-as-3', name: '아카사카 아오노 본점', type: '화과자', description: '화과자, 모찌 노포', region: '아카사카', category: '디저트', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Akasaka%20Aono%20Honten' },

  // --- 신주쿠 카페 ---
  { id: 'cf-sj-1', name: 'THE MATCHA TOKYO NEWoMan 신주쿠', type: '말차', description: '신주쿠역 앞 말차 테이크아웃 전문.', region: '신주쿠', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=THE%20MATCHA%20TOKYO%20NEWoMan%20Shinjuku' },
  { id: 'cf-sj-2', name: '교토 사료 스이센 신주쿠', type: '말차 디저트', description: '말차 와라비모치/파르페 추천.', region: '신주쿠', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kyoto%20Saryo%20Suisen%20Shinjuku' },
  { id: 'cf-sj-3', name: '블루보틀커피 신주쿠 카페', type: '커피', description: '신주쿠 유명 스페셜티 커피.', region: '신주쿠', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Blue%20Bottle%20Coffee%20Shinjuku%20Cafe' },
  { id: 'cf-sj-4', name: 'VERVE Coffee Roasters 신주쿠', type: '커피', description: '강한 개성의 스페셜티 커피.', region: '신주쿠', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=VERVE%20Coffee%20Roasters%20Shinjuku' },
  { id: 'cf-sj-5', name: '타지마야 커피 본점', type: '킷사텐', description: '클래식한 분위기의 일본식 카페.', region: '신주쿠', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tajimaya%20Coffee%20Shinjuku' },
  { id: 'cf-sj-6', name: '토라야 카료 신주쿠 이세탄점', type: '전통 화과자', description: '고급스러운 전통 화과자와 차.', region: '신주쿠', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Toraya%20Karyo%20Isetan%20Shinjuku' },
  { id: 'cf-sj-7', name: '차료 오쿠만', type: '일본차', description: '호지차 라떼 및 빙수 카페.', region: '신주쿠', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Saryo%20Okuman%20Shinjuku' },
  { id: 'cf-sj-8', name: '抹チョ MATCHA CAFE', type: '말차', description: '진한 말차 디저트 전문점.', region: '신주쿠', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Matcho%20MATCHA%20CAFE%20Shinjuku' },
  { id: 'cf-sj-9', name: 'NIGICHA 신주쿠', type: '브런치/말차', description: '가벼운 식사와 말차.', region: '신주쿠', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=NIGICHA%20Shinjuku' },
  { id: 'cf-sj-10', name: '스타벅스 신주쿠중앙공원점', type: '카페', description: '아침 일찍 오픈, 공원 뷰 카페.', region: '신주쿠', category: '오전 오픈 카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Starbucks%20Coffee%20Shinjuku%20Central%20Park%20SHUKNOVA' },
  { id: 'cf-sj-11', name: '도토루 니시신주쿠 3초메점', type: '카페', description: '숙소 인근 실용적인 일본 카페.', region: '신주쿠', category: '오전 오픈 카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Doutor%20Coffee%20Nishi-Shinjuku%203-chome' },
  { id: 'cf-sj-12', name: 'TULLY’S COFFEE 신주쿠 NS빌딩점', type: '카페', description: '호텔 근처 편리한 카페.', region: '신주쿠', category: '오전 오픈 카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tully%27s%20Coffee%20Shinjuku%20NS%20Building' },
  { id: 'cf-sj-13', name: '스타벅스 신주쿠 그린타워빌딩점', type: '카페', description: '아침 일찍 열어 편리한 접근성.', region: '신주쿠', category: '오전 오픈 카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Starbucks%20Shinjuku%20Green%20Tower%20Building' },

  // --- 시부야 카페 ---
  { id: 'cf-sb-1', name: '교토 우지 후지이 메이엔', type: '말차', description: '도큐플라자 내 위치한 차 카페.', region: '시부야', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kyoto%20Uji%20Fujii%20Meien%20Shibuya' },
  { id: 'cf-sb-2', name: 'THE MATCHA TOKYO 미야시타파크', type: '말차', description: '미야시타파크 내 인기 말차 바.', region: '시부야', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=THE%20MATCHA%20TOKYO%20Shibuya%20Miyashita%20Park' },
  { id: 'cf-sb-3', name: '교토 사료 스이센 시부야 PARCO', type: '말차 디저트', description: '파르코 내부 진한 말차 맛집.', region: '시부야', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kyoto%20Saryo%20Suisen%20Shibuya%20PARCO' },
  { id: 'cf-sb-4', name: '차테이 하토우 시부야', type: '킷사텐', description: '유명한 시부야의 클래식 킷사텐.', region: '시부야', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Chatei%20Hatou%20Shibuya' },
  { id: 'cf-sb-5', name: 'STREAMER COFFEE COMPANY 시부야', type: '커피', description: '라떼 맛집으로 유명한 곳.', region: '시부야', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Streamer%20Coffee%20Company%20Shibuya' },

  // --- 도쿄역/긴자 카페 ---
  { id: 'cf-tk-1', name: '사료 츠지리 다이마루 도쿄점', type: '말차 디저트', description: '말차 파르페와 라떼 명소.', region: '도쿄역', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Saryo%20Tsujiri%20Daimaru%20Tokyo' },
  { id: 'cf-tk-2', name: '잇포도 티 신마루노우치점', type: '말차', description: '교토 유서 깊은 차 브랜드.', region: '도쿄역', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ippodo%20Tea%20Shin-Marunouchi' },
  { id: 'cf-tk-3', name: 'TORAYA TOKYO', type: '화과자', description: '전통 화과자와 말차의 조합.', region: '도쿄역', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=TORAYA%20TOKYO%20Tokyo%20Station%20Hotel' },
  { id: 'cf-tk-4', name: 'Café 1894 마루노우치', type: '카페', description: '고풍스러운 인테리어의 분위기 명소.', region: '도쿄역', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cafe%201894%20Marunouchi' },
  { id: 'cf-tk-5', name: 'M&C Café 마루노우치 오아조', type: '카페', description: '마루젠 서점 내 북카페.', region: '도쿄역', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=M%26C%20Cafe%20Marunouchi%20Oazo' },

  // --- 아카사카 카페 ---
  { id: 'cf-as-1', name: '아크힐즈 카페', type: '카페', description: '브런치/식사 느낌의 넓은 카페.', region: '아카사카', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=ARK%20HiLLS%20CAFE%20Akasaka' },
  { id: 'cf-as-2', name: '스타벅스 아크힐즈점', type: '카페', description: '좌석이 많고 접근성 좋은 카페.', region: '아카사카', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Starbucks%20Coffee%20Ark%20Hills' },
  { id: 'cf-as-3', name: '아카사카 노세엔 본점', type: '차 전문점', description: '오래된 전통 차 전문점.', region: '아카사카', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Akasaka%20Noseen%20Honten' },
  { id: 'cf-as-4', name: '도토루 아카사카 1초메점', type: '카페', description: '가볍게 쉬어가기 좋은 카페.', region: '아카사카', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Doutor%20Coffee%20Akasaka%201-chome' },
  { id: 'cf-as-5', name: 'Le Pain Quotidien 도쿄 미드타운점', type: '카페', description: '분위기 좋은 정통 베이커리 카페.', region: '아카사카', category: '카페', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Le%20Pain%20Quotidien%20Tokyo%20Midtown' },

  // --- 기성 추가 항목 ---
  { id: 'am-1', name: '마루에츠 푸치 니시신주쿠 3초메점', type: '슈퍼마켓', description: '마루에츠 쁘띠버전', region: '신주쿠', category: '마트', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Maruetsu%20Petit%20Nishi-Shinjuku%203-chome' },
  { id: 'mt-sj-1', name: '게이오백화점 신주쿠점 지하 식품관', type: '백화점 식품관', description: '게이오백화점 신주쿠점 지하 식품관', region: '신주쿠', category: '마트', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Keio%20Department%20Store%20Shinjuku%20Food%20Floor' },
  { id: 'mt-sj-2', name: '이세탄 신주쿠점 지하 식품관', type: '백화점 식품관', description: '이세탄 신주쿠점 지하 식품관', region: '신주쿠', category: '마트', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Isetan%20Shinjuku%20Food%20Floor' },
  { id: 'mt-sj-3', name: '마루에츠 푸치 니시신주쿠육쵸메점', type: '슈퍼마켓', description: '마루에츠 쁘띠버전', region: '신주쿠', category: '마트', googleMapsUrl: 'https://www.google.com/maps/place/%EB%A7%88%EB%A3%A8%EC%97%90%EC%B8%A0+%ED%91%B8%EC%B9%98+%EB%8B%88%EC%8B%9C%EC%8B%A0%EC%A3%BC%EC%BF%A0%EC%9C%A1%EC%B5%B8%EB%A9%94%EC%A0%90/@35.692262,139.6824325,16z/data=!3m1!5s0x6018f2d59c2eefe5:0x2c49e5ba70074d9f!4m11!1m3!2m2!1z7Iug7KO87L-gIOuniO2KuA!6e6!3m6!1s0x6018f2d5837411b9:0x2b46298b41b2b51e!8m2!3d35.692262!4d139.688623' },
  { id: 'mt-sj-4', name: '루미네 신주쿠 LUMINE1', type: '식품관/도시락', description: '도시락. 오니기리, 밀키트 등 간편식 위주', region: '신주쿠', category: '마트', googleMapsUrl: 'https://www.google.com/maps/place/%EB%A3%A8%EB%AF%B8%EB%84%A4+%EC%8B%A0%EC%A3%BC%EC%BF%A0+1/@35.6884575,139.6930029,16.5z/data=!4m11!1m3!2m2!1z7Iug7KO87L-gIOuniO2KuA!6e6!3m6!1s0x60188cd08eaaaaab:0x63cae4f1f9b01c6e!8m2!3d35.6892039!4d139.699147' },
  { id: 'mt-sj-5', name: '오무스비 코메야노 타로 신주쿠센터빌딩점', type: '오니기리', description: '오무스비 코메야노 타로', region: '신주쿠', category: '아침거리', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Omusubi%20Komeya%20no%20Taro%20Shinjuku%20Center%20Building' },
  { id: 'mt-sj-6', name: '요모다소바 신주쿠니시구치점', type: '소바/카레', description: '일본식 아침, 소바·카레, 서서 먹는곳?', region: '신주쿠', category: '아침거리', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Yomoda%20Soba%20Shinjuku%20Nishiguchi' },
  { id: 'mt-sj-7', name: '하나마루 우동 신주쿠 NS빌딩점', type: '우동', description: '하나마루 우동 NS빌딩점', region: '신주쿠', category: '아침거리', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hanamaru%20Udon%20Shinjuku%20NS%20Building' },
  { id: 'mt-sj-8', name: '마츠야 신주쿠니시구치점', type: '규동/정식', description: '일본식 아침 정식, 소시지에그·돼지국·연어구이 정식 등, 24시 영업', region: '신주쿠', category: '아침거리', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Matsuya%20Shinjuku%20Nishiguchi' },
  { id: 'mt-sj-9', name: '나카우 니시신주쿠점', type: '우동/덮밥', description: '일본식 아침, 우동·덮밥·가벼운 정식류, 호텔-역 동선 살짝 벗어남', region: '신주쿠', category: '아침거리', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Nakau%20Nishi-Shinjuku' },
  { id: 'mt-sj-10', name: '오니기리 만마 신주쿠점', type: '오니기리', description: '오니기리, 호텔-역 동선 살짝 벗어남', region: '신주쿠', category: '아침거리', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Onigiri%20Mamma%20Shinjuku' },
];

export const SHOPPING_CHECKLIST = [
  { item: '오타이산', checked: false, tags: ['돈키호테/약국'] },
  { item: '동전파스', checked: false, tags: ['돈키호테/약국'] },
  { item: '브레스케어', checked: false, tags: ['돈키호테/편의점'] },
  { item: '오쿠치 민트(포 가글)', checked: false, tags: ['돈키호테/약국'] },
  { item: '가스피탄', checked: false, tags: ['돈키호테/약국'] },
  { item: '페어 아크네', checked: false, tags: ['돈키호테/약국'] },
  { item: '코세 메이크 킵 미스트', checked: false, tags: ['돈키호테/약국'] },
  { item: '사라사라 크림 발 데오드란트', checked: false, tags: ['돈키호테/약국'] },
  { item: '민티아', checked: false, tags: ['편의점/돈키호테'] },
  { item: '츠지리 말차', checked: false, tags: ['돈키호테/마트'] },
  { item: '갸츠비 기름종이', checked: false, tags: ['돈키호테/편의점'] },
  { item: '비오레 썬크림', checked: false, tags: ['돈키호테'] },
  { id: 'extra-1', item: '간계밥 소스', checked: false, tags: ['돈키호테/마트'] },
  { id: 'extra-2', item: '전기포트 세제', checked: false, tags: ['돈키호테/마트'] },
  { item: '안약', checked: false, tags: ['돈키호테/약국'] },
  { item: '가라아게쿤', checked: false, tags: ['편의점'] },
  { item: '낫또김밥', checked: false, tags: ['편의점'] },
  { item: '우유푸딩 (쟈지 푸딩)', checked: false, tags: ['편의점'] },
  { item: '브뤼레', checked: false, tags: ['편의점'] },
  { item: '명란 삼각김밥', checked: false, tags: ['편의점'] },
];

export const TASKS_BEFORE_TRIP = [
  '여행자 보험',
  '체크인',
  '비짓재팬',
];
