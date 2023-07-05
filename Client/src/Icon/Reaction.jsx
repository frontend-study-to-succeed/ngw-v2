export const Reaction = ({ gray, width = '24px', height = '24px' }) => {
  return (
    <svg
      className={`${gray ? 'fill-gray-400' : ''}`}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_51_2712)">
        <path d="M5.83333 7.91671C5.83333 7.22504 6.39166 6.66671 7.08333 6.66671C7.775 6.66671 8.33333 7.22504 8.33333 7.91671C8.33333 8.60837 7.775 9.16671 7.08333 9.16671C6.39166 9.16671 5.83333 8.60837 5.83333 7.91671ZM10 14.5834C11.9417 14.5834 13.5917 13.3667 14.2583 11.6667H5.74166C6.40833 13.3667 8.05833 14.5834 10 14.5834ZM12.9167 9.16671C13.6083 9.16671 14.1667 8.60837 14.1667 7.91671C14.1667 7.22504 13.6083 6.66671 12.9167 6.66671C12.225 6.66671 11.6667 7.22504 11.6667 7.91671C11.6667 8.60837 12.225 9.16671 12.9167 9.16671ZM18.3333 0.833374H16.6667V2.50004H15V4.16671H16.6667V5.83337H18.3333V4.16671H20V2.50004H18.3333V0.833374ZM16.6667 10C16.6667 13.6834 13.6833 16.6667 10 16.6667C6.31666 16.6667 3.33333 13.6834 3.33333 10C3.33333 6.31671 6.31666 3.33337 10 3.33337C11.2167 3.33337 12.35 3.66671 13.3333 4.23337V2.36671C12.2802 1.9036 11.1421 1.66519 9.99166 1.66671C5.39166 1.66671 1.66666 5.40004 1.66666 10C1.66666 14.6 5.39166 18.3334 9.99166 18.3334C14.6 18.3334 18.3333 14.6 18.3333 10C18.3333 9.12504 18.1917 8.29171 17.9417 7.50004H16.1667C16.4833 8.27504 16.6667 9.11671 16.6667 10Z" />
      </g>
      <defs>
        <clipPath id="clip0_51_2712">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
