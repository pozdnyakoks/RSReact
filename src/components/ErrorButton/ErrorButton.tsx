export default function ErrorButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="error-btn" onClick={onClick}>
      Make an Error
    </button>
  );
}
