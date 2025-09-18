import Footer from './Footer';

export default function Layout({ children, showSidebar = false, sidebar }) {
  return (
    <div className="min-h-screen flex flex-col">
     
      <div className="flex-1 flex">
        {showSidebar && sidebar && (
          <aside className="flex-shrink-0">
            {sidebar}
          </aside>
        )}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
}