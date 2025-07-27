interface ErrorMsgProps {
  errorMessage: string;
}

export default function ErrorMsg({ errorMessage }: ErrorMsgProps) {
  return <p className="text-red-primary mt-2">{errorMessage}</p>;
}
