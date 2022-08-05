import {Component} from 'solid-js';

interface ThemeToggleProps {
  onClick: () => void;
  theme: string;
}

const ThemeToggle : Component<ThemeToggleProps> = (props: ThemeToggleProps) => {
  return <div class="flex items-center">
    <button
      id="theme-toggle"
      type="button"
      onClick={props.onClick}
      class="text-text-light hover:bg-background-dark bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] hover:text-text-dark dark:hover:bg-background-light rounded-full p-2"
    >
      <svg
        id="theme-toggle-dark-icon"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        class={`${props.theme !== 'light' ? 'hidden' : ''}`}
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
      </svg>

      <svg
        id="theme-toggle-light-icon"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        class={`${props.theme !== 'dark' ? 'hidden' : 'text-text-dark'}`}
      >
        <path
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          fill-rule="evenodd"
          clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>;
};

export default ThemeToggle;