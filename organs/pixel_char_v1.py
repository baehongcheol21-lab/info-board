# coding=utf-8
"""pixel_char_v1 — 픽셀 캐릭터 렌더러(JS)의 정본. publish.py의 PIXEL_TEMPLATE 안에 있는
CHAR_GRID·pixelChar() 코드를 그대로 복제해 둔 것 — 화면 조각도 "복사해서 흩어놓지 말고
한 군데(기관)에서 가져다 쓰자"는 설계서_기관도서관.md의 원칙("화면 조각도 기관이다").

새 화면(예: P10 트레이딩 데스크 층)이 같은 캐릭터 렌더러가 필요하면 이 organ의 run()이
돌려주는 JS 텍스트를 <script> 블록에 그대로 삽입하면 된다 — 복붙 드리프트 방지.
정본은 시안/pixel_floor.html(사용자 승인본) → publish.py → 이 organ 순으로 전파된다;
셋이 어긋나면 시안이 진실(마스터플랜 P1 원칙)."""

PIXEL_CHAR_JS = r"""
const CHAR_GRID = [
  "...HHHH...",
  "...HHHH...",
  "...SSSS...",
  "...SSSS...",
  "..AABBAA..",
  "..ABBBBA..",
  "..ABBBBA..",
  "..ABBBBA..",
  "...BBBB...",
  "...PPPP...",
  "..PP..PP..",
  "..PP..PP..",
];
const CHAR_GRID_WIDE = CHAR_GRID.slice(0, 9).concat([
  "..PPPPPP..",
  ".PP....PP.",
  ".PP....PP.",
]);
function pixelChar(cfg, size){
  const cell = size||5, cols = 10;
  const grid = cfg.stance === "wide" ? CHAR_GRID_WIDE : CHAR_GRID;
  const rows = grid.length;
  const colorOf = c => ({H:cfg.hair, S:"#f0c090", A:"#f0c090", B:cfg.body, P:cfg.pants}[c]);
  let rects = "";
  grid.forEach((row,y)=>{
    for(let x=0;x<cols;x++){
      const c = row[x];
      if(c==="."||c===" ") continue;
      rects += `<rect x="${x*cell}" y="${y*cell}" width="${cell}" height="${cell}" fill="${colorOf(c)}"/>`;
    }
  });
  if(cfg.glasses){
    rects += `<rect x="${3*cell}" y="${2*cell}" width="${cell}" height="${cell}" fill="#111"/>`;
    rects += `<rect x="${6*cell}" y="${2*cell}" width="${cell}" height="${cell}" fill="#111"/>`;
    rects += `<rect x="${4*cell}" y="${2*cell}" width="${2*cell}" height="1.5" fill="#111"/>`;
  } else {
    rects += `<rect x="${3*cell}" y="${2*cell}" width="${cell*.6}" height="${cell*.6}" fill="#111"/>`;
    rects += `<rect x="${6*cell}" y="${2*cell}" width="${cell*.6}" height="${cell*.6}" fill="#111"/>`;
  }
  if(cfg.hairStyle === "ponytail"){
    rects += `<rect x="${9*cell}" y="0" width="${cell}" height="${3*cell}" fill="${cfg.hair}"/>`;
    rects += `<rect x="${9.5*cell}" y="${2.5*cell}" width="${cell*.7}" height="${cell*1.5}" fill="${cfg.hair}"/>`;
  } else if(cfg.hairStyle === "parted"){
    rects += `<rect x="${4.5*cell}" y="0" width="${cell*.5}" height="${cell*.7}" fill="#00000030"/>`;
  }
  if(cfg.cap){
    rects += `<rect x="${2*cell}" y="0" width="${6*cell}" height="${cell*.8}" fill="${cfg.body}"/>`;
    rects += `<rect x="${6.5*cell}" y="${cell*.2}" width="${cell*1.2}" height="${cell*.4}" fill="${cfg.hair}"/>`;
  }
  if(cfg.belt){
    rects += `<rect x="${2*cell}" y="${8*cell}" width="${6*cell}" height="${cell*.5}" fill="#3a2a10"/>`;
    rects += `<rect x="${4.6*cell}" y="${7.9*cell}" width="${cell*.8}" height="${cell*.7}" fill="#c99a2e"/>`;
  }
  if(cfg.bowtie){
    rects += `<rect x="${4*cell}" y="${4.2*cell}" width="${cell*.6}" height="${cell*.6}" fill="#c0453f"/>`;
    rects += `<rect x="${5.4*cell}" y="${4.2*cell}" width="${cell*.6}" height="${cell*.6}" fill="#c0453f"/>`;
  }
  const w = (cfg.hairStyle==="ponytail" ? cols+1 : cols)*cell, h = rows*cell;
  return `<svg class="sprite" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${rects}</svg>`;
}
"""

MANIFEST = {
    "name": "pixel_char", "version": 1, "stable": True, "category": "화면",
    "desc": "픽셀 캐릭터 렌더러 JS 정본(CHAR_GRID+pixelChar) — 새 화면에 캐릭터가 필요하면 여기서",
    "args": {},
    "returns": "str (JS 소스)",
    "safety": "pure", "timeout_s": 1,
}


def run():
    return PIXEL_CHAR_JS


SELFTEST = [
    {"args": {}, "check": "'pixelChar' in result and 'CHAR_GRID' in result", "offline": True},
]
