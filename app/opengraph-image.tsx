import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Indiana Studio — Design × Code × IA';

export default function Image() {
  return new ImageResponse(
    (
      <div style={{
        width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between', padding: '80px',
        background: 'radial-gradient(95% 72% at 50% 34%, #4a4b51 0%, #36373b 64%)',
        color: '#f4f4f5', fontFamily: 'sans-serif'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em' }}>
          <svg width="30" height="26" viewBox="0 0 24 21"><path d="M12 0 24 21H0Z" fill="#3845e1" /></svg>
          <span>Indiana Studio</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: 74, fontWeight: 800, lineHeight: 1.02, letterSpacing: '-0.035em', maxWidth: '900px' }}>
            Design <span style={{ color: '#8f9bff' }}>×</span> Code <span style={{ color: '#8f9bff' }}>×</span> IA
          </div>
          <div style={{ fontSize: 30, color: 'rgba(244,244,245,0.66)', maxWidth: '820px' }}>
            Je conçois, développe et déploie des produits digitaux de bout en bout.
          </div>
        </div>
        <div style={{ display: 'flex', gap: '18px', fontSize: 22, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(244,244,245,0.5)' }}>
          <span>PRODUCT BUILDER</span><span>·</span><span>PARIS</span>
        </div>
      </div>
    ),
    size
  );
}
