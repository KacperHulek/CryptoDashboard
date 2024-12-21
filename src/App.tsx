import CryptoDataTable from "./components/CryptoDataTable/CryptoDataTable";
// import { ThemeProvider } from "@/components/theme-provider";
// import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    // <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    // <ModeToggle />
    // </ThemeProvider>
    <>
      <header className="justify-end flex p-4"></header>
      <main className="flex items-center justify-center pt-16 border-t border-neutral-700">
        <div className="w-6/12 min-w-fit rounded-sm border-neutral-700 text-neutral-100">
          <CryptoDataTable />
        </div>
      </main>
    </>
  );
}

export default App;
