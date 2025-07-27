interface ErrorMsgProps {
  errorMessage: string;
  addClass?: string;
}

export default function ErrorMsg({
  errorMessage,
  addClass = 'mt-2',
}: ErrorMsgProps) {
  return <p className={`text-red-primary ${addClass}`}>{errorMessage}</p>;
}
