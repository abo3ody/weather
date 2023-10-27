import { CurrentLocationBtn, SearchInput, ThemeSwitcher } from ".";

const Header = () => {
   return (
      <header className="flex flex-col items-center justify-between w-11/12 py-6 mx-auto md:flex-row gap-y-2">
         <ThemeSwitcher />
         <SearchInput />
         <CurrentLocationBtn />
      </header>
   );
};

export default Header;
