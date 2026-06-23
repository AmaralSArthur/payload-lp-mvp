export default function HomePage() {
  return (
    <div style={{ maxWidth: 600, margin: '100px auto', textAlign: 'center', fontFamily: 'system-ui' }}>
      <h1>Payload CMS API Running</h1>
      <p>
        This is the backend for the landing page. Visit{' '}
        <a href="/admin" style={{ color: '#0066cc' }}>
          /admin
        </a>{' '}
        to manage content.
      </p>
    </div>
  )
}
