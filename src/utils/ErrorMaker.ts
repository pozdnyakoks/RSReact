export default function errorMaker(
  setError: React.Dispatch<React.SetStateAction<boolean>>
): void {
  try {
    throw new Error('oops');
  } catch (error) {
    setError(true);
  }
}
