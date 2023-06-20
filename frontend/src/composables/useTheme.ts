import { ref, watchEffect, Ref } from "vue";

interface ThemeHook {
  theme: Ref<string>;
  toggleTheme: () => void;
  isDarkMode: Ref<boolean>;
}

export default function useTheme(): ThemeHook {
  const theme = ref(localStorage.getItem("theme") || "dark");
  const isDarkMode = ref(theme.value === "dark");

  watchEffect(() => {
    document.documentElement.className = theme.value;

    localStorage.setItem("theme", theme.value);
    isDarkMode.value = theme.value === "dark";
  });

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
  };

  return { theme, toggleTheme, isDarkMode };
}
