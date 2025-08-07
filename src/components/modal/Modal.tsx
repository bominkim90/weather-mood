interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ title, children, onClose }: ModalProps) {
  // dim 영역 클릭 => 모달 닫기
  const clickDim = () => {
    onClose();
  };

  return (
    <div
      onClick={clickDim}
      className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-50 flex items-center justify-center p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-[400px] w-full bg-white rounded-3xl"
      >
        <div className="header flex justify-between items-center p-4 shadow-xs">
          <strong className="text-lg font-medium">{title}</strong>
          <button onClick={() => onClose()}>
            <img src="/icons/close.svg" alt="close" />
          </button>
        </div>
        <div className="content p-6">{children}</div>
      </div>
    </div>
  );
}
