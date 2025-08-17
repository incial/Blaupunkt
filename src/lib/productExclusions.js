// Centralized exclusions and datasheet presence helpers

export const BLOCKED_PRODUCT_CODES = [
  'BPDC 60EUGBT',
  'BPDC 80EUGBT',
  'BPDC 160EUGBT',
  'RCD260A-2-B',
  'RCD2080A-2-',
  'RCDC2120A-2-L',
  'RCD-DC-160KW-2-ESF',
  'BPDC40KW2G',
];

export const normalizeCode = (code) =>
  (code || '')
    .toString()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '');

const BLOCKED_SET = new Set(BLOCKED_PRODUCT_CODES.map(normalizeCode));

export const isBlockedProductCode = (code) => BLOCKED_SET.has(normalizeCode(code));

export const filterOutBlocked = (items, getCode = (x) => x?.productCode ?? x?.modelCode ?? x?.code) => {
  if (!Array.isArray(items)) return items;
  return items.filter((x) => !isBlockedProductCode(getCode(x)));
};

// Flatten all model codes and file urls from a downloads object
export const extractDownloadTokens = (downloads) => {
  const tokens = [];
  if (!downloads || !Array.isArray(downloads.categories)) return tokens;
  for (const cat of downloads.categories) {
    if (!cat || !Array.isArray(cat.files)) continue;
    for (const f of cat.files) {
      if (Array.isArray(f.modelCodes)) tokens.push(...f.modelCodes);
      if (typeof f.url === 'string') tokens.push(f.url);
      if (typeof f.name === 'string') tokens.push(f.name);
    }
  }
  return tokens.map(normalizeCode);
};

export const hasDatasheetFor = (downloads, code) => {
  if (!code) return false;
  const codeN = normalizeCode(code);
  const tokens = extractDownloadTokens(downloads);
  return tokens.some((t) => t.includes(codeN) || codeN.includes(t));
};

export const filterOutWithoutDatasheet = (items, downloads, getCode = (x) => x?.productCode ?? x?.modelCode ?? x?.code) => {
  if (!Array.isArray(items)) return items;
  return items.filter((x) => hasDatasheetFor(downloads, getCode(x)));
};
