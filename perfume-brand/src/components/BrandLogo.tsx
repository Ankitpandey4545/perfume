export default function BrandLogo({ compact = false, href = '/' }: { compact?: boolean; href?: string }) {
  return (
    <a href={href} aria-label="House of Arham home" className="brand-link">
      <span className={compact ? 'brand-name compact-brand' : 'brand-name'}>House of Arham</span>
    </a>
  );
}
