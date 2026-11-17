type ErrorBannerProps = { message: string; onRetry: () => void }

export function ErrorBanner({ message, onRetry }: ErrorBannerProps) {
  return <div className="error-banner" role="alert"><span>!</span> {message}<button type="button" onClick={onRetry}>Try again →</button></div>
}

export function LoadingState() {
  return <div className="loading-state"><span className="spinner" /> Fetching profile data…</div>
}

export function EmptyState({ text }: { text: string }) {
  return <p className="empty-state">{text}</p>
}
