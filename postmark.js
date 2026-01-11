// Shared postmark generation logic
// Used by both index.html (browser) and worker.js (Cloudflare Worker)

export const icons = {
  compass: (color) => `
    <circle cx="218" cy="52" r="11" fill="none" stroke="${color}" stroke-width="1.5"/>
    <polygon points="218,42 220,52 218,56 216,52" fill="${color}"/>
    <polygon points="218,62 216,52 218,48 220,52" fill="none" stroke="${color}" stroke-width="0.75"/>`,

  plane: (color) => `
    <path d="M208 56 L218 46 L228 56 M218 46 L218 62 M212 58 L218 54 L224 58" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,

  anchor: (color) => `
    <circle cx="218" cy="42" r="3" fill="none" stroke="${color}" stroke-width="1.5"/>
    <path d="M218 45 L218 62 M210 58 Q210 62 218 62 Q226 62 226 58 M214 52 L222 52" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>`,

  mountain: (color) => `
    <path d="M205 62 L215 44 L220 52 L225 44 L235 62 Z" fill="none" stroke="${color}" stroke-width="1.5" stroke-linejoin="round"/>`,

  wave: (color) => `
    <path d="M205 48 Q210 42 215 48 Q220 54 225 48 Q230 42 235 48" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M205 58 Q210 52 215 58 Q220 64 225 58 Q230 52 235 58" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>`,

  leaf: (color) => `
    <path d="M218 62 Q208 52 218 38 Q228 52 218 62" fill="none" stroke="${color}" stroke-width="1.5"/>
    <path d="M218 62 L218 48" fill="none" stroke="${color}" stroke-width="1"/>`,

  sun: (color) => `
    <circle cx="218" cy="52" r="8" fill="none" stroke="${color}" stroke-width="1.5"/>
    <g stroke="${color}" stroke-width="1.5" stroke-linecap="round">
      <line x1="218" y1="38" x2="218" y2="42"/><line x1="218" y1="62" x2="218" y2="66"/>
      <line x1="204" y1="52" x2="208" y2="52"/><line x1="228" y1="52" x2="232" y2="52"/>
    </g>`,

  star: (color) => `
    <polygon points="218,40 220,48 228,48 222,54 224,62 218,57 212,62 214,54 208,48 216,48"
             fill="none" stroke="${color}" stroke-width="1.5"/>`,

  globe: (color) => `
    <circle cx="218" cy="52" r="11" fill="none" stroke="${color}" stroke-width="1.5"/>
    <ellipse cx="218" cy="52" rx="5" ry="11" fill="none" stroke="${color}" stroke-width="1"/>
    <path d="M207 52 L229 52 M209 45 L227 45 M209 59 L227 59" fill="none" stroke="${color}" stroke-width="0.75"/>`,

  envelope: (color) => `
    <rect x="206" y="44" width="24" height="16" fill="none" stroke="${color}" stroke-width="1.5" rx="1"/>
    <path d="M206 44 L218 54 L230 44" fill="none" stroke="${color}" stroke-width="1.5"/>`,

  bird: (color) => `
    <path d="M205 55 Q215 45 218 52 Q221 45 231 55" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M212 58 Q218 52 224 58" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>`,

  heart: (color) => `
    <path d="M218 60 Q205 50 210 44 Q215 38 218 44 Q221 38 226 44 Q231 50 218 60" fill="none" stroke="${color}" stroke-width="1.5"/>`,

  moon: (color) => `
    <path d="M225 42 A12 12 0 1 0 225 62 A8 8 0 1 1 225 42" fill="none" stroke="${color}" stroke-width="1.5"/>`,

  camera: (color) => `
    <rect x="206" y="46" width="24" height="16" fill="none" stroke="${color}" stroke-width="1.5" rx="2"/>
    <circle cx="218" cy="54" r="5" fill="none" stroke="${color}" stroke-width="1.5"/>
    <rect x="212" y="43" width="6" height="3" fill="none" stroke="${color}" stroke-width="1"/>`,

  coffee: (color) => `
    <path d="M208 44 L210 62 L226 62 L228 44 Z" fill="none" stroke="${color}" stroke-width="1.5"/>
    <path d="M228 48 Q234 48 234 53 Q234 58 228 58" fill="none" stroke="${color}" stroke-width="1.5"/>
    <path d="M214 40 Q214 44 216 44 Q218 44 218 40" fill="none" stroke="${color}" stroke-width="1" stroke-linecap="round"/>`,

  none: () => ''
};

export const iconPreviews = {
  compass: `<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="11" fill="none" stroke="#1a1a1a" stroke-width="1.5"/><polygon points="16,5 18,16 16,20 14,16" fill="#1a1a1a"/></svg>`,
  plane: `<svg viewBox="0 0 32 32"><path d="M6 22 L16 10 L26 22 M16 10 L16 28 M10 24 L16 20 L22 24" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  anchor: `<svg viewBox="0 0 32 32"><circle cx="16" cy="6" r="3" fill="none" stroke="#1a1a1a" stroke-width="1.5"/><path d="M16 9 L16 28 M6 24 Q6 28 16 28 Q26 28 26 24 M12 16 L20 16" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  mountain: `<svg viewBox="0 0 32 32"><path d="M2 28 L12 8 L17 16 L22 8 L30 28 Z" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  wave: `<svg viewBox="0 0 32 32"><path d="M2 12 Q8 4 14 12 Q20 20 26 12 Q28 8 30 12" fill="none" stroke="#1a1a1a" stroke-width="1.5"/><path d="M2 22 Q8 14 14 22 Q20 30 26 22 Q28 18 30 22" fill="none" stroke="#1a1a1a" stroke-width="1.5"/></svg>`,
  leaf: `<svg viewBox="0 0 32 32"><path d="M16 28 Q4 16 16 2 Q28 16 16 28" fill="none" stroke="#1a1a1a" stroke-width="1.5"/><path d="M16 28 L16 12" fill="none" stroke="#1a1a1a" stroke-width="1"/></svg>`,
  sun: `<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="7" fill="none" stroke="#1a1a1a" stroke-width="1.5"/><g stroke="#1a1a1a" stroke-width="1.5"><line x1="16" y1="2" x2="16" y2="6"/><line x1="16" y1="26" x2="16" y2="30"/><line x1="2" y1="16" x2="6" y2="16"/><line x1="26" y1="16" x2="30" y2="16"/></g></svg>`,
  star: `<svg viewBox="0 0 32 32"><polygon points="16,2 19,12 28,12 21,18 24,28 16,22 8,28 11,18 4,12 13,12" fill="none" stroke="#1a1a1a" stroke-width="1.5"/></svg>`,
  globe: `<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="none" stroke="#1a1a1a" stroke-width="1.5"/><ellipse cx="16" cy="16" rx="5" ry="12" fill="none" stroke="#1a1a1a" stroke-width="1"/><path d="M4 16 L28 16 M6 8 L26 8 M6 24 L26 24" fill="none" stroke="#1a1a1a" stroke-width="0.75"/></svg>`,
  envelope: `<svg viewBox="0 0 32 32"><rect x="4" y="8" width="24" height="16" fill="none" stroke="#1a1a1a" stroke-width="1.5" rx="1"/><path d="M4 8 L16 18 L28 8" fill="none" stroke="#1a1a1a" stroke-width="1.5"/></svg>`,
  bird: `<svg viewBox="0 0 32 32"><path d="M4 20 Q14 8 16 16 Q18 8 28 20" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/><path d="M10 24 Q16 16 22 24" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  heart: `<svg viewBox="0 0 32 32"><path d="M16 28 Q2 18 8 10 Q12 4 16 10 Q20 4 24 10 Q30 18 16 28" fill="none" stroke="#1a1a1a" stroke-width="1.5"/></svg>`,
  moon: `<svg viewBox="0 0 32 32"><path d="M22 4 A14 14 0 1 0 22 28 A10 10 0 1 1 22 4" fill="none" stroke="#1a1a1a" stroke-width="1.5"/></svg>`,
  camera: `<svg viewBox="0 0 32 32"><rect x="4" y="10" width="24" height="16" fill="none" stroke="#1a1a1a" stroke-width="1.5" rx="2"/><circle cx="16" cy="18" r="5" fill="none" stroke="#1a1a1a" stroke-width="1.5"/><rect x="11" y="6" width="6" height="4" fill="none" stroke="#1a1a1a" stroke-width="1"/></svg>`,
  coffee: `<svg viewBox="0 0 32 32"><path d="M6 8 L8 26 L22 26 L24 8 Z" fill="none" stroke="#1a1a1a" stroke-width="1.5"/><path d="M24 12 Q30 12 30 17 Q30 22 24 22" fill="none" stroke="#1a1a1a" stroke-width="1.5"/><path d="M11 4 Q11 8 14 8 Q17 8 17 4" fill="none" stroke="#1a1a1a" stroke-width="1" stroke-linecap="round"/></svg>`,
  none: `<svg viewBox="0 0 32 32"><line x1="8" y1="8" x2="24" y2="24" stroke="#ccc" stroke-width="1.5"/><line x1="24" y1="8" x2="8" y2="24" stroke="#ccc" stroke-width="1.5"/></svg>`
};

export const colorPalettes = [
  { name: 'Classic', colors: ['#C41E3A', '#1E3A5F'] },
  { name: 'Airmail', colors: ['#DC3545', '#0D47A1', '#FFFFFF'] },
  { name: 'Sepia', colors: ['#8B4513', '#D2691E'] },
  { name: 'Navy', colors: ['#1B3A57', '#C9A227'] },
  { name: 'Forest', colors: ['#2D5A3D', '#8B7355'] },
  { name: 'Burgundy', colors: ['#722F37', '#2C2C2C'] },
  { name: 'Slate', colors: ['#4A5568', '#1A202C'] },
  { name: 'Terracotta', colors: ['#C75B39', '#5D4E37'] },
  { name: 'Ocean', colors: ['#0077B6', '#023E8A'] },
  { name: 'Sunset', colors: ['#C44536', '#772E25'] },
  { name: 'Olive', colors: ['#606C38', '#283618'] },
  { name: 'Ink', colors: ['#1a1a1a', '#4a4a4a'] },
  { name: 'Teal', colors: ['#2A9D8F', '#264653'] },
  { name: 'Lavender', colors: ['#7C5295', '#4A3660'] },
  { name: 'Mustard', colors: ['#D4A03C', '#8B6914'] },
  { name: 'Rose', colors: ['#C4707A', '#8B4D57'] },
  { name: 'Copper', colors: ['#B87333', '#6B4423'] },
  { name: 'Sage', colors: ['#87A878', '#4A5D42'] },
  { name: 'Plum', colors: ['#8E4585', '#4A2545'] },
  { name: 'Sand', colors: ['#C2A878', '#8B7355'] },
  { name: 'Nordic', colors: ['#5B8FA8', '#2D4A5E'] },
  { name: 'Postal', colors: ['#3D6B59', '#1D3D2D'] },
  { name: 'Rust', colors: ['#B7472A', '#6B2A1A'] },
  { name: 'Midnight', colors: ['#3D3B8E', '#1A1B3D'] }
];

// HTML escape without DOM dependency
export function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ============================================
// Realistic Wear & Aging Effect System
// ============================================

// Generate an organic blob path using bezier curves
function generateBlobPath(cx, cy, baseRadius, irregularity, rand, seedOffset) {
  const points = 8 + Math.floor(rand(seedOffset) * 4);
  const angleStep = (Math.PI * 2) / points;
  const pathPoints = [];

  for (let i = 0; i < points; i++) {
    const angle = i * angleStep;
    const radiusVariation = 1 + (rand(seedOffset + i * 3) - 0.5) * irregularity;
    const r = baseRadius * radiusVariation;
    pathPoints.push({
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r
    });
  }

  // Create smooth bezier curve through points
  let path = `M ${pathPoints[0].x.toFixed(1)} ${pathPoints[0].y.toFixed(1)}`;
  for (let i = 0; i < points; i++) {
    const curr = pathPoints[i];
    const next = pathPoints[(i + 1) % points];
    const prev = pathPoints[(i - 1 + points) % points];
    const nextNext = pathPoints[(i + 2) % points];

    const cp1x = curr.x + (next.x - prev.x) * 0.2;
    const cp1y = curr.y + (next.y - prev.y) * 0.2;
    const cp2x = next.x - (nextNext.x - curr.x) * 0.2;
    const cp2y = next.y - (nextNext.y - curr.y) * 0.2;

    path += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${next.x.toFixed(1)} ${next.y.toFixed(1)}`;
  }
  path += ' Z';
  return path;
}

// Generate a wavy/organic line path
function generateOrganicLine(x1, y1, x2, y2, waviness, rand, seedOffset) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.sqrt(dx * dx + dy * dy);
  const segments = Math.max(3, Math.floor(length / 15));
  const perpX = -dy / length;
  const perpY = dx / length;

  let path = `M ${x1.toFixed(1)} ${y1.toFixed(1)}`;

  for (let i = 1; i <= segments; i++) {
    const t = i / segments;
    const baseX = x1 + dx * t;
    const baseY = y1 + dy * t;
    const offset = (rand(seedOffset + i) - 0.5) * waviness;
    const x = baseX + perpX * offset;
    const y = baseY + perpY * offset;

    if (i === segments) {
      path += ` L ${x2.toFixed(1)} ${y2.toFixed(1)}`;
    } else {
      const cpOffset = (rand(seedOffset + i + 100) - 0.5) * waviness * 0.7;
      const cpX = baseX + perpX * cpOffset - dx / segments * 0.3;
      const cpY = baseY + perpY * cpOffset - dy / segments * 0.3;
      path += ` Q ${cpX.toFixed(1)} ${cpY.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }
  }
  return path;
}

// Generate realistic wear effects
function generateWearEffects(wearLevel, rand) {
  const effects = [];

  // 1. Ink Fade Patches - organic blobs where ink has worn away
  if (wearLevel > 0.1) {
    const numPatches = Math.floor(wearLevel * 6) + 1;
    for (let i = 0; i < numPatches; i++) {
      const x = rand(i * 3) * 200 + 30;
      const y = rand(i * 3 + 1) * 100 + 25;
      const radius = rand(i * 3 + 2) * 20 * wearLevel + 8;
      const opacity = (rand(i * 7) * 0.2 + 0.08) * wearLevel;
      const path = generateBlobPath(x, y, radius, 0.6, rand, i * 20);
      effects.push(`<path d="${path}" fill="rgba(255,255,255,${opacity.toFixed(3)})" filter="url(#blur-subtle)"/>`);
    }
  }

  // 2. Paper Foxing - small brownish spots from age/moisture
  if (wearLevel > 0.2) {
    const numFoxing = Math.floor(wearLevel * 25) + 5;
    for (let i = 0; i < numFoxing; i++) {
      const x = rand(i * 4 + 800) * 250 + 5;
      const y = rand(i * 4 + 801) * 140 + 5;
      const size = rand(i * 4 + 802) * 3 * wearLevel + 0.5;
      const opacity = rand(i * 4 + 803) * 0.15 * wearLevel + 0.03;
      // Vary the brown tones
      const r = Math.floor(120 + rand(i * 4 + 804) * 60);
      const g = Math.floor(80 + rand(i * 4 + 805) * 40);
      const b = Math.floor(40 + rand(i * 4 + 806) * 30);
      const path = generateBlobPath(x, y, size, 0.4, rand, i * 30 + 800);
      effects.push(`<path d="${path}" fill="rgba(${r},${g},${b},${opacity.toFixed(3)})"/>`);
    }
  }

  // 3. Organic Scratches - curved, varying width
  if (wearLevel > 0.15) {
    const numScratches = Math.floor(wearLevel * 5) + 1;
    for (let i = 0; i < numScratches; i++) {
      const x1 = rand(i * 5 + 50) * 200 + 30;
      const y1 = rand(i * 5 + 51) * 110 + 20;
      const length = rand(i * 5 + 52) * 35 * wearLevel + 12;
      const angle = rand(i * 5 + 53) * 50 - 25;
      const x2 = x1 + length * Math.cos(angle * Math.PI / 180);
      const y2 = y1 + length * Math.sin(angle * Math.PI / 180);
      const opacity = rand(i * 5 + 54) * 0.12 * wearLevel + 0.04;
      const strokeWidth = rand(i * 9) * 2 * wearLevel + 0.5;
      const waviness = rand(i * 5 + 55) * 4 + 2;
      const path = generateOrganicLine(x1, y1, x2, y2, waviness, rand, i * 40 + 50);
      effects.push(`<path d="${path}" stroke="rgba(255,255,255,${opacity.toFixed(3)})" stroke-width="${strokeWidth.toFixed(2)}" fill="none" stroke-linecap="round"/>`);
    }
  }

  // 4. Edge Degradation - organic chunks missing from edges
  if (wearLevel > 0.25) {
    const numEdgeWear = Math.floor(wearLevel * 12) + 3;
    for (let i = 0; i < numEdgeWear; i++) {
      const onEdge = Math.floor(rand(i * 6 + 100) * 4); // 0=top, 1=bottom, 2=left, 3=right
      let x, y;
      if (onEdge === 0) { x = rand(i * 6 + 101) * 240 + 10; y = rand(i * 6 + 102) * 8; }
      else if (onEdge === 1) { x = rand(i * 6 + 101) * 240 + 10; y = 142 + rand(i * 6 + 102) * 8; }
      else if (onEdge === 2) { x = rand(i * 6 + 102) * 8; y = rand(i * 6 + 101) * 130 + 10; }
      else { x = 252 + rand(i * 6 + 102) * 8; y = rand(i * 6 + 101) * 130 + 10; }

      const size = rand(i * 6 + 103) * 6 * wearLevel + 2;
      const opacity = rand(i * 6 + 105) * 0.5 + 0.4;
      const path = generateBlobPath(x, y, size, 0.7, rand, i * 25 + 100);
      effects.push(`<path d="${path}" fill="rgba(255,255,255,${opacity.toFixed(3)})"/>`);
    }
  }

  // 5. Ink Bleed Halos - subtle color bleeding at stamp edges
  if (wearLevel > 0.3) {
    const numBleeds = Math.floor(wearLevel * 4);
    for (let i = 0; i < numBleeds; i++) {
      const x = rand(i * 7 + 200) * 180 + 40;
      const y = rand(i * 7 + 201) * 80 + 35;
      const radius = rand(i * 7 + 202) * 15 + 8;
      const opacity = rand(i * 7 + 203) * 0.04 * wearLevel + 0.01;
      const path = generateBlobPath(x, y, radius, 0.5, rand, i * 35 + 200);
      effects.push(`<path d="${path}" fill="rgba(60,40,30,${opacity.toFixed(3)})" filter="url(#blur-medium)"/>`);
    }
  }

  // 6. Smudges - elongated organic marks (keeping these as user liked them)
  if (wearLevel > 0.35) {
    const numSmudges = Math.floor((wearLevel - 0.3) * 6) + 1;
    for (let i = 0; i < numSmudges; i++) {
      const x = rand(i * 9 + 500) * 220 + 20;
      const y = rand(i * 9 + 501) * 120 + 15;
      const rx = rand(i * 9 + 502) * 15 * wearLevel + 5;
      const ry = rx * (rand(i * 9 + 503) * 0.4 + 0.2);
      const opacity = rand(i * 9 + 504) * 0.07 * wearLevel + 0.015;
      const rot = rand(i * 9 + 505) * 180;
      // Use an organic blob instead of ellipse
      const path = generateBlobPath(x, y, (rx + ry) / 2, 0.5, rand, i * 45 + 500);
      effects.push(`<path d="${path}" fill="rgba(30,25,20,${opacity.toFixed(3)})" transform="rotate(${rot.toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)}) scale(${(rx / ((rx + ry) / 2)).toFixed(2)} ${(ry / ((rx + ry) / 2)).toFixed(2)})" filter="url(#blur-subtle)"/>`);
    }
  }

  // 7. Paper Creases - subtle fold lines with highlight/shadow
  if (wearLevel > 0.5) {
    const numCreases = Math.floor((wearLevel - 0.5) * 4) + 1;
    for (let i = 0; i < numCreases; i++) {
      const vertical = rand(i * 7 + 300) > 0.5;
      let x1, y1, x2, y2;
      if (vertical) {
        x1 = rand(i * 7 + 301) * 180 + 40;
        y1 = rand(i * 7 + 302) * 20;
        x2 = x1 + (rand(i * 7 + 303) - 0.5) * 15;
        y2 = 130 + rand(i * 7 + 304) * 20;
      } else {
        x1 = rand(i * 7 + 302) * 20;
        y1 = rand(i * 7 + 301) * 90 + 30;
        x2 = 240 + rand(i * 7 + 304) * 20;
        y2 = y1 + (rand(i * 7 + 303) - 0.5) * 15;
      }
      const shadowOpacity = rand(i * 7 + 305) * 0.08 * wearLevel + 0.02;
      const highlightOpacity = shadowOpacity * 0.6;
      const waviness = rand(i * 7 + 306) * 6 + 3;
      const path = generateOrganicLine(x1, y1, x2, y2, waviness, rand, i * 50 + 300);

      // Shadow side of crease
      effects.push(`<path d="${path}" stroke="rgba(0,0,0,${shadowOpacity.toFixed(3)})" stroke-width="1.5" fill="none"/>`);
      // Highlight side (offset slightly)
      const offset = vertical ? 1.5 : 0;
      const offsetY = vertical ? 0 : 1.5;
      effects.push(`<path d="${path}" stroke="rgba(255,255,255,${highlightOpacity.toFixed(3)})" stroke-width="0.8" fill="none" transform="translate(${offset} ${offsetY})"/>`);
    }
  }

  // 8. Water/Coffee Stains - organic ring shapes, NOT perfect circles
  if (wearLevel > 0.55) {
    const numStains = Math.floor((wearLevel - 0.55) * 4);
    for (let i = 0; i < numStains; i++) {
      const cx = rand(i * 8 + 400) * 200 + 30;
      const cy = rand(i * 8 + 401) * 100 + 25;
      const baseRadius = rand(i * 8 + 402) * 20 * wearLevel + 12;
      const opacity = rand(i * 8 + 403) * 0.06 * wearLevel + 0.02;

      // Create organic ring by subtracting inner blob from outer
      const outerPath = generateBlobPath(cx, cy, baseRadius, 0.4, rand, i * 55 + 400);
      const innerRadius = baseRadius * (0.7 + rand(i * 8 + 404) * 0.15);
      const innerPath = generateBlobPath(cx, cy, innerRadius, 0.35, rand, i * 55 + 450);

      // Brown/tan stain color with variation
      const r = Math.floor(140 + rand(i * 8 + 405) * 50);
      const g = Math.floor(100 + rand(i * 8 + 406) * 40);
      const b = Math.floor(60 + rand(i * 8 + 407) * 30);

      effects.push(`<path d="${outerPath}" fill="rgba(${r},${g},${b},${opacity.toFixed(3)})" filter="url(#blur-subtle)"/>`);
      effects.push(`<path d="${innerPath}" fill="rgba(255,255,255,${(opacity * 0.7).toFixed(3)})"/>`);

      // Add some darker accumulation at parts of the ring
      const accumX = cx + (rand(i * 8 + 408) - 0.5) * baseRadius * 0.8;
      const accumY = cy + (rand(i * 8 + 409) - 0.5) * baseRadius * 0.8;
      const accumPath = generateBlobPath(accumX, accumY, baseRadius * 0.25, 0.5, rand, i * 55 + 480);
      effects.push(`<path d="${accumPath}" fill="rgba(${r - 30},${g - 20},${b - 10},${(opacity * 1.5).toFixed(3)})" filter="url(#blur-subtle)"/>`);
    }
  }

  // 9. Fingerprint Marks - realistic ridge patterns
  if (wearLevel > 0.65) {
    const numPrints = Math.floor((wearLevel - 0.65) * 3);
    for (let i = 0; i < numPrints; i++) {
      const cx = rand(i * 10 + 600) * 180 + 40;
      const cy = rand(i * 10 + 601) * 90 + 30;
      const angle = rand(i * 10 + 602) * 360;
      const scale = 0.8 + rand(i * 10 + 603) * 0.4;
      const opacity = rand(i * 10 + 604) * 0.04 + 0.015;

      // Generate concentric elliptical ridges with organic variation
      let ridges = '';
      const numRidges = 6 + Math.floor(rand(i * 10 + 605) * 4);
      for (let j = 0; j < numRidges; j++) {
        const ridgeRadius = 3 + j * 2;
        // Create partial arcs for more realistic look
        const startAngle = rand(i * 10 + j * 5 + 610) * 0.3;
        const endAngle = Math.PI * (1.4 + rand(i * 10 + j * 5 + 611) * 0.5);
        const waviness = rand(i * 10 + j * 5 + 612) * 2 + 1;

        // Generate wavy arc
        const segments = 8;
        let arcPath = '';
        for (let k = 0; k <= segments; k++) {
          const t = startAngle + (endAngle - startAngle) * (k / segments);
          const wave = Math.sin(t * 8 + j) * waviness * (rand(i * 10 + j * 5 + k + 620) * 0.5 + 0.5);
          const r = ridgeRadius + wave;
          const x = Math.cos(t) * r * 1.3;
          const y = Math.sin(t) * r;
          if (k === 0) arcPath = `M ${x.toFixed(1)} ${y.toFixed(1)}`;
          else arcPath += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
        }
        ridges += `<path d="${arcPath}" stroke="rgba(80,60,40,${opacity.toFixed(3)})" stroke-width="${(0.4 + rand(i * 10 + j * 5 + 615) * 0.3).toFixed(2)}" fill="none"/>`;
      }

      effects.push(`<g transform="translate(${cx.toFixed(1)} ${cy.toFixed(1)}) rotate(${angle.toFixed(0)}) scale(${scale.toFixed(2)})" filter="url(#blur-subtle)">${ridges}</g>`);
    }
  }

  // 10. Tape Residue - organic sticky marks
  if (wearLevel > 0.75) {
    const numTape = Math.floor((wearLevel - 0.75) * 3);
    for (let i = 0; i < numTape; i++) {
      const x = rand(i * 11 + 700) * 160 + 30;
      const y = rand(i * 11 + 701) < 0.5 ? rand(i * 11 + 702) * 25 + 5 : 120 + rand(i * 11 + 702) * 25;
      const w = rand(i * 11 + 703) * 35 + 25;
      const h = rand(i * 11 + 704) * 12 + 6;
      const opacity = rand(i * 11 + 705) * 0.08 + 0.04;
      const angle = (rand(i * 11 + 706) - 0.5) * 8;

      // Create organic tape shape
      const path = generateBlobPath(x + w / 2, y + h / 2, (w + h) / 4, 0.3, rand, i * 60 + 700);
      effects.push(`<path d="${path}" fill="rgba(180,160,100,${opacity.toFixed(3)})" transform="rotate(${angle.toFixed(1)} ${(x + w / 2).toFixed(1)} ${(y + h / 2).toFixed(1)}) scale(${(w / ((w + h) / 4)).toFixed(2)} ${(h / ((w + h) / 4)).toFixed(2)})" filter="url(#blur-subtle)"/>`);

      // Add some darker residue spots
      const numSpots = 2 + Math.floor(rand(i * 11 + 707) * 3);
      for (let j = 0; j < numSpots; j++) {
        const spotX = x + rand(i * 11 + j * 3 + 710) * w;
        const spotY = y + rand(i * 11 + j * 3 + 711) * h;
        const spotR = rand(i * 11 + j * 3 + 712) * 3 + 1;
        const spotPath = generateBlobPath(spotX, spotY, spotR, 0.5, rand, i * 60 + j * 10 + 750);
        effects.push(`<path d="${spotPath}" fill="rgba(140,120,70,${(opacity * 1.5).toFixed(3)})"/>`);
      }
    }
  }

  // 11. Ink Transfer/Ghost marks - faint impressions
  if (wearLevel > 0.4) {
    const numGhosts = Math.floor((wearLevel - 0.4) * 3);
    for (let i = 0; i < numGhosts; i++) {
      const x = rand(i * 12 + 900) * 200 + 30;
      const y = rand(i * 12 + 901) * 100 + 25;
      const size = rand(i * 12 + 902) * 25 * wearLevel + 10;
      const opacity = rand(i * 12 + 903) * 0.03 * wearLevel + 0.01;
      const path = generateBlobPath(x, y, size, 0.6, rand, i * 65 + 900);
      effects.push(`<path d="${path}" fill="rgba(40,35,30,${opacity.toFixed(3)})" filter="url(#blur-medium)"/>`);
    }
  }

  return effects;
}

// Generate SVG filter definitions for wear effects
function generateWearFilters() {
  return `
    <filter id="blur-subtle" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0.8"/>
    </filter>
    <filter id="blur-medium" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
    </filter>`;
}

function generateStripes(colors, isTop) {
  const y = isTop ? 0 : 136;
  const stripePositions = [0, 44, 88, 132, 176, 220];

  return stripePositions.map((x, i) => {
    let colorIndex = isTop ? i % colors.length : (i + 1) % colors.length;
    let color = colors[colorIndex];
    const stroke = color === '#FFFFFF' ? ' stroke="#ddd" stroke-width="0.5"' : '';
    return `<rect x="${x}" y="${y}" width="22" height="14" fill="${color}"${stroke}/>`;
  }).join('\n    ');
}

function generateStickerBacking(colors) {
  const borderWidth = 12;
  let borderStripes = '';
  const stripeWidth = 8;
  const numStripes = 60;
  const pattern = [colors[0], '#ffffff', colors[1] || '#1a1a1a', '#ffffff'];

  for (let i = 0; i < numStripes; i++) {
    const x = -80 + i * stripeWidth;
    const color = pattern[i % 4];
    borderStripes += `<rect x="${x}" y="-20" width="${stripeWidth}" height="250" fill="${color}" transform="skewX(-45)"/>`;
  }

  return `
    <!-- Sticker backing -->
    <defs>
      <clipPath id="border-clip">
        <path d="M0,0 H260 V150 H0 Z M${borderWidth},${borderWidth} V${150-borderWidth} H${260-borderWidth} V${borderWidth} Z" clip-rule="evenodd"/>
      </clipPath>
    </defs>
    <rect x="0" y="0" width="260" height="150" fill="#fff"/>
    <g clip-path="url(#border-clip)">
      ${borderStripes}
    </g>
    <rect x="${borderWidth}" y="${borderWidth}" width="${260-borderWidth*2}" height="${150-borderWidth*2}" fill="#fafafa"/>`;
}

// Generate label-style SVG (postal label with handwritten text)
function generateLabelSvg(options) {
  const {
    city = 'London',
    country = 'United Kingdom',
    palette = 0,
    wear = 50,
    rotation: customRotation = null,
    viewBoxPadding = 10
  } = options;

  const selectedPalette = colorPalettes[palette] || colorPalettes[0];
  const colors = selectedPalette.colors;
  const primaryColor = colors[0];
  const inkColor = colors[1] || '#3d2e1f';

  const wearLevel = wear / 100;

  // Deterministic random based on city name
  const seed = city.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const rand = (n) => ((seed * (n + 1) * 9301 + 49297) % 233280) / 233280;

  // Use custom rotation if provided, otherwise calculate from wear
  const rotation = customRotation !== null ? customRotation : (wearLevel > 0 ? (rand(0) - 0.5) * 4 * wearLevel : 0);

  // Location text - always use city and country (no native script for label style)
  const locationText = `${city}, ${country}`;

  // Adjust font size based on text length
  const fontSize = locationText.length > 20 ? 32 : locationText.length > 14 ? 38 : 42;

  // Generate wear effects for label
  const wearEffects = wearLevel > 0 ? generateLabelWearEffects(wearLevel, rand) : [];
  const wearMarkup = wearEffects.length > 0 ? wearEffects.join('\n    ') : '';
  const wearFilters = wearLevel > 0 ? `
    <filter id="blur-subtle" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0.8"/>
    </filter>` : '';

  const baseWidth = 300;
  const baseHeight = 90;

  // Calculate padding for rotation - label is wide so needs more vertical padding when rotated
  const hasRotation = Math.abs(rotation) > 0.01;
  const rotationRad = Math.abs(rotation) * Math.PI / 180;
  // When rotated, the bounding box grows based on sin/cos of rotation angle
  const rotatedHeight = baseWidth * Math.sin(rotationRad) + baseHeight * Math.cos(rotationRad);
  const rotatedWidth = baseWidth * Math.cos(rotationRad) + baseHeight * Math.sin(rotationRad);
  const neededPaddingX = Math.ceil((rotatedWidth - baseWidth) / 2) + 15;
  const neededPaddingY = Math.ceil((rotatedHeight - baseHeight) / 2) + 15;

  const paddingX = hasRotation ? neededPaddingX : 15;
  const paddingY = hasRotation ? neededPaddingY : 15;
  const vbX = -paddingX;
  const vbY = -paddingY;
  const vbW = baseWidth + paddingX * 2;
  const vbH = baseHeight + paddingY * 2;

  // Slightly randomize the paper edge path based on city
  const edgeVar = (i) => (rand(i + 500) - 0.5) * 4;

  return `<svg width="${vbW}" height="${vbH}" viewBox="${vbX} ${vbY} ${vbW} ${vbH}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Reenie+Beanie&amp;display=swap');
    </style>
    <filter id="label-shadow" x="-5%" y="-5%" width="115%" height="125%">
      <feDropShadow dx="1" dy="3" stdDeviation="3" flood-opacity="0.18"/>
    </filter>${wearFilters}
  </defs>

  <g transform="rotate(${rotation.toFixed(2)} ${baseWidth/2} ${baseHeight/2})" filter="url(#label-shadow)">
    <!-- Aged paper with slightly irregular edges -->
    <path d="M ${3 + edgeVar(0)} ${6 + edgeVar(1)}
             Q ${8 + edgeVar(2)} ${1 + edgeVar(3)} ${15 + edgeVar(4)} ${5 + edgeVar(5)}
             L ${145 + edgeVar(6)} ${2 + edgeVar(7)}
             Q ${150 + edgeVar(8)} ${0 + edgeVar(9)} ${155 + edgeVar(10)} ${3 + edgeVar(11)}
             L ${285 + edgeVar(12)} ${1 + edgeVar(13)}
             Q ${292 + edgeVar(14)} ${0 + edgeVar(15)} ${298 + edgeVar(16)} ${5 + edgeVar(17)}
             L ${300 + edgeVar(18)} ${82 + edgeVar(19)}
             Q ${297 + edgeVar(20)} ${90 + edgeVar(21)} ${290 + edgeVar(22)} ${87 + edgeVar(23)}
             L ${155 + edgeVar(24)} ${91 + edgeVar(25)}
             Q ${148 + edgeVar(26)} ${94 + edgeVar(27)} ${142 + edgeVar(28)} ${90 + edgeVar(29)}
             L ${12 + edgeVar(30)} ${92 + edgeVar(31)}
             Q ${4 + edgeVar(32)} ${95 + edgeVar(33)} ${1 + edgeVar(34)} ${88 + edgeVar(35)}
             Z"
          fill="#f5f0e1"/>

    <!-- Typed label -->
    <text x="22" y="32" font-family="'Courier New', monospace" font-size="11" fill="${primaryColor}" letter-spacing="2">SENT FROM</text>

    <!-- Handwritten location -->
    <text x="22" y="70"
          font-family="'Reenie Beanie', cursive"
          font-size="${fontSize}"
          fill="${inkColor}"
          transform="rotate(${(-1 + rand(100) * 2).toFixed(1)}, 22, 70)">${escapeHtml(locationText)}</text>

    ${wearMarkup}
  </g>
</svg>`;
}

// Generate label-specific wear effects
function generateLabelWearEffects(wearLevel, rand) {
  const effects = [];

  // Paper stains/foxing - more intense
  if (wearLevel > 0.1) {
    const numSpots = Math.floor(wearLevel * 25) + 5;
    for (let i = 0; i < numSpots; i++) {
      const x = rand(i * 4 + 200) * 280 + 10;
      const y = rand(i * 4 + 201) * 70 + 10;
      const size = rand(i * 4 + 202) * 5 * wearLevel + 1;
      const opacity = rand(i * 4 + 203) * 0.2 * wearLevel + 0.05;
      const r = Math.floor(120 + rand(i * 4 + 204) * 50);
      const g = Math.floor(90 + rand(i * 4 + 205) * 40);
      const b = Math.floor(50 + rand(i * 4 + 206) * 30);
      effects.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${size.toFixed(1)}" fill="rgba(${r},${g},${b},${opacity.toFixed(3)})"/>`);
    }
  }

  // Fade patches - larger and more visible
  if (wearLevel > 0.15) {
    const numPatches = Math.floor(wearLevel * 8) + 2;
    for (let i = 0; i < numPatches; i++) {
      const x = rand(i * 3 + 300) * 260 + 20;
      const y = rand(i * 3 + 301) * 60 + 15;
      const rx = rand(i * 3 + 302) * 30 * wearLevel + 12;
      const ry = rx * (0.4 + rand(i * 3 + 303) * 0.3);
      const opacity = (rand(i * 7 + 304) * 0.2 + 0.08) * wearLevel;
      effects.push(`<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" fill="rgba(245,240,225,${opacity.toFixed(3)})" filter="url(#blur-subtle)"/>`);
    }
  }

  // Edge wear/tears - more aggressive
  if (wearLevel > 0.25) {
    const numTears = Math.floor(wearLevel * 12) + 3;
    for (let i = 0; i < numTears; i++) {
      const onEdge = Math.floor(rand(i * 5 + 400) * 4);
      let x, y;
      if (onEdge === 0) { x = rand(i * 5 + 401) * 280 + 10; y = rand(i * 5 + 402) * 8; }
      else if (onEdge === 1) { x = rand(i * 5 + 401) * 280 + 10; y = 82 + rand(i * 5 + 402) * 8; }
      else if (onEdge === 2) { x = rand(i * 5 + 402) * 8; y = rand(i * 5 + 401) * 70 + 10; }
      else { x = 292 + rand(i * 5 + 402) * 8; y = rand(i * 5 + 401) * 70 + 10; }

      const size = rand(i * 5 + 403) * 6 * wearLevel + 2;
      const opacity = rand(i * 5 + 404) * 0.4 + 0.35;
      effects.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${size.toFixed(1)}" fill="rgba(245,240,225,${opacity.toFixed(3)})"/>`);
    }
  }

  // Scratches
  if (wearLevel > 0.2) {
    const numScratches = Math.floor(wearLevel * 6) + 2;
    for (let i = 0; i < numScratches; i++) {
      const x1 = rand(i * 5 + 500) * 260 + 20;
      const y1 = rand(i * 5 + 501) * 70 + 10;
      const length = rand(i * 5 + 502) * 40 * wearLevel + 15;
      const angle = rand(i * 5 + 503) * 60 - 30;
      const x2 = x1 + length * Math.cos(angle * Math.PI / 180);
      const y2 = y1 + length * Math.sin(angle * Math.PI / 180);
      const opacity = rand(i * 5 + 504) * 0.15 * wearLevel + 0.05;
      const strokeWidth = rand(i * 9 + 505) * 2 * wearLevel + 0.5;
      effects.push(`<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="rgba(245,240,225,${opacity.toFixed(3)})" stroke-width="${strokeWidth.toFixed(2)}" stroke-linecap="round"/>`);
    }
  }

  // Coffee/water stains
  if (wearLevel > 0.4) {
    const numStains = Math.floor((wearLevel - 0.4) * 5) + 1;
    for (let i = 0; i < numStains; i++) {
      const cx = rand(i * 8 + 600) * 240 + 30;
      const cy = rand(i * 8 + 601) * 50 + 20;
      const radius = rand(i * 8 + 602) * 18 * wearLevel + 10;
      const opacity = rand(i * 8 + 603) * 0.12 * wearLevel + 0.04;
      const r = Math.floor(140 + rand(i * 8 + 604) * 50);
      const g = Math.floor(100 + rand(i * 8 + 605) * 40);
      const b = Math.floor(60 + rand(i * 8 + 606) * 30);
      // Outer ring
      effects.push(`<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${radius.toFixed(1)}" fill="none" stroke="rgba(${r},${g},${b},${opacity.toFixed(3)})" stroke-width="${(radius * 0.3).toFixed(1)}" filter="url(#blur-subtle)"/>`);
    }
  }

  // Ink smudges on text
  if (wearLevel > 0.5) {
    const numSmudges = Math.floor((wearLevel - 0.5) * 6) + 1;
    for (let i = 0; i < numSmudges; i++) {
      const x = rand(i * 6 + 700) * 200 + 50;
      const y = rand(i * 6 + 701) * 30 + 50; // Focus on text area
      const rx = rand(i * 6 + 702) * 20 * wearLevel + 8;
      const ry = rx * (0.3 + rand(i * 6 + 703) * 0.2);
      const opacity = rand(i * 6 + 704) * 0.1 * wearLevel + 0.03;
      const rot = rand(i * 6 + 705) * 30 - 15;
      effects.push(`<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" fill="rgba(60,50,40,${opacity.toFixed(3)})" transform="rotate(${rot.toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})" filter="url(#blur-subtle)"/>`);
    }
  }

  return effects;
}

// Generate envelope-style SVG (airmail design)
function generateEnvelopeSvg(options) {
  const {
    city = 'London',
    country = 'United Kingdom',
    native = '',
    symbol = 'compass',
    palette = 0,
    wear = 50,
    rotation: customRotation = null,
    viewBoxPadding = 10
  } = options;

  const selectedPalette = colorPalettes[palette] || colorPalettes[0];
  const colors = selectedPalette.colors;
  const primaryColor = colors[0];
  const secondaryColor = colors[1] || '#1a1a1a';

  // Envelope icon positioned at top-right
  const envelopeIcons = {
    compass: (color) => `
      <circle cx="270" cy="50" r="11" fill="none" stroke="${color}" stroke-width="1.5"/>
      <polygon points="270,40 272,50 270,54 268,50" fill="${color}"/>
      <polygon points="270,60 268,50 270,46 272,50" fill="none" stroke="${color}" stroke-width="0.75"/>`,
    plane: (color) => `
      <path d="M260 54 L270 44 L280 54 M270 44 L270 60 M264 56 L270 52 L276 56" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    anchor: (color) => `
      <circle cx="270" cy="40" r="3" fill="none" stroke="${color}" stroke-width="1.5"/>
      <path d="M270 43 L270 60 M262 56 Q262 60 270 60 Q278 60 278 56 M266 50 L274 50" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>`,
    mountain: (color) => `
      <path d="M255 60 L265 42 L270 50 L275 42 L285 60 Z" fill="none" stroke="${color}" stroke-width="1.5" stroke-linejoin="round"/>`,
    wave: (color) => `
      <path d="M255 46 Q260 40 265 46 Q270 52 275 46 Q280 40 285 46" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M255 56 Q260 50 265 56 Q270 62 275 56 Q280 50 285 56" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>`,
    leaf: (color) => `
      <path d="M270 60 Q260 50 270 36 Q280 50 270 60" fill="none" stroke="${color}" stroke-width="1.5"/>
      <path d="M270 60 L270 46" fill="none" stroke="${color}" stroke-width="1"/>`,
    sun: (color) => `
      <circle cx="270" cy="50" r="8" fill="none" stroke="${color}" stroke-width="1.5"/>
      <g stroke="${color}" stroke-width="1.5" stroke-linecap="round">
        <line x1="270" y1="36" x2="270" y2="40"/><line x1="270" y1="60" x2="270" y2="64"/>
        <line x1="256" y1="50" x2="260" y2="50"/><line x1="280" y1="50" x2="284" y2="50"/>
      </g>`,
    star: (color) => `
      <polygon points="270,38 272,46 280,46 274,52 276,60 270,55 264,60 266,52 260,46 268,46"
               fill="none" stroke="${color}" stroke-width="1.5"/>`,
    globe: (color) => `
      <circle cx="270" cy="50" r="11" fill="none" stroke="${color}" stroke-width="1.5"/>
      <ellipse cx="270" cy="50" rx="5" ry="11" fill="none" stroke="${color}" stroke-width="1"/>
      <path d="M259 50 L281 50 M261 43 L279 43 M261 57 L279 57" fill="none" stroke="${color}" stroke-width="0.75"/>`,
    envelope: (color) => `
      <rect x="258" y="42" width="24" height="16" fill="none" stroke="${color}" stroke-width="1.5" rx="1"/>
      <path d="M258 42 L270 52 L282 42" fill="none" stroke="${color}" stroke-width="1.5"/>`,
    bird: (color) => `
      <path d="M255 53 Q265 43 270 50 Q275 43 285 53" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M262 56 Q270 50 278 56" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>`,
    heart: (color) => `
      <path d="M270 58 Q257 48 262 42 Q267 36 270 42 Q273 36 278 42 Q283 48 270 58" fill="none" stroke="${color}" stroke-width="1.5"/>`,
    moon: (color) => `
      <path d="M277 40 A12 12 0 1 0 277 60 A8 8 0 1 1 277 40" fill="none" stroke="${color}" stroke-width="1.5"/>`,
    camera: (color) => `
      <rect x="258" y="44" width="24" height="16" fill="none" stroke="${color}" stroke-width="1.5" rx="2"/>
      <circle cx="270" cy="52" r="5" fill="none" stroke="${color}" stroke-width="1.5"/>
      <rect x="264" y="41" width="6" height="3" fill="none" stroke="${color}" stroke-width="1"/>`,
    coffee: (color) => `
      <path d="M260 42 L262 60 L278 60 L280 42 Z" fill="none" stroke="${color}" stroke-width="1.5"/>
      <path d="M280 46 Q286 46 286 51 Q286 56 280 56" fill="none" stroke="${color}" stroke-width="1.5"/>
      <path d="M266 38 Q266 42 268 42 Q270 42 270 38" fill="none" stroke="${color}" stroke-width="1" stroke-linecap="round"/>`,
    none: () => ''
  };

  const iconFn = envelopeIcons[symbol] || envelopeIcons.compass;
  const iconSvg = iconFn(primaryColor);

  const cityFontSize = city.length > 10 ? 30 : 36;
  const cityY = city.length > 10 ? 97 : 100;
  const subtitleFontSize = country.length > 15 ? 10 : 12;
  const subtitleY = city.length > 10 ? 120 : 125;

  const subtitle = native ? `${country} · ${native}` : country;

  const wearLevel = wear / 100;

  // Deterministic random based on city name
  const seed = city.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const rand = (n) => ((seed * (n + 1) * 9301 + 49297) % 233280) / 233280;

  // Use custom rotation if provided, otherwise calculate from wear
  const rotation = customRotation !== null ? customRotation : (wearLevel > 0 ? (rand(0) - 0.5) * 5 * wearLevel : 0);

  // Generate wear effects (scaled for envelope dimensions)
  const wearEffects = wearLevel > 0 ? generateEnvelopeWearEffects(wearLevel, rand) : [];
  const wearMarkup = wearEffects.length > 0 ? wearEffects.join('\n      ') : '';
  const wearFilters = wearLevel > 0 ? generateWearFilters() : '';

  // Calculate padding for rotation using trigonometric calculations
  // This ensures smooth size transitions as rotation changes
  const baseWidth = 320;
  const baseHeight = 180;
  const hasRotation = Math.abs(rotation) > 0.01;
  const rotationRad = Math.abs(rotation) * Math.PI / 180;
  // When rotated, the bounding box grows based on sin/cos of rotation angle
  const rotatedHeight = baseWidth * Math.sin(rotationRad) + baseHeight * Math.cos(rotationRad);
  const rotatedWidth = baseWidth * Math.cos(rotationRad) + baseHeight * Math.sin(rotationRad);
  const neededPaddingX = Math.ceil((rotatedWidth - baseWidth) / 2) + 10;
  const neededPaddingY = Math.ceil((rotatedHeight - baseHeight) / 2) + 10;

  const paddingX = typeof viewBoxPadding === 'object' ? viewBoxPadding.x :
                   (hasRotation ? neededPaddingX : 10);
  const paddingY = typeof viewBoxPadding === 'object' ? viewBoxPadding.y :
                   (hasRotation ? neededPaddingY : 10);

  const vbX = -paddingX;
  const vbY = -paddingY;
  const vbW = 320 + paddingX * 2;
  const vbH = 180 + paddingY * 2;

  return `<svg width="${vbW}" height="${vbH}" viewBox="${vbX} ${vbY} ${vbW} ${vbH}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="airmail-stripe" patternUnits="userSpaceOnUse" width="24" height="12" patternTransform="rotate(135)">
      <rect x="0" y="0" width="6" height="12" fill="${primaryColor}"/>
      <rect x="6" y="0" width="6" height="12" fill="#ffffff"/>
      <rect x="12" y="0" width="6" height="12" fill="${secondaryColor}"/>
      <rect x="18" y="0" width="6" height="12" fill="#ffffff"/>
    </pattern>
    <filter id="paper-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="2" dy="3" stdDeviation="4" flood-opacity="0.15"/>
    </filter>
    ${wearFilters}
  </defs>

  <!-- Main envelope body -->
  <g transform="rotate(${rotation.toFixed(2)}, 160, 90)" filter="url(#paper-shadow)">
    <!-- Paper background -->
    <rect x="20" y="10" width="280" height="160" fill="#fffef8" rx="2"/>

    <!-- Top airmail border -->
    <rect x="20" y="10" width="280" height="14" fill="url(#airmail-stripe)" rx="2"/>
    <rect x="20" y="22" width="280" height="2" fill="#fffef8"/>

    <!-- Bottom airmail border -->
    <rect x="20" y="156" width="280" height="14" fill="url(#airmail-stripe)" rx="2"/>
    <rect x="20" y="154" width="280" height="4" fill="#fffef8"/>

    <!-- Icon -->
    ${iconSvg}

    <!-- Text content -->
    <text x="160" y="65" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" fill="#666" letter-spacing="3">A DISPATCH FROM</text>

    <text x="160" y="${cityY}" text-anchor="middle" font-family="Georgia, serif" font-size="${cityFontSize}" font-weight="bold" fill="#1a1a1a">${escapeHtml(city)}</text>

    <text x="160" y="${subtitleY}" text-anchor="middle" font-family="'Courier New', monospace" font-size="${subtitleFontSize}" fill="#888">${escapeHtml(subtitle)}</text>

    ${wearMarkup}
  </g>
</svg>`;
}

// Generate envelope-specific wear effects (scaled for 320x180 dimensions)
function generateEnvelopeWearEffects(wearLevel, rand) {
  const effects = [];

  // Ink fade patches - more intense
  if (wearLevel > 0.1) {
    const numPatches = Math.floor(wearLevel * 8) + 2;
    for (let i = 0; i < numPatches; i++) {
      const x = rand(i * 3) * 240 + 40;
      const y = rand(i * 3 + 1) * 120 + 30;
      const radius = rand(i * 3 + 2) * 25 * wearLevel + 10;
      const opacity = (rand(i * 7) * 0.25 + 0.1) * wearLevel;
      const path = generateBlobPath(x, y, radius, 0.6, rand, i * 20);
      effects.push(`<path d="${path}" fill="rgba(255,254,248,${opacity.toFixed(3)})" filter="url(#blur-subtle)"/>`);
    }
  }

  // Paper foxing spots - more numerous and visible
  if (wearLevel > 0.15) {
    const numFoxing = Math.floor(wearLevel * 35) + 8;
    for (let i = 0; i < numFoxing; i++) {
      const x = rand(i * 4 + 800) * 260 + 30;
      const y = rand(i * 4 + 801) * 140 + 20;
      const size = rand(i * 4 + 802) * 4 * wearLevel + 1;
      const opacity = rand(i * 4 + 803) * 0.2 * wearLevel + 0.05;
      const r = Math.floor(110 + rand(i * 4 + 804) * 60);
      const g = Math.floor(75 + rand(i * 4 + 805) * 45);
      const b = Math.floor(35 + rand(i * 4 + 806) * 35);
      const path = generateBlobPath(x, y, size, 0.4, rand, i * 30 + 800);
      effects.push(`<path d="${path}" fill="rgba(${r},${g},${b},${opacity.toFixed(3)})"/>`);
    }
  }

  // Organic scratches - more and deeper
  if (wearLevel > 0.1) {
    const numScratches = Math.floor(wearLevel * 8) + 2;
    for (let i = 0; i < numScratches; i++) {
      const x1 = rand(i * 5 + 50) * 240 + 40;
      const y1 = rand(i * 5 + 51) * 130 + 25;
      const length = rand(i * 5 + 52) * 45 * wearLevel + 15;
      const angle = rand(i * 5 + 53) * 50 - 25;
      const x2 = x1 + length * Math.cos(angle * Math.PI / 180);
      const y2 = y1 + length * Math.sin(angle * Math.PI / 180);
      const opacity = rand(i * 5 + 54) * 0.18 * wearLevel + 0.06;
      const strokeWidth = rand(i * 9) * 2.5 * wearLevel + 0.6;
      const waviness = rand(i * 5 + 55) * 4 + 2;
      const path = generateOrganicLine(x1, y1, x2, y2, waviness, rand, i * 40 + 50);
      effects.push(`<path d="${path}" stroke="rgba(255,254,248,${opacity.toFixed(3)})" stroke-width="${strokeWidth.toFixed(2)}" fill="none" stroke-linecap="round"/>`);
    }
  }

  // Edge wear - more aggressive
  if (wearLevel > 0.2) {
    const numEdgeWear = Math.floor(wearLevel * 15) + 4;
    for (let i = 0; i < numEdgeWear; i++) {
      const onEdge = Math.floor(rand(i * 6 + 100) * 4);
      let x, y;
      if (onEdge === 0) { x = rand(i * 6 + 101) * 260 + 30; y = 10 + rand(i * 6 + 102) * 8; }
      else if (onEdge === 1) { x = rand(i * 6 + 101) * 260 + 30; y = 162 + rand(i * 6 + 102) * 8; }
      else if (onEdge === 2) { x = 20 + rand(i * 6 + 102) * 8; y = rand(i * 6 + 101) * 140 + 20; }
      else { x = 292 + rand(i * 6 + 102) * 8; y = rand(i * 6 + 101) * 140 + 20; }

      const size = rand(i * 6 + 103) * 8 * wearLevel + 2;
      const opacity = rand(i * 6 + 105) * 0.5 + 0.4;
      const path = generateBlobPath(x, y, size, 0.7, rand, i * 25 + 100);
      effects.push(`<path d="${path}" fill="rgba(255,254,248,${opacity.toFixed(3)})"/>`);
    }
  }

  // Paper creases - more prominent
  if (wearLevel > 0.35) {
    const numCreases = Math.floor((wearLevel - 0.35) * 5) + 1;
    for (let i = 0; i < numCreases; i++) {
      const vertical = rand(i * 7 + 300) > 0.5;
      let x1, y1, x2, y2;
      if (vertical) {
        x1 = rand(i * 7 + 301) * 220 + 50;
        y1 = rand(i * 7 + 302) * 15 + 15;
        x2 = x1 + (rand(i * 7 + 303) - 0.5) * 12;
        y2 = 155 + rand(i * 7 + 304) * 15;
      } else {
        x1 = rand(i * 7 + 302) * 15 + 25;
        y1 = rand(i * 7 + 301) * 110 + 35;
        x2 = 280 + rand(i * 7 + 304) * 15;
        y2 = y1 + (rand(i * 7 + 303) - 0.5) * 12;
      }
      const shadowOpacity = rand(i * 7 + 305) * 0.12 * wearLevel + 0.04;
      const highlightOpacity = shadowOpacity * 0.6;
      const waviness = rand(i * 7 + 306) * 5 + 2;
      const path = generateOrganicLine(x1, y1, x2, y2, waviness, rand, i * 50 + 300);

      effects.push(`<path d="${path}" stroke="rgba(0,0,0,${shadowOpacity.toFixed(3)})" stroke-width="1.5" fill="none"/>`);
      const offset = vertical ? 1.5 : 0;
      const offsetY = vertical ? 0 : 1.5;
      effects.push(`<path d="${path}" stroke="rgba(255,255,255,${highlightOpacity.toFixed(3)})" stroke-width="0.8" fill="none" transform="translate(${offset} ${offsetY})"/>`);
    }
  }

  // Coffee/water stains - new effect
  if (wearLevel > 0.45) {
    const numStains = Math.floor((wearLevel - 0.45) * 4) + 1;
    for (let i = 0; i < numStains; i++) {
      const cx = rand(i * 8 + 400) * 220 + 50;
      const cy = rand(i * 8 + 401) * 120 + 30;
      const baseRadius = rand(i * 8 + 402) * 25 * wearLevel + 15;
      const opacity = rand(i * 8 + 403) * 0.1 * wearLevel + 0.04;
      const r = Math.floor(140 + rand(i * 8 + 405) * 50);
      const g = Math.floor(100 + rand(i * 8 + 406) * 40);
      const b = Math.floor(60 + rand(i * 8 + 407) * 30);

      const outerPath = generateBlobPath(cx, cy, baseRadius, 0.4, rand, i * 55 + 400);
      const innerRadius = baseRadius * (0.65 + rand(i * 8 + 404) * 0.15);
      const innerPath = generateBlobPath(cx, cy, innerRadius, 0.35, rand, i * 55 + 450);

      effects.push(`<path d="${outerPath}" fill="rgba(${r},${g},${b},${opacity.toFixed(3)})" filter="url(#blur-subtle)"/>`);
      effects.push(`<path d="${innerPath}" fill="rgba(255,254,248,${(opacity * 0.8).toFixed(3)})"/>`);
    }
  }

  // Fingerprint smudges - new effect
  if (wearLevel > 0.55) {
    const numPrints = Math.floor((wearLevel - 0.55) * 4) + 1;
    for (let i = 0; i < numPrints; i++) {
      const cx = rand(i * 10 + 600) * 200 + 60;
      const cy = rand(i * 10 + 601) * 100 + 40;
      const angle = rand(i * 10 + 602) * 360;
      const scale = 0.9 + rand(i * 10 + 603) * 0.5;
      const opacity = rand(i * 10 + 604) * 0.06 + 0.025;

      let ridges = '';
      const numRidges = 5 + Math.floor(rand(i * 10 + 605) * 3);
      for (let j = 0; j < numRidges; j++) {
        const ridgeRadius = 3 + j * 2.5;
        const startAngle = rand(i * 10 + j * 5 + 610) * 0.3;
        const endAngle = Math.PI * (1.3 + rand(i * 10 + j * 5 + 611) * 0.6);

        let arcPath = '';
        const segments = 8;
        for (let k = 0; k <= segments; k++) {
          const t = startAngle + (endAngle - startAngle) * (k / segments);
          const wave = Math.sin(t * 8 + j) * 1.5 * (rand(i * 10 + j * 5 + k + 620) * 0.5 + 0.5);
          const r = ridgeRadius + wave;
          const x = Math.cos(t) * r * 1.3;
          const y = Math.sin(t) * r;
          if (k === 0) arcPath = `M ${x.toFixed(1)} ${y.toFixed(1)}`;
          else arcPath += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
        }
        ridges += `<path d="${arcPath}" stroke="rgba(80,60,40,${opacity.toFixed(3)})" stroke-width="${(0.5 + rand(i * 10 + j * 5 + 615) * 0.4).toFixed(2)}" fill="none"/>`;
      }

      effects.push(`<g transform="translate(${cx.toFixed(1)} ${cy.toFixed(1)}) rotate(${angle.toFixed(0)}) scale(${scale.toFixed(2)})" filter="url(#blur-subtle)">${ridges}</g>`);
    }
  }

  // Tape residue marks - new effect
  if (wearLevel > 0.7) {
    const numTape = Math.floor((wearLevel - 0.7) * 4) + 1;
    for (let i = 0; i < numTape; i++) {
      const x = rand(i * 11 + 700) * 180 + 50;
      const y = rand(i * 11 + 701) < 0.5 ? rand(i * 11 + 702) * 20 + 15 : 145 + rand(i * 11 + 702) * 20;
      const w = rand(i * 11 + 703) * 40 + 30;
      const h = rand(i * 11 + 704) * 10 + 5;
      const opacity = rand(i * 11 + 705) * 0.1 + 0.05;
      const angle = (rand(i * 11 + 706) - 0.5) * 10;

      const path = generateBlobPath(x + w / 2, y + h / 2, (w + h) / 4, 0.3, rand, i * 60 + 700);
      effects.push(`<path d="${path}" fill="rgba(180,160,100,${opacity.toFixed(3)})" transform="rotate(${angle.toFixed(1)} ${(x + w / 2).toFixed(1)} ${(y + h / 2).toFixed(1)}) scale(${(w / ((w + h) / 4)).toFixed(2)} ${(h / ((w + h) / 4)).toFixed(2)})" filter="url(#blur-subtle)"/>`);
    }
  }

  return effects;
}

export function generatePostmark(options) {
  const {
    city = 'London',
    country = 'United Kingdom',
    native = '',
    symbol = 'compass',
    palette = 0,
    wear = 50,
    sticker = false,
    style = 'postmark',
    rotation: customRotation = null,
    viewBoxPadding = 10
  } = options;

  // Dispatch to other styles if requested
  if (style === 'envelope') {
    return generateEnvelopeSvg(options);
  }
  if (style === 'label') {
    return generateLabelSvg(options);
  }

  const selectedPalette = colorPalettes[palette] || colorPalettes[0];
  const colors = selectedPalette.colors;
  const iconFn = icons[symbol] || icons.compass;
  const iconSvg = iconFn(colors[0]);

  const cityFontSize = city.length > 10 ? 26 : 32;
  const cityY = city.length > 10 ? 72 : 75;
  const subtitleFontSize = country.length > 15 ? 14 : 16;
  const subtitleY = city.length > 10 ? 98 : 100;

  const subtitle = native ? `${country} · ${native}` : country;

  const wearLevel = wear / 100;

  // Deterministic random based on city name
  const seed = city.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const rand = (n) => ((seed * (n + 1) * 9301 + 49297) % 233280) / 233280;

  // Use custom rotation if provided, otherwise calculate from wear
  const rotation = customRotation !== null ? customRotation : (wearLevel > 0 ? (rand(0) - 0.5) * 5 * wearLevel : 0);

  // Generate realistic wear effects using new system
  const wearEffects = wearLevel > 0 ? generateWearEffects(wearLevel, rand) : [];
  const wearMarkup = wearEffects.length > 0 ? wearEffects.join('\n      ') : '';
  const wearFilters = wearLevel > 0 ? generateWearFilters() : '';

  const stickerMarkup = sticker ? generateStickerBacking(colors) : '';

  // Calculate padding needed for rotation using trigonometric calculations
  // This ensures smooth size transitions as rotation changes
  const baseWidth = 260;
  const baseHeight = 150;
  const hasRotation = Math.abs(rotation) > 0.01;
  const rotationRad = Math.abs(rotation) * Math.PI / 180;
  // When rotated, the bounding box grows based on sin/cos of rotation angle
  const rotatedHeight = baseWidth * Math.sin(rotationRad) + baseHeight * Math.cos(rotationRad);
  const rotatedWidth = baseWidth * Math.cos(rotationRad) + baseHeight * Math.sin(rotationRad);
  const neededPaddingX = Math.ceil((rotatedWidth - baseWidth) / 2) + 10;
  const neededPaddingY = Math.ceil((rotatedHeight - baseHeight) / 2) + 10;

  const paddingX = typeof viewBoxPadding === 'object' ? viewBoxPadding.x :
                   (hasRotation ? neededPaddingX : 10);
  const paddingY = typeof viewBoxPadding === 'object' ? viewBoxPadding.y :
                   (hasRotation ? neededPaddingY : 10);

  const vbX = -paddingX;
  const vbY = -paddingY;
  const vbW = 260 + paddingX * 2;
  const vbH = 150 + paddingY * 2;

  return `<svg width="${vbW}" height="${vbH}" viewBox="${vbX} ${vbY} ${vbW} ${vbH}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>${wearFilters}</defs>
    <g transform="rotate(${rotation.toFixed(2)} 130 75)">
    ${stickerMarkup}
      <!-- Top stripes -->
      ${generateStripes(colors, true)}
      <!-- Bottom stripes -->
      ${generateStripes(colors, false)}

      <!-- Icon -->
      ${iconSvg}
      <!-- Content -->
      <text x="130" y="42" text-anchor="middle" font-family="Georgia, serif" font-size="10" letter-spacing="3" fill="#888">A DISPATCH FROM</text>
      <text x="130" y="${cityY}" text-anchor="middle" font-family="Georgia, serif" font-size="${cityFontSize}" font-weight="bold" fill="#1a1a1a">${escapeHtml(city)}</text>
      <text x="130" y="${subtitleY}" text-anchor="middle" font-family="Georgia, serif" font-size="${subtitleFontSize}" fill="#666">${escapeHtml(subtitle)}</text>
      ${wearMarkup}
    </g>
  </svg>`;
}
