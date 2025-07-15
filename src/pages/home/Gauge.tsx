import { useRef, useState, useEffect } from 'react';

const radius = 100;
const center = 120;

const startAngle = 180;
const endAngle = 180;
const maxAngle = (endAngle + 360 - startAngle) % 360 || 360;

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = (endAngle - startAngle + 360) % 360 > 180 ? '1' : '0';

  return [
    'M',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(' ');
}

export default function Gauge() {
  const [value, setValue] = useState(0); // 실시간 제어용 값
  const [displayValue, setDisplayValue] = useState(0); // 화면 출력용 보간 값
  const [dragging, setDragging] = useState(false);
  const svgRef = useRef<SVGSVGElement | null>(null);

  // ▶︎ 드래그 중 마우스 또는 터치 위치를 기반으로 값 계산
  const updateFromPosition = (clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return;

    const pt = svg.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;
    const cursor = pt.matrixTransform(svg.getScreenCTM()?.inverse());

    const dx = cursor.x - center;
    const dy = cursor.y - center;
    const angleFromCenter =
      ((Math.atan2(dy, dx) * 180) / Math.PI + 360 + 90) % 360;

    const adjustedAngle = (angleFromCenter - startAngle + 360) % 360;
    if (adjustedAngle > maxAngle) return;

    const rawValue = Math.round(((adjustedAngle / maxAngle) * 100) / 10) * 10;
    setValue(rawValue);
  };

  // ▶︎ 드래그 핸들러 등록
  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging) return;
      if (e instanceof MouseEvent) {
        updateFromPosition(e.clientX, e.clientY);
      } else if (e.touches.length > 0) {
        updateFromPosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleUp = () => setDragging(false);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleUp);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleUp);
    };
  }, [dragging]);

  // ▶︎ 드래그 시작
  const handleDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setDragging(true);
    if ('clientX' in e) {
      updateFromPosition(e.clientX, e.clientY);
    } else if (e.touches.length > 0) {
      updateFromPosition(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  // ▶︎ 부드러운 보간 처리 (value → displayValue)
  useEffect(() => {
    let animationFrame: number;
    const duration = 300;
    const start = performance.now();
    const from = displayValue;
    const to = value;

    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress; // easeInOut

      const newValue = from + (to - from) * eased;
      setDisplayValue(newValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value]);

  const clampedDisplayValue = Math.min(displayValue, 99.999);
  const progressAngle = (clampedDisplayValue / 100) * maxAngle;
  const displayAngle = (startAngle + progressAngle) % 360;
  const handlePos = polarToCartesian(center, center, radius, displayAngle);

  return (
    <div className="w-[240px] mx-auto select-none">
      <svg
        ref={svgRef}
        width="240"
        height="240"
        viewBox="0 0 240 240"
        onMouseDown={handleDown}
        onTouchStart={handleDown}
      >
        {/* 게이지 배경 원 */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#ddd"
          strokeWidth="10"
          fill="none"
        />

        {/* 감정 수치에 따른 호 */}
        <path
          d={describeArc(center, center, radius, startAngle, displayAngle)}
          fill="none"
          stroke="#ff9900"
          strokeWidth="10"
        />

        {/* 핸들 */}
        <circle cx={handlePos.x} cy={handlePos.y} r="10" fill="#ff9900" />

        {/* 중앙 텍스트 */}
        <text
          x={center}
          y={center}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="20"
          fill="#333"
        >
          {Math.round(displayValue)}
        </text>
      </svg>
    </div>
  );
}
