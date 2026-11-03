export default function LogoMark({ className = 'h-8 w-8' }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 13V5.5A2.5 2.5 0 0 1 5.5 3H13"
        stroke="#4FD8DE"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <path
        d="M19 3H26.5A2.5 2.5 0 0 1 29 5.5V13"
        stroke="#4FD8DE"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <path
        d="M3 19V26.5A2.5 2.5 0 0 0 5.5 29H13"
        stroke="#4FD8DE"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <path
        d="M19 29H26.5A2.5 2.5 0 0 0 29 26.5V19"
        stroke="#4FD8DE"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <path
        d="M16 7.2V12.8M13.2 10H18.8"
        stroke="#FF7A59"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <text
        x="16"
        y="19.6"
        textAnchor="middle"
        fontFamily="'Inter Tight', sans-serif"
        fontWeight="600"
        fontSize="7.4"
        letterSpacing="0.2"
        fill="#E5F1F2"
      >
        12
      </text>
    </svg>
  )
}
