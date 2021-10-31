import { useTheme } from "next-themes";

interface ThemeSwitcherProps {
  classNames?: string;
}

export default function ThemeSwitcher({
  classNames = "text-base pl-3 pr-7 py-2 rounded-md bg-white dark:bg-black text-gray-900 dark:text-white border-gray-300 dark:border-gray-900",
}: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme !== undefined && (
        <select
          className={classNames}
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="system">System</option>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      )}
    </>
  );
}
