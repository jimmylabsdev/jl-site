/**
 * Jimmy Labs brand logo.
 *
 * The PNG includes both the JL monogram and the "JIMMY LABS" wordmark.
 * Default height is 40px which keeps the wordmark legible.
 * Pass `height` (px) to override.
 */
export default function Logo({ height = 40, className = '' }) {
  return (
    <img
      src="/jimmy-labs-logo.png"
      alt="Jimmy Labs"
      style={{ height: `${height}px`, width: 'auto' }}
      className={className}
    />
  )
}
