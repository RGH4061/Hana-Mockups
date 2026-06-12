/* ════════════════════════════════════════════════════════════════
   Hana — Sub-capability page TEMPLATE · chrome
   Header (utility bar + nav), footer, breadcrumb, capability browse
   sidebar, icon set, photo placeholder. Hi-fi — uses hana-tokens.css.
   ════════════════════════════════════════════════════════════════ */

/* ─── icon helper (Lucide-style, 1.6px stroke) ───────────────── */
function SvgIcon({ name, size = 16, color = 'currentColor', stroke = 2 }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'arrow-right':return <svg {...p}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;
    case 'chevron-down':return <svg {...p}><path d="m6 9 6 6 6-6" /></svg>;
    case 'chevron-right':return <svg {...p}><path d="m9 18 6-6-6-6" /></svg>;
    case 'map-pin':return <svg {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
    case 'search':return <svg {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>;
    case 'globe':return <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18" /><path d="M12 3a14 14 0 0 0 0 18" /></svg>;
    case 'linkedin':return <svg {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
    case 'flame':return <svg {...p} strokeWidth={1.6}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>;
    case 'ruler':return <svg {...p} strokeWidth={1.6}><path d="M21.3 8.7 8.7 21.3a2.4 2.4 0 0 1-3.4 0L2.7 18.7a2.4 2.4 0 0 1 0-3.4L15.3 2.7a2.4 2.4 0 0 1 3.4 0l2.6 2.6a2.4 2.4 0 0 1 0 3.4z" /><path d="m7.5 10.5 2 2" /><path d="m10.5 7.5 2 2" /><path d="m13.5 4.5 2 2" /><path d="m4.5 13.5 2 2" /></svg>;
    case 'shield':return <svg {...p} strokeWidth={1.6}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>;
    case 'cpu':return <svg {...p} strokeWidth={1.7}><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>;
    case 'square-stack':return <svg {...p} strokeWidth={1.7}><path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" /><path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" /><rect x="14" y="14" width="8" height="8" rx="2" /></svg>;
    case 'box':return <svg {...p} strokeWidth={1.7}><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>;
    case 'layers':return <svg {...p} strokeWidth={1.7}><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.84z" /><path d="M2 12.65l9.17 4.16a2 2 0 0 0 1.66 0L22 12.65" /><path d="M2 17.65l9.17 4.16a2 2 0 0 0 1.66 0L22 17.65" /></svg>;
    case 'package':return <svg {...p} strokeWidth={1.7}><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" /><path d="M12 22V12" /><path d="m3.3 7 7.7 4.73a2 2 0 0 0 2 0L20.7 7" /><path d="m7.5 4.27 9 5.15" /></svg>;
    case 'disc':return <svg {...p} strokeWidth={1.7}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="2" /></svg>;
    case 'circle-dot':return <svg {...p} strokeWidth={1.7}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="1" /></svg>;
    case 'grid':return <svg {...p} strokeWidth={1.7}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M3 15h18" /><path d="M9 3v18" /><path d="M15 3v18" /></svg>;
    case 'activity':return <svg {...p} strokeWidth={1.7}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>;
    case 'waypoints':return <svg {...p} strokeWidth={1.7}><circle cx="12" cy="4.5" r="2.5" /><path d="m10.2 6.3-3.9 3.9" /><circle cx="4.5" cy="12" r="2.5" /><path d="M7 12h10" /><circle cx="19.5" cy="12" r="2.5" /><path d="m13.8 17.7 3.9-3.9" /><circle cx="12" cy="19.5" r="2.5" /></svg>;
    case 'radio':return <svg {...p} strokeWidth={1.7}><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" /><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" /><circle cx="12" cy="12" r="2" /><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" /><path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1" /></svg>;
    case 'scan':return <svg {...p} strokeWidth={1.7}><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><circle cx="12" cy="12" r="2.5" /></svg>;
    case 'scan-eye':return <svg {...p} strokeWidth={1.7}><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><circle cx="12" cy="12" r="1" /><path d="M18.9 12.3a1 1 0 0 0 0-.6 7.5 7.5 0 0 0-13.8 0 1 1 0 0 0 0 .6 7.5 7.5 0 0 0 13.8 0" /></svg>;
    case 'bot':return <svg {...p} strokeWidth={1.7}><path d="M12 8V4H8" /><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>;
    case 'route':return <svg {...p} strokeWidth={1.7}><circle cx="6" cy="19" r="3" /><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /><circle cx="18" cy="5" r="3" /></svg>;
    case 'pen-tool':return <svg {...p} strokeWidth={1.7}><path d="M15.7 21.3a1 1 0 0 1-1.4 0l-1.6-1.6a1 1 0 0 1 0-1.4l5.6-5.6a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4z" /><path d="m18 13-1.4-6.9a1 1 0 0 0-.7-.8L3.2 2a1 1 0 0 0-1.2 1.2l3.3 12.7a1 1 0 0 0 .8.7L13 18" /><path d="m2.3 2.3 7.3 7.3" /><circle cx="11" cy="11" r="2" /></svg>;
    case 'users':return <svg {...p} strokeWidth={1.7}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
    case 'rocket':return <svg {...p} strokeWidth={1.7}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>;
    default:return null;
  }
}

/* ─── photo placeholder (striped/surface + mono caption) ─────── */
function Photo({ photo, height, ratio, radius = 8, dark = false }) {
  const cap = photo && photo.label;
  const style = {
    position: 'relative', overflow: 'hidden', borderRadius: radius,
    border: '1px solid var(--line)', background: 'var(--surface)',
    height: height || undefined, aspectRatio: ratio || undefined, width: '100%'
  };
  if (photo && photo.src && window.__resources && window.__resources[photo.src]) {
    return (
      <div style={style}>
        <img src={window.__resources && window.__resources[photo.src] || photo.src} alt={cap || ''} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        {cap &&
        <div style={{ position: 'absolute', left: 12, bottom: 10, fontFamily: 'var(--font-mono)', fontSize: 10,
          letterSpacing: '0.04em', color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 4px rgba(0,0,0,0.6)', textTransform: 'uppercase' }}>
            {cap}
          </div>
        }
      </div>);

  }
  /* placeholder — engineering striped ground + mono caption */
  return (
    <div style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundImage: 'repeating-linear-gradient(45deg, transparent 0 13px, rgba(18,131,221,0.06) 13px 14px)' }}>
      <div style={{ position: 'absolute', top: 10, left: 12, width: 18, height: 18, opacity: 0.4 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--hana-blue)" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" /><path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
        </svg>
      </div>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-3)', textAlign: 'center', padding: '0 18px', lineHeight: 1.5 }}>
        [ {cap || 'photography'} ]
      </span>
    </div>);

}

/* ─── header — utility bar + main nav ────────────────────────── */
function SubCapHeader({ active = 'Capabilities' }) {
  const navLinks = ['About', 'Markets', 'Capabilities', 'Locations', 'Investor Relations'];
  return (
    <header style={{ background: '#fff', fontFamily: 'var(--font-text)', position: 'sticky', top: 0, zIndex: 80 }}>
      {/* utility bar */}
      <div style={{ background: 'var(--hana-blue-deep)', color: 'rgba(255,255,255,0.78)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px', height: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11 }}>
            <span style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 10 }}>SET</span>
            <span style={{ color: '#fff' }}>HANA</span>
            <span>฿24.50</span>
            <span style={{ color: '#7EC8FF' }}>+1.24%</span>
          </div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', fontSize: 12 }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Careers</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>News</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}><SvgIcon name="globe" size={13} /> EN</a>
          </div>
        </div>
      </div>
      {/* main nav */}
      <div style={{ borderBottom: '1px solid var(--line)' }}>
        <style>{`.sc-navlink{transition:color 140ms ease;}.sc-navlink:hover{color:var(--hana-blue)!important;}`}</style>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '16px 32px', display: 'flex', alignItems: 'center', gap: 32 }}>
          <img src={(window.__resources && window.__resources['assets/hana-logo-full-trimmed.png']) || 'assets/hana-logo-full-trimmed.png'} alt="Hana" style={{ width: 184, height: 56, objectFit: 'contain', objectPosition: 'left center', display: 'block' }} />
          <nav style={{ display: 'flex', gap: 22, marginLeft: 8 }}>
            {navLinks.map((l) =>
            <a key={l} href="#" className="sc-navlink"
            style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: l === active ? 'var(--hana-blue)' : 'var(--ink)', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                {l}{['About', 'Markets', 'Capabilities', 'Locations', 'Investor Relations'].includes(l) && <SvgIcon name="chevron-down" size={13} />}
              </a>
            )}
          </nav>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <a href="#" className="hana-btn hana-btn-secondary" style={{ padding: '10px 16px', fontSize: 11, whiteSpace: 'nowrap' }}>Contact</a>
            <a href="#" className="hana-btn hana-btn-primary" style={{ padding: '11px 16px', fontSize: 11, whiteSpace: 'nowrap' }}>Request a quote</a>
          </div>
        </div>
      </div>
    </header>);

}

/* ─── breadcrumb ─────────────────────────────────────────────── */
function Breadcrumb({ title }) {
  return (
    <div style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '11px 32px', fontSize: 12.5,
        color: 'var(--ink-3)', display: 'flex', gap: 8, alignItems: 'center', fontFamily: 'var(--font-text)' }}>
        <a href="#" className="hana-link" style={{ fontSize: 12.5 }}>Capabilities</a>
        <span style={{ color: 'var(--line)' }}>›</span>
        <a href="#" className="hana-link" style={{ fontSize: 12.5 }}>PCBA &amp; Box Build</a>
        <span style={{ color: 'var(--line)' }}>›</span>
        <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{title}</span>
      </div>
    </div>);

}

/* ─── capability browse sidebar (kept from the template) ─────── */
function CapabilitySidebar({ activeSlug, activeGroup, collapsed, setCollapsed, onSelect }) {
  const { useState } = React;
  const [openSet, setOpenSet] = useState(new Set([activeGroup || 'pcba-box-build']));
  const toggle = (slug) => setOpenSet((prev) => {
    const next = new Set(prev);next.has(slug) ? next.delete(slug) : next.add(slug);return next;
  });

  if (collapsed) {
    return (
      <aside style={{ background: 'var(--bg)', borderRight: '1px solid var(--line)', padding: '16px 0' }}>
        <div style={{ position: 'sticky', top: 92, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          <button onClick={() => setCollapsed(false)} title="Expand capabilities"
          style={{ width: 34, height: 34, border: '1px solid var(--line)', borderRadius: 4, background: '#fff',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hana-blue)', padding: 0 }}>
            <SvgIcon name="chevron-right" size={16} color="var(--hana-blue)" />
          </button>
          <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: 10, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--ink-3)', marginTop: 12 }}>Capabilities</div>
        </div>
      </aside>);

  }

  return (
    <aside style={{ background: 'var(--bg)', borderRight: '1px solid var(--line)', padding: '28px 0 40px' }}>
      <style>{`
        .sc-tree-leaf{transition:color 130ms ease,background 130ms ease;}
        .sc-tree-leaf:hover{color:var(--hana-blue)!important;background:#fff;}
        .sc-tree-head{transition:color 130ms ease;}
        .sc-tree-head:hover{color:var(--hana-blue)!important;}
      `}</style>
      <div style={{ position: 'sticky', top: 92 }}>
        <div style={{ padding: '0 16px 14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid var(--line)', marginBottom: 8 }}>
          <span className="hana-spec-label" style={{ color: 'var(--ink)' }}>Browse capabilities</span>
          <button onClick={() => setCollapsed(true)} title="Collapse"
          style={{ width: 26, height: 26, border: '1px solid color-mix(in srgb, var(--hana-blue) 45%, var(--line))', borderRadius: 4,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hana-blue)', padding: 0, background: "rgb(255, 255, 255)" }}>
            <span style={{ fontSize: 14, lineHeight: 1, transform: 'rotate(180deg)' }}>›</span>
          </button>
        </div>

        {CAP_TREE.map((node) => {
          if (!node.group) {
            const ovActive = node.slug === activeSlug;
            return (
              <a key={'ov-' + node.slug} href="#" className="sc-tree-leaf"
              style={{ display: 'block', padding: '9px 24px', fontSize: 13, fontWeight: ovActive ? 700 : 600,
                color: ovActive ? 'var(--hana-blue)' : 'var(--ink-2)', textDecoration: 'none',
                background: ovActive ? '#fff' : 'transparent',
                borderLeft: ovActive ? '2px solid var(--hana-blue)' : '2px solid transparent' }}>
                {node.name}
              </a>);

          }
          const open = openSet.has(node.slug);
          const groupActive = node.slug === activeGroup;
          return (
            <div key={node.slug}>
              <button type="button" onClick={() => toggle(node.slug)} className="sc-tree-head"
              style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
                padding: '11px 24px 7px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontFamily: 'inherit', color: groupActive ? 'var(--hana-blue)' : 'var(--ink)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                <span>{node.name}</span>
                <span style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 160ms ease', display: 'inline-flex', color: 'var(--ink-3)' }}>
                  <SvgIcon name="chevron-down" size={13} />
                </span>
              </button>
              {open && node.sub &&
              <div style={{ paddingBottom: 6 }}>
                  {node.sub.map((leaf) => {
                  const active = leaf.slug === activeSlug;
                  return (
                    <a key={leaf.slug} href="#" className="sc-tree-leaf"
                    onClick={(e) => {if (onSelect && SUBCAPS[leaf.slug]) {e.preventDefault();onSelect(leaf.slug);}}}
                    style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 24px 8px 24px',
                      fontSize: 13, textDecoration: 'none',
                      fontWeight: active ? 700 : 500,
                      color: active ? 'var(--hana-blue)' : 'var(--ink-2)',
                      background: active ? '#fff' : 'transparent',
                      borderLeft: active ? '2px solid var(--hana-blue)' : '2px solid transparent' }}>
                        <span style={{ color: active ? 'var(--hana-blue)' : 'var(--ink-3)', fontWeight: 700, fontSize: 12 }}>›</span>
                        {leaf.name}
                      </a>);

                })}
                </div>
              }
            </div>);

        })}

        {/* contact nudge at the foot of the rail */}
        <div style={{ margin: '20px 16px 0 24px', padding: '16px', background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--radius-card)' }}>
          <div className="hana-spec-label" style={{ marginBottom: 6 }}>Not sure which fits?</div>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 12.5, lineHeight: 1.5, color: 'var(--ink-2)', margin: '0 0 12px' }}>
            Send a BOM and we’ll point you to the right process.
          </p>
          <a href="#" className="hana-link" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
            display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            Talk to engineering <SvgIcon name="arrow-right" size={12} color="var(--hana-blue)" />
          </a>
        </div>
      </div>
    </aside>);

}

/* ─── footer (ported from homepage) ──────────────────────────── */
function SubCapFooter() {
  const cols = [
  { h: 'Markets', l: ['Automotive', 'Industrial & IoT', 'Telecommunications', 'RFID', 'Optical & sensors', 'Consumer electronics', 'Medical', 'Access control', 'Power management'] },
  { h: 'Capabilities', l: ['PCBA / Box build', 'OSAT', 'Microelectronics', 'Automation', 'DFx Collaborations'] },
  { h: 'Company', l: ['About', 'Why Hana', 'Locations', 'Sustainability', 'News', 'Careers'] },
  { h: 'Investors', l: ['SET: HANA', 'Financial reports', 'Annual reports', 'Governance', 'FAQ & Knowledge Hub', 'IR contact'] }];

  return (
    <footer style={{ background: 'var(--bg)', color: 'var(--ink-2)', fontFamily: 'var(--font-text)', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '48px 32px 28px', display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 40 }}>
        <div>
          <img src={(window.__resources && window.__resources['assets/hana-logo-full-trimmed.png']) || 'assets/hana-logo-full-trimmed.png'} alt="Hana" style={{ width: 196, height: 60, objectFit: 'contain', objectPosition: 'left center', display: 'block' }} />
          <p style={{ marginTop: 16, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-3)', maxWidth: 280 }}>
            The leading independent EMS and OSAT company in Southeast Asia, specializing in microelectronics.
          </p>
          <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
            <a href="#" aria-label="LinkedIn" style={{ width: 32, height: 32, borderRadius: 4, border: '1px solid var(--line)', background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-2)' }}><SvgIcon name="linkedin" size={14} /></a>
          </div>
          <div style={{ marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-3)' }}>
            <div>SET-listed · Bangkok</div>
            <div style={{ marginTop: 4 }}>HANA · ฿24.50 <span style={{ color: '#0A7C3F' }}>+1.24%</span></div>
          </div>
        </div>
        {cols.map((c) =>
        <div key={c.h}>
            <div style={{ fontWeight: 600, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 12 }}>{c.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {c.l.map((i) => <li key={i}><a href="#" style={{ color: 'var(--ink-2)', textDecoration: 'none', fontSize: 13, lineHeight: 1.5 }}>{i}</a></li>)}
            </ul>
          </div>
        )}
      </div>
      <div style={{ background: 'var(--hana-blue-deep)', color: 'rgba(255,255,255,0.7)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '10px 32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 11 }}>
          <div>© 2026 Hana Microelectronics Public Company Limited.</div>
          <div style={{ display: 'flex', gap: 22 }}>
            {['Privacy', 'Terms', 'Cookies', 'Sitemap'].map((l) => <a key={l} href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{l}</a>)}
          </div>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { SvgIcon, Photo, SubCapHeader, Breadcrumb, CapabilitySidebar, SubCapFooter });