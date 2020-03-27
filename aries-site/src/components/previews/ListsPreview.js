/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import { useDarkMode } from '../../utils';

export const ListsPreview = ({ theme }) => {
  const dark = useDarkMode();
  const themeMode = dark.value ? 'dark' : 'light';
  return (
    <svg
      style={{ position: 'absolute' }}
      width="100%"
      height="auto"
      viewBox="0 0 288 212"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 70H256"
        stroke={theme.global.colors['text-xweak'][themeMode]}
      />
      <path
        d="M33.224 38.74V40H40.532V38.74H37.76V28.93H36.914L33.278 30.784V32.224L36.374 30.64V38.74H33.224ZM49.4516 38.74H44.6456L46.6796 36.31C47.9036 34.798 48.9656 33.484 48.9656 31.9C48.9656 29.992 47.6876 28.786 45.6536 28.786C44.3396 28.786 43.1516 29.362 42.3956 30.136V31.576C43.1696 30.784 44.2676 30.046 45.5456 30.046C46.8956 30.046 47.5796 30.838 47.5796 31.954C47.5796 33.34 46.6616 34.402 45.5276 35.77L42.1436 39.928V40H49.4516V38.74ZM63.0278 28.948H55.9898V40H63.0278V38.722H57.3938V34.96H62.5058V33.7H57.3938V30.208H63.0278V28.948ZM70.2776 38.938V39.46C70.2776 41.17 69.1616 42.016 67.7396 42.016C66.8036 42.016 65.9576 41.764 65.1656 41.026V42.52C65.7776 42.952 66.7136 43.24 67.7396 43.24C69.6476 43.24 71.6456 42.16 71.6456 39.37V32.008H70.2776V32.908C69.8816 32.35 69.0356 31.846 68.0456 31.846C65.7056 31.846 64.4816 33.79 64.4816 35.932C64.4816 38.074 65.7056 40.018 68.0456 40.018C69.0356 40.018 69.8816 39.496 70.2776 38.938ZM70.2776 34.294V37.552C69.8636 38.308 69.1076 38.794 68.2436 38.794C66.7316 38.794 65.8496 37.588 65.8496 35.932C65.8496 34.258 66.7316 33.052 68.2436 33.052C69.1076 33.052 69.8636 33.538 70.2776 34.294ZM79.26 38.938V39.46C79.26 41.17 78.144 42.016 76.722 42.016C75.786 42.016 74.94 41.764 74.148 41.026V42.52C74.76 42.952 75.696 43.24 76.722 43.24C78.63 43.24 80.628 42.16 80.628 39.37V32.008H79.26V32.908C78.864 32.35 78.018 31.846 77.028 31.846C74.688 31.846 73.464 33.79 73.464 35.932C73.464 38.074 74.688 40.018 77.028 40.018C78.018 40.018 78.864 39.496 79.26 38.938ZM79.26 34.294V37.552C78.846 38.308 78.09 38.794 77.226 38.794C75.714 38.794 74.832 37.588 74.832 35.932C74.832 34.258 75.714 33.052 77.226 33.052C78.09 33.052 78.846 33.538 79.26 34.294ZM82.5544 37.93V39.37C83.1484 39.838 84.1384 40.162 85.1824 40.162C86.8564 40.162 88.1704 39.316 88.1704 37.84C88.1704 36.706 87.5044 36.004 86.2984 35.59L85.0744 35.176C84.3184 34.906 83.8864 34.69 83.8864 34.042C83.8864 33.358 84.5704 32.998 85.3984 32.998C86.3704 32.998 87.1084 33.394 87.7744 33.952V32.548C87.1264 32.098 86.2984 31.846 85.3984 31.846C83.8144 31.846 82.5724 32.692 82.5724 34.096C82.5724 35.392 83.3824 35.968 84.5884 36.364L85.6864 36.742C86.3884 36.976 86.8384 37.3 86.8384 37.894C86.8384 38.686 86.0644 39.01 85.1824 39.01C84.2104 39.01 83.2924 38.614 82.5544 37.93Z"
        fill={theme.global.colors['text-weak'][themeMode]}
      />
      <path
        d="M37.868 109.902C35.564 109.902 34.088 108.138 34.088 105.474C34.088 102.81 35.69 101.064 37.994 101.064C39.2 101.064 40.244 101.442 41.18 102.288V100.776C40.406 100.164 39.29 99.786 37.994 99.786C34.952 99.786 32.666 102.036 32.666 105.474C32.666 108.894 34.754 111.162 37.832 111.162C39.2 111.162 40.658 110.748 41.72 109.578V105.258H37.976V106.446H40.406V109.056C39.686 109.65 38.876 109.902 37.868 109.902ZM48.3571 105.69V106.734C48.0151 106.428 47.1871 106.086 46.3591 106.086C44.6491 106.086 43.3171 107.094 43.3171 108.588C43.3171 110.172 44.6491 111.144 46.2871 111.144C47.2231 111.144 48.0511 110.73 48.3571 110.406V111H49.6711V105.582C49.6711 103.89 48.5551 102.846 46.6651 102.846C45.6751 102.846 44.7211 103.134 44.1811 103.512V104.79C44.8471 104.358 45.5671 104.088 46.4491 104.088C47.6191 104.088 48.3571 104.7 48.3571 105.69ZM48.3571 108.192V109.02C48.1411 109.614 47.3491 110.01 46.5031 110.01C45.5311 110.01 44.5951 109.56 44.5951 108.588C44.5951 107.634 45.5311 107.202 46.5031 107.202C47.3491 107.202 48.1411 107.598 48.3571 108.192ZM53.3294 111V99.3H51.9794V111H53.3294ZM57.0912 111V99.3H55.7412V111H57.0912ZM66.2709 107.004C66.2709 104.556 64.7769 102.846 62.5989 102.846C60.4029 102.846 58.9269 104.556 58.9269 107.004C58.9269 109.452 60.4029 111.162 62.5989 111.162C64.7769 111.162 66.2709 109.452 66.2709 107.004ZM64.9029 107.004C64.9029 108.75 64.0389 109.974 62.5989 109.974C61.1589 109.974 60.2949 108.75 60.2949 107.004C60.2949 105.258 61.1589 104.034 62.5989 104.034C64.0389 104.034 64.9029 105.258 64.9029 107.004ZM68.0986 103.008V111H69.4486V105.582C69.7366 104.718 70.5466 104.088 71.4826 104.088C72.6886 104.088 73.2466 104.862 73.2466 105.978V111H74.6146V105.762C74.6146 104.016 73.6246 102.846 71.8066 102.846C70.7806 102.846 69.9166 103.386 69.4486 104.016V103.008H68.0986ZM87.6459 107.004C87.6459 104.556 86.1519 102.846 83.9739 102.846C81.7779 102.846 80.3019 104.556 80.3019 107.004C80.3019 109.452 81.7779 111.162 83.9739 111.162C86.1519 111.162 87.6459 109.452 87.6459 107.004ZM86.2779 107.004C86.2779 108.75 85.4139 109.974 83.9739 109.974C82.5339 109.974 81.6699 108.75 81.6699 107.004C81.6699 105.258 82.5339 104.034 83.9739 104.034C85.4139 104.034 86.2779 105.258 86.2779 107.004ZM93.4696 100.542V99.318C93.1636 99.192 92.8576 99.138 92.4256 99.138C91.0216 99.138 89.9776 100.074 89.9776 101.676V103.008H88.6276V104.16H89.9776V111H91.3096V104.16H93.1096V103.008H91.3096V101.784C91.3096 100.83 91.8316 100.326 92.6236 100.326C92.9116 100.326 93.2176 100.38 93.4696 100.542ZM103.941 108.534H104.013L107.757 102.504V111H109.143V99.948H107.901L103.995 106.302L100.071 99.948H98.7574V111H100.143V102.504L103.941 108.534ZM113.205 100.596C113.205 100.11 112.809 99.732 112.323 99.732C111.855 99.732 111.459 100.11 111.459 100.596C111.459 101.064 111.855 101.46 112.323 101.46C112.809 101.46 113.205 101.064 113.205 100.596ZM113.007 111V103.008H111.657V111H113.007ZM116.769 111V99.3H115.419V111H116.769ZM125.895 111L121.899 106.662L125.823 103.008H124.077L120.531 106.374V99.3H119.181V111H120.531V107.04L124.221 111H125.895Z"
        fill={theme.global.colors['text-weak'][themeMode]}
      />
      <path
        d="M32.738 179.606V181.136C33.494 181.73 34.718 182.162 36.212 182.162C38.354 182.162 39.938 181.028 39.938 179.138C39.938 177.608 39.182 176.726 37.49 176.078L35.744 175.394C34.718 174.998 34.088 174.602 34.088 173.666C34.088 172.568 35.042 172.028 36.266 172.028C37.544 172.028 38.534 172.478 39.416 173.18V171.686C38.588 171.11 37.454 170.786 36.248 170.786C34.34 170.786 32.702 171.776 32.702 173.684C32.702 175.43 33.89 176.168 35.186 176.672L36.806 177.302C37.976 177.788 38.57 178.184 38.57 179.156C38.57 180.29 37.634 180.902 36.212 180.902C34.916 180.902 33.764 180.488 32.738 179.606ZM44.0513 182V175.16H45.9053V174.008H44.0513V171.902H42.7013V174.008H41.0273V175.16H42.7013V182H44.0513ZM49.0978 171.596C49.0978 171.11 48.7018 170.732 48.2158 170.732C47.7478 170.732 47.3518 171.11 47.3518 171.596C47.3518 172.064 47.7478 172.46 48.2158 172.46C48.7018 172.46 49.0978 172.064 49.0978 171.596ZM48.8998 182V174.008H47.5498V182H48.8998ZM50.7355 178.004C50.7355 180.56 52.4275 182.162 54.5875 182.162C55.3615 182.162 56.1715 181.982 56.7295 181.496V180.128C56.1535 180.704 55.4515 180.956 54.6775 180.956C53.2555 180.956 52.1035 179.84 52.1035 178.004C52.1035 176.168 53.2555 175.052 54.6775 175.052C55.4515 175.052 56.1535 175.304 56.7295 175.88V174.512C56.1715 174.026 55.3615 173.846 54.5875 173.846C52.4275 173.846 50.7355 175.448 50.7355 178.004ZM65.3204 182L61.3244 177.662L65.2484 174.008H63.5024L59.9564 177.374V170.3H58.6064V182H59.9564V178.04L63.6464 182H65.3204ZM77.3627 178.004C77.3627 175.556 75.8687 173.846 73.6907 173.846C71.4947 173.846 70.0187 175.556 70.0187 178.004C70.0187 180.452 71.4947 182.162 73.6907 182.162C75.8687 182.162 77.3627 180.452 77.3627 178.004ZM75.9947 178.004C75.9947 179.75 75.1307 180.974 73.6907 180.974C72.2507 180.974 71.3867 179.75 71.3867 178.004C71.3867 176.258 72.2507 175.034 73.6907 175.034C75.1307 175.034 75.9947 176.258 75.9947 178.004ZM83.1864 171.542V170.318C82.8804 170.192 82.5744 170.138 82.1424 170.138C80.7384 170.138 79.6944 171.074 79.6944 172.676V174.008H78.3444V175.16H79.6944V182H81.0264V175.16H82.8264V174.008H81.0264V172.784C81.0264 171.83 81.5484 171.326 82.3404 171.326C82.6284 171.326 82.9344 171.38 83.1864 171.542ZM94.1442 176.276C95.0082 176.006 95.7642 175.196 95.7642 173.882C95.7642 171.974 94.3962 170.948 92.1102 170.948H88.4742V182H92.4702C94.7382 182 96.1422 180.902 96.1422 178.886C96.1422 177.644 95.3322 176.582 94.1442 176.276ZM92.1102 175.754H89.8602V172.19H92.1102C93.5862 172.19 94.3962 172.748 94.3962 173.954C94.3962 175.16 93.5862 175.754 92.1102 175.754ZM89.8602 180.758V176.942H92.4702C93.9642 176.942 94.7562 177.68 94.7562 178.85C94.7562 180.002 93.9642 180.758 92.4702 180.758H89.8602ZM104.424 182V174.008H103.056V179.426C102.768 180.29 101.994 180.92 101.058 180.92C99.8517 180.92 99.3117 180.146 99.3117 179.03V174.008H97.9437V179.246C97.9437 180.992 98.9157 182.162 100.734 182.162C101.76 182.162 102.606 181.622 103.056 180.992V182H104.424ZM109.055 182V175.16H110.909V174.008H109.055V171.902H107.705V174.008H106.031V175.16H107.705V182H109.055ZM114.786 182V175.16H116.64V174.008H114.786V171.902H113.436V174.008H111.762V175.16H113.436V182H114.786ZM118.9 178.238H124.408V177.752C124.408 175.412 123.292 173.846 121.132 173.846C119.008 173.846 117.568 175.592 117.568 178.076C117.568 180.596 119.116 182.162 121.42 182.162C122.374 182.162 123.202 181.964 123.85 181.46V180.218C123.13 180.758 122.482 180.974 121.582 180.974C120.124 180.974 118.954 180.092 118.9 178.238ZM121.15 174.998C122.446 174.998 123.04 176.006 123.094 177.176H118.972C119.224 175.7 120.088 174.998 121.15 174.998ZM130.351 175.358V173.972C130.207 173.9 129.919 173.846 129.577 173.846C128.695 173.846 127.939 174.368 127.597 175.052V174.008H126.247V182H127.597V176.636C127.867 175.7 128.605 175.142 129.451 175.142C129.793 175.142 130.135 175.214 130.351 175.358Z"
        fill={theme.global.colors['text-weak'][themeMode]}
      />
      <path
        d="M32 142H256"
        stroke={theme.global.colors['text-xweak'][themeMode]}
      />
    </svg>
  );
};
