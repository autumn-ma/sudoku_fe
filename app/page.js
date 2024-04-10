import InteractiveElement from "./test";

export default function Home() {
  const data = Array.from({ length: 9 }, (_, i) => i);
  const data2 = Array.from({ length: 9 }, (_, i) => i);

  const make_visible = (id) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id);
      if (element) {
        element.style.opacity = "1";
      }
    }
  }

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="grid grid-cols-3">
        {
          data.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-3 pt-3 pl-8 m-2 border-2 border-white w-52 h-52">
              {data2.map((item, index2) => (
                <div key={index2}>
                  <InteractiveElement id={`element-${index}-${index2}`} value={item}/>
                </div>
              ))}
              </div>
            </div>
          )
          )
        }
      </div>
    </main>
  );
}
