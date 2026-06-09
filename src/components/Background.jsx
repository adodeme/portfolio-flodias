export default function Background() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">

        <div className="absolute top-20 left-20 w-96 h-96 bg-violet-600 opacity-20 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 opacity-20 blur-[180px] rounded-full"></div>

        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-600 opacity-10 blur-[150px] rounded-full"></div>

      </div>
    </>
  );
}