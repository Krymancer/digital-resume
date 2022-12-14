import {Component} from 'solid-js';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
};

import Profile from '@components/Profile';
import ThemeToggle from '@components/ThemeToggle';
import Button from '@components/Button';

const Header : Component<HeaderProps> = (props:HeaderProps) => {
  function sendMail() {
    window.open('mailto:junior.nascm@gmail.com', '_blank');
  }

  return <div class="flex justify-between p-[20px] lg:w-full">
    <div class="gap-[10px] items-center hidden lg:visible lg:flex">
      <Button text="Contact-me" default onClick={sendMail}/>
      <div class="flex items-center text-text-light dark:text-text-dark">(88) 9 9630-2439</div>
    </div>
    <div class="flex">
      <ThemeToggle theme={props.theme} onClick={props.toggleTheme}/>
      <Profile/>
    </div>
  </div>;
};

export default Header;
